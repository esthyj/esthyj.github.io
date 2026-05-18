"""One-shot image compressor for portfolio site.

Resizes images so the longer side is <= MAX_DIM, re-encodes JPEGs at
quality=QUALITY, strips metadata, and overwrites the original file.
Originals are recoverable via `git checkout images/` since they are
already committed.
"""
from pathlib import Path
from PIL import Image, ImageOps

IMAGES_DIR = Path(__file__).parent / "images"
MAX_DIM = 1600
QUALITY = 82

def fmt(n: int) -> str:
    for unit in ("B", "KB", "MB"):
        if n < 1024:
            return f"{n:.1f} {unit}"
        n /= 1024
    return f"{n:.1f} GB"

def compress(path: Path) -> None:
    before = path.stat().st_size
    with Image.open(path) as im:
        im = ImageOps.exif_transpose(im)
        if max(im.size) > MAX_DIM:
            im.thumbnail((MAX_DIM, MAX_DIM), Image.LANCZOS)
        if im.mode in ("RGBA", "P"):
            im = im.convert("RGB")
        im.save(path, "JPEG", quality=QUALITY, optimize=True, progressive=True)
    after = path.stat().st_size
    pct = (1 - after / before) * 100
    print(f"  {path.name:40s}  {fmt(before):>10s}  ->  {fmt(after):>10s}  (-{pct:.0f}%)")

def main() -> None:
    exts = {".jpg", ".jpeg", ".png"}
    files = sorted([p for p in IMAGES_DIR.iterdir() if p.suffix.lower() in exts])
    total_before = sum(p.stat().st_size for p in files)
    print(f"Compressing {len(files)} images in {IMAGES_DIR}\n")
    for p in files:
        compress(p)
    total_after = sum(p.stat().st_size for p in files)
    print(f"\nTotal: {fmt(total_before)} -> {fmt(total_after)}  "
          f"(-{(1 - total_after/total_before)*100:.0f}%)")

if __name__ == "__main__":
    main()
