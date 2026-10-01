export default function Footer() {
  const productLinks = [
    ["Features", "features"],
    ["How It Works", "features"],
    ["Get Started", "start-listening"],
    ["Claude Integration", "features"],
  ];

  const solutionLinks = [
    ["PDF to Audio & MP3", "features"],
    ["Webpage to Audio", "features"],
    ["Word to Audio", "features"],
    ["EPUB to Audio", "features"],
    ["PDF to Audiobook", "features"],
    ["For Students", "explore"],
    ["For Researchers", "explore"],
    ["Listen to Textbooks", "explore"],
    ["vs Speechify", "comparison"],
  ];

  const resourceLinks = [
    ["Blog", "blog"],
    ["Editorial Policy", "blog"],
    ["Product Facts & Review Kit", "blog"],
    ["Accessibility", "features"],
    ["Accessible PDF Checklist", "features"],
    ["PDF Accessibility Benchmark", "features"],
    ["Classroom Accessibility Kit", "explore"],
    ["Education Cohort Pilots", "explore"],
    ["Pricing", "start-listening"],
    ["Dashboard", "start-listening"],
  ];

  const handleScroll = (e, target) => {
    e.preventDefault();

    const element = document.getElementById(target);

    if (!element) return;

    const navbarHeight = 60;

    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
  };

  return (
    <footer className="w-full bg-[#121c31] text-white">
      <div className="mx-auto max-w-[1080px] px-6 py-12">

        {/* TOP */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="mb-5 flex w-fit cursor-pointer items-center gap-3"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#4285f4] to-[#36cbd5] text-white">
                ▶
              </div>

              <span className="text-[21px] font-bold text-[#73a5ff]">
                VoiceTech
              </span>
            </a>

            <p className="max-w-[245px] text-[15px] leading-6 text-[#d5dceb]">
              Transform your PDFs into engaging audio lessons. Learn smarter,
              not harder with AI-powered study tools.
            </p>
          </div>

          {/* PRODUCT */}
          <div>
            <h3 className="mb-5 text-[16px] font-bold">
              Product
            </h3>

            <div className="space-y-3">
              {productLinks.map(([label, target]) => (
                <a
                  key={label}
                  href={`#${target}`}
                  onClick={(e) => handleScroll(e, target)}
                  className="flex cursor-pointer items-center gap-2 text-[15px] text-[#d5dceb] transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  <span>›</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="mb-5 text-[16px] font-bold">
              Solutions
            </h3>

            <div className="space-y-3">
              {solutionLinks.map(([label, target]) => (
                <a
                  key={label}
                  href={`#${target}`}
                  onClick={(e) => handleScroll(e, target)}
                  className="flex cursor-pointer items-center gap-2 text-[15px] text-[#d5dceb] transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  <span>›</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* RESOURCES */}
          <div>
            <h3 className="mb-5 text-[16px] font-bold">
              Resources
            </h3>

            <div className="space-y-3">
              {resourceLinks.map(([label, target]) => (
                <a
                  key={label}
                  href={`#${target}`}
                  onClick={(e) => handleScroll(e, target)}
                  className="flex cursor-pointer items-center gap-2 text-[15px] text-[#d5dceb] transition-all duration-200 hover:translate-x-1 hover:text-white"
                >
                  <span>›</span>
                  {label}
                </a>
              ))}
            </div>

            {/* FOLLOW US */}
            <p className="mb-3 mt-5 text-[15px] text-[#d5dceb]">
              Follow us
            </p>

            <a
              href="#"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#1e2a42] text-white transition-all duration-200 hover:scale-105 hover:bg-[#2d3c59]"
            >
              𝕏
            </a>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-10 h-px bg-[#354057]" />

        {/* BOTTOM */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

          {/* COPYRIGHT */}
          <div>
            <p className="text-[14px] text-[#91a7ce]">
              © 2026 VoiceBrief. Crafted with{" "}
              <span className="text-red-400">♥</span>{" "}
              for learners worldwide.
            </p>

            {/* STARTUPS LAB */}
            <div className="mt-4 flex h-[66px] w-[198px] items-center gap-3 rounded-md bg-[#d9dce2] px-3 text-[#20283a]">
              <div className="flex h-10 w-10 items-center justify-center rounded bg-[#20283a] text-xl text-white">
                ◇
              </div>

              <div>
                <p className="text-[9px] font-bold">
                  FEATURED ON
                </p>

                <p className="text-[19px] font-bold">
                  Startups Lab
                </p>
              </div>
            </div>
          </div>

          {/* LEGAL */}
          <div className="flex gap-7 text-[14px] text-[#9aadd0]">
            <a
              href="/privacy-policy"
              className="cursor-pointer transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="/terms-of-service"
              className="cursor-pointer transition hover:text-white"
            >
              Terms of Service
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}