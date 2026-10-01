import { motion } from "framer-motion";
import {
  Mic,
  Brain,
  Sparkles,
  FileText,
  BookOpen,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Voice Conversations",
    text: "Ask follow-up questions by voice or text while the document stays in context.",
  },
  {
    icon: Brain,
    title: "Document-Grounded Context",
    text: "Answers use the selected PDF as context; review the original PDF when accuracy matters.",
  },
  {
    icon: Sparkles,
    title: "Explain and Review",
    text: "Request a simpler explanation, then turn the same section into active-review questions.",
  },
  {
    icon: FileText,
    title: "Quiz & Test Mode",
    text: "Choose easy, medium, or hard questions generated from the document.",
  },
];

const messages = [
  {
    type: "user",
    text: "Can you explain the Krebs cycle in simple terms?",
  },
  {
    type: "ai",
    text: "Think of it like a factory assembly line! Glucose comes in as raw material, and through 8 stations, we extract energy packets called ATP...",
  },
  {
    type: "user",
    text: "Why does it produce so much ATP?",
  },
  {
    type: "ai",
    text: 'Great question! Each "station" captures electrons in NADH and FADH2. These then go to the electron transport chain where...',
  },
];

const reveal = {
  hidden: {
    opacity: 0,
    y: 25,
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

const workflowReveal = {
  hidden: {
    opacity: 0,
    y: 25,
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

export default function LearnMode() {
  return (
    <>
      {/* =====================================================
          LEARN MODE SECTION
      ===================================================== */}

      <section
        className="
          w-full
          bg-[#f8f8fa]
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-[8.5%]
          lg:py-[82px]
        "
      >
        <div
          className="
            mx-auto
            grid
            max-w-[1200px]
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-2
            lg:gap-[60px]
          "
        >
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <motion.div
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col"
          >
            {/* NEW BADGE */}

            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#087bea] px-3.5 py-1.5 text-[13px] font-semibold text-white">
              <Sparkles size={13} strokeWidth={2.2} />
              NEW
            </div>

            {/* HEADING */}

            <h2
              className="
                max-w-[590px]
                text-[40px]
                font-semibold
                leading-[1.04]
                tracking-[-2px]
                text-[#151515]
                sm:text-[48px]
                lg:text-[50px]
              "
            >
              Learn Mode: Your
              <br />
              Personal{" "}
              <span className="font-semibold italic text-[#087bea]">
                AI Tutor
              </span>
            </h2>

            {/* DESCRIPTION */}

            <p
              className="
                mt-5
                max-w-[590px]
                text-[17px]
                leading-[1.55]
                text-[#637080]
                sm:text-[18px]
              "
            >
              Keep the selected PDF in context while you ask questions,
              request explanations, and build practice material by voice or
              text.
            </p>

            {/* FEATURES */}

            <div className="mt-8 space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{
                      opacity: 0,
                      x: -18,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex items-start gap-4"
                  >
                    {/* ICON */}

                    <div
                      className="
                        flex
                        h-[48px]
                        w-[48px]
                        shrink-0
                        items-center
                        justify-center
                        rounded-[12px]
                        bg-[#f2f3f6]
                        transition-all
                        duration-300
                        group-hover:bg-[#eaf3ff]
                      "
                    >
                      <Icon
                        size={21}
                        strokeWidth={2}
                        className="text-[#087bea]"
                      />
                    </div>

                    {/* TEXT */}

                    <div className="pt-[1px]">
                      <h3 className="text-[16px] font-semibold leading-[1.35] text-[#171717]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 max-w-[530px] text-[14px] leading-[1.45] text-[#657080] sm:text-[15px]">
                        {feature.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}

            <motion.a
              href="#"
              whileHover={{ scale: 1.025 }}
              whileTap={{ scale: 0.98 }}
              className="
                mt-8
                inline-flex
                w-fit
                items-center
                gap-2
                rounded-full
                bg-[#ff9800]
                px-6
                py-3.5
                text-[15px]
                font-semibold
                text-white
                shadow-[0_8px_24px_rgba(255,152,0,0.14)]
                transition-shadow
                duration-300
                hover:shadow-[0_12px_30px_rgba(255,152,0,0.24)]
              "
            >
              Start with a free audio preview
              <ArrowRight size={17} />
            </motion.a>
          </motion.div>

          {/* =====================================================
              RIGHT SIDE — AI CHAT
          ===================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex w-full items-center"
          >
            {/* CHAT CARD */}

            <div
              className="
                relative
                flex
                w-full
                flex-col
                overflow-hidden
                rounded-[22px]
                border
                border-[#e1e2e6]
                bg-white
                shadow-[0_24px_55px_rgba(0,0,0,0.11)]
              "
            >
              {/* CHAT HEADER */}

              <div
                className="
                  flex
                  h-[64px]
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-[#e5e5e7]
                  px-5
                  sm:px-6
                "
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-[34px] w-[34px] items-center justify-center rounded-[10px] bg-[#fff1df]">
                    <BookOpen
                      size={18}
                      strokeWidth={2}
                      className="text-[#ff8a00]"
                    />
                  </div>

                  <span className="text-[15px] font-medium text-[#171717] sm:text-[16px]">
                    Organic Chemistry Ch. 12
                  </span>
                </div>

                <div className="flex items-center gap-2 text-[13px] text-[#35c95b]">
                  <span className="h-2 w-2 rounded-full bg-[#8cdda5]" />
                  Live
                </div>
              </div>

              {/* CHAT MESSAGES */}

              <div className="flex flex-col gap-4 px-5 py-5 sm:px-6">
                {messages.map((message, index) => {
                  const isAI = message.type === "ai";

                  return (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: 0.2 + index * 0.1,
                      }}
                      className={`flex ${
                        isAI
                          ? "items-start gap-3"
                          : "justify-end"
                      }`}
                    >
                      {isAI && (
                        <div
                          className="
                            mt-1
                            flex
                            h-[32px]
                            w-[32px]
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-gradient-to-br
                            from-[#087bea]
                            to-[#35c95b]
                          "
                        >
                          <Sparkles
                            size={15}
                            strokeWidth={2}
                            className="text-white"
                          />
                        </div>
                      )}

                      <div
                        className={`
                          max-w-[82%]
                          px-4
                          py-3
                          text-[13px]
                          leading-[1.45]
                          sm:text-[14px]
                          ${
                            isAI
                              ? "rounded-[15px] rounded-tl-[4px] bg-gradient-to-br from-[#087bea] to-[#35c95b] font-medium text-white"
                              : "rounded-[15px] rounded-tr-[4px] bg-[#f4f4f6] text-[#343434]"
                          }
                        `}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* INPUT */}

              <div className="shrink-0 border-t border-[#e5e5e7] px-5 py-4 sm:px-6">
                <div
                  className="
                    flex
                    h-[56px]
                    items-center
                    justify-between
                    rounded-full
                    bg-[#f4f4f6]
                    pl-5
                    pr-2
                  "
                >
                  <span className="text-[13px] text-[#7a7f89] sm:text-[14px]">
                    Ask anything about your content...
                  </span>

                  <button
                    type="button"
                    className="
                      flex
                      h-[34px]
                      w-[34px]
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      bg-[#087bea]
                      text-white
                      transition-transform
                      duration-200
                      hover:scale-105
                    "
                  >
                    <Mic size={16} strokeWidth={2} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          NEW SECTION — HOW WE BUILD
      ========================================================= */}

      <section
        className="
          w-full
          overflow-hidden
          bg-white
          px-5
          py-16
          sm:px-8
          sm:py-20
          lg:px-[6%]
          lg:py-[78px]
        "
      >
        <div className="mx-auto max-w-[1100px] text-center">

          {/* SMALL TITLE */}

          <motion.p
            variants={workflowReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-[14px] font-medium text-[#087bea] sm:text-[15px]"
          >
            How We Build
          </motion.p>

          {/* MAIN TITLE */}

          <motion.h2
            variants={workflowReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="
              mx-auto
              mt-4
              max-w-[850px]
              text-[40px]
              font-semibold
              leading-[1.08]
              tracking-[-1.8px]
              text-[#111111]
              sm:text-[48px]
              lg:text-[50px]
            "
          >
            One document,{" "}
            <span className="font-semibold italic text-[#087bea]">
              one connected
            </span>
            <br className="hidden sm:block" />
            <span className="font-semibold italic text-[#087bea]">
              workflow
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.div
            variants={workflowReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="
              mx-auto
              mt-8
              max-w-[1000px]
              space-y-6
              text-[17px]
              leading-[1.55]
              text-[#64748b]
              sm:text-[18px]
            "
          >
            <p>
              VoiceBrief keeps the source PDF at the center while you listen,
              ask questions, and practice instead of rebuilding the same
              context in separate tools.
            </p>

            <p>
              The original-text audiobook and read-along preserve a route back
              to the source. AI-generated summaries, explanations, and quizzes
              can omit or misstate details, so review the original PDF when
              accuracy matters.
            </p>

            <p>
              Trust needs more than marketing copy. We publish how claims are
              reviewed, disclose current accessibility limits, and provide
              in-app support with document context.
            </p>
          </motion.div>

          {/* PILLS */}

          <motion.div
            variants={workflowReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="
              mt-8
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >
            <button
              type="button"
              className="
                rounded-full
                bg-[#f5f5f7]
                px-4
                py-2
                text-[13px]
                font-medium
                text-[#151515]
                transition-all
                duration-300
                hover:bg-[#eeeeF1]
              "
            >
              Editorial policy
            </button>

            <button
              type="button"
              className="
                rounded-full
                bg-[#f5f5f7]
                px-4
                py-2
                text-[13px]
                font-medium
                text-[#151515]
                transition-all
                duration-300
                hover:bg-[#eeeeF1]
              "
            >
              Accessibility & limitations
            </button>
          </motion.div>

          {/* THREE COLUMNS */}

          <motion.div
            variants={workflowReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="
              mx-auto
              mt-12
              grid
              max-w-[900px]
              grid-cols-1
              gap-7
              sm:grid-cols-3
              sm:gap-0
            "
          >
            {/* PDF FIRST */}

            <div className="px-5 sm:border-r sm:border-[#e0e2e6]">
              <h3
                className="
                  text-[30px]
                  font-semibold
                  leading-none
                  tracking-[-1px]
                  text-[#111111]
                  sm:text-[31px]
                "
              >
                PDF-first
              </h3>

              <p className="mt-2 text-[14px] text-[#64748b]">
                Document workflow
              </p>
            </div>

            {/* MP3 */}

            <div className="px-5 sm:border-r sm:border-[#e0e2e6]">
              <h3
                className="
                  text-[30px]
                  font-semibold
                  leading-none
                  tracking-[-1px]
                  text-[#111111]
                  sm:text-[31px]
                "
              >
                MP3
              </h3>

              <p className="mt-2 text-[14px] text-[#64748b]">
                Offline listening
              </p>
            </div>

            {/* AI TOOLS */}

            <div className="px-5">
              <h3
                className="
                  text-[30px]
                  font-semibold
                  leading-none
                  tracking-[-1px]
                  text-[#111111]
                  sm:text-[31px]
                "
              >
                AI tools
              </h3>

              <p className="mt-2 text-[14px] text-[#64748b]">
                Summaries and quizzes
              </p>
            </div>
          </motion.div>

          {/* BOTTOM INFO */}

          <motion.div
            initial={{
              opacity: 0,
              y: 15,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.55,
              delay: 0.1,
            }}
            className="
              mx-auto
              mt-11
              flex
              w-fit
              max-w-full
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#f5f5f7]
              px-5
              py-2.5
              text-[13px]
              text-[#64748b]
            "
          >
            <span className="text-[15px]">
              💡
            </span>

            <span>
              Public methods • Product limitations • Account-scoped documents
            </span>
          </motion.div>

        </div>
      </section>
    </>
  );
}