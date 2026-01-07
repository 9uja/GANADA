export default function Gallery() {
  const pics = Array.from({ length: 12 }, (_, i) => i + 1); // placeholder

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Gallery</h1>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {pics.map((n) => (
          <div
            key={n}
            className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900"
          >
            {/* 나중에 실제 사진으로 교체: public/gallery/1.webp 같은 방식 */}
            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
              Photo {n}
            </div>
          </div>
        ))}
      </div>

      <p className="text-xs text-neutral-400">
        Replace placeholders with real images under <code className="rounded bg-neutral-900 px-1">public/gallery</code>.
      </p>
    </div>
  );
}
