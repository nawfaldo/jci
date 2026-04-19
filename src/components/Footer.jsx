export default function Footer() {
  const kontakLinks = ["Email", "WhatsApp", "Media Kit", "Undang Kami"];

  return (
    <footer
      className="flex flex-col items-center justify-center text-center w-full"
      style={{
        background: "#065f46",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div
        className="w-full max-w-5xl mx-auto flex flex-col items-center text-center justify-center"
        style={{ padding: "2rem 1.5rem" }}
      >
        {/* Top section (Brand & Kontak) */}
        <div
          className="flex flex-col items-center justify-center w-full"
          style={{ gap: "1.5rem", marginBottom: "1.5rem" }}
        >
          {/* Brand */}
          <div className="max-w-md text-center mx-auto flex flex-col items-center justify-center">
            <div
              className="flex items-center justify-center"
              style={{ gap: "0.75rem", marginBottom: "1rem" }}
            >
              <div
                className="flex items-center justify-center"
                style={{
                  width: "2rem",
                  height: "2rem",
                  borderRadius: "50%",
                  border: "1px solid rgba(167,243,208,0.3)",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 100 100" fill="none">
                  <path
                    d="M50 10 C30 20, 15 40, 20 60 C25 78, 42 90, 50 90 C58 90, 75 78, 80 60 C85 40, 70 20, 50 10Z"
                    stroke="#a7f3d0"
                    strokeWidth="4"
                    fill="#a7f3d0"
                    fillOpacity="0.15"
                  />
                </svg>
              </div>
              <span
                className="font-display font-bold tracking-tight text-white"
                style={{ fontSize: "1.125rem" }}
              >
                Java Criollo Impact
              </span>
            </div>
            <p
              className="leading-relaxed text-center"
              style={{ fontSize: "0.875rem", color: "rgba(167,243,208,0.5)" }}
            >
              Kakao premium & kredit karbon dari lahan regeneratif Gunung Kidul.
            </p>
          </div>

          {/* Kontak Only */}
          <div className="flex flex-col items-center justify-center w-full text-center">
            <h4
              className="font-semibold uppercase text-center"
              style={{
                fontSize: "10px",
                letterSpacing: "0.25em",
                color: "rgba(167,243,208,0.4)",
                marginBottom: "1rem",
              }}
            >
              Kontak
            </h4>
            <ul
              className="flex flex-row flex-wrap items-center justify-center"
              style={{ gap: "1.5rem" }}
            >
              {kontakLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="transition-colors duration-300"
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.55)",
                      textDecoration: "none",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "white")}
                    onMouseOut={(e) =>
                      (e.target.style.color = "rgba(255,255,255,0.55)")
                    }
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom (Privacy, Terms, Sitemap, Copyright) */}
        <div
          className="w-full flex flex-col items-center justify-center text-center"
          style={{
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            gap: "0.75rem",
          }}
        >
          <div
            className="flex items-center justify-center flex-wrap"
            style={{ gap: "1.5rem" }}
          >
            {["Privacy", "Terms", "Sitemap"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors"
                style={{
                  fontSize: "0.75rem",
                  color: "rgba(167,243,208,0.35)",
                  textDecoration: "none",
                }}
                onMouseOver={(e) =>
                  (e.target.style.color = "rgba(167,243,208,0.7)")
                }
                onMouseOut={(e) =>
                  (e.target.style.color = "rgba(167,243,208,0.35)")
                }
              >
                {item}
              </a>
            ))}
          </div>
          <p
            className="text-center"
            style={{ fontSize: "0.75rem", color: "rgba(167,243,208,0.3)" }}
          >
            © {new Date().getFullYear()} The Criollo Sanctuary. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
