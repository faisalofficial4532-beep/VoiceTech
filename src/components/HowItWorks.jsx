import { motion } from "framer-motion";
import { FileText, Sparkles, Headphones, ArrowUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Upload",
      text: "Drop any PDF—textbooks, notes, research papers.",
      color: "#1683df",
    },
    {
      number: "2",
      title: "Process",
      text: "AI extracts content and generates natural audio.",
      color: "#3cdb63",
    },
    {
      number: "3",
      title: "Listen",
      text: "Learn on your commute, at the gym, anywhere.",
      color: "#f39200",
    },
  ];

  return (
    <section className="w-full overflow-hidden bg-white px-5 py-16 sm:px-8 lg:px-[5%] lg:py-20">

      {/* Heading */}
      <div className="mx-auto max-w-[800px] text-center">
        <p className="mb-4 text-[15px] font-normal text-[#666] sm:text-[17px] lg:text-[19px]">
          How It Works
        </p>

        <h2 className="text-[38px] font-bold leading-[1.05] tracking-[-1.5px] text-[#171717] sm:text-[48px] lg:text-[56px]">
          Three steps. That's it.
        </h2>
      </div>

      {/* Steps */}
      <div className="relative mx-auto mt-14 max-w-[1080px] lg:mt-16">

        {/* Desktop connecting line */}
        <div
          className="
            absolute
            left-[13%]
            right-[13%]
            top-[75px]
            hidden
            h-[2px]
            bg-gradient-to-r
            from-[#1683df]
            via-[#3cdb63]
            to-[#f39200]
            md:block
          "
        />

        {/* Mobile vertical line */}
        <div
          className="
            absolute
            left-[55px]
            top-[70px]
            bottom-[70px]
            w-[2px]
            bg-gradient-to-b
            from-[#1683df]
            via-[#3cdb63]
            to-[#f39200]
            md:hidden
          "
        />

        <div className="grid grid-cols-1 gap-14 md:grid-cols-3 md:gap-6 lg:gap-10">

          {/* ================= UPLOAD ================= */}
          <div className="relative flex items-center gap-5 md:flex-col md:gap-0">

            {/* Mobile arrow */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[42px] top-[-25px] md:hidden"
            >
              <ArrowUp
                size={20}
                strokeWidth={2}
                className="text-[#1683df]"
              />
            </motion.div>

            {/* Icon */}
            <motion.div
              animate={{
                y: [0, -2, 0],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
                relative z-10
                flex h-[110px] w-[110px]
                shrink-0
                items-center justify-center
                rounded-[16px]
                border border-[#e5e5e5]
                bg-white
                shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                sm:h-[125px] sm:w-[125px]
                md:h-[140px] md:w-[140px]
                lg:h-[150px] lg:w-[150px]
              "
            >
              <FileText
                className="h-[46px] w-[46px] text-[#1683df] sm:h-[52px] sm:w-[52px] md:h-[58px] md:w-[58px]"
                strokeWidth={2.2}
              />
            </motion.div>

            {/* Content */}
            <div className="md:text-center">
              <div
                className="
                  mb-3 flex h-[38px] w-[38px]
                  items-center justify-center
                  rounded-full
                  text-[17px] text-white
                  md:mx-auto md:mt-7
                "
                style={{ backgroundColor: steps[0].color }}
              >
                1
              </div>

              <h3 className="text-[27px] font-semibold leading-none text-[#171717] sm:text-[30px]">
                Upload
              </h3>

              <p className="mt-4 max-w-[290px] text-[16px] leading-[1.55] text-[#707070] sm:text-[17px]">
                {steps[0].text}
              </p>
            </div>
          </div>


          {/* ================= PROCESS ================= */}
          <div className="relative flex items-center gap-5 md:flex-col md:gap-0">

            {/* Process animation */}
            <div className="relative z-10 flex h-[110px] w-[110px] shrink-0 items-center justify-center sm:h-[125px] sm:w-[125px] md:h-[140px] md:w-[140px] lg:h-[150px] lg:w-[150px]">

              {/* Outer ring */}
              <motion.div
                animate={{
                  scale: [1, 1.06, 1],
                  opacity: [0.6, 0.25, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-[110px] w-[110px]
                  rounded-full
                  border-2 border-dashed border-[#b8efc5]
                  sm:h-[125px] sm:w-[125px]
                  md:h-[140px] md:w-[140px]
                  lg:h-[150px] lg:w-[150px]
                "
              />

              {/* Inner ring */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  h-[82px] w-[82px]
                  rounded-full
                  border-2 border-[#8be69d]
                  sm:h-[95px] sm:w-[95px]
                  md:h-[105px] md:w-[105px]
                  lg:h-[115px] lg:w-[115px]
                "
              />

              {/* Dots */}
              <motion.span
                animate={{ x: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="absolute left-[3px] top-[45%] h-[8px] w-[8px] rounded-full bg-[#6ce081]"
              />

              <motion.span
                animate={{ y: [0, 5, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.4, repeat: Infinity }}
                className="absolute right-[3px] top-[25%] h-[8px] w-[8px] rounded-full bg-[#4bda6d]"
              />

              {/* Main icon */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 1.7,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative flex
                  h-[60px] w-[60px]
                  items-center justify-center
                  rounded-[17px]
                  bg-[#3cdb63]
                  shadow-[0_8px_18px_rgba(52,220,86,.2)]
                  sm:h-[68px] sm:w-[68px]
                  md:h-[76px] md:w-[76px]
                  lg:h-[80px] lg:w-[80px]
                "
              >
                <Sparkles
                  className="h-[34px] w-[34px] text-white sm:h-[40px] sm:w-[40px]"
                  strokeWidth={1.8}
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="md:text-center">
              <div
                className="
                  mb-3 flex h-[38px] w-[38px]
                  items-center justify-center
                  rounded-full
                  text-[17px] text-white
                  md:mx-auto md:mt-7
                "
                style={{ backgroundColor: steps[1].color }}
              >
                2
              </div>

              <h3 className="text-[27px] font-semibold leading-none text-[#171717] sm:text-[30px]">
                Process
              </h3>

              <p className="mt-4 max-w-[290px] text-[16px] leading-[1.55] text-[#707070] sm:text-[17px]">
                {steps[1].text}
              </p>
            </div>
          </div>


          {/* ================= LISTEN ================= */}
          <div className="relative flex items-center gap-5 md:flex-col md:gap-0">

            <div className="relative z-10 flex h-[110px] w-[110px] shrink-0 items-center justify-center sm:h-[125px] sm:w-[125px] md:h-[140px] md:w-[140px] lg:h-[150px] lg:w-[150px]">

              {/* Pulse ring */}
              <motion.div
                animate={{
                  scale: [0.9, 1.08],
                  opacity: [0.7, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
                className="
                  absolute
                  h-[105px] w-[105px]
                  rounded-full
                  border-2 border-[#f5d59e]
                  sm:h-[120px] sm:w-[120px]
                  md:h-[135px] md:w-[135px]
                  lg:h-[145px] lg:w-[145px]
                "
              />

              {/* Fixed ring */}
              <div className="absolute h-[90px] w-[90px] rounded-full border-2 border-[#f5ca7a] sm:h-[105px] sm:w-[105px] md:h-[115px] md:w-[115px] lg:h-[125px] lg:w-[125px]" />

              {/* Headphone */}
              <motion.div
                animate={{ scale: [1, 1.04, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="
                  relative flex
                  h-[60px] w-[60px]
                  items-center justify-center
                  rounded-full
                  bg-[#f28a00]
                  shadow-[0_8px_18px_rgba(242,138,0,.2)]
                  sm:h-[68px] sm:w-[68px]
                  md:h-[76px] md:w-[76px]
                  lg:h-[80px] lg:w-[80px]
                "
              >
                <Headphones
                  className="h-[34px] w-[34px] text-white sm:h-[40px] sm:w-[40px]"
                  strokeWidth={2}
                />
              </motion.div>

              {/* Audio bars */}
              <div className="absolute bottom-[5px] flex items-end gap-[3px]">
                {[8, 15, 10, 21, 31, 17, 9].map((height, i) => (
                  <motion.span
                    key={i}
                    animate={{
                      height: [height, height * 0.45, height * 0.85, height],
                    }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.08,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="w-[5px] rounded-full bg-[#f28a00]"
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="md:text-center">
              <div
                className="
                  mb-3 flex h-[38px] w-[38px]
                  items-center justify-center
                  rounded-full
                  text-[17px] text-white
                  md:mx-auto md:mt-7
                "
                style={{ backgroundColor: steps[2].color }}
              >
                3
              </div>

              <h3 className="text-[27px] font-semibold leading-none text-[#171717] sm:text-[30px]">
                Listen
              </h3>

              <p className="mt-4 max-w-[290px] text-[16px] leading-[1.55] text-[#707070] sm:text-[17px]">
                {steps[2].text}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}