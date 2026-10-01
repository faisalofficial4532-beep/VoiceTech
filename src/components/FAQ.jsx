import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How does VoiceBrief work?",
    answer:
      "Upload a PDF and VoiceBrief turns the document into natural audio. You can listen to the source, ask questions, get explanations, and create practice material while keeping the document in context.",
  },
  {
    question: "What's included in the Free tier?",
    answer:
      "The Free tier lets you try VoiceBrief with a saved PDF preview and limited preview minutes before committing to a Pro plan.",
  },
  {
    question: "How is the Pro plan different?",
    answer:
      "Pro gives you unlimited PDFs and audio, AI Professor Mode, voice chat, AI quizzes and flashcards, PDF chat, MP3 downloads, and in-app support with document context.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes. You can cancel your Pro subscription at any time. Applicable taxes are calculated at checkout based on your billing location.",
  },
  {
    question: "What file formats do you support?",
    answer:
      "VoiceBrief is designed around PDF documents, including textbooks, notes, research papers, and other PDF-based learning material.",
  },
  {
    question: "How accurate are the AI summaries?",
    answer:
      "AI-generated summaries and explanations can omit or misstate details. When accuracy matters, review the original PDF and use it as the source of truth.",
  },
  {
    question: "Can I download the audio files?",
    answer:
      "Pro users can download generated audio as MP3 files for offline listening.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your documents are account-scoped and are not public unless you intentionally create a share link.",
  },
  {
    question: "What voices are available?",
    answer:
      "VoiceBrief provides natural listening voices, with pronunciation and voice quality varying depending on the language and document.",
  },
  {
    question: "How much does Pro cost?",
    answer:
      "The Pro plan is $9.99 per month. Applicable taxes are calculated at checkout based on your billing location.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="w-full bg-[#fafbfc] px-4 py-14 sm:px-6 md:px-8 md:py-16 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-[1000px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center sm:mb-14 md:mb-16"
        >
          <h2 className="text-[38px] font-extrabold leading-[1.1] tracking-[-1.5px] text-[#315be8] sm:text-[46px] md:text-[50px] lg:text-[52px]">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-[17px] leading-[1.5] text-[#38516f] sm:text-[18px]">
            Everything you need to know about VoiceBrief
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.04,
                  ease: "easeOut",
                }}
                className={`overflow-hidden rounded-[16px] border bg-white transition-colors duration-200 ${
                  isOpen
                    ? "border-[#7db6ff]"
                    : "border-[#d9e1ec]"
                }`}
              >
                {/* Question */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-7 sm:py-7"
                >
                  <span className="text-[17px] font-bold leading-[1.35] text-[#071a35] sm:text-[18px]">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{
                      duration: 0.25,
                      ease: "easeOut",
                    }}
                    className="flex shrink-0 items-center justify-center text-[#1769ff]"
                  >
                    <ChevronDown
                      size={22}
                      strokeWidth={2}
                    />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="border-t border-[#edf0f5] px-6 pb-6 pt-5 sm:px-7 sm:pb-7">
                        <p className="max-w-[850px] text-[15px] leading-[1.65] text-[#61718a] sm:text-[16px]">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center sm:mt-20"
        >
          <p className="text-[16px] text-[#38516f]">
            Still have questions?
          </p>

          <button
            type="button"
            className=" mt-5
    cursor-pointer
    rounded-[12px]
    bg-gradient-to-r from-[#1478ed] to-[#5140e8]
    px-8 py-3.5
    text-[16px] font-bold text-white
    shadow-[0_8px_20px_rgba(57,91,220,0.18)]
    transition-all duration-200 ease-out
    hover:-translate-y-1
    hover:from-[#086fe5]
    hover:to-[#4534df]
    hover:shadow-[0_12px_28px_rgba(57,91,220,0.30)]
    active:translate-y-0
    active:scale-[0.98]"
          >
            Contact Support
          </button>
        </motion.div>

      </div>
    </section>
  );
}