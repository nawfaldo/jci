import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Crown } from "lucide-react";

const cacaoVarieties = [
  {
    name: "Java Criollo",
    flavor: "Buah tropis, madu",
    price: "$8,000–12,000",
    rarity: "< 5%",
    highlight: true,
  },
  {
    name: "Nacional",
    flavor: "Floral, herbal",
    price: "$4,500–7,000",
    rarity: "~5%",
    highlight: false,
  },
  {
    name: "Trinitario",
    flavor: "Fruity, semi-pahit",
    price: "$3,500–5,000",
    rarity: "~10%",
    highlight: false,
  },
  {
    name: "Forastero",
    flavor: "Pahit, earthy",
    price: "$2,000–3,000",
    rarity: "~80%",
    highlight: false,
  },
];

const carbonTrees = [
  { name: "Java Criollo", co2: 19.2, unit: "t CO₂/ha/thn", highlight: true },
  { name: "Mangrove", co2: 12.4, unit: "t CO₂/ha/thn", highlight: false },
  { name: "Jati (Teak)", co2: 9.8, unit: "t CO₂/ha/thn", highlight: false },
  { name: "Kelapa Sawit", co2: 7.2, unit: "t CO₂/ha/thn", highlight: false },
  { name: "Sengon", co2: 6.5, unit: "t CO₂/ha/thn", highlight: false },
];

