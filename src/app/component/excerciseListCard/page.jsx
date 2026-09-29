import React from 'react';

const page = ({addTodaysPlan}) => {
    return (
     <div>
          <div className="mt-4 space-y-3">
          {addTodaysPlan.map((exercise) => {
            // Destructure exercise data
            const {
              id,
              name,
              image,
              
              duration,
              caloriesBurned,
              rating,
              muscleGroups,
            } = exercise;

            return (
              <div
                key={id}
                className="flex items-center justify-between rounded-lg border border-[#252a34] bg-[#13161c] p-3"
              >
                {/* Left side */}
                <div className="flex min-w-0 items-center gap-3">
                  {/* Image */}
                  <img
                    src={image}
                    alt={name}
                    className="h-14 w-14 rounded-md object-cover"
                  />

                  {/* Information */}
                  <div className="min-w-0">
                    <h2 className="truncate text-xs font-bold uppercase">
                      {name}
                    </h2>

                    <p className="mt-1 text-[9px] text-gray-500">
                      {muscleGroups?.join(" · ")}
                    </p>

                    <div className="mt-1 flex items-center gap-3 text-[9px] text-gray-400">
                      <span>◷ {duration} min</span>

                      <span className="text-yellow-400">
                        🔥 {caloriesBurned} kcal
                      </span>

                      <span className="text-lime-400">
                        ★ {rating}
                      </span>
                    </div>
                  </div>
                </div>

             
                <div className="flex items-center gap-3">
                  <button className="hidden rounded-full border border-[#303641] px-3 py-1.5 text-[9px] text-gray-300 transition hover:bg-[#20242c] sm:block">
                    View Details
                  </button>

                  <button className="rounded-full bg-lime-400 px-3 py-1.5 text-[9px] font-semibold text-black hover:bg-lime-300">
                    ✓ Mark as Done
                  </button>

                  <button className="text-gray-500 hover:text-white">
                    ×
                  </button>
                </div>
              </div>
            );
          })}
        </div>

            {/* Empty State */}
        {addTodaysPlan.length === 0 && (
          <div className="mt-4 rounded-lg border border-dashed border-[#292e38] p-10 text-center">
            <p className="text-sm text-gray-400">
              Your plan is empty.
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Add some exercises to your plan.
            </p>
          </div>
        )}
     </div>
    );
};

export default page;