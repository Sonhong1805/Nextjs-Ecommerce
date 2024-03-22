"use client";
import { TFilters } from "@/types/filters";
import React, { useState } from "react";

const FilterCategory = ({ name, metadata }: TFilters) => {
  const [isShowCategory, setIsShowCategory] = useState<boolean>(true);
  return (
    <>
      <h4 className="font-bold text-[1.6rem] flex justify-between mb-3">
        <span>{name}</span>
        <button onClick={() => setIsShowCategory((prev) => !prev)}>+</button>
      </h4>
      <div>
        <ul className="pb-1 mb-2">
          {metadata?.map((item) => (
            <li key={item.id}>
              <input
                type="checkbox"
                id={item.slug}
                className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
              />
              <label
                htmlFor={item.slug}
                className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                {item.name} ({item.quantity})
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterCategory;
