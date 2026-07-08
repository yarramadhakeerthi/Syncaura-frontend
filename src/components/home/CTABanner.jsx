import React from 'react';
import { useNavigate } from 'react-router-dom';
import ctaTeamMeeting from "../../assets/cta-team-meeting.png";

const CTABanner = () => {
  const navigate = useNavigate();

  return (
    <section
      className="w-full py-10 md:py-16"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-24">

        {/* MAIN CARD */}
        <div className="relative min-h-[320px] md:min-h-[380px] overflow-hidden rounded-xl md:rounded-2xl">

          {/* IMAGE */}
          <div className="absolute inset-0">
            <img
              src={ctaTeamMeeting}
              alt="Team meeting"
              className="w-full h-full object-cover"
            />
          </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTENT */}
          <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-8 space-y-5">

            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
              Work smarter, faster, together
            </h2>

            <p className="text-sm md:text-base lg:text-lg text-white/90 max-w-xl">
              Manage tasks, chat, meet, and track performance all in one place.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">

              <button
                onClick={() => navigate('/sign-up')}
                className="w-full sm:w-auto px-6 py-3 bg-white text-gray-900 text-sm font-medium hover:opacity-90 transition-opacity rounded"
              >
                Get started
              </button>

              <button
                className="w-full sm:w-auto px-6 py-3 border border-white text-white text-sm font-medium hover:bg-white/10 transition-colors rounded"
              >
                Learn more
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CTABanner;