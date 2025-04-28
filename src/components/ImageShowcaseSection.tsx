
import React from "react";

const ImageShowcaseSection = () => {
  return (
    <section className="w-full pt-0 pb-8 sm:pb-12 bg-white" id="showcase">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-8 sm:mb-12 animate-on-scroll">
          <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight text-gray-900 mb-3 sm:mb-4">
            Find Your Dream Job Today
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            Our AI-powered platform is designed to transform how you search for jobs
            and advance your career.
          </p>
        </div>

        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-elegant mx-auto max-w-4xl animate-on-scroll">
          <div className="w-full">
            <img
              src="/lovable-uploads/original-5f245fd8cf9d79ac167ab010fa6f1882.webp"
              alt="Professional using Skill Orbit platform to find jobs"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="bg-white p-4 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-display font-semibold mb-3 sm:mb-4">Next Generation Job Matching</h3>
            <p className="text-gray-700 text-sm sm:text-base">
              Built with sophisticated AI algorithms, our platform seamlessly
              connects job seekers with the perfect opportunities, saving time and
              increasing the chances of finding meaningful employment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageShowcaseSection;
