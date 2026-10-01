import { motion } from "framer-motion";
import {
  BookOpen,
  Headphones,
  MessageCircle,
  GraduationCap,
} from "lucide-react";

const comparisons = [
  {
    name: "NotebookLM",
    icon: BookOpen,
    iconColor: "#70747b",
    iconBg: "#f3f3f5",
    subtitle: "Research and source synthesis",
    bullets: [
      "Source-grounded answers and Audio Overviews",
      "Strong when synthesis is the main job",
    ],
    bottom: "VoiceBrief adds a full-source audiobook and downloadable MP3",
    bottomColor: "#35c95b",
  },
  {
    name: "Speechify",
    icon: Headphones,
    iconColor: "#70747b",
    iconBg: "#f3f3f5",
    subtitle: "Polished cross-platform reading",
    bullets: [
      "Broad format support and a large voice catalog",
      "Strong for listening across many content types",
    ],
    bottom: "VoiceBrief keeps PDF teaching and practice in one workflow",
    bottomColor: "#35c95b",
  },
  {
    name: "NaturalReader",
    icon: MessageCircle,
    iconColor: "#70747b",
    iconBg: "#f3f3f5",
    subtitle: "Straightforward text-to-speech",
    bullets: [
      "Simple read-aloud workflows",
      "Strong when playback is the primary need",
    ],
    bottom: "VoiceBrief adds document-centered teaching and practice",
    bottomColor: "#35c95b",
  },
  {
    name: "VoiceBrief",
    icon: GraduationCap,
    iconColor: "#ffffff",
    iconBg: "linear-gradient(135deg, #087bea 0%, #2bc95b 100%)",
    subtitle: "Interactive AI Learning",
    bullets: [
      "Original-text audiobook",
      "Ask PDF questions",
      "AI explains concepts",
    ],
    featured: true,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Comparison() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f9] px-5 py-20 sm:px-8 sm:py-24 lg:px-[5%] lg:py-28">

      {/* ================= HEADER ================= */}

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mx-auto max-w-[950px] text-center"
      >
        <h2
          className="
            text-[38px]
            font-semibold
            leading-[1.08]
            tracking-[-1.8px]
            text-[#151515]
            sm:text-[48px]
            lg:text-[52px]
          "
        >
          Different tools.{" "}
          <span className="font-semibold italic text-[#087bea]">
            Different strengths.
          </span>
        </h2>

        <p
          className="
            mx-auto
            mt-5
            max-w-[820px]
            text-[16px]
            leading-[1.55]
            text-[#69717d]
            sm:text-[18px]
          "
        >
          Speechify is strong for broad text-to-speech. NotebookLM is strong
          for research synthesis.{" "}
          <strong className="font-semibold text-[#151515]">
            VoiceBrief is built for turning one PDF into an audiobook, a
            professor, and practice material without losing the source.
          </strong>
        </p>
      </motion.div>

      {/* ================= COMPARISON CARDS ================= */}

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="
          mx-auto
          mt-14
          grid
          max-w-[1200px]
          grid-cols-1
          gap-4
          sm:mt-16
          md:grid-cols-2
          lg:grid-cols-4
          lg:gap-4
        "
      >
        {comparisons.map((item) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.name}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                },
              }}
              className={`
                group
                relative
                flex
                min-h-[330px]
                flex-col
                overflow-hidden
                rounded-[15px]
                bg-white
                px-6
                py-6
                ${
                  item.featured
                    ? "border-2 border-[#087bea]"
                    : "border border-[#dedfe3]"
                }
              `}
            >

              {/* ================= HOVER GLOW ================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-[110px]
                  left-1/2
                  h-[260px]
                  w-[300px]
                  -translate-x-1/2
                  rounded-full
                  opacity-0
                  blur-[90px]
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
                style={{
                  background: item.featured
                    ? "radial-gradient(circle, rgba(8,123,234,0.12) 0%, rgba(43,201,91,0.07) 35%, transparent 75%)"
                    : "radial-gradient(circle, rgba(8,123,234,0.08) 0%, rgba(8,123,234,0.035) 40%, transparent 75%)",
                }}
              />

              {/* ================= FEATURED BADGE ================= */}

              {item.featured && (
                <div
                  className="
                    absolute
                    right-4
                    top-4
                    rounded-full
                    bg-[#087bea]
                    px-3
                    py-1.5
                    text-[12px]
                    font-semibold
                    tracking-[-0.1px]
                    text-white
                  "
                >
                  PDF-FIRST
                </div>
              )}

              {/* ================= ICON ================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-[48px]
                  w-[48px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[12px]
                "
                style={{
                  background: item.iconBg,
                }}
              >
                <Icon
                  size={25}
                  strokeWidth={2}
                  style={{
                    color: item.iconColor,
                  }}
                />
              </div>

              {/* ================= NAME ================= */}

              <h3 className="relative z-10 mt-5 text-[16px] font-semibold text-[#171717] sm:text-[17px]">
                {item.name}
              </h3>

              {/* ================= SUBTITLE ================= */}

              <p
                className={`
                  relative
                  z-10
                  mt-1
                  text-[14px]
                  leading-[1.45]
                  ${
                    item.featured
                      ? "text-[#087bea]"
                      : "text-[#6d7480]"
                  }
                `}
              >
                {item.subtitle}
              </p>

              {/* ================= BULLETS ================= */}

              <div className="relative z-10 mt-5 space-y-3">
                {item.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="flex items-start gap-2"
                  >
                    <span
                      className={`
                        mt-[2px]
                        shrink-0
                        text-[14px]
                        ${
                          item.featured
                            ? "text-[#35c95b]"
                            : "text-[#087bea]"
                        }
                      `}
                    >
                      {item.featured ? "✓" : "•"}
                    </span>

                    <span className="text-[14px] leading-[1.45] text-[#687080]">
                      {bullet}
                    </span>
                  </div>
                ))}
              </div>

              {/* ================= BOTTOM TEXT ================= */}

              {!item.featured && (
                <div className="relative z-10 mt-auto pt-5">
                  <div className="flex items-start gap-2">
                    <span
                      className="mt-[1px] text-[15px]"
                      style={{
                        color: item.bottomColor,
                      }}
                    >
                      →
                    </span>

                    <p className="text-[14px] leading-[1.45] text-[#687080]">
                      {item.bottom}
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}