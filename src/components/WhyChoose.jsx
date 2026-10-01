import { motion } from "framer-motion";
import {
  Zap,
  Brain,
  MessageCircle,
  Download,
  Clock3,
  Shield,
  Globe,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Listen Sooner",
    text: "Play the first section before the full MP3 is ready",
  },
  {
    icon: Brain,
    title: "AI Summaries",
    text: "Get key points without reading everything",
  },
  {
    icon: MessageCircle,
    title: "Ask Questions",
    text: "Voice chat with your documents",
  },
  {
    icon: Download,
    title: "Download MP3",
    text: "Listen offline on any device",
  },
  {
    icon: Clock3,
    title: "Resume Anywhere",
    text: "Keep your document and listening position across devices",
  },
  {
    icon: Shield,
    title: "Account-Scoped Files",
    text: "Documents are not public unless you create a share link",
  },
  {
    icon: Globe,
    title: "Language-Aware Audio",
    text: "Voice and pronunciation quality vary by language and document",
  },
  {
    icon: Headphones,
    title: "Listening Controls",
    text: "Choose a voice and adjust playback speed",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyChoose() {
  return (
    <section className="w-full bg-[#fafafc] px-5 py-16 sm:px-8 sm:py-20 lg:px-[5.5%] lg:py-[78px]">
      <div className="mx-auto max-w-[1110px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="
              text-[40px]
              font-semibold
              leading-[1.08]
              tracking-[-1.7px]
              text-[#111111]
              sm:text-[48px]
              lg:text-[50px]
            "
          >
            Why choose VoiceBrief?
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-[650px]
              text-[17px]
              leading-[1.45]
              text-[#617086]
              sm:text-[19px]
            "
          >
            More than just a PDF reader—it's your AI-powered learning
            companion.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="
            mt-14
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.25,
                  },
                }}
                className="
                  group
                  min-h-[188px]
                  rounded-[16px]
                  bg-[#f4f4f6]
                  px-6
                  py-6
                  transition-all
                  duration-300
                  hover:bg-white
                  hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-[42px]
                    w-[42px]
                    items-center
                    justify-center
                    rounded-[10px]
                    transition-all
                    duration-300
                    group-hover:bg-[#eaf3ff]
                  "
                >
                  <Icon
                    size={29}
                    strokeWidth={1.9}
                    className="
                      text-[#087bea]
                      transition-transform
                      duration-300
                      group-hover:scale-105
                    "
                  />
                </div>

                {/* Content */}
                <h3
                  className="
                    mt-5
                    text-[16px]
                    font-semibold
                    leading-[1.25]
                    text-[#141414]
                  "
                >
                  {feature.title}
                </h3>

                <p
                  className="
                    mt-2.5
                    max-w-[210px]
                    text-[14px]
                    leading-[1.45]
                    text-[#64748b]
                  "
                >
                  {feature.text}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 text-center"
        >
          <p className="mb-4 text-[15px] text-[#64748b]">
            See how we compare:
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-3
            "
          >
            <a
              href="#"
              className="
                rounded-full
                border
                border-[#e0e2e7]
                bg-white
                px-4
                py-2
                text-[13px]
                font-medium
                text-[#111111]
                transition-all
                duration-300
                hover:border-[#087bea]
                hover:text-[#087bea]
              "
            >
              VoiceBrief vs Speechify
            </a>

            <a
              href="#"
              className="
                rounded-full
                border
                border-[#e0e2e7]
                bg-white
                px-4
                py-2
                text-[13px]
                font-medium
                text-[#111111]
                transition-all
                duration-300
                hover:border-[#087bea]
                hover:text-[#087bea]
              "
            >
              VoiceBrief vs NotebookLM
            </a>

            <a
              href="#"
              className="
                rounded-full
                border
                border-[#e0e2e7]
                bg-white
                px-4
                py-2
                text-[13px]
                font-medium
                text-[#111111]
                transition-all
                duration-300
                hover:border-[#087bea]
                hover:text-[#087bea]
              "
            >
              Full Comparison Guide
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}