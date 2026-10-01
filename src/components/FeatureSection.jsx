import { motion } from "framer-motion";
import {
  Headphones,
  Brain,
  MessageCircle,
  Sparkles,
  Play,
  FileText,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    label: "Natural Voices",
    title: "Choose a listening voice.",
    description:
      "Preview the narration first because pronunciation can vary by document.",
    icon: Headphones,
    iconColor: "#1683df",
    iconBg: "#e8f1ff",
  },
  {
    label: "Smart Quizzes",
    title: "Test yourself.",
    description: "AI-generated questions with spaced repetition.",
    icon: Brain,
    iconColor: "#3cdb63",
    iconBg: "#e8f7ec",
  },
  {
    label: "Voice Chat",
    title: "Ask about the PDF.",
    description:
      "Talk to an AI tutor with the selected document kept in context.",
    icon: MessageCircle,
    iconColor: "#e99a12",
    iconBg: "#fff2df",
  },
  {
    label: "AI Summaries",
    title: "Key points. Fast.",
    description:
      "Review generated key points alongside the source document.",
    icon: Sparkles,
    iconColor: "#d92f68",
    iconBg: "#fdeaf1",
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Features() {
  return (
    <section className="w-full overflow-hidden bg-[#f9f9fb] px-5 py-20 sm:px-8 sm:py-24 lg:px-[5%] lg:py-28">

      {/* ================= HEADER ================= */}

      <motion.div
        variants={reveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-[850px] text-center"
      >
        <p className="mb-5 text-[16px] font-normal text-[#666] sm:text-[17px]">
          Features
        </p>

        <h2 className="text-[42px] font-semibold leading-[1.05] tracking-[-2px] text-[#171717] sm:text-[52px] lg:text-[60px]">
          Everything you need.
        </h2>

        <p className="mt-6 text-[18px] leading-[1.5] text-[#707070] sm:text-[20px]">
          A complete audio learning toolkit, beautifully simple.
        </p>
      </motion.div>

      {/* ================= FEATURE CONTENT ================= */}

      <div className="mx-auto mt-14 max-w-[1120px] sm:mt-16 lg:mt-20">

        {/* ========================================================= */}
        {/* MAIN DARK CARD */}
        {/* ========================================================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="
            relative
            min-h-[370px]
            overflow-hidden
            rounded-[30px]
            bg-[#202022]
            px-7 py-8
            sm:px-10 sm:py-10
            lg:min-h-[420px]
            lg:px-[72px]
            lg:py-[68px]
          "
        >

          {/* GREEN LIGHT */}

          <motion.div
            animate={{
              x: [0, 25, 0],
              y: [0, -15, 0],
              scale: [1, 1.12, 1],
              opacity: [0.65, 0.9, 0.65],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-[70px]
              -top-[80px]
              h-[340px]
              w-[340px]
              rounded-full
              blur-[100px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(55,255,190,0.30) 0%, rgba(55,255,190,0.18) 25%, rgba(55,255,190,0.08) 45%, rgba(55,255,190,0.025) 62%, transparent 80%)",
            }}
          />

          {/* ORANGE LIGHT */}

          <motion.div
            animate={{
              x: [0, -25, 0],
              y: [0, 18, 0],
              scale: [1, 1.15, 1],
              opacity: [0.6, 0.85, 0.6],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              -right-[70px]
              -bottom-[100px]
              h-[360px]
              w-[360px]
              rounded-full
              blur-[110px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(255,145,65,0.28) 0%, rgba(255,145,65,0.17) 24%, rgba(255,145,65,0.07) 45%, rgba(255,145,65,0.025) 62%, transparent 82%)",
            }}
          />

          {/* PURPLE LIGHT */}

          <motion.div
            animate={{
              x: [0, 20, 0],
              y: [0, -12, 0],
              scale: [1, 1.1, 1],
              opacity: [0.25, 0.45, 0.25],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              pointer-events-none
              absolute
              right-[20%]
              top-[5%]
              h-[320px]
              w-[320px]
              rounded-full
              blur-[120px]
            "
            style={{
              background:
                "radial-gradient(circle, rgba(125,105,255,0.18) 0%, rgba(125,105,255,0.09) 30%, rgba(125,105,255,0.03) 55%, transparent 80%)",
            }}
          />

          {/* DARK CARD CONTENT */}

          <div className="relative z-10 max-w-[700px]">

            <div className="inline-flex items-center gap-2 rounded-full bg-[#3a3a3d] px-4 py-2 text-[14px] font-medium text-[#ededed]">
              <span className="h-[8px] w-[8px] rounded-full bg-[#35dc69]" />
              Most Popular
            </div>

            <h3 className="mt-7 text-[36px] font-semibold leading-[1.05] tracking-[-1px] text-white sm:text-[43px] lg:text-[48px]">
              Like a personal tutor.
            </h3>

            <p className="mt-5 max-w-[680px] text-[17px] leading-[1.55] text-[#b8b8bd] sm:text-[19px]">
              AI transforms your content into engaging, lecture-style
              explanations. It's like having a professor break down complex
              topics just for you.
            </p>

            {/* AUDIO */}

            <div className="mt-9 flex items-center gap-4 sm:mt-10 sm:gap-5">

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="
                  flex
                  h-[58px]
                  w-[58px]
                  shrink-0
                  items-center
                  justify-center
                  rounded-[15px]
                  bg-[#3a3a3d]
                  text-white
                "
              >
                <Play
                  size={22}
                  fill="white"
                  strokeWidth={1.5}
                />
              </motion.button>

              <div className="w-full max-w-[410px]">
                <div className="h-[9px] w-full overflow-hidden rounded-full bg-[#56565a]">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: "40%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.4,
                      delay: 0.3,
                      ease: "easeOut",
                    }}
                    className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-[#1683df]
                      to-[#39dc64]
                    "
                  />
                </div>
              </div>

              <span className="hidden shrink-0 text-[16px] text-[#a5a5aa] sm:block">
                Hear sample
              </span>
            </div>
          </div>
        </motion.div>

        {/* ========================================================= */}
        {/* EXISTING 2x2 FEATURE CARDS */}
        {/* ========================================================= */}

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="
                  group
                  relative
                  min-h-[255px]
                  overflow-hidden
                  rounded-[26px]
                  bg-[#f3f3f5]
                  px-7
                  py-7
                  transition-shadow
                  duration-300
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]
                  sm:min-h-[270px]
                  sm:px-8
                  sm:py-8
                "
              >

                {/* CARD RGB FEATHER */}

                <motion.div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-[110px]
                    -left-[30px]
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
                      ${feature.iconColor}30 0%,
                      ${feature.iconColor}1f 22%,
                      ${feature.iconColor}12 42%,
                      ${feature.iconColor}06 58%,
                      transparent 80%
                    )`,
                  }}
                />

                <div
                  className="
                    pointer-events-none
                    absolute
                    -bottom-[70px]
                    right-[5%]
                    h-[220px]
                    w-[240px]
                    rounded-full
                    opacity-0
                    blur-[90px]
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                  "
                  style={{
                    background: `radial-gradient(
                      circle,
                      ${feature.iconColor}18 0%,
                      ${feature.iconColor}0c 35%,
                      transparent 75%
                    )`,
                  }}
                />

                {/* ICON */}

                <div
                  className="
                    relative
                    z-10
                    flex
                    h-[62px]
                    w-[62px]
                    items-center
                    justify-center
                    rounded-[16px]
                  "
                  style={{
                    backgroundColor: feature.iconBg,
                  }}
                >
                  <Icon
                    size={31}
                    strokeWidth={2}
                    style={{
                      color: feature.iconColor,
                    }}
                  />
                </div>

                <p className="relative z-10 mt-6 text-[16px] font-normal text-[#66666c]">
                  {feature.label}
                </p>

                <h3 className="relative z-10 mt-3 text-[27px] font-semibold leading-[1.15] tracking-[-0.6px] text-[#171717] sm:text-[29px]">
                  {feature.title}
                </h3>

                <p className="relative z-10 mt-4 max-w-[570px] text-[16px] leading-[1.5] text-[#73737a] sm:text-[17px]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ========================================================= */}
      {/* NEW SECTION — LISTEN / UNDERSTAND / PRACTICE */}
      {/* ========================================================= */}

      <section className="relative mt-28 overflow-hidden bg-white py-20 sm:mt-32 sm:py-24 lg:py-28">

        {/* BACKGROUND CIRCLES */}

        <div
          className="
            pointer-events-none
            absolute
            -left-[180px]
            -top-[210px]
            h-[420px]
            w-[420px]
            rounded-full
            border
            border-[#e7e9ee]
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -right-[180px]
            top-[210px]
            h-[500px]
            w-[500px]
            rounded-full
            border
            border-[#e7e9ee]
          "
        />

        {/* HEADING */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="
            relative
            z-10
            mx-auto
            max-w-[1500px]
            px-5
            text-center
            sm:px-8
            lg:px-[5%]
          "
        >
          <p className="text-[16px] font-medium text-[#0877ed] sm:text-[18px]">
            One document stays at the center
          </p>

          <h2
            className="
              mx-auto
              mt-5
              max-w-[1450px]
              text-[36px]
              font-semibold
              leading-[1.08]
              tracking-[-1.8px]
              text-[#191919]
              sm:text-[46px]
              lg:text-[54px]
            "
          >
            Listen, understand, and practice without switching tools.
          </h2>
        </motion.div>

        {/* ========================================================= */}
        {/* THREE EQUAL CARDS */}
        {/* ========================================================= */}

        <div
          className="
            relative
            z-10
            mx-auto
            mt-16
            grid
            max-w-[1280px]
            grid-cols-1
            gap-5
            px-5
            sm:px-8
            md:grid-cols-3
            lg:mt-20
            lg:gap-7
            lg:px-0
          "
        >

          {/* ================= ORIGINAL ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -5 }}
            className="
              group
              relative
              flex
              min-h-[300px]
              flex-col
              overflow-hidden
              rounded-[30px]
              bg-[#f4f4f6]
              p-8
              sm:min-h-[310px]
              lg:min-h-[300px]
              lg:p-12
            "
          >

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
    transition-all
    duration-700
    group-hover:opacity-100
  "
  style={{
    background:
      "radial-gradient(circle, rgba(22,131,223,0.22) 0%, rgba(22,131,223,0.12) 25%, rgba(22,131,223,0.06) 45%, rgba(22,131,223,0.025) 60%, transparent 80%)",
  }}
/>

            <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[20px] bg-[#e5effd]">
              <FileText
                size={32}
                strokeWidth={2}
                className="text-[#087bea]"
              />
            </div>

            <div className="relative z-10 mt-auto pt-10">
              <h3 className="text-[31px] font-semibold leading-none tracking-[-0.8px] text-[#171717] sm:text-[33px]">
                Original
              </h3>

              <p className="mt-5 max-w-[360px] text-[17px] leading-[1.55] text-[#727277] sm:text-[18px]">
                Hear the source text as an audiobook
              </p>
            </div>
          </motion.div>

          {/* ================= EXPLAIN ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -5 }}
            className="
              group
              relative
              flex
              min-h-[300px]
              flex-col
              overflow-hidden
              rounded-[30px]
              bg-[#f4f4f6]
              p-8
              sm:min-h-[310px]
              lg:min-h-[300px]
              lg:p-12
            "
          >

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
    transition-all
    duration-700
    group-hover:opacity-100
  "
  style={{
    background:
      "radial-gradient(circle, rgba(243,145,0,0.22) 0%, rgba(243,145,0,0.12) 25%, rgba(243,145,0,0.06) 45%, rgba(243,145,0,0.025) 60%, transparent 80%)",
  }}
/>

            <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[20px] bg-[#fff3e4]">
              <GraduationCap
                size={34}
                strokeWidth={2}
                className="text-[#f39100]"
              />
            </div>

            <div className="relative z-10 mt-auto pt-10">
              <h3 className="text-[31px] font-semibold leading-none tracking-[-0.8px] text-[#171717] sm:text-[33px]">
                Explain
              </h3>

              <p className="mt-5 max-w-[370px] text-[17px] leading-[1.55] text-[#727277] sm:text-[18px]">
                Switch to professor mode when it gets dense
              </p>
            </div>
          </motion.div>

          {/* ================= PRACTICE ================= */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -5 }}
            className="
              group
              relative
              flex
              min-h-[300px]
              flex-col
              overflow-hidden
              rounded-[30px]
              bg-[#f4f4f6]
              p-8
              sm:min-h-[310px]
              lg:min-h-[300px]
              lg:p-12
            "
          >

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
                transition-all
                duration-700
                group-hover:opacity-100
              "
              style={{
                background:
                  "radial-gradient(circle, rgba(60,219,99,0.08) 0%, rgba(60,219,99,0.04) 25%, rgba(60,219,99,0.02) 45%, rgba(60,219,99,0.01) 60%, transparent 80%)",
              }}
            />

            <div className="relative z-10 flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[20px] bg-[#e6f6eb]">
              <Brain
                size={34}
                strokeWidth={2}
                className="text-[#31cf5d]"
              />
            </div>

            <div className="relative z-10 mt-auto pt-10">
              <h3 className="text-[31px] font-semibold leading-none tracking-[-0.8px] text-[#171717] sm:text-[33px]">
                Practice
              </h3>

              <p className="mt-5 max-w-[370px] text-[17px] leading-[1.55] text-[#727277] sm:text-[18px]">
                Ask, quiz, and make flashcards from the same PDF
              </p>
            </div>
          </motion.div>

        </div>
      </section>

    </section>
  );
}