import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Mission() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-200px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="mission"
      ref={ref}
      className="relative w-full flex justify-center"
      style={{ paddingTop: "6rem", paddingBottom: "6rem" }}
    >
      <div className="w-full max-w-[1280px]" style={{ padding: "0 20px" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <motion.p
            {...fadeUp(0)}
            className="text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#047857", marginBottom: "1.25rem" }}
          >
            Our Mission
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.15] text-gray-900"
            style={{ maxWidth: "600px" }}
          >
            Five pillars driving{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #047857, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              real impact
            </span>
          </motion.h2>
        </div>

        {/* ===== BENTO GRID ===== */}
        <div className="flex flex-col" style={{ gap: "1rem" }}>
          {/* === ROW 1: Image+Text hero | Text-only stat === */}
          <div
            className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr]"
            style={{ gap: "1rem" }}
          >
            {/* Mission 1 — Image + Text overlay */}
            <motion.div
              {...fadeUp(0.2)}
              className="relative overflow-hidden group"
              style={{ borderRadius: "1.5rem", height: "400px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1511497584788-876760111969?w=900&q=80"
                alt="Dense tropical forest canopy absorbing carbon"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div
                className="absolute inset-0 flex flex-col justify-end"
                style={{ padding: "2rem" }}
              >
                <span
                  className="font-mono uppercase font-bold"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Climate Action
                </span>
                <h3
                  className="font-display font-bold text-white"
                  style={{
                    fontSize: "1.5rem",
                    lineHeight: 1.25,
                    marginBottom: "0.5rem",
                  }}
                >
                  Ecological Restoration &<br />
                  Climate Recovery
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.65)",
                    maxWidth: "440px",
                  }}
                >
                  Transforming degraded marginal land into global carbon
                  sanctuaries by planting trees that absorb up to{" "}
                  <strong style={{ color: "rgba(255,255,255,0.9)" }}>
                    15 tons of CO₂ per hectare
                  </strong>{" "}
                  every year.
                </p>
              </div>
            </motion.div>

            {/* Mission 2 — Text-only card */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col justify-between"
              style={{
                borderRadius: "1.5rem",
                height: "400px",
                padding: "2.5rem 2rem",
                background: "#f5f5f7",
              }}
            >
              <div>
                <span
                  className="font-mono uppercase font-bold"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "#9ca3af",
                  }}
                >
                  Farmer Welfare
                </span>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-gray-900"
                  style={{
                    fontSize: "1.35rem",
                    lineHeight: 1.25,
                    marginBottom: "0.75rem",
                  }}
                >
                  Rural Farmer Prosperity
                </h3>
                <p
                  className="text-gray-500"
                  style={{ fontSize: "0.85rem", lineHeight: 1.6 }}
                >
                  Breaking the poverty cycle by providing capital and direct
                  income from day one, freeing farmers from the 3-year harvest
                  waiting crisis.
                </p>
              </div>
            </motion.div>
          </div>

          {/* === ROW 2: Text-only | Image-only | Text-only === */}
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ gap: "1rem" }}
          >
            {/* Mission 3 — Text-only */}
            <motion.div
              {...fadeUp(0.4)}
              className="flex flex-col justify-between"
              style={{
                borderRadius: "1.5rem",
                height: "300px",
                padding: "2rem",
                background: "#f5f5f7",
              }}
            >
              <div>
                <span
                  className="font-mono uppercase font-bold"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "#9ca3af",
                  }}
                >
                  Financial Justice
                </span>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-gray-900"
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.25,
                    marginBottom: "0.6rem",
                  }}
                >
                  Radical Empathy
                </h3>
                <p
                  className="text-gray-500"
                  style={{ fontSize: "0.82rem", lineHeight: 1.6 }}
                >
                  Shifting financial risk from vulnerable smallholder farmers to
                  the global community through the collaborative Adopt-A-Tree
                  movement.
                </p>
              </div>
            </motion.div>

            {/* Image-only — Cacao farmers at work */}
            <motion.div
              {...fadeUp(0.5)}
              className="overflow-hidden group"
              style={{ borderRadius: "1.5rem", height: "300px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=600&q=80"
                alt="Farmers working in cacao plantation"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>

            {/* Mission 4 — Text-only */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex flex-col justify-between"
              style={{
                borderRadius: "1.5rem",
                height: "300px",
                padding: "2rem",
                background: "#f5f5f7",
              }}
            >
              <div>
                <span
                  className="font-mono uppercase font-bold"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "#9ca3af",
                  }}
                >
                  Biodiversity
                </span>
              </div>
              <div>
                <h3
                  className="font-display font-bold text-gray-900"
                  style={{
                    fontSize: "1.15rem",
                    lineHeight: 1.25,
                    marginBottom: "0.6rem",
                  }}
                >
                  Rare Biodiversity Preservation
                </h3>
                <p
                  className="text-gray-500"
                  style={{ fontSize: "0.82rem", lineHeight: 1.6 }}
                >
                  Saving the world's most premium and rarest cacao variety, Java
                  Criollo, from the threat of extinction.
                </p>
              </div>
            </motion.div>
          </div>

          {/* === ROW 3: Image+Text overlay | Image-only === */}
          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ gap: "1rem" }}
          >
            {/* Mission 5 — Image + Text overlay */}
            <motion.div
              {...fadeUp(0.7)}
              className="relative overflow-hidden group"
              style={{ borderRadius: "1.5rem", height: "340px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&q=80"
                alt="Hands holding a growing plant from rich soil"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div
                className="absolute inset-0 flex flex-col justify-end"
                style={{ padding: "2rem" }}
              >
                <span
                  className="font-mono uppercase font-bold"
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.2em",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Circular Economy
                </span>
                <h3
                  className="font-display font-bold text-white"
                  style={{
                    fontSize: "1.35rem",
                    lineHeight: 1.25,
                    marginBottom: "0.5rem",
                  }}
                >
                  Zero-Waste Circular Economy
                </h3>
                <p
                  style={{
                    fontSize: "0.85rem",
                    lineHeight: 1.6,
                    color: "rgba(255,255,255,0.65)",
                    maxWidth: "400px",
                  }}
                >
                  Creating a zero-waste agricultural ecosystem where all harvest
                  yields and waste become value-added products — from compost to
                  export goods.
                </p>
              </div>
            </motion.div>

            {/* Image-only — Tropical canopy */}
            <motion.div
              {...fadeUp(0.8)}
              className="overflow-hidden group"
              style={{ borderRadius: "1.5rem", height: "340px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1416169607655-0c2b3ce2e1cc?w=800&q=80"
                alt="Lush tropical tree canopy from below"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
