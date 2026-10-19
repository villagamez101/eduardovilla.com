import os, struct, sys, zlib, gzip, io

HEADER_SIZE = 4377
NAME_LEN, SIZE_LEN, MTIME_LEN, PREFIX_LEN, CRC_LEN = 255, 14, 12, 4096, 8

def read_block(block, lo, hi):
    return block[lo:hi].split(b'\x00', 1)[0].decode('utf-8', 'replace')

def main(wpress_path, dest, only_prefix=None, exclude=()):
    os.makedirs(dest, exist_ok=True)
    with open(wpress_path, 'rb') as f:
        while True:
            header = f.read(HEADER_SIZE)
            if len(header) < HEADER_SIZE:
                break
            if header.count(b'\x00') == HEADER_SIZE:  # EOF block
                print('EOF marker found')
                break
            name = read_block(header, 0, NAME_LEN)
            size = int(read_block(header, NAME_LEN, NAME_LEN + SIZE_LEN))
            mtime = read_block(header, NAME_LEN + SIZE_LEN, NAME_LEN + SIZE_LEN + MTIME_LEN)
            prefix = read_block(header, NAME_LEN + SIZE_LEN + MTIME_LEN, NAME_LEN + SIZE_LEN + MTIME_LEN + PREFIX_LEN)
            crc = read_block(header, HEADER_SIZE - CRC_LEN, HEADER_SIZE)
            if only_prefix and not (prefix.lstrip('./').startswith(only_prefix.lstrip('./')) or prefix == '.'):
                f.seek(size, 1)
                continue
            rel = os.path.join(prefix.lstrip('./') if prefix not in ('.', '') else '', name)
            if any(rel == x or rel.startswith(x.rstrip('/') + '/') for x in exclude):
                f.seek(size, 1)
                continue
            out = os.path.join(dest, rel)
            os.makedirs(os.path.dirname(out), exist_ok=True)
            data = f.read(size)
            if crc == 'y':
                try:
                    data = gzip.decompress(data)
                except Exception:
                    pass
            with open(out, 'wb') as o:
                o.write(data)
            print(f'{size:>12} {rel}')

if __name__ == '__main__':
    ex = sys.argv[4].split(',') if len(sys.argv) > 4 else ()
    main(sys.argv[1], sys.argv[2], sys.argv[3] if len(sys.argv) > 3 else None, ex)
