"use client";
import { fetchCategories } from "@/lib/features/categories/categoriesThunk";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { TCategories } from "@/types/categories";
import Link from "next/link";
import React, { useEffect } from "react";

const Navbar = () => {
  const categoryData = useAppSelector((state) => state.categories.categoryList);
  const categoryList = categoryData.data?.categories;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <nav className="bg-primary">
      <ul className="container flex items-center justify-center flex-wrap">
        {categoryList?.slice(0, 11)?.map((category: TCategories) => {
          return (
            <li
              key={category.id}
              className="p-[1rem] cursor-pointer relative hover:bg-white group">
              <Link
                href={`/categories/${category.slug}`}
                className="text-white group-last:text-secondary text-[1.12rem] font-bold group-hover:text-black">
                {category.name}
              </Link>
              <ul className="submenu z-[999]">
                {category.children.map((child) => (
                  <li className="submenu-item" key={child.id}>
                    <Link
                      href={`/categories/${child.slug}`}
                      className="w-full block">
                      {child.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
