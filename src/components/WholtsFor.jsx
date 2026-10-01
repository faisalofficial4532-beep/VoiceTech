import { motion } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  BookOpen,
  Check,
} from "lucide-react";

const audienceCards = [
  {
    title: "Students",
    icon: GraduationCap,
    iconColor: "#087bea",
    iconBg: "#e8f2ff",
    description:
      "Convert textbooks and lecture notes to audio. Continue studying while commuting, exercising, or doing chores.",
    points: [
      "Textbook to audio conversion",
      "Lecture notes reader",
      "Exam prep on-the-go",
    ],
    link: "Best TTS for Students →",
  },
  {
    title: "Professionals",
    icon: BriefcaseBusiness,
    iconColor: "#35c95b",
    iconBg: "#eaf9ee",
    description:
      "Stay current with industry reports, whitepapers, and research papers. Learn during your commute instead of wasting time.",
    points: [
      "Research paper summaries",
      "Report briefings",
      "Professional development",
    ],
    link: "Learn While Commuting →",
  },
  {
    title: "Lifelong Learners",
    icon: BookOpen,
    iconColor: "#f39100",
    iconBg: "#fff4e6",
    description:
      "Never stop learning. Turn any PDF into an audiobook—self-help, history, science, or anything that interests you.",
    points: [
      "Any PDF to audiobook",
      "AI-powered summaries",
      "Interactive Q&A",
    ],
    link: "Convert PDF to Audiobook →",
  },
];

const audienceReveal = {
  hidden: {
    opacity: 0,
    y: 30,
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

export default function WhoItsFor() {
  return (
    <section className="relative w-full overflow-hidden bg-[#f7f7f9] px-5 py-20 sm:px-8 sm:py-24 lg:px-[5%] lg:py-28">

      {/* ================= HEADER ================= */}

      <motion.div
        variants={audienceReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-[900px] text-center"
      >
        <p className="text-[15px] font-medium text-[#626262] sm:text-[16px]">
          Who It's For
        </p>

        <h2
          className="
            mt-4
            text-[38px]
            font-semibold
            leading-[1.05]
            tracking-[-1.8px]
            text-[#171717]
            sm:text-[48px]
            lg:text-[52px]
          "
        >
          Built for learners like you.
        </h2>

        <p
          className="
            mx-auto
            mt-6
            max-w-[760px]
            text-[17px]
            leading-[1.5]
            text-[#687080]
            sm:text-[19px]
          "
        >
          Whether you're a student, professional, or lifelong learner—VoiceBrief
          transforms how you consume information.
        </p>
      </motion.div>

      {/* ================= CARDS ================= */}

      <div
        className="
          mx-auto
          mt-14
          grid
          max-w-[1110px]
          grid-cols-1
          gap-5
          sm:mt-16
          md:grid-cols-3
          lg:mt-[64px]
          lg:gap-6
        "
      >
        {audienceCards.map((card, index) => {
          const Icon = card.icon;

          return (
            <motion.div
              key={card.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.65,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
              whileHover={{
                y: -5,
                transition: {
                  duration: 0.2,
                },
              }}
              className="group relative flex min-h-[450px] flex-col overflow-hidden rounded-[26px] bg-white px-8 py-8 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:min-h-[455px] lg:px-8 lg:py-8"
            >

              {/* ================= SOFT HOVER GLOW ================= */}

              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-[120px]
                  left-[5%]
                  h-[300px]
                  w-[340px]
                  rounded-full
                  opacity-0
                  blur-[100px]
                  transition-opacity
                  duration-700
                  group-hover:opacity-100
                "
                style={{
                  background: `radial-gradient(
                    circle,
                    ${card.iconColor}22 0%,
                    ${card.iconColor}12 25%,
                    ${card.iconColor}07 45%,
                    ${card.iconColor}02 62%,
                    transparent 80%
                  )`,
                }}
              />

              {/* ================= ICON ================= */}

              <div
                className="
                  relative
                  z-10
                  flex
                  h-[56px]
                  w-[56px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[16px]
                "
                style={{
                  backgroundColor: card.iconBg,
                }}
              >
                <Icon
                  size={29}
                  strokeWidth={2}
                  style={{
                    color: card.iconColor,
                  }}
                />
              </div>

              {/* ================= TITLE ================= */}

              <h3
                className="
                  relative
                  z-10
                  mt-7
                  text-[24px]
                  font-semibold
                  leading-[1.15]
                  tracking-[-0.5px]
                  text-[#171717]
                "
              >
                {card.title}
              </h3>

              {/* ================= DESCRIPTION ================= */}

              <p
                className="
                  relative
                  z-10
                  mt-4
                  text-[16px]
                  leading-[1.5]
                  text-[#73737a]
                "
              >
                {card.description}
              </p>

              {/* ================= POINTS ================= */}

              <div className="relative z-10 mt-auto pt-7">

                <div className="space-y-2.5">
                  {card.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-2.5"
                    >
                      <Check
                        size={15}
                        strokeWidth={2}
                        style={{
                          color: card.iconColor,
                        }}
                      />

                      <span className="text-[14px] leading-[1.4] text-[#353535]">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>

                {/* ================= LINK ================= */}

                <a
                  href="#"
                  className="
                    mt-6
                    inline-block
                    text-[14px]
                    font-medium
                    transition-opacity
                    duration-200
                    hover:opacity-70
                  "
                  style={{
                    color: card.iconColor,
                  }}
                >
                  {card.link}
                </a>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}