const maxCO2 = 19.2;

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="comparison"
      ref={ref}
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background: "#fafafa",
      }}
    >
      {/* Header */}
      <div
        className="w-full max-w-6xl mx-auto text-center"
        style={{ padding: "0 1.5rem", marginBottom: "3.5rem" }}
      >
        <motion.p
          {...fadeUp(0)}
          className="text-xs tracking-[0.3em] uppercase font-semibold"
          style={{ color: "#047857", marginBottom: "1.25rem" }}
        >
          Perbandingan
        </motion.p>
        <motion.h2
          {...fadeUp(0.1)}
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-gray-900"
        >
          Mengapa{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #047857, #10b981)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Java Criollo
          </span>
          ?
        </motion.h2>
        <motion.p
          {...fadeUp(0.2)}
          className="leading-relaxed text-gray-500"
          style={{
            fontSize: "1.05rem",
            marginTop: "1rem",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Satu-satunya varietas di dunia yang menggabungkan potensi nilai jual
          ekspor <strong>tertinggi</strong> dengan kemampuan penyerapan karbon{" "}
          <strong>maksimal</strong>.
        </motion.p>
      </div>

      {/* Two-column layout */}
      <div
        className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2"
        style={{ padding: "0 1.5rem", gap: "1.5rem" }}
      >
        {/* === LEFT: Cacao Variety === */}
        <motion.div
          {...fadeUp(0.2)}
          style={{
            borderRadius: "1.5rem",
            border: "1px solid #e5e7eb",
            background: "white",
            overflow: "hidden",
          }}
        >
          {/* Card header */}
          <div
            style={{
              padding: "1.5rem 1.75rem 1rem",
              borderBottom: "1px solid #f3f4f6",
            }}
          >
            <span
              className="font-mono uppercase font-bold"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "#9ca3af",
              }}
            >
              Varietas Kakao
            </span>
            <h3
              className="font-display font-bold text-gray-900"
              style={{ fontSize: "1.15rem", marginTop: "0.35rem" }}
            >
              Potensi Ekonomi & Pasar
            </h3>
            <p
              className="text-[0.8rem] leading-relaxed text-gray-500"
              style={{ marginTop: "0.5rem" }}
            >
              Biji putih Java Criollo masuk kategori{" "}
              <strong>"Fine Flavor Cocoa"</strong>. Kelangkaannya di dunia
              membuat harganya <strong>4x lipat lebih mahal</strong> dari kakao
              Forastero biasa.
            </p>
          </div>

          {/* Rows */}
          <div>
            {cacaoVarieties.map((v, i) => (
              <div
                key={v.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr auto auto",
                  alignItems: "center",
                  padding: "1rem 1.75rem",
                  gap: "1rem",
                  background: v.highlight ? "#f0fdf4" : "transparent",
                  borderBottom:
                    i < cacaoVarieties.length - 1
                      ? "1px solid #f3f4f6"
                      : "none",
                }}
              >
                {/* Name */}
                <div className="flex items-center" style={{ gap: "0.5rem" }}>
                  {v.highlight && (
                    <Crown
                      style={{
                        width: "14px",
                        height: "14px",
                        color: "#f59e0b",
                        flexShrink: 0,
                      }}
                    />
                  )}
                  <div>
                    <span
                      className="font-semibold block"
                      style={{
                        fontSize: "0.85rem",
                        color: v.highlight ? "#047857" : "#374151",
                      }}
                    >
                      {v.name}
                    </span>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        color: "#9ca3af",
                      }}
                    >
                      {v.flavor}
                    </span>
                  </div>
                </div>

                {/* Rarity */}
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: v.highlight ? "#047857" : "#9ca3af",
                    fontWeight: v.highlight ? 600 : 400,
                    whiteSpace: "nowrap",
                  }}
                >
                  {v.rarity}
                </span>

                {/* Price */}
                <span
                  className="font-mono font-bold"
                  style={{
                    fontSize: "0.8rem",
                    color: v.highlight ? "#047857" : "#6b7280",
                    whiteSpace: "nowrap",
                  }}
                >
                  {v.price}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* === RIGHT: Carbon Sequestration === */}
        <motion.div
          {...fadeUp(0.35)}
          style={{
            borderRadius: "1.5rem",
            border: "1px solid #e5e7eb",
            background: "white",
            overflow: "hidden",
          }}
        >
          {/* Card header */}
          <div
            style={{
              padding: "1.5rem 1.75rem 1rem",
              borderBottom: "1px solid #f3f4f6",
            }}
          >
            <span
              className="font-mono uppercase font-bold"
              style={{
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                color: "#9ca3af",
              }}
            >
              Penyerapan Karbon
            </span>
            <h3
              className="font-display font-bold text-gray-900"
              style={{ fontSize: "1.15rem", marginTop: "0.35rem" }}
            >
              Kapasitas Serap Karbon Asli
            </h3>
            <p
              className="text-[0.8rem] leading-relaxed text-gray-500"
              style={{ marginTop: "0.5rem" }}
            >
              Sistem perakaran dan tajuk polikultur daun lebar Java Criollo
              terbukti <strong>mengalahkan tanaman industri</strong> bahkan
              mangrove dalam mengunci CO₂ dari atmosfer.
            </p>
          </div>

          {/* Bar chart rows */}
          <div style={{ padding: "0.5rem 0" }}>
            {carbonTrees.map((t, i) => (
              <div
                key={t.name}
                style={{
                  padding: "0.85rem 1.75rem",
                  background: t.highlight ? "#f0fdf4" : "transparent",
                }}
              >
                {/* Label row */}
                <div
                  className="flex items-center justify-between"
                  style={{ marginBottom: "0.4rem" }}
                >
                  <div className="flex items-center" style={{ gap: "0.4rem" }}>
                    {t.highlight && (
                      <Crown
                        style={{
                          width: "13px",
                          height: "13px",
                          color: "#f59e0b",
                          flexShrink: 0,
                        }}
                      />
                    )}
                    <span
                      className="font-semibold"
                      style={{
                        fontSize: "0.82rem",
                        color: t.highlight ? "#047857" : "#374151",
                      }}
                    >
                      {t.name}
                    </span>
                  </div>
                  <span
                    className="font-mono font-bold"
                    style={{
                      fontSize: "0.78rem",
                      color: t.highlight ? "#047857" : "#6b7280",
                    }}
                  >
                    {t.co2}{" "}
                    <span
                      style={{
                        fontWeight: 400,
                        fontSize: "0.65rem",
                        color: "#9ca3af",
                      }}
                    >
                      {t.unit}
                    </span>
                  </span>
                </div>

                {/* Bar */}
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    borderRadius: "999px",
                    background: "#f3f4f6",
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: 0 }}
                    animate={
                      inView ? { width: `${(t.co2 / maxCO2) * 100}%` } : {}
                    }
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + i * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    style={{
                      height: "100%",
                      borderRadius: "999px",
                      background: t.highlight
                        ? "linear-gradient(90deg, #047857, #10b981)"
                        : "#d1d5db",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
