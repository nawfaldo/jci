import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const CountUp = ({ value, suffix = "", decimals = 0 }) => {
  const [display, setDisplay] = useState("0");
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => {
          setDisplay(
            decimals > 0
              ? v.toFixed(decimals)
              : Math.round(v).toLocaleString("en-US"),
          );
        },
      });
      return () => controls.stop();
    }
  }, [inView, value, decimals]);

  return (
    <span ref={nodeRef}>
      {display}
      {suffix}
    </span>
  );
};

const progressData = [
  {
    mission: "Ecological Restoration",
    tag: "Climate Action",
    metric: "CO₂ Absorbed",
    value: 4800,
    suffix: "t",
    target: "10,000t",
    percent: 48,
    color: "#047857",
    colorLight: "#ecfdf5",
  },
  {
    mission: "Farmer Prosperity",
    tag: "Farmer Welfare",
    metric: "Farmers Empowered",
    value: 1200,
    suffix: "",
    target: "5,000",
    percent: 24,
    color: "#b45309",
    colorLight: "#fffbeb",
  },
  {
    mission: "Adopt-A-Tree",
    tag: "Financial Justice",
    metric: "Trees Adopted",
    value: 12450,
    suffix: "",
    target: "50,000",
    percent: 25,
    color: "#7c3aed",
    colorLight: "#f5f3ff",
  },
  {
    mission: "Biodiversity",
    tag: "Preservation",
    metric: "Java Criollo Trees Planted",
    value: 8600,
    suffix: "",
    target: "25,000",
    percent: 34,
    color: "#059669",
    colorLight: "#ecfdf5",
  },
  {
    mission: "Circular Economy",
    tag: "Zero Waste",
    metric: "Waste Utilization Rate",
    value: 92,
    suffix: "%",
    target: "100%",
    percent: 92,
    color: "#0284c7",
    colorLight: "#f0f9ff",
  },
];

export default function Progress() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-200px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="progress"
      ref={ref}
      className="relative w-full flex justify-center"
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
      }}
    >
      <div className="w-full max-w-[1280px]" style={{ padding: "0 20px" }}>
        {/* Header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <motion.p
            {...fadeUp(0)}
            className="text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#047857", marginBottom: "1.25rem" }}
          >
            Progress
          </motion.p>
          <motion.h2
            {...fadeUp(0.1)}
            className="font-display text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.15] text-gray-900"
            style={{ maxWidth: "600px" }}
          >
            Mission{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #047857, #10b981)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              realization
            </span>
          </motion.h2>
          <motion.p
            {...fadeUp(0.15)}
            className="text-gray-500"
            style={{
              fontSize: "1rem",
              marginTop: "1rem",
              maxWidth: "480px",
            }}
          >
            Real-time progress tracking of our five core missions. Every number
            represents verified, on-the-ground impact.
          </motion.p>
        </div>

        {/* Progress cards */}
        <div className="flex flex-col" style={{ gap: "1rem" }}>
          {progressData.map((item, i) => (
            <motion.div
              key={item.mission}
              {...fadeUp(0.2 + i * 0.08)}
              style={{
                borderRadius: "1.25rem",
                background: "white",
                border: "1px solid #e5e7eb",
                padding: "1.75rem 2rem",
              }}
            >
              <div
                className="grid grid-cols-1 md:grid-cols-[200px_1fr_140px] items-center"
                style={{ gap: "1.5rem" }}
              >
                {/* Left: Mission name */}
                <div>
                  <span
                    className="font-mono uppercase font-bold"
                    style={{
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: item.color,
                    }}
                  >
                    {item.tag}
                  </span>
                  <h3
                    className="font-display font-bold text-gray-900"
                    style={{
                      fontSize: "1rem",
                      marginTop: "0.25rem",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.mission}
                  </h3>
                </div>

                {/* Center: Progress bar */}
                <div>
                  <div
                    className="flex items-center justify-between"
                    style={{ marginBottom: "0.5rem" }}
                  >
                    <span
                      className="text-gray-500"
                      style={{ fontSize: "0.78rem" }}
                    >
                      {item.metric}
                    </span>
                    <span
                      className="font-mono text-gray-400"
                      style={{ fontSize: "0.7rem" }}
                    >
                      Target: {item.target}
                    </span>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "10px",
                      borderRadius: "999px",
                      background: "#f3f4f6",
                      overflow: "hidden",
                    }}
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${item.percent}%` } : {}}
                      transition={{
                        duration: 1.2,
                        delay: 0.4 + i * 0.12,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      style={{
                        height: "100%",
                        borderRadius: "999px",
                        background: item.color,
                      }}
                    />
                  </div>
                </div>

                {/* Right: Big number */}
                <div className="text-right md:text-right">
                  <div
                    className="font-display font-black"
                    style={{
                      fontSize: "1.75rem",
                      lineHeight: 1,
                      color: item.color,
                    }}
                  >
                    <CountUp
                      value={item.value}
                      suffix={item.suffix}
                      decimals={0}
                    />
                  </div>
                  <span
                    className="text-gray-400"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {item.percent}% of target
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
