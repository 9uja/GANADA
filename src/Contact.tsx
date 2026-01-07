export default function Contact() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight">Contact</h1>

      <div className="grid gap-3 md:grid-cols-2">
        <div className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5">
          <h2 className="font-semibold">Find us</h2>
          <p className="mt-2 text-sm text-neutral-300">
            Address: (put your address here)
            <br />
            Opening hours: (put hours here)
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            <a
              className="rounded-full border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900"
              href="https://wa.me/60123456789"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="rounded-full border border-neutral-700 px-4 py-2 text-sm hover:bg-neutral-900"
              href="tel:+60123456789"
            >
              Call
            </a>
          </div>
        </div>

        <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900">
          {/* 나중에 Google Maps embed 넣기 */}
          <div className="flex h-full w-full items-center justify-center text-sm text-neutral-400">
            Map Placeholder
          </div>
        </div>
      </div>
    </div>
  );
}
