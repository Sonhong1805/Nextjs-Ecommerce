import { TFilters } from "@/types/filters";
import React from "react";
import { GoDash } from "react-icons/go";

const FilterPrice = ({ name }: { name: string }) => {
  return (
    <>
      <h4 className="font-bold text-[1.6rem] mb-3">{name}</h4>
      <div>
        <div className="flex items-center justify-between">
          <div>
            <input
              type="text"
              placeholder="Tối thiểu"
              className="p-2 w-[11rem] text-[1.4rem] border border-gray2 border-solid "
            />
          </div>
          <GoDash className="mx-4" />
          <div>
            <input
              type="text"
              placeholder="Tối đa"
              className="p-2 w-[11rem] text-[1.4rem] border border-gray2 border-solid "
            />
          </div>
        </div>
        <button className="px-[1.4rem] py-1 bg-secondary text-white font-bold mt-4 mb-8 text-[1.4rem]">
          Lọc
        </button>
      </div>
    </>
  );
};

export default FilterPrice;
