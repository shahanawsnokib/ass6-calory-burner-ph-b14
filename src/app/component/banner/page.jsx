import Image from 'next/image';
import React from 'react';

const page = () => {
    return (
         <div className="min-h-screen bg-[#0d0f12] p-4 md:p-8 flex items-center justify-center">
            {/* Banner Container */}
            <div className="w-full max-w-6xl bg-[#12151a] rounded-2xl p-8 md:p-12 border border-gray-800/50 shadow-2xl flex flex-col-reverse lg:flex-row items-center justify-between gap-8 md:gap-12 overflow-hidden">
                
                {/* Text Content Column */}
                <div className="w-full lg:w-1/2 flex flex-col items-start gap-4 z-10">
                    {/* Subtitle / Category */}
                    <span className="text-[#a6ff00] text-xs md:text-sm font-bold tracking-widest uppercase">
                        Workout Library
                    </span>

                    {/* Main Heading */}
                    <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-none uppercase font-sans">
                        Train with intent. <br className="hidden sm:block" />
                        Log every set.
                    </h1>

                    {/* Paragraph Description */}
                    <p className="text-gray-400 text-sm md:text-base font-normal leading-relaxed max-w-md pt-2">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into todays plan, and watch the weeks work add up.
                    </p>

                    {/* Call to Action Button */}
                    <button className="mt-4 bg-[#a6ff00] hover:bg-[#93e600] text-black font-extrabold text-xs md:text-sm py-3 px-6 rounded-lg uppercase tracking-wider transition-colors duration-200 cursor-pointer shadow-lg shadow-[#a6ff00]/10">
                        Browse Workouts
                    </button>
                </div>

                {/* Image Column */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
                  <Image src='/banner.png' alt='Banner Image' width={300} height={300}/>
                </div>

            </div>
        </div>
    );
};

export default page;