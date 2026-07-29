/**
 * Minimal ZIP writer, enough for EPUB 3.
 *
 * A dependency-free writer rather than `archiver` or `jszip`, for two reasons.
 * EPUB has one requirement no general-purpose zip library exposes cleanly — the
 * `mimetype` entry must be first in the archive and **stored uncompressed with
 * no extra field** — and this project's build already runs on Node's standard
 * library plus Astro. One more supply-chain dependency to write ~200 bytes of
 * header is a poor trade.
 *
 * Node 22 provides `zlib.crc32`, which is the only genuinely fiddly part.
 *
 * Deliberately not supported: Zip64, encryption, directory entries, and
 * anything above 4 GB. EPUBs here are single-digit megabytes.
 */

import { deflateRawSync, crc32 } from 'node:zlib';

const SIG_LOCAL = 0x04034b50;
const SIG_CENTRAL = 0x02014b50;
const SIG_EOCD = 0x06054b50;

/** DOS date/time. Fixed, not "now" — see the determinism note in build-downloads.mjs. */
function dosDateTime(date) {
  const time =
    (date.getUTCHours() << 11) | (date.getUTCMinutes() << 5) | (date.getUTCSeconds() >> 1);
  const day =
    ((date.getUTCFullYear() - 1980) << 9) | ((date.getUTCMonth() + 1) << 5) | date.getUTCDate();
  return { time, day };
}

export class Zip {
  /** @param {Date} mtime fixed modification time for every entry */
  constructor(mtime) {
    this.entries = [];
    this.chunks = [];
    this.offset = 0;
    this.mtime = mtime;
  }

  /**
   * @param {string} name  path inside the archive, forward slashes
   * @param {string|Buffer} data
   * @param {{store?: boolean}} [opts]  store:true disables compression (EPUB mimetype)
   */
  add(name, data, { store = false } = {}) {
    const body = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');
    const nameBuf = Buffer.from(name, 'utf8');
    const compressed = store ? body : deflateRawSync(body, { level: 9 });
    const crc = crc32(body);
    const { time, day } = dosDateTime(this.mtime);

    const local = Buffer.alloc(30);
    local.writeUInt32LE(SIG_LOCAL, 0);
    local.writeUInt16LE(20, 4); // version needed
    local.writeUInt16LE(0, 6); // flags — no data descriptor, sizes known up front
    local.writeUInt16LE(store ? 0 : 8, 8); // method: 0 store, 8 deflate
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(day, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(compressed.length, 18);
    local.writeUInt32LE(body.length, 22);
    local.writeUInt16LE(nameBuf.length, 26);
    local.writeUInt16LE(0, 28); // extra field length — must be 0 for the EPUB mimetype

    this.entries.push({
      name: nameBuf,
      crc,
      compressedSize: compressed.length,
      size: body.length,
      offset: this.offset,
      method: store ? 0 : 8,
      time,
      day,
    });

    this.chunks.push(local, nameBuf, compressed);
    this.offset += local.length + nameBuf.length + compressed.length;
  }

  /** @returns {Buffer} the finished archive */
  end() {
    const centralStart = this.offset;
    const central = [];

    for (const e of this.entries) {
      const head = Buffer.alloc(46);
      head.writeUInt32LE(SIG_CENTRAL, 0);
      head.writeUInt16LE(20, 4); // version made by
      head.writeUInt16LE(20, 6); // version needed
      head.writeUInt16LE(0, 8);
      head.writeUInt16LE(e.method, 10);
      head.writeUInt16LE(e.time, 12);
      head.writeUInt16LE(e.day, 14);
      head.writeUInt32LE(e.crc, 16);
      head.writeUInt32LE(e.compressedSize, 20);
      head.writeUInt32LE(e.size, 24);
      head.writeUInt16LE(e.name.length, 28);
      head.writeUInt16LE(0, 30); // extra
      head.writeUInt16LE(0, 32); // comment
      head.writeUInt16LE(0, 34); // disk number
      head.writeUInt16LE(0, 36); // internal attrs
      head.writeUInt32LE(0, 38); // external attrs
      head.writeUInt32LE(e.offset, 42);
      central.push(head, e.name);
    }

    const centralBuf = Buffer.concat(central);
    const eocd = Buffer.alloc(22);
    eocd.writeUInt32LE(SIG_EOCD, 0);
    eocd.writeUInt16LE(0, 4);
    eocd.writeUInt16LE(0, 6);
    eocd.writeUInt16LE(this.entries.length, 8);
    eocd.writeUInt16LE(this.entries.length, 10);
    eocd.writeUInt32LE(centralBuf.length, 12);
    eocd.writeUInt32LE(centralStart, 16);
    eocd.writeUInt16LE(0, 20);

    return Buffer.concat([...this.chunks, centralBuf, eocd]);
  }
}
