"use client";

export default function Endorsements() {
  return (
    <section className="relative w-full bg-black text-white py-16 flex flex-col items-center justify-center overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold tracking-wide mb-10">
        Endorsed by Elite Performance
      </h2>

      {/* Logos or Testimonials */}
      <div className="flex flex-wrap justify-center gap-10 px-6 max-w-6xl">
        <div className="text-center space-y-3">
          <img
            src="/endorsement-athlete.png"
            alt="Elite Athlete endorsement"
            className="w-28 h-28 mx-auto rounded-full object-cover"
          />
          <p className="text-lg font-light">“Precision. Power. Unmatched.”</p>
          <p className="text-sm opacity-70">– Luxe Athlete Team</p>
        </div>

        <div className="text-center space-y-3">
          <img
            src="/endorsement-coach.png"
            alt="Coach endorsement"
            className="w-28 h-28 mx-auto rounded-full object-cover"
          />
          <p className="text-lg font-light">“Engineered for serious performance.”</p>
          <p className="text-sm opacity-70">– Pro Coach</p>
        </div>

        <div className="text-center space-y-3">
          <img
            src="/endorsement-runner.png"
            alt="Runner endorsement"
            className="w-28 h-28 mx-auto rounded-full object-cover"
          />
          <p className="text-lg font-light">“Every detail supports motion.”</p>
          <p className="text-sm opacity-70">– LuxeRun Division</p>
        </div>
      </div>

      {/* Clean fade separator to CTA */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
}
