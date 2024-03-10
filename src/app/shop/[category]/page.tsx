import Image from "next/image";
import Link from "next/link";
import React from "react";
import { PiMagnifyingGlassLight } from "react-icons/pi";
import { GoStarFill, GoHeart, GoChevronRight } from "react-icons/go";

const Category = ({
  params: { category },
}: {
  params: { category: string };
}) => {
  return (
    <main>
      <section className="container pt-5 flex justify-between items-center">
        <div>
          <Link href={"/"} className="text-gray">
            TRANG CHỦ
          </Link>
          <span className="mx-1 opacity-35">/</span>
          <Link href={"/"} className="text-[#222] font-bold">
            {category}
          </Link>
        </div>
        <div className="flex items-center">
          <p className="mr-3">Xem tất cả 5 kết quả</p>
          <select className="border border-[#ddd] border-solid px-3 my-1 h-[2.5rem] outline-none">
            <option value="">Thứ tự mặc định</option>
            <option value="">Thứ tự theo mức độ phổ biến</option>
            <option value="">Thứ tự theo điểm đánh giá</option>
            <option value="">Thứ tự theo sản phẩm mới</option>
            <option value="">Thứ tự theo giá: thấp đến cao</option>
            <option value="">Thứ tự theo giá: cao xuống thấp</option>
          </select>
        </div>
      </section>
      <section className="container pt-5 flex justify-between">
        <div className="px-[0.9rem] pb-[1.9rem]">
          <span className="text-[0.9rem] font-bold">LỌC SẢN PHẨM</span>
          <div className="h-1 bg-[rgba(0,0,0,0.1)] w-[1.9rem] mt-2 mb-4"></div>
          <div className="pb-1 min-w-[16.9rem] mb-2 relative">
            <input
              type="text"
              placeholder="Bạn muốn tìm gì?"
              className="p-2 border border-[#ddd] border-solid w-full"
            />
            <PiMagnifyingGlassLight className="absolute top-2/4 right-2 text-lg translate-y-[-50%] cursor-pointer" />
          </div>
          <div>
            <h4 className="font-bold text-base flex justify-between mb-2">
              <span>Danh mục sản phẩm</span>
              <button>+</button>
            </h4>
            <div>
              <ul className="pb-1 mb-2">
                <li>
                  <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                  <label
                    htmlFor=""
                    className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                    Ăn vặt & Bánh kẹo(1)
                  </label>
                </li>
                <li>
                  <input
                    type="checkbox"
                    className="mt-1 mr-2 mb-4 ml-1"
                    disabled
                  />
                  <label
                    htmlFor=""
                    className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                    Đặc sản Việt(0)
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                  <label
                    htmlFor=""
                    className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                    Đồ hộp & Đóng gói(2)
                  </label>
                </li>
                <li>
                  <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                  <label
                    htmlFor=""
                    className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                    Đồ uống(1)
                  </label>
                </li>
              </ul>
            </div>
            <h4 className="font-bold text-base mb-2">Lọc theo giá</h4>
            <div>
              <div className="flex items-center justify-between">
                <div>
                  <input
                    type="text"
                    placeholder="Tối thiểu"
                    className="p-2 border border-[#ddd] border-solid w-28"
                  />
                </div>
                <div className="text-lg">-</div>
                <div>
                  <input
                    type="text"
                    placeholder="Tối đa"
                    className="p-2 border border-[#ddd] border-solid w-28"
                  />
                </div>
              </div>
              <button className="px-4 py-1 bg-secondary text-white font-bold mt-2 mb-4 text-lg">
                Lọc
              </button>
            </div>
            <h4 className="font-bold text-base flex justify-between mb-2">
              <span>Thể tích (ml)</span>
              <button>+</button>
            </h4>
            <ul className="pb-1 mb-2">
              <li>
                <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                <label
                  htmlFor=""
                  className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                  &gt;= 10ml
                </label>
              </li>
              <li>
                <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                <label
                  htmlFor=""
                  className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                  &gt;= 50ml
                </label>
              </li>
              <li>
                <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                <label
                  htmlFor=""
                  className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                  &gt;= 200ml
                </label>
              </li>
            </ul>
            <h4 className="font-bold text-base flex justify-between mb-2">
              <span>Thể tích (gam)</span>
              <button>+</button>
            </h4>
            <ul className="pb-1 mb-2">
              <li>
                <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                <label
                  htmlFor=""
                  className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                  &gt;= 30g
                </label>
              </li>
              <li>
                <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                <label
                  htmlFor=""
                  className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                  &gt;= 100g
                </label>
              </li>
              <li>
                <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                <label
                  htmlFor=""
                  className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                  &gt;= 300g
                </label>
              </li>
            </ul>
            <h4 className="font-bold text-base flex justify-between mb-2">
              <span>Xuất sứ</span>
              <button>+</button>
            </h4>
            <ul className="pb-1 mb-2">
              <li>
                <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                <label
                  htmlFor=""
                  className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                  Hà Nội
                </label>
              </li>
              <li>
                <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                <label
                  htmlFor=""
                  className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                  Hồ Chí Minh
                </label>
              </li>
              <li>
                <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                <label
                  htmlFor=""
                  className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                  Đà Nẵng
                </label>
              </li>
              <li>
                <input type="checkbox" className="mt-1 mr-2 mb-4 ml-1" />
                <label
                  htmlFor=""
                  className="py-1 mb-1 ml-2 text-sm text-[#222] font-bold">
                  Nước ngoài
                </label>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-[0.9rem] pb-[1.9rem] flex-1">
          <div className="grid grid-cols-4">
            <div className="px-[0.6rem] pb-5 ">
              <div className="shadow">
                <Link href={"/"}>
                  <Image
                    src="https://mauweb.monamedia.net/lazada/wp-content/uploads/2017/10/Oganic-01-300x300.jpg"
                    width={500}
                    height={500}
                    alt=""
                  />
                </Link>
                <div className="p-[0.6rem] pb-[1.1rem] text-center">
                  <Link href={"/"} className="text-dark2 text-sm">
                    [Natierra] Việt quất, phúc bồn tử, dâu tây, táo xanh hữu cơ
                    sấy lạnh 30g
                  </Link>
                  <div className="text-secondary font-bold">170,000 ₫</div>
                  <div className="flex items-center justify-between flex-wrap text-[0.6rem] gap-2 mt-2">
                    <p className="">Đã bán 150</p>
                    <div className="flex items-center justify-center">
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      <GoStarFill className="text-yellow" />
                      (10)
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-[0.6rem] text-end">Hồ Chí Minh</p>
                    <GoHeart className="text-base" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ul className="flex justify-center items-center gap-1">
              <li className="pagination active">1</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Category;
