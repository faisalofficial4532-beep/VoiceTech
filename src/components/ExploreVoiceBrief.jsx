import { motion } from "framer-motion";
import {
  FileText,
  Volume2,
  GraduationCap,
  Microscope,
  Brain,
  Mic,
  Sparkles,
  Wrench,
  Music2,
  Headphones,
  Zap,
  Gem,
  Pencil,
} from "lucide-react";

const cards = [
  {
    icon: FileText,
    title: "Convert PDF to Audio",
    text: "Convert any PDF to natural speech",
    color: "#c9c1d9",
  },
  {
    icon: Volume2,
    title: "Text to Audio",
    text: "Turn any text into listenable audio",
    color: "#a9b7d0",
  },
  {
    icon: GraduationCap,
    title: "For Students",
    text: "Study smarter with audio textbooks",
    color: "#55446f",
  },
  {
    icon: Microscope,
    title: "For Researchers",
    text: "Listen to research papers anywhere",
    color: "#9d8cae",
  },
  {
    icon: Brain,
    title: "For ADHD Learners",
    text: "Stay focused with audio study tools",
    color: "#f08db8",
  },
  {
    icon: Mic,
    title: "AI Voice Chat",
    text: "Talk to your documents with AI",
    color: "#8e8a99",
  },
  {
    icon: Sparkles,
    title: "AI Summaries",
    text: "Get instant summaries of any PDF",
    color: "#ffb45d",
  },
  {
    icon: Wrench,
    title: "Study Tools",
    text: "Reading time calculator & more",
    color: "#aaa5ba",
  },
  {
    icon: Music2,
    title: "PDF to MP3 Converter",
    text: "Download PDFs as MP3 audio files",
    color: "#66549c",
  },
  {
    icon: Headphones,
    title: "Turn PDF Into Audiobook",
    text: "Create long-form PDF audiobooks",
    color: "#aaa7ad",
  },
  {
    icon: Zap,
    title: "vs Speechify",
    text: "See how VoiceBrief compares",
    color: "#ff8b36",
  },
  {
    icon: Gem,
    title: "Pricing",
    text: "Free and Pro plans available",
    color: "#1687e8",
  },
  {
    icon: Pencil,
    title: "Blog",
    text: "Tips on audio learning & study",
    color: "#b7adc9",
  },
];

export default function ExploreVoiceBrief() {
  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 md:px-8 lg:px-16">
      <div className="mx-auto max-w-[1105px]">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            mb-9
            text-center
            text-[28px]
            font-semibold
            tracking-[-0.8px]
            text-[#111]
            sm:text-[32px]
            md:text-[34px]
          "
        >
          Explore VoiceBrief
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.035,
                }}
                whileHover={{
                  y: -3,
                }}
                className="
                  group
                  flex
                  min-h-[154px]
                  cursor-pointer
                  flex-col
                  rounded-[14px]
                  border
                  border-[#d5d7dc]
                  bg-white
                  px-[19px]
                  py-[20px]
                  transition-all
                  duration-300
                  hover:border-[#bfc4cc]
                  hover:shadow-[0_8px_22px_rgba(0,0,0,0.07)]
                "
              >
                {/* Icon */}
                <div className="mb-[14px] flex h-[29px] items-center">
                  <Icon
                    size={27}
                    strokeWidth={1.8}
                    style={{ color: card.color }}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    text-[18px]
                    font-semibold
                    leading-[1.25]
                    tracking-[-0.25px]
                    text-[#111]
                  "
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-[3px]
                    max-w-[220px]
                    text-[16px]
                    leading-[1.4]
                    text-[#637083]
                  "
                >
                  {card.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}