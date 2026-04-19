export default function Footer() {
  const links = ["Email", "WhatsApp", "Media Kit", "Privacy", "Terms", "Sitemap"];

  return (
    <footer
      className="w-full w-full flex flex-col items-center"
      style={{
        background: "#065f46",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div 
        className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between"
        style={{ padding: "1.5rem 1.5rem", gap: "1rem" }}
      >
        {/* Kiri: Brand & Copyright */}
        <div className="flex flex-col md:flex-row items-center text-center md:text-left justify-center md:justify-start" style={{ gap: "1rem" }}>
          <div className="flex items-center justify-center" style={{ gap: "0.5rem" }}>
            <div
              className="flex items-center justify-center"
              style={{
                width: "1.5rem",
                height: "1.5rem",
                borderRadius: "50%",
                border: "1px solid rgba(167,243,208,0.3)",
              }}
            >
              <svg width="10" height="10" viewBox="0 0 100 100" fill="none">
                <path
                  d="M50 10 C30 20, 15 40, 20 60 C25 78, 42 90, 50 90 C58 90, 75 78, 80 60 C85 40, 70 20, 50 10Z"
                  stroke="#a7f3d0"
                  strokeWidth="6"
                  fill="#a7f3d0"
                  fillOpacity="0.2"
                />
              </svg>
            </div>
            <span className="font-display font-bold tracking-tight text-white" style={{ fontSize: "0.9rem" }}>
              Java Criollo
            </span>
          </div>
          
          <span className="hidden md:block" style={{ color: "rgba(255,255,255,0.15)" }}>|</span>
          
          <p className="font-medium" style={{ fontSize: "0.75rem", color: "rgba(167,243,208,0.4)", margin: 0 }}>
            © {new Date().getFullYear()} The Criollo Sanctuary. All rights reserved.
          </p>
        </div>

        {/* Kanan: Kontak & Bottom Links */}
        <ul className="flex flex-row flex-wrap items-center justify-center md:justify-end" style={{ gap: "1.25rem" }}>
          {links.map((link) => (
            <li key={link}>
              <a
                href="#"
                className="transition-colors duration-300"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(255,255,255,0.5)",
                  textDecoration: "none",
                  fontWeight: "500",
                }}
                onMouseOver={(e) => (e.target.style.color = "white")}
                onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.5)")}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
