"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { GoStarFill, GoHeart, GoChevronRight, GoDash } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { filtersCategories } from "@/lib/features/filtersCategory/filtersThunk";
import { getFilters } from "@/helpers/getFilters";
import { TCategories, TCategoriesChild } from "@/types/categories";
import { filtersProducts } from "@/lib/features/filtersProduct/filtersThunk";

const Category = ({
  params: { category },
}: {
  params: { category: string[] };
}) => {
  const dispatch = useAppDispatch();
  const objFilterCategories = useAppSelector(
    (state) => state.filtersCategory.objFilter
  );
  const filterCategoriesData = objFilterCategories?.data;

  const objFilterProducts = useAppSelector(
    (state) => state.filtersProducts.productList
  );
  const productList = objFilterProducts?.data?.productFilters;

  const productsChecked = useAppSelector(
    (state) => state.filtersProducts.productsChecked
  );

  const categoryData = useAppSelector((state) => state.categories.categoryList);
  const categoryList = categoryData?.data?.categories;
  const categoryItem = categoryList?.find((categoryItem: TCategories) => {
    if (categoryItem.slug !== category[0]) {
      return categoryItem.children.some((child) => child.slug === category[0]);
    }
    return categoryItem.slug === category[0];
  });

  const categoryChild = categoryItem?.children.find(
    (child: TCategoriesChild) => child.slug === category[0]
  );

  useEffect(() => {
    dispatch(filtersCategories(category[0]));
    dispatch(
      filtersProducts({
        idParent: categoryItem?.id,
        idChildren: categoryChild?.id,
      })
    );
  }, [dispatch, category, categoryItem, categoryChild]);

  const [productFilters, setProductFilters] = useState([]);

  useEffect(() => {
    const filteredProducts = productList?.filter((product: TProduct) => {
      return productsChecked.some(
        (item: string) => item === product.idCategoryChildren
      );
    });

    if (filteredProducts && filteredProducts.length === 0) {
      setProductFilters(productList);
    } else {
      setProductFilters(filteredProducts);
    }
  }, [productList, productsChecked]);

  return (
    <main>
      <section className="container pt-[2rem] flex justify-between items-center">
        <div>
          <Link href={"/"} className="text-gray text-[1.6rem]">
            TRANG CHỦ
          </Link>
          <span className="mx-2 opacity-35 text-[1.6rem]">/</span>
          <Link href={"/categories"} className="text-gray text-[1.6rem]">
            CỬA HÀNG
          </Link>
          <span className="mx-2 opacity-35 text-[1.6rem]">/</span>
          {categoryItem && (
            <Link
              href={`/categories/${categoryItem.slug}`}
              className={` ${
                categoryChild ? "text-gray" : "text-dark3 font-bold"
              } text-[1.6rem] uppercase`}>
              {categoryItem?.name}
            </Link>
          )}
          {categoryChild && (
            <>
              <span className="mx-2 opacity-35 text-[1.6rem]">/</span>
              <span className="text-dark3 font-bold text-[1.6rem]">
                {categoryChild?.name}
              </span>
            </>
          )}
        </div>
        <div className="flex items-center">
          <p className="mr-[1.4rem] text-[1.4rem]">Xem tất cả 5 kết quả</p>
          <select className="text-[1.4rem] border border-gray3 border-solid px-[1.1rem] my-[0.5rem] h-[3.25rem] outline-none">
            <option value="">Thứ tự mặc định</option>
            <option value="">Thứ tự theo mức độ phổ biến</option>
            <option value="">Thứ tự theo điểm đánh giá</option>
            <option value="">Thứ tự theo sản phẩm mới</option>
            <option value="">Thứ tự theo giá: thấp đến cao</option>
            <option value="">Thứ tự theo giá: cao xuống thấp</option>
          </select>
        </div>
      </section>
      <section className="container pt-12 flex justify-between">
        <div className="px-6 pb-6">
          <span className="text-[1.4rem] font-bold">LỌC SẢN PHẨM</span>
          <div className="h-[0.3rem] bg-[rgba(0,0,0,0.1)] w-12 mt-4 mb-[1.4rem]"></div>
          <div className="pb-[0.5rem] min-w-[27rem] mb-[0.9rem] relative">
            <input
              type="text"
              placeholder="Bạn muốn tìm gì?"
              className="p-[0.9rem] border border-gray2 border-solid w-full text-[1.4rem]"
            />
            <PiMagnifyingGlassLight className="absolute top-2/4 right-2 translate-y-[-50%] cursor-pointer text-[2.4rem]" />
          </div>
          <div>
            {filterCategoriesData?.filterList.map(
              (filterItem: any, index: number) => (
                <div key={index}>
                  {getFilters(filterItem?.id, filterItem, categoryChild)}
                </div>
              )
            )}
          </div>
        </div>
        <div className="px-2 pb-[1.9rem] flex-1">
          <div className="grid grid-cols-4">
            {productFilters?.map((product: TProduct) => {
              const price = Math.round(
                product.price - (product.price * product.discount) / 100
              );
              const priceFormatted = new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(price);
              const priceRoot = new Intl.NumberFormat("vi-VN").format(
                product.price
              );
              return (
                <div className="px-4 pb-[1.9rem] h-full" key={product.id}>
                  <div className="shadow">
                    <Link href={"/product/" + product.slug}>
                      <Image
                        src={product.images[0]}
                        width={500}
                        height={500}
                        alt=""
                        priority={true}
                      />
                    </Link>
                    <div className="p-4 pb-[1.7rem] text-center">
                      <Link
                        href={"/product/" + product.slug}
                        className="text-dark2 text-[1.4rem] line-clamp-2 hover:text-secondary">
                        {product.name}
                      </Link>
                      <div className="text-secondary text-[1.4rem] font-bold">
                        {priceFormatted}
                      </div>
                      {product.discount !== 0 && (
                        <div className="flex justify-between text-dark2 text-[1.2rem]">
                          <span className="line-through">{priceRoot} ₫</span>
                          <span>-{product.discount}% off</span>
                        </div>
                      )}
                      <div className="flex items-center justify-between flex-wrap text-[0.6rem] gap-2 mt-2">
                        <p className=" text-[1.2rem]">Đã bán {product.sold}</p>
                        <div className="flex items-center justify-center text-[1.2rem]">
                          {Array.from({ length: 5 }).map((_, index) => (
                            <GoStarFill key={index} className="text-yellow" />
                          ))}
                          ({product.evaluates.length})
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-[1.2rem] text-end">
                          {product.address.name}
                        </p>
                        <GoHeart className="text-[1.6rem]" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            <ul className="flex justify-center items-center gap-2">
              <li className="pagination active">1</li>
              <li className="pagination ">2</li>
              <li className="pagination ">
                <GoChevronRight />
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Category;
