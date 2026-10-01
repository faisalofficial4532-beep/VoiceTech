import { motion } from "framer-motion";
import {
  FileText,
  Headphones,
  Brain,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export default function StartListening() {
  const floatingIcons = [
    {
      icon: FileText,
      color: "#087ff5",
      position: "left-[4%] top-[18%]",
    },
    {
      icon: Headphones,
      color: "#22c55e",
      position: "right-[6%] top-[29%]",
    },
    {
      icon: Brain,
      color: "#ff9800",
      position: "left-[7%] bottom-[30%]",
    },
    {
      icon: Sparkles,
      color: "#ff2f7d",
      position: "right-[9%] bottom-[18%]",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#fbfbfd] px-4 py-12 sm:px-6 sm:py-14 md:px-8 md:py-16 lg:min-h-[740px] lg:px-10 lg:py-12">
      {/* Floating Icons */}
      {floatingIcons.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            className={`absolute z-10 hidden h-12 w-12 items-center justify-center rounded-[14px] bg-white shadow-[0_8px_20px_rgba(0,0,0,0.08)] sm:flex md:h-[52px] md:w-[52px] ${item.position}`}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              duration: 3 + index * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.2,
            }}
          >
            <Icon
              size={23}
              strokeWidth={2.2}
              style={{ color: item.color }}
            />
          </motion.div>
        );
      })}

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex w-full max-w-[1000px] flex-col items-center text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="
            max-w-[850px]
            text-[38px]
            font-bold
            leading-[1.08]
            tracking-[-1.5px]
            text-[#171717]
            sm:text-[44px]
            md:text-[50px]
            lg:text-[58px]
          "
        >
          Start listening{" "}
          <span className="bg-gradient-to-r from-[#087ff5] via-[#159bc9] to-[#2fc45d] bg-clip-text text-transparent">
            today
          </span>
          .
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            mt-4
            max-w-[700px]
            text-[16px]
            leading-[1.5]
            text-[#6b7280]
            sm:mt-5
            sm:text-[18px]
            md:text-[20px]
            lg:text-[21px]
          "
        >
          Start learning smarter today. Pro starts at $9.99/month.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-7
            flex
            w-full
            flex-col
            items-center
            justify-center
            gap-3
            sm:mt-8
            sm:flex-row
            md:mt-9
          "
        >
          <button
            className="
              group
              flex
              h-[58px]
              w-full
              max-w-[320px]
              items-center
              justify-center
              gap-2
              rounded-full
              bg-[#087ff5]
              px-6
              text-[15px]
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#0674df]
              sm:h-[60px]
              sm:w-auto
              sm:px-7
              md:h-[64px]
              md:text-[16px]
            "
          >
            Start Pro — $9.99/month

            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <button
            className="
              h-[58px]
              w-full
              max-w-[250px]
              rounded-full
              border
              border-[#d2d4d8]
              bg-white
              px-6
              text-[15px]
              font-medium
              text-[#202020]
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#fafafa]
              sm:h-[60px]
              sm:w-auto
              sm:px-7
              md:h-[64px]
              md:text-[16px]
            "
          >
            Try the free preview
          </button>
        </motion.div>

        {/* Tax */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="
            mt-3
            max-w-[500px]
            text-[11px]
            leading-5
            text-[#7b8490]
            sm:mt-4
            sm:text-[12px]
            md:text-[13px]
          "
        >
          Applicable taxes are calculated at checkout based on your billing
          location.
        </motion.p>
      </div>

      {/* Cards */}
      <div
        className="
          relative
          z-20
          mx-auto
          mt-12
          flex
          w-full
          max-w-[760px]
          items-end
          justify-center
          gap-2
          sm:mt-16
          sm:gap-3
          md:gap-4
          lg:mt-[72px]
          lg:gap-5
        "
      >
        {/* LEFT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="
            flex
            h-[145px]
            w-[78px]
            shrink-0
            items-center
            justify-center
            rounded-[13px]
            border-[3px]
            border-[#292929]
            bg-white
            shadow-[0_15px_25px_rgba(0,0,0,0.09)]
            xs:h-[160px]
            xs:w-[88px]
            sm:h-[190px]
            sm:w-[100px]
            sm:rounded-[15px]
            sm:border-[4px]
            md:h-[215px]
            md:w-[108px]
          "
        >
          <Headphones
            className="h-7 w-7 text-[#087ff5] sm:h-8 sm:w-8 md:h-[34px] md:w-[34px]"
            strokeWidth={2.2}
          />
        </motion.div>

        {/* CENTER CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            flex
            h-[180px]
            w-[112px]
            shrink-0
            flex-col
            items-center
            justify-center
            rounded-[14px]
            border-[4px]
            border-[#292929]
            bg-white
            shadow-[0_18px_30px_rgba(0,0,0,0.10)]
            sm:h-[225px]
            sm:w-[150px]
            sm:rounded-[16px]
            sm:border-[5px]
            md:h-[255px]
            md:w-[180px]
          "
        >
          <FileText
            className="h-8 w-8 text-[#28c85a] sm:h-9 sm:w-9 md:h-[38px] md:w-[38px]"
            strokeWidth={2.1}
          />

          <span className="mt-2 text-[10px] text-[#687386] sm:mt-3 sm:text-[12px] md:text-[13px]">
            Psychology 101
          </span>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="
            flex
            h-[125px]
            w-[170px]
            shrink-0
            items-center
            justify-center
            rounded-[14px]
            border-[4px]
            border-[#292929]
            bg-white
            shadow-[0_18px_30px_rgba(0,0,0,0.10)]
            sm:h-[155px]
            sm:w-[230px]
            sm:rounded-[16px]
            sm:border-[5px]
            md:h-[178px]
            md:w-[287px]
          "
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <Brain
              className="h-7 w-7 text-[#ff9800] sm:h-8 sm:w-8 md:h-9 md:w-9"
              strokeWidth={2.1}
            />

            <div className="text-left">
              <p className="text-[12px] font-medium text-[#111] sm:text-[14px] md:text-[16px]">
                Quiz Time
              </p>

              <p className="mt-0.5 text-[9px] text-[#687386] sm:text-[11px] md:text-[12px]">
                5 questions
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}