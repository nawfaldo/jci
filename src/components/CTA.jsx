import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Mail, FileText } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
  });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative w-full overflow-hidden flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(180deg, #064e3b 0%, #065f46 100%)",
        paddingTop: "15rem",
        paddingBottom: "15rem",
      }}
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(52,211,153,0.1) 0%, transparent 70%)",
          transform: "translate(30%, -40%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 pointer-events-none"
        style={{
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(251,191,36,0.06) 0%, transparent 70%)",
          transform: "translate(-30%, 40%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      {/* Content */}
      <div
        className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center"
        style={{ padding: "0 1.5rem" }}
      >
        <motion.div
          {...fadeUp(0.2)}
          className="inline-flex items-center"
          style={{
            padding: "0.4rem 1rem",
            borderRadius: "9999px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(10px)",
            marginBottom: "2rem",
            gap: "0.5rem",
          }}
        >
          <div
            className="animate-pulse"
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#34d399",
            }}
          />
          <span
            className="font-mono uppercase font-semibold text-emerald-300"
            style={{ fontSize: "10px", letterSpacing: "0.15em" }}
          >
            Bergabung Bersama Kami
          </span>
        </motion.div>

        <motion.h2
          {...fadeUp(0.3)}
          className="font-display font-bold text-white leading-tight tracking-tight"
          style={{
            fontSize: "clamp(1.8rem, 5vw, 3.2rem)",
            margin: "0 0 1.25rem 0",
          }}
        >
          Investasi dalam{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #34d399, #a7f3d0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            kakao langka
          </span>{" "}
          &{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            kredit karbon
          </span>
        </motion.h2>

        <motion.p
          {...fadeUp(0.4)}
          className="text-emerald-100/60 leading-relaxed"
          style={{
            fontSize: "1rem",
            margin: "0 0 2.5rem 0",
            maxWidth: "520px",
          }}
        >
          Beli kakao premium Java Criollo, investasi kredit karbon
          terverifikasi, atau bermitra memulihkan lahan marginal Gunung Kidul.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.5)}
          className="flex flex-col sm:flex-row items-center justify-center"
          style={{ gap: "1rem", marginBottom: "3rem" }}
        >
          <a
            href="mailto:hello@javacriolloimpact.com"
            className="group"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 2rem",
              borderRadius: "9999px",
              background: "white",
              color: "#064e3b",
              fontWeight: 700,
              fontSize: "0.95rem",
              textDecoration: "none",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
            }}
          >
            <Mail style={{ width: "18px", height: "18px" }} />
            Hubungi Kami
            <ArrowRight
              style={{
                width: "18px",
                height: "18px",
                transition: "transform 0.3s",
              }}
              className="group-hover:translate-x-1"
            />
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              padding: "1rem 2rem",
              borderRadius: "9999px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "white",
              fontWeight: 600,
              fontSize: "0.95rem",
              textDecoration: "none",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s ease",
            }}
          >
            <FileText style={{ width: "18px", height: "18px" }} />
            Download Prospektus
          </a>
        </motion.div>
      </div>
    </section>
  );
}
