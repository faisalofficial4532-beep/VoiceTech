import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const articles = [
  {
    tag: "Research",
    title: "Audio Learning vs Reading",
    description:
      "Discover why listening can be more effective than reading for certain types of content.",
  },
  {
    tag: "Tutorial",
    title: "How to Convert a PDF to Audiobook Free",
    description:
      "Free, MP3, scanned PDF, and offline methods for turning PDFs into audiobooks.",
  },
  {
    tag: "Comparison",
    title: "Best Text-to-Speech Apps for Students",
    description:
      "Compare the top TTS apps for studying, with pros, cons, and pricing.",
  },
  {
    tag: "Productivity",
    title: "Study While Commuting: A Complete Guide",
    description:
      "Turn your commute into productive study time with audio learning.",
  },
  {
    tag: "Technology",
    title: "AI Voice vs Human TTS: What's Better?",
    description:
      "Breaking down the differences between AI-generated and human-recorded audio.",
  },
  {
    tag: "How-to",
    title: "Listen to PDFs on iPhone",
    description:
      "The best ways to convert and listen to PDF documents on your iPhone.",
  },
];

export default function BlogSection() {
  return (
    <section className="w-full bg-[#f7f7f9] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24">
      <div className="mx-auto max-w-[1135px]">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center md:mb-14"
        >
          <h2 className="text-[32px] font-bold leading-[1.15] tracking-[-1.2px] text-[#111111] sm:text-[38px] md:text-[42px]">
            Learn more about audio learning
          </h2>

          <p className="mx-auto mt-5 max-w-[650px] text-[17px] leading-[1.5] text-[#61718a] sm:text-[19px]">
            Tips, guides, and research to help you study smarter.
          </p>
        </motion.div>

        {/* Articles */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.07,
                ease: "easeOut",
              }}
              whileHover={{ y: -4 }}
              className="group flex min-h-[200px] flex-col rounded-[20px] bg-white px-7 py-7 shadow-[0_0_0_1px_rgba(226,228,233,0.8)] transition-shadow duration-300 hover:shadow-[0_12px_30px_rgba(20,30,50,0.08)] sm:min-h-[205px] md:px-7"
            >
              {/* Tag */}
              <div className="mb-4">
                <span className="inline-flex rounded-full bg-[#e7f2ff] px-3 py-[5px] text-[13px] font-medium leading-none text-[#0075e8]">
                  {article.tag}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-[18px] font-semibold leading-[1.35] tracking-[-0.2px] text-[#111111]">
                {article.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-[16px] leading-[1.45] text-[#61718a]">
                {article.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 flex justify-center md:mt-14"
        >
          <button className="group inline-flex items-center gap-2 text-[17px] font-medium text-[#0075e8] transition-colors duration-200 hover:text-[#005fc0]">
            View all articles
            <ArrowRight
              size={18}
              strokeWidth={2}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </button>
        </motion.div>

      </div>
    </section>
  );
}