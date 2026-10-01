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
  Eye,
  EyeOff,
} from "lucide-react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState("signin");
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  /* =====================================================
     CLOSE MOBILE MENU ON DESKTOP
  ===================================================== */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  /* =====================================================
     CLOSE POPUP WITH ESC
  ===================================================== */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsAuthOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  /* =====================================================
     NAVIGATION / SMOOTH SCROLL
  ===================================================== */
  const handleScroll = (e, target) => {
    e.preventDefault();

    setIsMenuOpen(false);

    /*
      If we are already on the Home page,
      smoothly scroll to the section.
    */
    if (window.location.pathname === "/") {
      const element = document.getElementById(target);

      if (!element) return;

      const navbarHeight = 60;

      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;

      window.scrollTo({
        top: elementPosition - navbarHeight,
        behavior: "smooth",
      });

      return;
    }

    /*
      If we are on Privacy Policy,
      Terms of Service, or another page,
      go back to Home and target the section.
    */
    window.location.href = `/#${target}`;
  };

  /* =====================================================
     LOGO → HOME
  ===================================================== */
  const handleLogoClick = (e) => {
    e.preventDefault();

    setIsMenuOpen(false);

    /*
      Always take the user to the landing page.
    */
    if (window.location.pathname !== "/") {
      window.location.href = "/";
      return;
    }

    /*
      If already on Home, smoothly go to top.
    */
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =====================================================
     OPEN SIGN IN
  ===================================================== */
  const openSignIn = () => {
    setIsMenuOpen(false);
    setAuthMode("signin");
    setIsAuthOpen(true);
    setShowPassword(false);
  };

  /* =====================================================
     OPEN SIGN UP
  ===================================================== */
  const openSignUp = () => {
    setAuthMode("signup");
    setShowPassword(false);
    setAgreeTerms(false);
  };

  /* =====================================================
     NAVIGATION ITEMS
  ===================================================== */
  const menuItems = [
    {
      name: "Features",
      target: "features",
      icon: Sparkles,
    },
    {
      name: "How It Works",
      target: "how-it-works",
      icon: Workflow,
    },
    {
      name: "Use Cases",
      target: "use-cases",
      icon: BriefcaseBusiness,
    },
    {
      name: "Pricing",
      target: "pricing",
      icon: BadgeDollarSign,
    },
    {
      name: "VS Speechify",
      target: "comparison",
      icon: Mic2,
    },
    {
      name: "Blog",
      target: "blog",
      icon: FileText,
    },
  ];

  const isSignUp = authMode === "signup";

  return (
    <>
      {/* =====================================================
          NAVBAR
      ===================================================== */}
      <nav className="sticky top-0 z-30 w-full border-b border-gray-100 bg-white">
        <div className="mx-auto flex h-[60px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LOGO */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex cursor-pointer items-center gap-2"
          >
            <img
              src="/VoiceTech-icon.svg"
              alt="VoiceTech"
              className="h-10 w-10 object-contain"
            />

            <span className="text-[20px] font-bold tracking-tight text-gray-900">
              VoiceTech
            </span>
          </a>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}
          <div className="hidden items-center gap-1 rounded-full border border-gray-200 bg-white px-2 py-1.5 shadow-sm lg:flex">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={`/#${item.target}`}
                  onClick={(e) =>
                    handleScroll(e, item.target)
                  }
                  className="
                    flex cursor-pointer items-center gap-2
                    rounded-full px-3.5 py-1.5
                    text-sm font-medium text-gray-700
                    transition-all duration-200
                    hover:bg-gray-100
                    hover:text-gray-900
                  "
                >
                  <Icon size={16} strokeWidth={2} />

                  <span>{item.name}</span>
                </a>
              );
            })}
          </div>

          {/* =================================================
              DESKTOP SIGN IN
          ================================================= */}
          <button
            type="button"
            onClick={openSignIn}
            className="
              hidden cursor-pointer items-center gap-2
              rounded-full bg-blue-600
              px-5 py-2
              text-sm font-semibold text-white
              transition-all duration-200
              hover:bg-blue-700
              active:scale-95
              lg:flex
            "
          >
            <LogIn size={16} strokeWidth={2.2} />

            <span>Sign In</span>
          </button>

          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="
              flex h-10 w-10 cursor-pointer
              items-center justify-center
              rounded-lg text-gray-800
              transition hover:bg-gray-100
              lg:!hidden
            "
            aria-label="Open menu"
          >
            <Menu size={26} strokeWidth={2} />
          </button>
        </div>
      </nav>

      {/* =====================================================
          MOBILE OVERLAY
      ===================================================== */}
      <div
        onClick={() => setIsMenuOpen(false)}
        className={`
          fixed inset-0 z-40
          bg-black/40
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
          MOBILE SIDEBAR
      ===================================================== */}
      <aside
        style={{
          transform: isMenuOpen
            ? "translateX(0)"
            : "translateX(-100%)",
        }}
        className="
          fixed left-0 top-0 z-50
          flex h-dvh h-screen w-[280px]
          flex-col
          bg-white
          shadow-2xl
          transition-transform duration-300 ease-in-out
          lg:!hidden
        "
      >
        {/* MOBILE HEADER */}
        <div className="flex h-[60px] shrink-0 items-center justify-between border-b border-gray-100 px-5">

          {/* MOBILE LOGO */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex cursor-pointer items-center gap-2"
          >
            <img
              src="/VoiceTech-icon.svg"
              alt="VoiceTech"
              className="h-9 w-9 object-contain"
            />

            <span className="text-lg font-bold text-gray-900">
              VoiceTech
            </span>
          </a>

          {/* CLOSE */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(false)}
            className="
              flex h-9 w-9 cursor-pointer
              items-center justify-center
              rounded-lg text-gray-700
              transition hover:bg-gray-100
            "
            aria-label="Close menu"
          >
            <X size={23} strokeWidth={2} />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex-1 overflow-y-auto px-4 py-4">
          <div className="flex flex-col gap-1">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.name}
                  href={`/#${item.target}`}
                  onClick={(e) =>
                    handleScroll(e, item.target)
                  }
                  className="
                    flex cursor-pointer
                    items-center gap-3
                    rounded-xl px-4 py-3
                    text-[15px] font-medium text-gray-700
                    transition-all duration-200
                    hover:bg-gray-100
                    hover:text-blue-600
                  "
                >
                  <Icon size={18} strokeWidth={2} />

                  <span>{item.name}</span>
                </a>
              );
            })}

            {/* MOBILE SIGN IN */}
            <div className="mt-3 border-t border-gray-100 px-1 pt-3">
              <button
                type="button"
                onClick={openSignIn}
                className="
                  flex w-full cursor-pointer
                  items-center justify-center gap-2
                  rounded-xl bg-blue-600
                  px-4 py-3
                  text-sm font-semibold text-white
                  shadow-sm
                  transition-all duration-200
                  hover:bg-blue-700
                  active:scale-[0.98]
                "
              >
                <LogIn size={17} strokeWidth={2.2} />

                <span>Sign Up / Sign In</span>
              </button>
            </div>
          </div>
        </div>
      </aside>

      {/* =====================================================
          SIGN IN / SIGN UP POPUP
      ===================================================== */}
      {isAuthOpen && (
        <div
          className="
            fixed inset-0 z-[9999]
            flex items-center justify-center
            overflow-y-auto
            bg-black/60
            p-4
            sm:p-6
          "
          onClick={() => setIsAuthOpen(false)}
        >
          {/* POPUP CARD */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              my-auto
              w-full
              max-w-[400px]
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-2xl
            "
          >
            {/* CLOSE */}
            <button
              type="button"
              onClick={() => setIsAuthOpen(false)}
              className="
                absolute right-3 top-3 z-10
                flex h-8 w-8
                cursor-pointer
                items-center justify-center
                rounded-full
                text-gray-500
                transition-all duration-200
                hover:bg-gray-100
                hover:text-gray-900
                active:scale-95
              "
              aria-label="Close popup"
            >
              <X size={18} strokeWidth={2} />
            </button>

            {/* FORM AREA */}
            <div className="px-7 pb-7 pt-8 sm:px-9 sm:pb-8 sm:pt-9">

              {/* LOGO */}
              <div className="flex justify-center">
                <img
                  src="/VoiceTech-icon.svg"
                  alt="VoiceTech"
                  className="h-12 w-12 object-contain"
                />
              </div>

              {/* TITLE */}
              <h2 className="mt-4 text-center text-[20px] font-bold text-gray-900 sm:text-[22px]">
                {isSignUp
                  ? "Create your VoiceTech account"
                  : "Sign in to VoiceTech"}
              </h2>

              <p className="mt-1 text-center text-[13px] leading-5 text-gray-500">
                {isSignUp
                  ? "Start free. If you choose Pro, secure checkout opens next."
                  : "Welcome back! Please sign in to continue"}
              </p>

              {/* GOOGLE */}
              <button
                type="button"
                className="
                  mt-6
                  flex h-10 w-full
                  cursor-pointer
                  items-center justify-center gap-2
                  rounded-lg
                  border border-gray-200
                  bg-white
                  text-sm text-gray-600
                  transition-all duration-200
                  hover:border-gray-300
                  hover:bg-gray-50
                  active:scale-[0.99]
                "
              >
                <span className="text-[17px] font-bold text-[#4285F4]">
                  G
                </span>

                <span>Continue with Google</span>
              </button>

              {/* OR */}
              <div className="my-5 flex items-center gap-4">
                <div className="h-px flex-1 bg-gray-200" />

                <span className="text-xs text-gray-400">
                  or
                </span>

                <div className="h-px flex-1 bg-gray-200" />
              </div>

              {/* EMAIL */}
              <div>
                <label className="mb-1.5 block text-[13px] font-medium text-gray-800">
                  Email address
                </label>

                <input
                  type="email"
                  placeholder={
                    isSignUp
                      ? "Enter your email"
                      : "Enter your email address"
                  }
                  className="
                    h-10 w-full
                    rounded-lg
                    border border-gray-200
                    bg-white
                    px-3
                    text-sm text-gray-900
                    outline-none
                    transition
                    placeholder:text-gray-400
                    focus:border-blue-500
                    focus:ring-2
                    focus:ring-blue-100
                  "
                />
              </div>

              {/* PASSWORD */}
              {isSignUp && (
                <div className="mt-4">
                  <label className="mb-1.5 block text-[13px] font-medium text-gray-800">
                    Password
                  </label>

                  <div className="relative">
                    <input
                      type={
                        showPassword
                          ? "text"
                          : "password"
                      }
                      placeholder="Enter your password"
                      className="
                        h-10 w-full
                        rounded-lg
                        border border-gray-200
                        bg-white
                        px-3 pr-10
                        text-sm text-gray-900
                        outline-none
                        transition
                        placeholder:text-gray-400
                        focus:border-blue-500
                        focus:ring-2
                        focus:ring-blue-100
                      "
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowPassword(!showPassword)
                      }
                      className="
                        absolute right-3 top-1/2
                        -translate-y-1/2
                        cursor-pointer
                        text-gray-400
                        transition
                        hover:text-gray-700
                      "
                      aria-label="Toggle password"
                    >
                      {showPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>
              )}

              {/* TERMS */}
              {isSignUp && (
                <label className="mt-4 flex cursor-pointer items-start gap-2">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) =>
                      setAgreeTerms(e.target.checked)
                    }
                    className="
                      mt-0.5 h-4 w-4
                      cursor-pointer
                      rounded
                      border-gray-300
                      accent-blue-600
                    "
                  />

                  <span className="text-[12px] leading-5 text-gray-600">
                    I agree to the{" "}
                    <span className="cursor-pointer underline">
                      Terms of Service
                    </span>{" "}
                    and{" "}
                    <span className="cursor-pointer underline">
                      Privacy Policy
                    </span>
                  </span>
                </label>
              )}

              {/* CONTINUE */}
              <button
                type="button"
                disabled={isSignUp && !agreeTerms}
                className={`
                  mt-5
                  flex h-10 w-full
                  items-center justify-center
                  rounded-lg
                  text-sm font-semibold text-white
                  shadow-sm
                  transition-all duration-200
                  ${
                    isSignUp && !agreeTerms
                      ? "cursor-not-allowed bg-blue-300"
                      : "cursor-pointer bg-blue-600 hover:bg-blue-700 active:scale-[0.98]"
                  }
                `}
              >
                Continue

                <span className="ml-2 text-xs">
                  ▸
                </span>
              </button>

              {/* PASSKEY */}
              {!isSignUp && (
                <button
                  type="button"
                  className="
                    mt-5
                    w-full
                    cursor-pointer
                    text-center
                    text-[13px]
                    font-medium
                    text-blue-600
                    transition
                    hover:text-blue-700
                  "
                >
                  Use passkey instead
                </button>
              )}
            </div>

            {/* POPUP FOOTER */}
            <div className="border-t border-gray-200 bg-gray-50 px-6 py-3.5 text-center">
              {isSignUp ? (
                <p className="text-[13px] text-gray-500">
                  Already have an account?{" "}

                  <button
                    type="button"
                    onClick={() => {
                      setAuthMode("signin");
                      setShowPassword(false);
                    }}
                    className="
                      cursor-pointer
                      font-semibold
                      text-blue-600
                      transition
                      hover:text-blue-700
                    "
                  >
                    Sign in
                  </button>
                </p>
              ) : (
                <p className="text-[13px] text-gray-500">
                  Don’t have an account?{" "}

                  <button
                    type="button"
                    onClick={openSignUp}
                    className="
                      cursor-pointer
                      font-semibold
                      text-blue-600
                      transition
                      hover:text-blue-700
                    "
                  >
                    Sign up
                  </button>
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;