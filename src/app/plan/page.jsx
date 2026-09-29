"use client";

import { useContext } from "react";
import { ItemContext } from "../../contex/ItemContexProvide";
import ExcerciseListCard from "../component/excerciseListCard/page"
import SavedCard from "../component/savedCard/page"

const Page = () => {
  const { addTodaysPlan, saveForLatter } = useContext(ItemContext);


  

  return (
    <div className="min-h-screen px-4 py-6 text-white md:px-8">
        <div className="mx-auto max-w-7xl">
        <h1 className="text-2xl font-bold">MY PLAN</h1>

        <p className="mt-1 text-xs text-gray-500">
          Cap of five lifts for today. Finish them, then load more.
        </p>
        
    </div>   

     {/* Statistics */}
        <div className="mt-5 rounded-lg border border-[#242832] bg-[#12151b] p-4">
          <div className="grid grid-cols-3">
            {/* Exercises */}
            <div className="border-r border-[#242832] px-3">
              <p className="text-[9px] text-gray-500">Exercises</p>
              <p className="mt-1 text-xl font-bold text-lime-400">
                {addTodaysPlan.length}
              </p>
            </div>

            {/* Minutes */}
            <div className="border-r border-[#242832] px-3">
              <p className="text-[9px] text-gray-500">Minutes</p>
              <p className="mt-1 text-xl font-bold">
                {addTodaysPlan.reduce(
                  (total, exercise) => total + Number(exercise.duration || 0),
                  0
                )}
              </p>
            </div>

            {/* Calories */}
            <div className="px-3">
              <p className="text-[9px] text-gray-500">Calories</p>
              <p className="mt-1 text-xl font-bold">
                {addTodaysPlan.reduce(
                  (total, exercise) =>
                    total + Number(exercise.caloriesBurned || 0),
                  0
                )}
              </p>
            </div>
          </div>
        </div>

         {/* Tabs + Sort */}
        <div className="mt-4 flex items-center justify-end mb-4">

            

          <div className="text-[10px] text-gray-500">
            Sort By{" "}
            <select className="ml-1 rounded border border-[#292e38] bg-[#15181f] px-2 py-1 text-gray-300 outline-none">
              <option>Duration</option>
              <option>Calories</option>
              <option>Rating</option>
            </select>
          </div>
        </div>





<div className="tabs tabs-border flex rounded-md bg-[#15181f] p-1">
           <input type="radio" name="my_tabs_2" className="tab rounded px-4 py-1.5 text-[10px] text-gray-400" aria-label=" Today Plan" defaultChecked />
            <div className="tab-content border-base-300 bg-base-100 p-10">
              
                      {/* Plan List */}
      <ExcerciseListCard addTodaysPlan= {addTodaysPlan}></ExcerciseListCard>

    
              
              
              
              </div>

          <input type="radio" name="my_tabs_2" className="tab rounded px-4 py-1.5 text-[10px] text-gray-400" aria-label="Saved"  />
          <div className="tab-content border-base-300 bg-base-100 p-10">
            
            
            
            <SavedCard saveForLatter={saveForLatter}></SavedCard>
            
            
            </div>
          </div>
    
      </div>
  
    
  );
};

export default Page;