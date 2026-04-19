import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown } from "lucide-react";

const stats = [
  { value: 250, suffix: "+", label: "Hektar Lahan Marginal" },
  { value: 1200, suffix: "", label: "Petani Mitra" },
  { value: 4800, suffix: "t", label: "CO₂ Diserap/Tahun" },
  { value: 3, suffix: "x", label: "Pendapatan Petani" },
];

function AnimatedNumber({ value, suffix, inView }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const startTime = performance.now();

    function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, value]);

  const formatted =
    value >= 1000 ? display.toLocaleString("en-US") : display.toString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden px-6 sm:px-10 py-32"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-green-100/60 via-green-50/30 to-transparent blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[400px] rounded-full bg-gradient-to-br from-amber-100/30 via-transparent to-transparent blur-3xl" />
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* ===== LEFT — Hero Text ===== */}
        <div
          className="flex flex-col items-center lg:items-start text-center lg:text-left"
          style={{ gap: "2.5rem" }}
        >
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[0.9]"
          >
            <span className="block text-(--color-text-primary)">
              Java Criollo
            </span>
            <span className="block text-gradient-earth animate-gradient mt-2">
              Impact
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base sm:text-lg text-(--color-text-secondary) max-w-md leading-relaxed"
          >
            Merevitalisasi kakao langka Java Criollo di lahan marginal Gunung
            Kidul — menghasilkan biji kakao premium bernilai ekspor dan kredit
            karbon terverifikasi melalui sistem polikultur regeneratif.
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="w-full grid grid-cols-4 gap-0"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`text-center lg:text-left pb-4 ${i > 0 ? "pl-4 lg:pl-5" : ""}`}
              >
                <div className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-gradient-gold leading-none">
                  <AnimatedNumber
                    value={stat.value}
                    suffix={stat.suffix}
                    inView={inView}
                  />
                </div>
                <div className="text-[10px] sm:text-[11px] text-(--color-text-tertiary) mt-1.5 leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ===== RIGHT — Dashboard Mockup ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex justify-center lg:justify-end"
        >
          <div className="w-full overflow-hidden">
            {/* Dashboard Header */}
            <div
              className="flex items-center justify-start"
              style={{ padding: "0 1.5rem" }}
            >
              <div
                className="flex items-center gap-2.5"
                style={{ marginBottom: "-0.5rem" }}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs text-(--color-text-primary) font-semibold font-mono tracking-wide">
                  LIVE MONITORING
                </span>
              </div>
            </div>

            {/* Dashboard Body */}
            <div style={{ padding: "1.5rem" }}>
              {/* Metric cards */}
              <div
                className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6"
                style={{ gap: "1rem", marginBottom: "1.5rem" }}
              >
                {[
                  {
                    label: "All-Time Carbon",
                    value: "4,800t",
                    status: "verified",
                    color: "text-green-600",
                  },
                  {
                    label: "Kakao Premium",
                    value: "12t",
                    status: "exported",
                    color: "text-green-600",
                  },
                  {
                    label: "Pohon Criollo",
                    value: "12,450",
                    status: "growing",
                    color: "text-amber-600",
                  },
                  {
                    label: "Rate/Hectare",
                    value: "19.2t",
                    status: "optimal",
                    color: "text-green-600",
                  },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="p-4 sm:p-5 rounded-xl bg-gray-50 border border-gray-100"
                    style={{ padding: "1.25rem" }}
                  >
                    <div
                      className="flex items-center justify-between mb-2"
                      style={{ marginBottom: "0.5rem" }}
                    >
                      <span className="text-[10px] sm:text-[11px] text-(--color-text-tertiary) uppercase tracking-wider font-medium">
                        {m.label}
                      </span>
                      <span
                        className={`text-[10px] sm:text-[11px] ${m.color} font-medium`}
                      >
                        {m.status}
                      </span>
                    </div>
                    <div className="text-2xl sm:text-3xl font-display font-bold text-(--color-text-primary) leading-none">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart */}
              <div
                className="rounded-xl bg-gray-50 border border-gray-100 p-5 sm:p-6"
                style={{ marginTop: "1rem", padding: "1.5rem" }}
              >
                <div
                  className="flex items-center justify-between mb-4"
                  style={{ marginBottom: "1rem" }}
                >
                  <span className="text-[10px] sm:text-[11px] text-(--color-text-tertiary) uppercase tracking-wider font-medium">
                    Carbon Sequestration 2026
                  </span>
                </div>

                {/* Bars */}
                <div className="flex items-end gap-1 h-20 sm:h-24 w-full pt-4 mt-2">
                  {[
                    { m: "Jan", v: 35 },
                    { m: "Feb", v: 42 },
                    { m: "Mar", v: 38 },
                    { m: "Apr", v: 55 },
                    { m: "Mei", v: 0 },
                    { m: "Jun", v: 0 },
                    { m: "Jul", v: 0 },
                    { m: "Agt", v: 0 },
                    { m: "Sep", v: 0 },
                    { m: "Okt", v: 0 },
                    { m: "Nov", v: 0 },
                    { m: "Des", v: 0 },
                  ].map((d, i) => (
                    <div
                      key={i}
                      className="flex-1 h-full flex flex-col justify-end"
                    >
                      {d.v > 0 ? (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={inView ? { height: `${d.v}%` } : {}}
                          transition={{ duration: 0.6, delay: 1.0 + i * 0.06 }}
                          className="w-full rounded-t-sm bg-gradient-to-t from-green-600 to-green-400 relative"
                        >
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={inView ? { opacity: 1 } : { opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: 1.5 + i * 0.06,
                            }}
                            className="absolute -top-[1.1rem] left-1/2 -translate-x-1/2 text-[8px] sm:text-[9px] font-mono font-bold text-green-700"
                          >
                            {d.v}
                          </motion.span>
                        </motion.div>
                      ) : (
                        <div className="w-full h-[2px] rounded-full bg-gray-200" />
                      )}
                    </div>
                  ))}
                </div>

                {/* X-Axis Labels */}
                <div className="flex items-center gap-1 w-full mt-2">
                  {[
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "Mei",
                    "Jun",
                    "Jul",
                    "Agt",
                    "Sep",
                    "Okt",
                    "Nov",
                    "Des",
                  ].map((m, i) => (
                    <div key={i} className="flex-1 text-center">
                      <span
                        className={`text-[8px] sm:text-[9px] uppercase tracking-tighter ${i > 3 ? "text-gray-300" : "text-(--color-text-tertiary)"}`}
                      >
                        {m}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <p
                className="mt-4 text-[11px] text-(--color-text-tertiary) text-center"
                style={{ paddingTop: "1.5rem" }}
              >
                Data real-time dari sensor IoT di lahan polikultur mitra
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          duration: 2,
          delay: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400"
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
