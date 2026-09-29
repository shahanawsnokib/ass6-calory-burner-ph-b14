"use client";
import React, { useContext } from "react";
import { ItemContext } from "../../../contex/ItemContexProvide";

const TodayPlaButton = ({ item }) => {
  const { addTodaysPlan, setTodaysPlan } = useContext(ItemContext);

  const handleTodayPlan = () => {
    console.log("triger");
    setTodaysPlan([...addTodaysPlan, item]);
    console.log(item, "From todays plan");
    

  };
  return (
    <button
      className="bg-lime-400 hover:bg-lime-300 text-black font-semibold text-xs px-5 py-3 rounded-lg transition"
      type="button"
      onClick={() => handleTodayPlan()}
    >
      <p>⊞ Add to today&apos;s plan</p>
    </button>
  );
};

export default TodayPlaButton;
