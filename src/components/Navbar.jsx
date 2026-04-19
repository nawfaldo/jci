import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 w-full flex justify-center ${
        scrolled ? "bg-[#f5f5f5]/80" : "bg-[#f5f5f5]"
      }`}
      style={{ paddingTop: "8px", paddingBottom: "8px" }}
    >
      <div className="w-full max-w-[1280px] px-8 sm:px-12 flex justify-between items-center">
        {/* Left Side: Logo / Globe */}
        <div className="flex items-center gap-10">
          <div className="flex items-center cursor-pointer hover:opacity-70 transition-opacity">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-gray-900"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
          </div>

          <nav className="hidden md:flex items-center gap-10">
            {["kakao", "karbon", "tanam", "kontak"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-600 hover:text-gray-900 text-[14px] font-light tracking-wide transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Side: Bag */}
        <div className="flex items-center cursor-pointer hover:opacity-70 transition-opacity">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-900"
          >
            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <path d="M16 10a4 4 0 0 1-8 0"></path>
          </svg>
        </div>
      </div>
    </header>
  );
}
