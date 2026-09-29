"use client";

import { useContext } from "react";
import { ItemContext } from "../../contex/ItemContexProvide";

const Page = () => {
  const { addTodaysPlan, saveForLatter } = useContext(ItemContext);

   console.log(addTodaysPlan, "Add to today plan ");

  console.log(saveForLatter, "and save for Latter");
  

  return (
    <div>
      <h2>Hi 1</h2>
    </div>
  );
};

export default Page;