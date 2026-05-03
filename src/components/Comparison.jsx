import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Crown } from "lucide-react";

const cacaoVarieties = [
  {
    name: "Java Criollo",
    flavor: "Tropical fruit, honey, floral",
    price: "$8,000–12,000",
    rarity: "< 5%",
    highlight: true,
  },
  {
    name: "Nacional",
    flavor: "Floral, herbal notes",
    price: "$4,500–7,000",
    rarity: "~5%",
    highlight: false,
  },
  {
    name: "Trinitario",
    flavor: "Fruity, semi-bitter",
    price: "$3,500–5,000",
    rarity: "~10%",
    highlight: false,
  },
  {
    name: "Forastero",
    flavor: "Bitter, earthy",
    price: "$2,000–3,000",
    rarity: "~80%",
    highlight: false,
  },
];

const carbonTrees = [
  {
    name: "Java Criollo",
    co2: 19.2,
    unit: "t CO₂/ha/yr",
    highlight: true,
  },
  {
    name: "Mangrove",
    co2: 12.4,
    unit: "t CO₂/ha/yr",
    highlight: false,
  },
  {
    name: "Teak",
    co2: 9.8,
    unit: "t CO₂/ha/yr",
    highlight: false,
  },
  {
    name: "Oil Palm",
    co2: 7.2,
    unit: "t CO₂/ha/yr",
    highlight: false,
  },
  {
    name: "Sengon",
    co2: 6.5,
    unit: "t CO₂/ha/yr",
    highlight: false,
  },
];

const maxCO2 = 19.2;

export default function Comparison() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-200px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="comparison"
      ref={ref}
      className="relative w-full flex justify-center"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div
        className="w-full max-w-[1280px] grid grid-cols-1 lg:grid-cols-[1fr_auto]"
        style={{ gap: "4rem" }}
      >
        {/* === LEFT: Sticky Title === */}
        <motion.div
          {...fadeUp(0)}
          className="lg:sticky text-left"
          style={{ alignSelf: "start", top: "6rem", paddingLeft: "20px" }}
        >
          <h2 className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.15] text-gray-900">
            Why{" "}
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
          </h2>
          <p
            className="leading-relaxed text-gray-500"
            style={{
              fontSize: "1rem",
              marginTop: "1.25rem",
              maxWidth: "340px",
            }}
          >
            The only variety in the world that combines the{" "}
            <strong>highest</strong> export value with <strong>maximum</strong>{" "}
            carbon sequestration capacity.
          </p>

          {/* Quick stats under title */}
          <div
            style={{
              marginTop: "2.5rem",
              display: "flex",
              gap: "2rem",
            }}
          >
            <div>
              <div
                className="font-display font-black text-gray-900"
                style={{ fontSize: "2rem", lineHeight: 1 }}
              >
                4×
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#9ca3af",
                  marginTop: "0.35rem",
                }}
              >
                price premium vs
                <br />
                Forastero
              </div>
            </div>
            <div>
              <div
                className="font-display font-black text-gray-900"
                style={{ fontSize: "2rem", lineHeight: 1 }}
              >
                2.6×
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#9ca3af",
                  marginTop: "0.35rem",
                }}
              >
                more CO₂ absorbed
                <br />
                than oil palm
              </div>
            </div>
          </div>
        </motion.div>

        {/* === RIGHT: Cards stacked vertically === */}
        <div className="flex flex-col w-[720px]" style={{ gap: "1.5rem" }}>
          {/* --- Card 1: Flavor & Obsession --- */}
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
                Flavor Profile
              </span>
              <h3
                className="font-display font-bold text-gray-900"
                style={{ fontSize: "1.15rem", marginTop: "0.35rem" }}
              >
                The World's Most Coveted Cacao
              </h3>
              <p
                className="text-[0.8rem] leading-relaxed text-gray-500"
                style={{ marginTop: "0.5rem" }}
              >
                Java Criollo is the holy grail of chocolate. Its{" "}
                <strong>complex flavor profile</strong> — tropical fruit, raw
                honey, jasmine, and toasted nuts — has made it an obsession
                among the world's top chocolatiers and fine dining chefs.
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
                      <span style={{ fontSize: "0.7rem", color: "#9ca3af" }}>
                        {v.flavor}
                      </span>
                    </div>
                  </div>

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

          {/* --- Card 2: Carbon Sequestration (White) --- */}
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
                Carbon Sequestration
              </span>
              <h3
                className="font-display font-bold text-gray-900"
                style={{ fontSize: "1.15rem", marginTop: "0.35rem" }}
              >
                Natural Carbon Capture Capacity
              </h3>
              <p
                className="text-[0.8rem] leading-relaxed text-gray-500"
                style={{ marginTop: "0.5rem" }}
              >
                Java Criollo's polyculture canopy and deep root system{" "}
                <strong>outperforms industrial crops</strong> — even mangroves —
                in locking CO₂ from the atmosphere.
              </p>
            </div>

            {/* Bar chart rows */}
            <div style={{ padding: "0.5rem 0" }}>
              {carbonTrees.map((t, i) => {
                const percentage = (t.co2 / maxCO2) * 100;

                return (
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
                      <div
                        className="flex items-center"
                        style={{ gap: "0.4rem" }}
                      >
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
                        animate={inView ? { width: `${percentage}%` } : {}}
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
                );
              })}
            </div>
          </motion.div>

          {/* --- Card 3: EUDR Compliance --- */}
          <motion.div
            {...fadeUp(0.5)}
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
                Export Compliance
              </span>
              <h3
                className="font-display font-bold text-gray-900"
                style={{ fontSize: "1.15rem", marginTop: "0.35rem" }}
              >
                EUDR-Ready for Global Markets
              </h3>
              <p
                className="text-[0.8rem] leading-relaxed text-gray-500"
                style={{ marginTop: "0.5rem" }}
              >
                Exporting cacao to Europe just got easier. Our operations are
                fully compliant with the{" "}
                <strong>EU Deforestation Regulation (EUDR)</strong>, meaning
                every bean is traceable and deforestation-free — ready to ship
                without friction.
              </p>
            </div>

            {/* Compliance features */}
            <div>
              {[
                {
                  label: "Geolocation Traceability",
                  desc: "Every plot GPS-mapped and registered",
                  status: "Verified",
                  statusColor: "#047857",
                },
                {
                  label: "Deforestation-Free",
                  desc: "No forest clearing since Dec 31, 2020 cutoff",
                  status: "Certified",
                  statusColor: "#047857",
                },
                {
                  label: "Due Diligence System",
                  desc: "Full supply chain documentation in place",
                  status: "Active",
                  statusColor: "#047857",
                },
                {
                  label: "EU Market Access",
                  desc: "Direct export to European buyers, zero barriers",
                  status: "Ready",
                  statusColor: "#2563eb",
                },
              ].map((item, i, arr) => (
                <div
                  key={item.label}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                    padding: "1rem 1.75rem",
                    gap: "1rem",
                    borderBottom:
                      i < arr.length - 1 ? "1px solid #f3f4f6" : "none",
                  }}
                >
                  <div>
                    <span
                      className="font-semibold block"
                      style={{ fontSize: "0.85rem", color: "#374151" }}
                    >
                      {item.label}
                    </span>
                    <span style={{ fontSize: "0.7rem", color: "#9ca3af" }}>
                      {item.desc}
                    </span>
                  </div>
                  <span
                    className="font-semibold"
                    style={{
                      fontSize: "0.7rem",
                      color: item.statusColor,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
