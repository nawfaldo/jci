import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

const CountUpNumber = ({ valueStr }) => {
  const [displayValue, setDisplayValue] = useState("0");
  const nodeRef = useRef(null);
  const inView = useInView(nodeRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (inView) {
      const numMatch = valueStr.replace(/,/g, "").match(/[\d.]+/);
      if (!numMatch) {
        setDisplayValue(valueStr);
        return;
      }
      const finalNum = parseFloat(numMatch[0]);
      const suffixMatch = valueStr.replace(/,/g, "").match(/[^\d.]+/);
      const suffix = suffixMatch ? suffixMatch[0] : "";

      const isInteger = finalNum % 1 === 0;

      const controls = animate(0, finalNum, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (val) => {
          let formatted = isInteger
            ? Math.round(val).toLocaleString("en-US")
            : val.toFixed(1);
          setDisplayValue(formatted + suffix);
        },
      });
      return () => controls.stop();
    }
  }, [inView, valueStr]);

  return <span ref={nodeRef}>{displayValue}</span>;
};
import cacaoImg from "../img/cacao.png";
import plantImg from "../img/plant.png";
import carbonImg from "../img/carbon.png";

export default function Hero() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const chartData = [
    { m: "JAN", v: 35 },
    { m: "FEB", v: 42 },
    { m: "MAR", v: 38 },
    { m: "APR", v: 33 },
    { m: "MEI", v: 0 },
    { m: "JUN", v: 0 },
    { m: "JUL", v: 0 },
    { m: "AGT", v: 0 },
    { m: "SEP", v: 0 },
    { m: "OKT", v: 0 },
    { m: "NOV", v: 0 },
    { m: "DES", v: 0 },
  ];

  return (
    <div
      className="w-full flex justify-center bg-white font-sans"
      style={{
        paddingTop: "60px",
      }}
    >
      <section ref={ref} className="w-full max-w-[1280px] flex flex-col gap-6">
        {/* Top Row - Two Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[550px]">
          {/* Java Criollo Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="bg-[#f6f6f6] rounded-none flex flex-col relative overflow-hidden h-[500px] md:h-full"
            style={{
              paddingLeft: "20px",
              paddingTop: "20px",
              paddingRight: "20px",
            }}
          >
            {/* Text Box */}
            <div className="z-10 w-full max-w-[340px] text-left">
              <h2
                className="text-[24px] sm:text-4xl font-semibold text-gray-900 tracking-tight"
                style={{ marginBottom: "12px" }}
              >
                Java Criollo
              </h2>
              <p
                className="text-gray-600 font-light text-[15px] leading-relaxed"
                style={{ marginBottom: "14px" }}
              >
                The rarest cacao on earth. Java Criollo produces exceptionally
                complex flavors with floral, fruity, and nutty notes — prized by
                the world's finest chocolatiers.
              </p>
              <div className="flex justify-start" style={{ gap: "12px" }}>
                <button
                  className="bg-[#5d8b44] text-white text-[14px] font-medium hover:bg-[#4d7537] rounded-none"
                  style={{ padding: "10px 24px" }}
                >
                  More detail
                </button>
                <button
                  className="border border-[#5d8b44] text-[#5d8b44] bg-transparent text-[14px] font-medium hover:bg-gray-50 rounded-none"
                  style={{ padding: "10px 24px" }}
                >
                  Buy
                </button>
              </div>
            </div>
            {/* Image (Bottom Center) */}
            {/* <img
              src={cacaoImg}
              alt="Cacao Pods"
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] max-w-[400px] object-cover object-top"
            /> */}
          </motion.div>

          {/* Tanam Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="bg-[#f6f6f6] rounded-none flex flex-col relative overflow-hidden h-[500px] md:h-full"
            style={{
              paddingLeft: "20px",
              paddingTop: "20px",
              paddingRight: "20px",
            }}
          >
            {/* Text Box */}
            <div className="z-10 w-full max-w-[340px] text-left">
              <h2
                className="text-[24px] sm:text-4xl font-semibold text-gray-900 tracking-tight"
                style={{ marginBottom: "12px" }}
              >
                Plant Trees
              </h2>
              <p
                className="text-gray-600 font-light text-[14px] leading-relaxed"
                style={{ marginBottom: "14px" }}
              >
                Join the mission to rescue Java Criollo from extinction. Every
                tree planted restores biodiversity and helps the planet recover
                through regenerative agroforestry.
              </p>
              <div className="flex justify-start" style={{ gap: "12px" }}>
                <button
                  className="bg-[#5d8b44] text-white text-[14px] font-medium hover:bg-[#4d7537] rounded-none"
                  style={{ padding: "10px 24px" }}
                >
                  More detail
                </button>
                <button
                  className="border border-[#5d8b44] text-[#5d8b44] bg-transparent text-[14px] font-medium hover:bg-gray-50 rounded-none"
                  style={{ padding: "10px 24px" }}
                >
                  Plant
                </button>
              </div>
            </div>
            {/* Image (Bottom Right) */}
            {/* <img
              src={plantImg}
              alt="Planting"
              className="absolute bottom-0 right-0 w-[95%] sm:w-[90%] max-w-[500px] object-contain translate-x-12 translate-y-16"
            /> */}
          </motion.div>
        </div>

        {/* Bottom Row - Karbon Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="rounded-none overflow-hidden flex flex-col lg:flex-row relative mt-2 min-h-[500px]"
          style={{ background: "linear-gradient(to bottom, #91C8E4, #E8F9FF)" }}
        >
          {/* Left Content */}
          <div
            className="z-20 w-full lg:w-[45%] flex flex-col pb-[320px] lg:pb-20 relative"
            style={{
              paddingLeft: "20px",
              paddingTop: "20px",
              paddingRight: "20px",
            }}
          >
            <div className="z-20 w-full max-w-[340px] text-left">
              <h2
                className="text-[24px] sm:text-4xl font-semibold text-black tracking-tight"
                style={{ marginBottom: "12px" }}
              >
                Carbon
              </h2>
              <p
                className="text-gray-600 text-[14px] font-light leading-relaxed"
                style={{ marginBottom: "14px" }}
              >
                Our polyculture cacao forests actively absorb carbon. We
                measure, verify, and sell carbon credits to international
                companies committed to offsetting their emissions.
              </p>
              <div className="flex justify-start" style={{ gap: "12px" }}>
                <button
                  className="bg-[#5d8b44] text-white text-[14px] font-medium hover:bg-[#4d7537] rounded-none"
                  style={{ padding: "10px 24px" }}
                >
                  More detail
                </button>
                <button
                  className="border border-[#5d8b44] text-[#5d8b44] bg-transparent text-[15px] font-medium hover:bg-gray-50 rounded-none"
                  style={{ padding: "10px 24px" }}
                >
                  Buy
                </button>
              </div>
            </div>
            {/* Carbon Factory Image (Bottom Left) */}
            {/* <img
              src={carbonImg}
              alt="Carbon Factory"
              className="absolute bottom-0 left-0 w-[110%] sm:w-[100%] max-w-[480px] object-contain z-10 translate-y-4 -translate-x-[2%]"
            /> */}
          </div>

          {/* Right Content - Dashboard */}
          <div
            className="z-20 w-full lg:w-[55%] flex flex-col justify-center"
            style={{
              paddingRight: "20px",
              paddingLeft: "80px",
              paddingBottom: "40px",
              paddingTop: "30px",
            }}
          >
            <div
              className="flex items-center gap-2"
              style={{ marginBottom: "16px" }}
            >
              <motion.div
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: "#22c55e" }}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="font-mono text-[10px] font-bold text-gray-800 uppercase tracking-widest">
                LIVE MONITORING
              </span>
            </div>

            <div
              className="grid grid-cols-2"
              style={{ gap: "10px", marginBottom: "10px" }}
            >
              {[
                {
                  label: "ALL-TIME CARBON",
                  value: "4,800t",
                  status: "verified",
                  statusColor: "#22c55e",
                },
                {
                  label: "THIS YEAR",
                  value: "12t",
                  status: "on-track",
                  statusColor: "#22c55e",
                },
                {
                  label: "JUMLAH POHON",
                  value: "12,450",
                  status: "growing",
                  statusColor: "#ea580c",
                },
                {
                  label: "LUAS LAHAN",
                  value: "19.2h",
                  status: "growing",
                  statusColor: "#ea580c",
                },
              ].map((m) => (
                <div
                  key={m.label}
                  className="bg-[#fafafa] rounded-[16px]"
                  style={{
                    padding: "20px 24px",
                    border: "1px solid #f1f5f9",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
                  }}
                >
                  <div className="flex items-center justify-between mb-4 gap-2">
                    <span className="text-[10px] text-gray-400 font-light tracking-wider uppercase truncate">
                      {m.label}
                    </span>
                    <span
                      className="text-[10px] font-semibold"
                      style={{ color: m.statusColor }}
                    >
                      {m.status}
                    </span>
                  </div>
                  <div className="text-[38px] sm:text-[32px] tracking-tight font-black text-gray-800 leading-none">
                    <CountUpNumber valueStr={m.value} />
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div
              className="bg-[#fafafa] rounded-[16px]"
              style={{
                padding: "20px 24px",
                border: "1px solid #f1f5f9",
                boxShadow: "0 4px 20px rgba(0,0,0,0.02)",
              }}
            >
              <div className="text-[10px] text-gray-400 font-bold tracking-wider uppercase mb-10">
                KARBON 2026
              </div>

              <div className="flex items-end gap-1.5 h-32 w-full mt-2">
                {chartData.map((d, i) => (
                  <div
                    key={i}
                    className="flex-1 h-full flex flex-col justify-end group relative"
                  >
                    {d.v > 0 ? (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={
                          inView ? { height: `${(d.v / 60) * 100}%` } : {}
                        }
                        transition={{ duration: 0.8, delay: 0.2 + i * 0.05 }}
                        className="w-full rounded-t-[4px] relative"
                        style={{
                          backgroundImage:
                            "linear-gradient(to bottom, #86efac, #22c55e)",
                        }}
                      >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-[#3ea83e]">
                          {d.v}
                        </span>
                      </motion.div>
                    ) : (
                      <div className="w-full h-[1px] bg-gray-200" />
                    )}
                  </div>
                ))}
              </div>

              {/* X-Axis */}
              <div className="flex items-center gap-1.5 w-full mt-3">
                {chartData.map((d, i) => (
                  <div key={i} className="flex-1 text-center">
                    <span className="text-[9px] sm:text-[10px] uppercase font-medium text-gray-400">
                      {d.m}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
