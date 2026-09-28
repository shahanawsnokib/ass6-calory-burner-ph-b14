import React from "react";
import ItemCard from "../component/itemCard/page";

const getItems = async () => {
  const rest = await fetch("https://api.abcz.workers.dev/api/fitlog");
  return rest.json();
};
const page = async () => {
  const Items = await getItems();
  return (
    <div className="container mx-auto">
      <div className=" flex  flex-col ">
        <div className="flex flex-col justify-start mx-2 md:mx-16 my-7">
          <h2 className="text-3xl font-bold">THE LIBRARY</h2>
          <p className="text-xs text-gray-400">
            Twelve lifts covering every major muscle group.
          </p>
        </div>
        <div className="grid mx-2 md:mx-16 grid-cols-1 md:grid-cols-3 gap-4 ">
          {Items.map((item) => (
            <ItemCard key={item.id} item={item}></ItemCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
