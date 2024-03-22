import { TFilters } from "@/types/filters";
import React from "react";

const FilterAttribute = ({ name, metadata }: TFilters) => {
  return (
    <>
      <h4 className="font-bold text-[1.6rem] flex justify-between mb-3">
        <span>{name}</span>
        <button>+</button>
      </h4>
      <div>
        <ul className="pb-1 mb-2">
          {metadata?.map((item) => (
            <li key={item.value}>
              <input
                type="checkbox"
                id={item.value}
                className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
              />
              <label
                htmlFor={item.value}
                className="mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                {item.name}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterAttribute;
