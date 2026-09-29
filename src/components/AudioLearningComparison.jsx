import {
  BookOpen,
  Clock,
  Search,
  Puzzle,
  Headphones,
  Zap,
  MessageCircle,
  Folder,
} from "lucide-react";

const traditionalPoints = [
  [BookOpen, "Long chapters demand sustained screen time"],
  [Clock, "Dense sections make it easy to lose your place"],
  [Search, "Questions send you searching across tabs"],
  [Puzzle, "Audio, notes, and practice live in separate tools"],
];

const audioPoints = [
  [Headphones, "Listen to the original text during commutes or chores"],
  [Zap, "Start the first section before the full MP3 is ready"],
  [MessageCircle, "Ask questions while the selected PDF stays in context"],
  [Folder, "Build quizzes, flashcards, and slides from the same document"],
];

const benefits = [
  {
    title: <span className="text-[#159FB0]">First</span>,
    subtitle: "Section starts early",
  },
  {
    title: (
      <>
        <span className="text-[#0878D1]">One</span>{" "}
        <span className="text-[#22AA78]">PDF</span>
      </>
    ),
    subtitle: "Audio + study tools",
  },
  {
    title: (
      <span className="bg-gradient-to-r from-[#0878D1] to-[#22AA78] bg-clip-text text-transparent">
        Resume
      </span>
    ),
    subtitle: "Across sessions",
  },
];

function PointRow({ icon: Icon, children, tone = "muted" }) {
  return (
    <li className="flex items-start gap-2.5">
      <span
        className={`
          mt-[1px] w-6 shrink-0
          ${tone === "muted" ? "text-[#8A94A6]" : "text-[#0878D1]"}
        `}
      >
        <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
      </span>

      <span
        className={`
          text-[16px] font-normal leading-[1.4]
          ${tone === "muted" ? "text-[#647084]" : "text-[#101828]"}
        `}
      >
        {children}
      </span>
    </li>
  );
}

function CardBadge({ children, variant }) {
  const tones = {
    old: "bg-[#FDE1E1] text-[#FF4B4B] w-fit",
    new: "bg-gradient-to-r from-[#0878D1] to-[#22B573] text-white w-fit",
  };

  return (
    <span
      className={`
        inline-block rounded-full
        px-2.5 py-[5px]
        text-[13px] font-semibold
        ${tones[variant]}
      `}
    >
      {children}
    </span>
  );
}

export default function AudioLearningComparison() {
  return (
    <section
      aria-labelledby="audio-learning-comparison-title"
      className="
        w-full bg-white
        px-5 py-14
        font-sans text-[#101828]
        sm:px-6 lg:px-8 lg:py-16
      "
    >
      <div className="mx-auto w-full max-w-[1240px]">

        {/* =====================================================
            HEADING + SUBTITLE
        ===================================================== */}
        <div className="text-center">
          <h2
            id="audio-learning-comparison-title"
            className="
              text-[26px] font-bold leading-[1.15]
              tracking-[-0.6px]
              sm:text-[30px]
              lg:text-[36px]
            "
          >
            <span className="text-[#101828]">From textbook</span>{" "}
            <span className="text-[#FF3B3B]">overload</span>{" "}
            <span className="text-[#101828]">to audio</span>{" "}
            <span className="text-[#0878D1]">learning</span>
          </h2>

          <p
            className="
              mt-3 text-[16px] font-normal leading-[1.4]
              text-[#647084]
              sm:mt-4 sm:text-[18px]
            "
          >
            VoiceBrief transforms how you study
          </p>
        </div>

        {/* =====================================================
            COMPARISON CARDS
        ===================================================== */}
        <div
          className="
            mx-auto mt-10 grid w-full max-w-[984px]
            grid-cols-1 gap-6
            md:grid-cols-2 lg:gap-7
          "
        >

          {/* ---------- LEFT CARD ---------- */}
          <div
            className="
              flex min-h-[400px] flex-col
              rounded-[22px] border-[2px] border-[#FFC5C5]
              bg-[#F7F7F9]
              p-6 sm:p-7 lg:p-8
            "
          >
            <CardBadge variant="old">Old Way</CardBadge>

            <h3
              className="
                mt-[18px] text-[20px] font-bold leading-[1.2]
                tracking-[-0.3px] text-[#101828]
              "
            >
              Traditional Studying
            </h3>

            <ul className="mt-6 flex flex-col gap-4">
              {traditionalPoints.map(([Icon, label]) => (
                <PointRow key={label} icon={Icon} tone="muted">
                  {label}
                </PointRow>
              ))}
            </ul>
          </div>

          {/* ---------- RIGHT CARD ---------- */}
          <div
            className="
              flex min-h-[400px] flex-col
              rounded-[22px] border-[2px] border-[#A9E8BF]
              bg-white
              p-6 sm:p-7 lg:p-8
              shadow-[0_8px_20px_rgba(0,0,0,0.08)]
            "
          >
            <CardBadge variant="new">VoiceBrief</CardBadge>

            <h3
              className="
                mt-[18px] text-[20px] font-bold leading-[1.2]
                tracking-[-0.3px] text-[#101828]
              "
            >
              Audio Learning
            </h3>

            <ul className="mt-6 flex flex-col gap-4">
              {audioPoints.map(([Icon, label]) => (
                <PointRow key={label} icon={Icon} tone="dark">
                  {label}
                </PointRow>
              ))}
            </ul>
          </div>

        </div>

        {/* =====================================================
            BOTTOM BENEFITS
        ===================================================== */}
        <ul
          className="
            mx-auto mt-14 grid w-full max-w-[984px]
            grid-cols-1 gap-10
            sm:grid-cols-3 sm:gap-6
            lg:mt-16
          "
        >
          {benefits.map(({ title, subtitle }) => (
            <li key={subtitle} className="text-center">
              <p
                className="
                  text-[30px] font-bold leading-[1.1]
                  tracking-[-1px]
                  sm:text-[34px]
                  lg:text-[37px]
                "
              >
                {title}
              </p>

              <p
                className="
                  mt-2 text-[13px] font-normal leading-[1.4]
                  text-[#7A8496]
                  sm:text-[14px]
                "
              >
                {subtitle}
              </p>
            </li>
          ))}
        </ul>

      </div>
    </section>
  );
}
