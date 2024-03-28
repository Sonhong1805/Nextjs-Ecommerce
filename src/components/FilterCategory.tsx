"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { TCategoriesChild } from "@/types/categories";
import { TMetadata } from "@/types/filters";
import React, { useEffect, useRef, useState } from "react";
import { setProductsChecked } from "../lib/features/filtersProduct/filtersSlice";

interface FilterCategoryProps {
  name: string;
  metadata: TMetadata[];
  categoryChild: TCategoriesChild;
}

const FilterCategory = ({
  name,
  metadata,
  categoryChild,
}: FilterCategoryProps) => {
  const dispatch = useAppDispatch();
  const [isShowCategory, setIsShowCategory] = useState(true);
  const categoryListRef = useRef<HTMLDivElement>(null);
  const [categoryListHeight, setCategoryListHeight] = useState<
    number | undefined
  >(0);

  const objFilterProducts = useAppSelector(
    (state) => state.filtersProducts.productList
  );
  const productList = objFilterProducts?.data?.productFilters;

  useEffect(() => {
    if (categoryListRef.current) {
      setCategoryListHeight(
        isShowCategory ? categoryListRef.current.scrollHeight : 0
      );
    }
  }, [isShowCategory, metadata]);

  return (
    !categoryChild && (
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
            {metadata?.map((item: TMetadata) => {
              const product = productList?.filter(
                (product: TProduct) => product.idCategoryChildren === item.id
              );
              const quantity = product?.length;
              return (
                <li key={item.id}>
                  <input
                    type="checkbox"
                    id={item.slug}
                    disabled={quantity === 0}
                    className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                    onChange={() => dispatch(setProductsChecked(item.id))}
                  />
                  <label
                    htmlFor={item.slug}
                    className="mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                    {item.name} ({quantity})
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    )
  );
};

export default FilterCategory;
