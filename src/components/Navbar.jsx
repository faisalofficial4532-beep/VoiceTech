import { useState, useEffect } from "react";

import {
  Sparkles,
  Workflow,
  BriefcaseBusiness,
  BadgeDollarSign,
  Mic2,
  FileText,
  LogIn,
  Menu,
  X,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Screen size change hote hi menu ko auto-close karne ke liye hook
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menuItems = [
    {
      name: "Features",
      href: "#features",
      icon: Sparkles,
    },
    {
      name: "How It Works",
      href: "#how-it-works",
      icon: Workflow,
    },
    {
      name: "Use Cases",
      href: "#use-cases",
      icon: BriefcaseBusiness,
    },
    {
      name: "Pricing",
      href: "#pricing",
      icon: BadgeDollarSign,
    },
    {
      name: "VS Speechify",
      href: "#vs-speechify",
      icon: Mic2,
    },
    {
      name: "Blog",
      href: "#blog",
      icon: FileText,
    },
  ];

  return (
    <>
      {/* =====================================================
          NAVBAR (Sticky)
      ===================================================== */}
      <nav className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LOGO */}
          <a
            href="/"
            className="flex items-center gap-2"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
              <Mic2 size={19} strokeWidth={2.5} />
            </div>

            <span className="text-[20px] font-bold tracking-tight text-gray-900">
              VoiceBrief
            </span>
          </a>


          {/* DESKTOP NAVIGATION (Hidden on Mobile, Visible on Large screens) */}
          <div className="hidden items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm lg:flex">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                >
                  <Icon size={16} strokeWidth={2} />

                  <span>{item.name}</span>
                </a>
              );
            })}

          </div>


          {/* DESKTOP SIGN IN BUTTON */}
          <button
            type="button"
            className="hidden items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 lg:flex"
          >
            <LogIn size={16} strokeWidth={2.2} />

            <span>Sign In</span>
          </button>


          {/* MOBILE MENU BUTTON (HAMBURGER)
              Fix: Strict class + inline check taaki Desktop/Laptop par kabhi Na Dikhay!
          */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-gray-800 transition hover:bg-gray-100 lg:!hidden"
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={2} />
          </button>

        </div>
      </nav>


      {/* =====================================================
          MOBILE DARK OVERLAY
      ===================================================== */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/40
          transition-opacity duration-300
          lg:!hidden
          ${
            isMenuOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />


      {/* =====================================================
          MOBILE LEFT SIDEBAR
      ===================================================== */}
      <aside
        style={{
          transform: isMenuOpen ? "translateX(0)" : "translateX(-100%)",
        }}
        className={`
          fixed left-0 top-0 z-50
          flex h-dvh h-screen w-[280px]
          flex-col
          bg-white
          shadow-2xl
          transition-transform duration-300 ease-in-out
          lg:!hidden
        `}
      >
        {/* MOBILE SIDEBAR HEADER */}
        <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-gray-100 px-5">

          {/* Mobile Logo */}
          <a
            href="/"
            onClick={() => setIsMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
              <Mic2 size={17} strokeWidth={2.5} />
            </div>

            <span className="text-lg font-bold text-gray-900">
              VoiceBrief
            </span>
          </a>

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-700 transition hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X size={23} strokeWidth={2} />
          </button>

        </div>

        {/* MOBILE CONTENT */}
        <div className="flex-1 overflow-y-auto px-4 py-4">

          <div className="flex flex-col gap-1">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 text-[15px] font-medium text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-blue-600"
                >
                  <Icon
                    size={18}
                    strokeWidth={2}
                  />

                  <span>{item.name}</span>
                </a>
              );
            })}

            {/* BUTTON BELOW LINKS */}
            <div className="mt-3 pt-3 border-t border-gray-100 px-1">
              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-blue-700 shadow-sm"
              >
                <LogIn
                  size={17}
                  strokeWidth={2.2}
                />

                <span>Sign Up / Sign In</span>
              </button>
            </div>

          </div>

        </div>

      </aside>
    </>
  );
}

export default Navbar;