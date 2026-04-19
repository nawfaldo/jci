import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay },
  });

  return (
    <section
      id="mission"
      ref={ref}
      className="relative px-6 w-full flex flex-col items-center justify-center"
      style={{ paddingTop: "7rem", paddingBottom: "12rem" }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-green-50/60 blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-5xl mx-auto flex flex-col justify-center">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: "3.5rem" }}>
          <motion.p
            {...fadeUp(0)}
            className="text-(--color-emerald-light) text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ marginBottom: "1.25rem" }}
          >
            Misi Kami
          </motion.p>
          <motion.blockquote
            {...fadeUp(0.15)}
            className="font-display text-2xl sm:text-3xl md:text-4xl font-medium leading-snug tracking-tight text-(--color-text-primary)"
          >
            "Menghapus jejak karbon secara masif dengan{" "}
            <span className="text-gradient-emerald">
              pertanian regeneratif presisi
            </span>{" "}
            dan <span className="text-gradient-gold">agroforestri pintar</span>
            ."
          </motion.blockquote>
        </div>

        {/* ===== BENTO GRID ===== */}
        <div className="flex flex-col" style={{ gap: "1rem" }}>
          {/* === ROW 1: hero image | stat number === */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "1rem" }}
          >
            {/* Image + Text overlay */}
            <motion.div
              {...fadeUp(0.3)}
              className="relative overflow-hidden group"
              style={{ borderRadius: "1.5rem", height: "380px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?w=800&q=80"
                alt="Hutan penyerap karbon"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div
                className="absolute inset-0 flex flex-col justify-end"
                style={{ padding: "2rem" }}
              >
                <h3
                  className="text-2xl md:text-3xl font-bold text-white leading-tight"
                  style={{ margin: "0 0 0.4rem 0" }}
                >
                  Penyerapan Karbon Aktif
                </h3>
                <p
                  className="text-sm text-white/65 leading-relaxed"
                  style={{ margin: 0 }}
                >
                  10.000+ pohon menyerap ribuan ton CO₂ setiap hari.
                </p>
              </div>
            </motion.div>

            {/* Big stat — text only */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col items-center justify-center text-center"
              style={{
                borderRadius: "1.5rem",
                height: "380px",
                padding: "2.5rem 2rem",
                background: "#f5f5f7",
              }}
            >
              <span
                className="text-7xl md:text-[7rem] font-extrabold text-gray-900 font-display leading-none tracking-tight"
                style={{ margin: "0 0 0.75rem 0" }}
              >
                4,800<span className="text-green-500">t</span>
              </span>
              <span
                className="text-sm md:text-base text-gray-400 leading-relaxed"
                style={{ margin: 0 }}
              >
                Total karbon diserap sepanjang masa
              </span>
            </motion.div>
          </div>

          {/* === ROW 2: dark text | image only | light stat === */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "1rem" }}
          >
            {/* Dark text card */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-col justify-end"
              style={{
                borderRadius: "1.5rem",
                height: "280px",
                padding: "2rem",
                background: "#1a3a2a",
              }}
            >
              <span
                className="text-[10px] text-green-400 font-mono tracking-[0.2em] uppercase font-bold"
                style={{ margin: "0 0 0.6rem 0" }}
              >
                Smart Sensors
              </span>
              <h3
                className="text-xl md:text-2xl font-bold text-white leading-tight"
                style={{ margin: "0 0 0.4rem 0" }}
              >
                Monitoring Real‑Time
              </h3>
              <p
                className="text-sm text-green-200/50 leading-relaxed"
                style={{ margin: 0 }}
              >
                Kondisi tanah, kelembaban, dan kualitas udara terpantau 24/7.
              </p>
            </motion.div>

            {/* Image only card */}
            <motion.div
              {...fadeUp(0.6)}
              className="overflow-hidden group"
              style={{ borderRadius: "1.5rem", height: "280px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=600&q=80"
                alt="Kanopi hutan tropis"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>

            {/* Stat card — text only */}
            <motion.div
              {...fadeUp(0.7)}
              className="flex flex-col items-center justify-center text-center"
              style={{
                borderRadius: "1.5rem",
                height: "280px",
                padding: "2rem",
                background: "#f5f5f7",
              }}
            >
              <span
                className="text-5xl md:text-6xl font-extrabold text-gray-900 font-display leading-none"
                style={{ margin: "0 0 0.6rem 0" }}
              >
                250<span className="text-green-500">+</span>
              </span>
              <span
                className="text-sm text-gray-400 leading-relaxed"
                style={{ margin: 0 }}
              >
                Hektar lahan direstorasi
              </span>
            </motion.div>
          </div>

          {/* === ROW 3: image + text | dark text centered === */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "1rem" }}
          >
            {/* Image + Text overlay */}
            <motion.div
              {...fadeUp(0.8)}
              className="relative overflow-hidden group"
              style={{ borderRadius: "1.5rem", height: "320px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&q=80"
                alt="Petani mitra"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
              <div
                className="absolute inset-0 flex flex-col justify-end"
                style={{ padding: "2rem" }}
              >
                <h3
                  className="text-xl md:text-2xl font-bold text-white leading-tight"
                  style={{ margin: "0 0 0.4rem 0" }}
                >
                  Pemberdayaan 1,200 Petani
                </h3>
                <p
                  className="text-sm text-white/65 leading-relaxed"
                  style={{ margin: 0 }}
                >
                  Pendapatan meningkat 3x melalui akses pasar karbon global.
                </p>
              </div>
            </motion.div>

            {/* Dark centered card */}
            <motion.div
              {...fadeUp(0.9)}
              className="flex flex-col items-center justify-center text-center"
              style={{
                borderRadius: "1.5rem",
                height: "320px",
                padding: "2.5rem 2rem",
                background: "#111111",
              }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  background: "rgba(34,197,94,0.15)",
                  margin: "0 0 1.25rem 0",
                }}
              >
                <svg
                  className="w-7 h-7 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3
                className="text-xl md:text-2xl font-bold text-white leading-tight"
                style={{ margin: "0 0 0.5rem 0" }}
              >
                Kredit Karbon Terverifikasi
              </h3>
              <p
                className="text-sm text-gray-500 leading-relaxed"
                style={{ margin: 0, maxWidth: "280px" }}
              >
                Setiap ton CO₂ divalidasi standar internasional untuk pasar
                global.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
