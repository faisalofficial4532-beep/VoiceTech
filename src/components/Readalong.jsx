import React, { useState } from 'react';

export default function ReadAlongSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
            <section className="bg-[#f8f9fa] min-h-screen flex items-center justify-center p-6 md:p-12 font-sans text-[#1a1a1a] relative overflow-hidden">
      {/* Soft Background Blurred Glows */}
      <div className="absolute top-4 left-[52%] w-2 h-2 rounded-full bg-blue-400/40 blur-[0.5px]"></div>
      <div className="absolute top-3 left-[75%] w-1.5 h-1.5 rounded-full bg-teal-400/30 blur-[0.5px]"></div>

      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        
        {/* Left Column - Main Copy */}
        <div className="space-y-6 max-w-[540px]">
          <p className="text-[#6c757d] text-[20] font-normal tracking-wide">
            Read along
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[50px] font-bold leading-[1.08] tracking-[-0.03em] text-[#1a1a1a]">
            Keep the document open while the audio teaches it.
          </h1>

          <p className="text-[#6c757d] text-lg sm:text-[20px] font-normal leading-[1.45] pt-1">
            VoiceBrief highlights the source text as you listen, so dense PDFs feel easier to follow and easier to review.
          </p>
        </div>

        {/* Right Column - Document Preview Card */}
        <div className="flex justify-center w-full lg:justify-end">
          <div className="bg-white rounded-[28px] p-8 sm:p-9 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.07)] border border-gray-100/80 max-w-[580px] w-full space-y-6">
            
            {/* Header: Icon, File Name & Play Button */}
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-3.5">
                {/* File Icon */}
                <div className="w-[46px] h-[46px] rounded-2xl bg-[#e8f1fd] text-[#3b82f6] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-[#1a1a1a] text-lg leading-snug">
                    Research-paper.pdf
                  </h3>
                  <p className="text-sm text-[#808996] font-normal">
                    Audio synced to page 3
                  </p>
                </div>
              </div>

              {/* Play Button */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-11 h-11 rounded-full bg-[#1e1e1e] hover:bg-black text-white flex items-center justify-center transition-all shadow-sm shrink-0"
                aria-label={isPlaying ? "Pause audio" : "Play audio"}
              >
                {isPlaying ? (
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4 fill-current ml-0.5" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
            </div>

            {/* Paragraph 1 */}
            <p className="text-[#555e6b] text-[16px] leading-[1.55] font-normal">
              Dense academic text becomes easier to process when you can hear the explanation and keep your place visually.
            </p>

            {/* Highlighted Section Box */}
            <div className="bg-[#e7f1fc] text-[#1e2a38] p-5 rounded-2xl text-[16px] leading-[1.5] font-normal border border-[#d3e4f9]/60">
              The highlighted section follows the spoken audio, helping you stay oriented instead of rereading the same line.
            </div>

            {/* Paragraph 2 */}
            <p className="text-[#555e6b] text-[16px] leading-[1.55] font-normal">
              Pause anytime, ask a question, then jump back into the exact part of the document that matters.
            </p>

          </div>
        </div>

      </div>
       
    </section>
    
    <section className="relative flex h-[400px] w-full items-start justify-center overflow-hidden bg-[#fbfbfd]">
      
      {/* Soft blurred background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1450px] px-6 pt-[10px] text-center">
        
        <h1
          className="
            mx-auto
            max-w-[1380px]
            text-[60px]
            md:text-[40px]
            lg:text-[50px]
            font-[750]
            text-center
            leading-[0.99]
            tracking-[-3.8px]
            text-[#1d1d20]
          "
        >
          Turn PDFs into audio.{" "}
          
          <span className="bg-gradient-to-r from-[#0879df] to-[#159fc0] bg-clip-text text-transparent">
            Chat with
          </span>

          <br />

          <span className="bg-gradient-to-r from-[#149eb5] to-[#24b96f] bg-clip-text text-transparent">
            your docs.
          </span>{" "}
          
          Study in more places.
        </h1>

        <p
          className="
            mx-auto
            mt-[28px]
            max-w-[1030px]
            text-[20px]
            font-normal
            leading-[1.25]
            tracking-[-0.5px]
            text-[#647084]
          "
        >
          Upload a document, press play, and keep learning even when reading
          <br />
          slows you down.
        </p>
      </div>
    </section>
 

    </div>
  );
}