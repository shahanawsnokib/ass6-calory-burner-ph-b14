"use client";
import React, { useContext } from "react";
import { ItemContext } from "../../../contex/ItemContexProvide";
import { toast } from "react-toastify";

const TodayPlaButton = ({ item }) => {
  const { addTodaysPlan, setTodaysPlan } = useContext(ItemContext);

  const handleTodayPlan = () => {
    // console.log("triger");
    setTodaysPlan([...addTodaysPlan, item]);
       toast.success(`This ${item.name} Action to sent to your Save to today List`)
    // console.log(item, "From todays plan");
    

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
