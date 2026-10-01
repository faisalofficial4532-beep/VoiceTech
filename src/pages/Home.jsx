import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import Readalong from "../components/Readalong";
import HowItWorks from "../components/HowItWorks";
import LearnMode from "../components/LearnMode";
import WhyChoose from "../components/WhyChoose";
import WholtsFor from "../components/WholtsFor";
import AudioLearningComparison from "../components/AudioLearningComparison";
import Comparison from "../components/Comparison";
import StartListening from "../components/StartListening";
import Pricing from "../components/Pricing";
import ExploreVoiceBrief from "../components/ExploreVoiceBrief";
import BlogSection from "../components/BlogSection";
import FAQ from "../components/FAQ";

export default function Home() {
  return (
    <main>
      {/* HOME */}
      <section id="home" className="scroll-mt-[60px]">
        <Hero />
      </section>

       {/* READ ALONG */}
      <section className="scroll-mt-[60px]">
        <Readalong />
      </section>

      {/* AUDIO LEARNING COMPARISON */}
      <section id="audio-comparison" className="scroll-mt-[60px]">
        <AudioLearningComparison />
      </section>

       {/* HOW IT WORKS */}
      <section id="how-it-works" className="scroll-mt-[60px]">
        <HowItWorks />
      </section>

      {/* FEATURES */}
      <section id="features" className="scroll-mt-[60px]">
        <FeatureSection />
      </section>

 {/* WHO IT'S FOR */}
      <section id="use-cases" className="scroll-mt-[60px]">
        <WholtsFor />
      </section>
     

     
{/* VS SPEECHIFY */}
      <section id="vs-speechify" className="scroll-mt-[60px]">
        <Comparison />
      </section>

      {/* learn mode */}
      <section id="learn-mode" className="scroll-mt-[60px]">
        <LearnMode />
      </section>
     
    

      {/* WHY CHOOSE */}
      <section id="why-choose" className="scroll-mt-[60px]">
        <WhyChoose />
      </section>

     {/* PRICING */}
      <section id="pricing" className="scroll-mt-[60px]">
        <Pricing />
      </section>

      

      

      {/* START LISTENING */}
      <section id="start-listening" className="scroll-mt-[60px]">
        <StartListening />
      </section>

      

      {/* EXPLORE */}
      <section id="explore" className="scroll-mt-[60px]">
        <ExploreVoiceBrief />
      </section>

      {/* BLOG */}
      <section id="blog" className="scroll-mt-[60px]">
        <BlogSection />
      </section>

      {/* FAQ */}
      <section id="faq" className="scroll-mt-[60px]">
        <FAQ />
      </section>
    </main>
  );
}