import { motion } from "framer-motion";

const proFeatures = [
  "Unlimited PDFs & audio",
  "AI Professor Mode (Teach Mode)",
  "Voice Chat with AI tutor",
  "AI Quizzes & Flashcards",
  "PDF Chat — ask anything",
  "MP3 downloads",
  "Direct in-app support with document context",
];

const freeFeatures = [
  { text: "1 saved PDF preview", disabled: false },
  { text: "3 monthly preview minutes", disabled: false },
  { text: "In-app preview only", disabled: false },
  { text: "No Voice Chat", disabled: true },
  { text: "No Flashcards", disabled: true },
  { text: "No Downloads", disabled: true },
];

const cardAnimation = {
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

export default function Pricing() {
  return (
    <section
      className="
        w-full
        bg-[#f8f8fa]
        px-5
        py-16
        sm:px-8
        sm:py-20
        lg:px-[6%]
        lg:py-[80px]
      "
    >
        <div>
            <p className="text-center p-4
            ">Pricing</p>
        </div>
      <div className="mx-auto max-w-[1000px]">

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
              tracking-[-1.8px]
              text-[#111111]
              sm:text-[48px]
              lg:text-[50px]
            "
          >
            Unlock unlimited learning.
          </h2>

          <p
            className="
              mt-4
              text-[17px]
              leading-[1.4]
              text-[#64748b]
              sm:text-[19px]
            "
          >
            Pro is $9.99/month for the complete PDF study toolkit.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div
          className="
            mt-16
            grid
            grid-cols-1
            gap-6
            md:grid-cols-2
            md:gap-6
          "
        >
          {/* ================= PRO ================= */}

          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="
              relative
              flex
              min-h-[565px]
              flex-col
              overflow-hidden
              rounded-[22px]
              bg-[#272729]
              px-8
              py-8
              text-white
              shadow-[0_12px_30px_rgba(0,0,0,0.08)]
              sm:px-8
            "
          >
            {/* subtle gradient */}
            <div
              className="
                pointer-events-none
                absolute
                right-[-80px]
                top-[-100px]
                h-[240px]
                w-[240px]
                rounded-full
                bg-[#1f9c9c]/20
                blur-[70px]
              "
            />

            {/* Popular */}
            <div className="relative flex items-center justify-between">
              <span className="text-[14px] font-semibold text-[#a8a8aa]">
                Pro
              </span>

              <span
                className="
                  rounded-full
                  bg-[#087bea]
                  px-2.5
                  py-1
                  text-[12px]
                  font-semibold
                  text-white
                "
              >
                Most Popular
              </span>
            </div>

            {/* Price */}
            <div className="relative mt-2">
              <div className="flex items-baseline">
                <span
                  className="
                    text-[40px]
                    font-semibold
                    tracking-[-1.5px]
                  "
                >
                  $9.99
                </span>

                <span className="ml-1 text-[18px] text-[#9d9da0]">
                  /mo
                </span>
              </div>

              <p className="mt-1 text-[13px] font-medium text-[#99999b]">
                Less than a coffee a week
              </p>
            </div>

            {/* Features */}
            <div className="relative mt-6 space-y-3">
              {proFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <span className="mt-[3px] text-[16px] text-[#087bea]">
                    •
                  </span>

                  <span className="text-[15px] font-medium leading-[1.35] text-[#eeeeef]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="relative mt-auto pt-7">
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                className="
                  w-full
                  rounded-full
                  bg-white
                  px-5
                  py-3.5
                  text-[14px]
                  font-semibold
                  text-[#222222]
                  transition-shadow
                  duration-300
                  hover:shadow-[0_8px_25px_rgba(255,255,255,0.12)]
                "
              >
                Start Pro — $9.99/month
              </motion.button>

              <p
                className="
                  mt-3
                  text-center
                  text-[11px]
                  leading-[1.35]
                  text-[#929295]
                "
              >
                Cancel anytime · Applicable taxes are calculated at
                checkout based on your billing location.
              </p>
            </div>
          </motion.div>

          {/* ================= FREE ================= */}

          <motion.div
            variants={cardAnimation}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: 0.1 }}
            className="
              flex
              min-h-[565px]
              flex-col
              rounded-[22px]
              border
              border-[#dedfe3]
              bg-white
              px-8
              py-8
              text-[#111111]
              shadow-[0_8px_25px_rgba(0,0,0,0.02)]
            "
          >
            {/* Title */}
            <div>
              <p className="text-[14px] font-medium text-[#64748b]">
                Free
              </p>

              <div className="mt-1">
                <span className="text-[40px] font-semibold tracking-[-1.5px]">
                  $0
                </span>
              </div>

              <p className="mt-1 text-[13px] text-[#64748b]">
                Try before you commit
              </p>
            </div>

            {/* Features */}
            <div className="mt-6 space-y-3">
              {freeFeatures.map((feature) => (
                <div
                  key={feature.text}
                  className="flex items-start gap-3"
                >
                  <span
                    className={`
                      mt-[2px]
                      text-[16px]
                      ${
                        feature.disabled
                          ? "text-[#d2d3d7]"
                          : "text-[#222222]"
                      }
                    `}
                  >
                    •
                  </span>

                  <span
                    className={`
                      text-[15px]
                      leading-[1.4]
                      ${
                        feature.disabled
                          ? "text-[#9a9ca2]"
                          : "text-[#222222]"
                      }
                    `}
                  >
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="mt-auto pt-8">
              <motion.button
                whileHover={{
                  backgroundColor: "#f7f7f8",
                }}
                whileTap={{ scale: 0.98 }}
                className="
                  w-full
                  rounded-full
                  border
                  border-[#d5d6da]
                  bg-white
                  px-5
                  py-3.5
                  text-[14px]
                  font-medium
                  text-[#55565a]
                  transition-colors
                  duration-300
                "
              >
                Try Free
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
      <div>
        <p className="text-center p-4">Cancel anytime. No questions asked.

</p>
      </div>
    </section>
  );
}