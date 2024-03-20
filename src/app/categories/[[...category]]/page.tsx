"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { GoStarFill, GoHeart, GoChevronRight, GoDash } from "react-icons/go";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { filtersCategories } from "@/lib/features/filters/filtersThunk";

const Category = ({
  params: { category },
}: {
  params: { category: string[] };
}) => {
  const dispatch = useAppDispatch();
  const objFilter = useAppSelector((state) => state.filters.objFilter);
  console.log(objFilter?.data);

  useEffect(() => {
    dispatch(filtersCategories(category[0]));
  }, [dispatch, category]);

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
          <Link href={"/"} className="text-dark3 font-bold text-[1.6rem]">
            {category[0]}
          </Link>
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
            <h4 className="font-bold text-[1.6rem] flex justify-between mb-3">
              <span>Danh mục sản phẩm</span>
              <button>+</button>
            </h4>
            <div>
              <ul className="pb-1 mb-2">
                <li>
                  <input
                    type="checkbox"
                    className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                  />
                  <label
                    htmlFor=""
                    className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                    Ăn vặt & Bánh kẹo (1)
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                  />
                  <label
                    htmlFor=""
                    className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                    Ăn vặt & Bánh kẹo (1)
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                  />
                  <label
                    htmlFor=""
                    className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                    Ăn vặt & Bánh kẹo (1)
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                  />
                  <label
                    htmlFor=""
                    className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                    Ăn vặt & Bánh kẹo (1)
                  </label>
                </li>
              </ul>
            </div>
            <h4 className="font-bold text-[1.6rem] mb-3">Lọc theo giá</h4>
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
            <h4 className="font-bold text-[1.6rem] mb-3">Lọc theo thể tích</h4>
            <ul className="pb-1 mb-2">
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  &#x2265; 10ml
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  &#x2265; 20ml
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  &#x2265; 50ml
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  &#x2265; 100ml
                </label>
              </li>
            </ul>
            <h4 className="font-bold text-[1.6rem] mb-3">
              Lọc theo khối lượng
            </h4>
            <ul className="pb-1 mb-2">
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  &#x2265; 30ml
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  &#x2265; 60ml
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  &#x2265; 90ml
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  &#x2265; 120ml
                </label>
              </li>
            </ul>
            <h4 className="font-bold text-[1.6rem] mb-3">Xuất xứ</h4>
            <ul className="pb-1 mb-2">
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  Hà Nội
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  Hồ Chí Minh
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  Đà Nẵng
                </label>
              </li>
              <li>
                <input
                  type="checkbox"
                  className="mt-[0.3rem] mr-4 mb-[1.6rem] ml-[0.4rem]"
                />
                <label
                  htmlFor=""
                  className="py-16 mb-2 ml-[0.7rem] text-[1.26rem] text-[#222] font-bold">
                  Nước ngoài
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-2 pb-[1.9rem] flex-1">
          <div className="grid grid-cols-4">
            <div className="px-4 pb-[1.9rem] ">
              <div className="shadow">
                <Link href={"/"}>
                  <Image
                    src="https://mauweb.monamedia.net/lazada/wp-content/uploads/2017/10/Oganic-01-300x300.jpg"
                    width={500}
                    height={500}
                    alt=""
                  />
                </Link>
                <div className="p-4 pb-[1.7rem] text-center">
                  <Link href={"/"} className="text-dark2 text-[1.4rem]">
                    [Natierra] Việt quất, phúc bồn tử, dâu tây, táo xanh hữu cơ
                    sấy lạnh 30g
                  </Link>
                  <div className="text-secondary text-[1.4rem] font-bold">
                    170,000 ₫
                  </div>
                  <div className="flex items-center justify-between flex-wrap text-[0.6rem] gap-2 mt-2">
                    <p className=" text-[1.2rem]">Đã bán 150</p>
                    <div className="flex items-center justify-center text-[1.2rem]">
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" /> (10)
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[1.2rem] text-end">Hồ Chí Minh</p>
                    <GoHeart className="text-[1.6rem]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-[1.9rem] ">
              <div className="shadow">
                <Link href={"/"}>
                  <Image
                    src="https://mauweb.monamedia.net/lazada/wp-content/uploads/2017/10/AoSomiCaroNu-01-300x300.jpg"
                    width={500}
                    height={500}
                    alt=""
                  />
                </Link>
                <div className="p-4 pb-[1.7rem] text-center">
                  <Link href={"/"} className="text-dark2 text-[1.4rem]">
                    Áo sơ mi caro kèm belt
                  </Link>
                  <div className="text-secondary text-[1.4rem] font-bold">
                    290,000 ₫
                  </div>
                  <div className="flex justify-between text-dark2 text-[1.2rem]">
                    <span className="line-through">290,000 ₫</span>
                    <span>-50% off</span>
                  </div>
                  <div className="flex items-center justify-between flex-wrap text-[0.6rem] gap-2 mt-2">
                    <p className=" text-[1.2rem]">Đã bán 100</p>
                    <div className="flex items-center justify-center text-[1.2rem]">
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      (20)
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[1.2rem] text-end">Hà Nội</p>
                    <GoHeart className="text-[1.6rem]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-[1.9rem] ">
              <div className="shadow">
                <Link href={"/"}>
                  <Image
                    src="https://mauweb.monamedia.net/lazada/wp-content/uploads/2017/11/iphone8-01-300x300.jpg"
                    width={500}
                    height={500}
                    alt=""
                  />
                </Link>
                <div className="p-4 pb-[1.7rem] text-center">
                  <Link href={"/"} className="text-dark2 text-[1.4rem]">
                    Apple iPhone 8 256GB (Bạc) – Hàng nhập khẩu
                  </Link>
                  <div className="text-secondary text-[1.4rem] font-bold">
                    50,000,000 ₫
                  </div>
                  <div className="flex justify-between text-dark2 text-[1.2rem]">
                    <span className="line-through">20,304,000 ₫</span>
                    <span>-59% off</span>
                  </div>
                  <div className="flex items-center justify-between flex-wrap text-[0.6rem] gap-2 mt-2">
                    <p className=" text-[1.2rem]">Đã bán 200</p>
                    <div className="flex items-center justify-center text-[1.2rem]">
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      (50)
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[1.2rem] text-end">Hà Nội</p>
                    <GoHeart className="text-[1.6rem]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pb-[1.9rem] ">
              <div className="shadow">
                <Link href={"/"}>
                  <Image
                    src="https://mauweb.monamedia.net/lazada/wp-content/uploads/2017/10/GiayNam-01-300x300.jpg"
                    width={500}
                    height={500}
                    alt=""
                  />
                </Link>
                <div className="p-4 pb-[1.7rem] text-center">
                  <Link href={"/"} className="text-dark2 text-[1.4rem]">
                    Giày Adidas Yeezy 350
                  </Link>
                  <div className="text-secondary text-[1.4rem] font-bold">
                    600,000 ₫
                  </div>
                  <div className="flex items-center justify-between flex-wrap text-[0.6rem] gap-2 mt-2">
                    <p className=" text-[1.2rem]">Đã bán 25</p>
                    <div className="flex items-center justify-center text-[1.2rem]">
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      (30)
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[1.2rem] text-end">Nước ngoài</p>
                    <GoHeart className="text-[1.6rem]" />
                  </div>
                </div>
              </div>
            </div>
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
