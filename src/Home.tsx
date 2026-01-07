import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="space-y-10">
      <section className="rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900 to-neutral-950 p-8">
        <p className="text-sm text-neutral-300">Korean BBQ Restaurant in Malaysia</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight">
          Grill. Share. Repeat.
        </h1>
        <p className="mt-3 max-w-xl text-neutral-300">
          Modern Korean BBQ vibes, perfect for friends & late-night cravings.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/menu"
            className="rounded-full bg-neutral-50 px-5 py-3 text-sm font-semibold text-neutral-950"
          >
            View Menu
          </Link>
          <a
            href="https://wa.me/60123456789"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-neutral-700 px-5 py-3 text-sm hover:bg-neutral-900"
          >
            Reserve / WhatsApp
          </a>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {[
          ["Table-side Grill", "Freshly grilled at your table."],
          ["Signature Sides", "Kimchi, banchan, and more."],
          ["Group-friendly", "Perfect for sharing & celebrations."],
        ].map(([t, d]) => (
          <div key={t} className="rounded-2xl border border-neutral-800 bg-neutral-950/60 p-5">
            <h3 className="font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-neutral-300">{d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
