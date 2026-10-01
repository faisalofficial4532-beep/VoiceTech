import { useEffect, useState } from "react";
import { X, GraduationCap } from "lucide-react";

export default function AutoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  const handleStartLearning = () => {
    setIsOpen(false);

    const element = document.getElementById("pricing");

    if (element) {
      const navbarHeight = 60;

      window.scrollTo({
        top:
          element.getBoundingClientRect().top +
          window.scrollY -
          navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-[3px] sm:px-6 sm:py-8">

      {/* POPUP */}
      <div
        className="
          relative
          flex
          w-full
          max-w-[390px]
          flex-col
          rounded-2xl
          bg-white
          px-5
          py-6
          shadow-2xl

          sm:max-w-[420px]
          sm:rounded-[20px]
          sm:px-7
          sm:py-7

          md:max-w-[440px]
          md:px-8
          md:py-8
        "
      >

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          aria-label="Close popup"
          className="
            absolute
            right-3
            top-3
            flex
            h-8
            w-8
            cursor-pointer
            items-center
            justify-center
            rounded-full
            text-gray-400
            transition-all
            duration-200
            hover:bg-gray-100
            hover:text-gray-700
          "
        >
          <X size={18} />
        </button>

        {/* CONTENT */}
        <div className="flex flex-col items-center text-center">

          {/* ICON */}
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-100 sm:h-12 sm:w-12">
            <GraduationCap
              size={24}
              className="text-purple-600 sm:h-[25px] sm:w-[25px]"
            />
          </div>

          {/* TITLE */}
          <h2
            className="
              mt-4
              max-w-[340px]
              text-[19px]
              font-bold
              leading-[1.3]
              text-gray-900

              sm:mt-5
              sm:text-[21px]
            "
          >
            Your classmates are already
            <br />
            studying smarter
          </h2>

          {/* DESCRIPTION */}
          <p
            className="
              mt-3
              max-w-[330px]
              text-[13px]
              leading-5
              text-gray-500

              sm:text-[14px]
              sm:leading-[21px]
            "
          >
            Turn a reading-heavy chapter into audio you can
            review during your commute, at your desk, or while
            relaxing.
          </p>

          {/* FEATURES */}
          <div
            className="
              mt-4
              w-full
              max-w-[335px]
              space-y-2
              text-left
              text-[12px]
              leading-[18px]
              text-gray-600

              sm:mt-5
              sm:text-[13px]
              sm:leading-5
            "
          >
            <p className="flex gap-2">
              <span className="shrink-0 font-bold text-green-500">
                ✓
              </span>
              <span>
                Students upgrade every semester
              </span>
            </p>

            <p className="flex gap-2">
              <span className="shrink-0 font-bold text-green-500">
                ✓
              </span>
              <span>
                Cancel anytime — access continues through the
                current billing period
              </span>
            </p>

            <p className="flex gap-2">
              <span className="shrink-0 font-bold text-green-500">
                ✓
              </span>
              <span>
                Cancel anytime — no contracts, no fees
              </span>
            </p>

            <p className="flex gap-2">
              <span className="shrink-0 font-bold text-green-500">
                ✓
              </span>
              <span>
                Pro: $9.99/month for full audio, downloads,
                Voice Chat, quizzes, and AI summaries
              </span>
            </p>
          </div>

          {/* CTA */}
          <button
            type="button"
            onClick={handleStartLearning}
            className="
              mt-5
              w-full
              cursor-pointer
              rounded-full
              bg-gradient-to-r
              from-blue-600
              to-indigo-600
              px-5
              py-3
              text-[13px]
              font-bold
              text-white
              shadow-md
              transition-all
              duration-200
              hover:-translate-y-0.5
              hover:shadow-lg

              sm:mt-6
              sm:py-3.5
              sm:text-[14px]
            "
          >
            Start Learning Now →
          </button>

          {/* CLOSE TEXT */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="
              mt-3
              cursor-pointer
              text-[11px]
              text-gray-400
              transition
              hover:text-gray-600

              sm:mt-4
              sm:text-[12px]
            "
          >
            I'm not ready yet
          </button>

        </div>
      </div>
    </div>
  );
}