import { motion } from "framer-motion";
import {
  FileText,
  Image as ImageIcon,
  Link2,
  PenLine,
} from "lucide-react";

const lines = [
  ["4%", 0, 4],
  ["12%", 1, 4.5],
  ["20%", 0.5, 3.8],
  ["28%", 1.8, 4.2],
  ["72%", 0.8, 4],
  ["80%", 1.5, 4.4],
  ["88%", 0.2, 3.8],
  ["96%", 1.2, 4.3],
];

function FallingLines() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {lines.map(([left, delay, duration], i) => (
        <motion.span
          key={i}
          className="absolute top-0 h-16 w-px bg-gradient-to-b from-transparent via-cyan-400/70 to-transparent"
          style={{ left }}
          initial={{ y: -100, opacity: 0 }}
          animate={{
            y: "100vh",
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

const options = [
  [FileText, "PDF"],
  [ImageIcon, "Photos"],
  [PenLine, "Handwritten Notes (OCR)"],
  [Link2, "URLs"],
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafafa] text-[#282828]">
      <FallingLines />

      <div className="relative z-10  flex min-h-screen max-w-[1500px] flex-col items-center px-4 pt-12 md: sm:px-6">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="
            flex items-center gap-2
            rounded-full
            border border-[#e7e7e7]
            bg-white/80
            px-5 py-2.5
            text-[16px]
            font-normal
            text-[#333]
            shadow-[0_1px_3px_rgba(0,0,0,0.02)]
          "
        >
          <span className="h-3 w-3 rounded-full bg-[#83d8a0]" />
          Original-text audiobook + professor mode
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="
            mt-5
            w-full
            max-w-[1320px]
            text-center
            font-inter
            font-semibold
            text-[48px]
            leading-[0.92]
            tracking-[-3.5px]
            sm:text-[30px]
            md:text-[40px]
            lg:text-[50px]
            xl:text-[60px]
          "
        >
          Turn any PDF into audio.
          <span className="text-[#1479e6] italic"> Keep</span>
          <br />
          <span className="text-[#1479e6] italic">the meaning.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="
            mt-5
            w-full
            max-w-[1350px]
            text-center
          "
        >
          <p
            className="
              mx-auto
              max-w-[1350px]
              text-[30px]
              font-medium
              leading-[1.12]
              tracking-[-1.8px]
              text-[#292929]
              sm:text-[28px]
              md:text-[30px]
              lg:text-[36px]
            "
          >
            Hear the original text. Get a{" "}
            <span
              className="
                underline
                decoration-[#b8d9fa]
                decoration-[4px]
                underline-offset-[4px]
              "
            >
              Professor explanation
            </span>
            <br />
            when it gets difficult.
          </p>
        </motion.div>

        {/* Description */}
        <p
          className="
            mt-5
            w-full
            max-w-[700px]
            text-center
            text-[17px]
            font-normal
            leading-[1.55]
            tracking-[-0.3px]
            text-[#74767a]
            sm:text-[16px]
            md:text-[20px]
          "
        >
          Try a quick in-app preview while the full MP3 loads in the background, with the PDF powering questions, quizzes, and resumable playback.
        </p>

        {/* Options */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2 pb- sm:gap-5">
          {options.map(([Icon, label]) => (
            <button
              key={label}
              className={`
                flex items-center gap-2
                rounded-full
                px-4 py-2
                text-[16px]
                font-normal
                transition
                ${
                  label.includes("OCR")
                    ? "border border-[#ffad33] bg-white/80 text-[#f39a16]"
                    : "border border-transparent text-[#77797d] hover:bg-white hover:text-[#555]"
                }
              `}
            >
              <Icon size={19} strokeWidth={1.7} />
              {label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom glow */}
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h- w-[700px] -translate-x-1/2 rounded-full blur-[80px]" />

      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-[#e7e7e7]" />
    </section>
  );
}