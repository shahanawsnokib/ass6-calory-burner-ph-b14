
"use client";


import { useContext, useState } from "react";

import { ItemContext } from "../../contex/ItemContexProvide";
import ExcerciseListCard from "../component/excerciseListCard/page";
import SavedCard from "../component/savedCard/page";

const Page = () => {
  const { addTodaysPlan, saveForLatter } = useContext(ItemContext);

  const [activeTab, setActiveTab] = useState("today");
  const [sortby, setSortby] = useState("calories");

  // Select Today or Saved data
  const data = activeTab === "today" ? addTodaysPlan : saveForLatter;

  // Sort data
  const sortedData = [...data].sort((a, b) => {
    const key = sortby === "calories" ? "caloriesBurned" : sortby;

    return Number(b[key] || 0) - Number(a[key] || 0);
  });

  // Statistics
  const minutes = data.reduce(
    (total, item) => total + Number(item.duration || 0),
    0
  );

  const calories = data.reduce(
    (total, item) => total + Number(item.caloriesBurned || 0),
    0
  );

  return (
    <div className="min-h-screen px-4 py-6 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold">MY PLAN</h1>

        <p className="mt-1 text-xs text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>

        {/* Statistics */}
        <div className="mt-5 rounded-lg border border-[#242832] bg-[#12151b] p-4">
          <div className="grid grid-cols-3">
            
            <div className="border-r border-[#242832] px-3">
              <p className="text-[9px] text-gray-500">Exercises</p>
              <p className="mt-1 text-xl font-bold text-lime-400">
                {data.length}
              </p>
            </div>

            <div className="border-r border-[#242832] px-3">
              <p className="text-[9px] text-gray-500">Minutes</p>
              <p className="mt-1 text-xl font-bold">
                {minutes}
              </p>
            </div>

            <div className="px-3">
              <p className="text-[9px] text-gray-500">Calories</p>
              <p className="mt-1 text-xl font-bold">
                {calories}
              </p>
            </div>

          </div>
        </div>

        {/* Sort */}
        <div className="mt-4 mb-4 flex items-center justify-end">
          <div className="text-[10px] text-gray-500">
            Sort By{" "}

            <select
              value={sortby}
              onChange={(e) => setSortby(e.target.value)}
              className="ml-1 rounded border border-[#292e38] bg-[#15181f] px-2 py-1 text-gray-300 outline-none"
            >
              <option value="duration">Duration</option>
              <option value="calories">Calories</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div className="tabs tabs-border flex rounded-md bg-[#15181f] p-1">

          {/* Today */}
          <input
            type="radio"
            name="my_tabs"
            className="tab rounded px-4 py-1.5 text-[10px] text-gray-400"
            aria-label="Today Plan"
            defaultChecked
            onChange={() => setActiveTab("today")}
          />

          <div className="tab-content border-base-300 bg-base-100 p-10">
            <ExcerciseListCard
              addTodaysPlan={sortedData}
            />
          </div>

          {/* Saved */}
          <input
            type="radio"
            name="my_tabs"
            className="tab rounded px-4 py-1.5 text-[10px] text-gray-400"
            aria-label="Saved"
            onChange={() => setActiveTab("saved")}
          />

          <div className="tab-content border-base-300 bg-base-100 p-10">
            <SavedCard
              saveForLatter={sortedData}
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Page;

