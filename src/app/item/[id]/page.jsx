import React from "react";
import Image from "next/image";

import TodaysPlanButton from "../../component/planDetailsButton/TodaysPlan";
import { stringify } from "node:querystring";
import Link from "next/link";
import SaveForLatter from "../../component/planDetailsButton/SaveForLatter";

const getItems = async () => {
  const res = await fetch("https://api.abcz.workers.dev/api/fitlog", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch exercises");
  }

  return res.json();
};

const Page = async ({ params }) => {
  const { id } = await params;

  const items = await getItems();

  const item = items.find((item) => item.id== id)

  console.log(item , "Id page ");
  

  if (!item) {
    return (
      <div className="min-h-screen bg-[#0d0f13] flex items-center justify-center text-white">
        <h1 className="text-2xl font-bold">Exercise not found</h1>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#0d0f13] text-white px-5 py-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

          {/* Image */}
          <div className="relative w-full h-[400px] lg:h-[550px] overflow-hidden rounded-xl">
            <Image
              src={item.image}
              alt={item.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Details */}
          <div className="flex flex-col">

            {/* Title */}
            <h1 className="text-3xl font-extrabold uppercase tracking-wide">
              {item.name}
            </h1>

            {/* Description */}
            <p className="text-sm text-gray-400 mt-2 leading-6">
              {item.description}
            </p>

            {/* Muscle Groups */}
            <div className="flex flex-wrap gap-2 mt-4">
              {item.muscleGroups.map((muscle, index) => (
                <span
                  key={index}
                  className="bg-lime-400 text-black text-xs font-bold px-3 py-1 rounded-full"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Information */}
            <div className="mt-5 border border-gray-800 rounded-xl overflow-hidden">

              {/* Equipment */}
              <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Equipment
                </span>
                <span className="text-sm">
                  {item.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Difficulty
                </span>
                <span className="text-sm">
                  {item.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Sets
                </span>
                <span className="text-sm">
                  {item.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Reps
                </span>
                <span className="text-sm">
                  {item.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Duration
                </span>
                <span className="text-sm">
                  {item.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex justify-between items-center px-4 py-4 border-b border-gray-800">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Calories
                </span>
                <span className="text-sm">
                  {item.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex justify-between items-center px-4 py-4">
                <span className="text-[10px] uppercase tracking-widest text-gray-400">
                  Rating
                </span>
                <span className="text-sm">
                  ⭐ {item.rating}
                </span>
              </div>

            </div>

            {/* Instructions */}
            <div className="mt-5">
              <h2 className="text-sm font-bold uppercase tracking-widest">
                Instructions
              </h2>

              <ol className="mt-3 space-y-2">
                {item.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="text-xs text-gray-400 flex gap-2"
                  >
                    <span className="text-white">
                      {index + 1}.
                    </span>

                    <span>
                      {instruction}
                    </span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="flex gap-3 mt-6">
             <Link href="/plan"> <TodaysPlanButton item={item}/> </Link>

             <Link href='/plan'><SaveForLatter item={item}> </SaveForLatter></Link>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;