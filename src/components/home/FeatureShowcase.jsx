import React from 'react';
import dashboardPreview from "../../assets/workspace-dashboard.png";

const FeatureShowcase = () => {
  return (
    <section
      id="features"
      className="w-full py-10 md:py-16"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16">

        {/* HEADER */}
        <div className="text-center mb-10 md:mb-16">

          <h2
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Work Smarter. Collaborate Faster. Grow Together.
          </h2>

          <p
            className="text-sm sm:text-base max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--text-secondary)' }}
          >
            From planning and collaboration to deployment and performance tracking — everything in one platform.
          </p>

        </div>

        {/* CARD */}
        <div
          className="rounded-2xl md:rounded-3xl overflow-hidden"
          style={{ backgroundColor: 'var(--card-bg)' }}
        >

          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 p-5 md:p-10 lg:p-14">

            {/* TEXT */}
            <div className="flex-1 flex flex-col justify-center space-y-5 text-center lg:text-left">

              <h3
                className="text-xl md:text-3xl lg:text-4xl font-bold leading-tight"
                style={{ color: 'var(--text-primary)' }}
              >
                From Start to Success — All in One Workspace
              </h3>

              <p
                className="text-sm sm:text-base leading-relaxed"
                style={{ color: 'var(--text-primary)' }}
              >
                Flowbit streamlines your workflow from planning to execution.
                Manage projects, tasks, chats, meetings, documents, attendance,
                and performance — all inside one seamless and modern platform
                built to scale with your team.
              </p>

            </div>

            {/* IMAGE */}
            <div className="flex-1 flex justify-center items-center">

              <div
                className="w-full max-w-md md:max-w-lg rounded-xl md:rounded-2xl shadow-xl overflow-hidden"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
              >

                <img
                  src={dashboardPreview}
                  alt="dashboard preview"
                  className="w-full h-auto object-contain"
                />

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FeatureShowcase;