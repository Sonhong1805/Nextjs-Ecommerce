"use client";
import { TMetadata } from "@/types/filters";
import React, { useEffect, useRef, useState } from "react";

interface FilterAttributeProps {
  name: string;
  metadata: TMetadata[];
}

const FilterAttribute = ({ name, metadata }: FilterAttributeProps) => {
  const [isShowCategory, setIsShowCategory] = useState(true);
  const categoryListRef = useRef<HTMLDivElement>(null);
  const [categoryListHeight, setCategoryListHeight] = useState<
    number | undefined
  >(0);

  useEffect(() => {
    if (categoryListRef.current) {
      setCategoryListHeight(
        isShowCategory ? categoryListRef.current.scrollHeight : 0
      );
    }
  }, [isShowCategory, metadata]);

  return (
    <>
      <h4 className="font-bold text-[1.6rem] flex justify-between mb-3">
        <span>{name}</span>
        <button onClick={() => setIsShowCategory((prev) => !prev)}>
          {isShowCategory ? <>&#8722;</> : <>&#43;</>}
        </button>
      </h4>
      <div
        ref={categoryListRef}
        className="overflow-hidden"
        style={{
          maxHeight: isShowCategory ? `${categoryListHeight}px` : "0",
          transition: "max-height 0.5s ease",
        }}>
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
