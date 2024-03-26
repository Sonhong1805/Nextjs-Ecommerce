"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import { GoHeart, GoStarFill } from "react-icons/go";

const ProductDetail = ({
  params: { detail },
}: {
  params: { detail: string };
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleInputQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      setQuantity(parseInt(e.target.value));
    }
  };

  return (
    <main>
      <div className="container py-16">
        <div className="flex">
          <div className="col-5 p-[2.4rem]">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2">
              {new Array(6).fill(null).map((_, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      alt=""
                      width={372}
                      height={372}
                      src={`/images/bach-hoa-online/tra-sua-${
                        index + 1
                      }.jpg_.webp`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper">
              {new Array(6).fill(null).map((_, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      alt=""
                      width={372}
                      height={372}
                      src={`/images/bach-hoa-online/tra-sua-${
                        index + 1
                      }.jpg_.webp`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="col-7 p-[2.4rem]">
            <div className="flex mb-[1rem]">
              <Link href="/" className="text-gray text-[1.4rem] ">
                TRANG CHỦ
              </Link>
              <div className="text-gray text-[1.4rem] mx-[0.5rem]">/</div>
              <Link href="/" className="text-gray text-[1.4rem] ">
                CỬA HÀNG
              </Link>
              <div className="text-gray text-[1.4rem] mx-[0.5rem]">/</div>
              <Link href="/" className="text-gray text-[1.4rem]">
                BÁCH HOÁ ONLINE
              </Link>
              <div className="text-gray text-[1.4rem] mx-[0.5rem]">/</div>
              <Link href="/" className="text-gray text-[1.4rem] ">
                ĐỒ UỐNG
              </Link>
            </div>
            <h2 className="text-[3.2rem] font-bold">
              SET TRÀ SỮA TRÂN CHÂU CAO CẤP ĐẦY ĐỦ VỊ - SET TRÀ SỮA SIÊU TO
              KHỔNG LỒ
            </h2>
            <div className="h-[0.4rem] bg-[rgba(0,0,0,0.1)] my-[1.6rem] w-full max-w-[5rem]"></div>
            <div className="flex items-center justify-start text-[1.4rem]">
              {Array.from({ length: 5 }).map((_, index) => (
                <GoStarFill key={index} className="text-yellow" />
              ))}
            </div>
            <div className="my-[1rem]">
              <span className="text-[2.1rem] line-through text-gray mr-[1rem]">
                290,000 ₫
              </span>
              <strong className="text-[2.2rem] text-[#111]">135,000 ₫</strong>
            </div>
            <div className="flex mb-[1rem]">
              <div className="text-[1.4rem] text-gray mr-[1rem] min-w-[10rem]">
                Phân loại
              </div>
              <div className="">
                <div className="text-[1.4rem]">Phúc Long</div>
                <div className="my-[1rem] flex gap-[0.8rem]">
                  <div>
                    <input type="radio" id="" name="type1" hidden />
                    <label
                      htmlFor=""
                      className="border border-solid border-gray2 text-[1.2rem] min-w-[4.8rem] p-[0.8rem] cursor-pointer">
                      Phúc Long
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="" name="type1" hidden />
                    <label
                      htmlFor=""
                      className="border border-solid border-gray2 text-[1.2rem] min-w-[4.8rem] p-[0.8rem] cursor-pointer">
                      Thái xanh
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="" name="type1" hidden />
                    <label
                      htmlFor=""
                      className="border border-solid border-gray2 text-[1.2rem] min-w-[4.8rem] p-[0.8rem] cursor-pointer">
                      Thái đỏ
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mb-[1rem]">
              <div className="text-[1.4rem] text-gray mr-[1rem] min-w-[10rem]">
                Thể tích
              </div>
              <div>
                <div className="text-[1.4rem]">Nhỏ (1-2 lít)</div>
                <div className="my-[1rem] flex gap-[0.8rem]">
                  <div>
                    <input type="radio" id="" name="type2" hidden />
                    <label
                      htmlFor=""
                      className="border border-solid border-gray2 text-[1.2rem] min-w-[4.8rem] p-[0.8rem] cursor-pointer">
                      Nhỏ (1-2 lít)
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="" name="type2" hidden />
                    <label
                      htmlFor=""
                      className="border border-solid border-gray2 text-[1.2rem] min-w-[4.8rem] p-[0.8rem] cursor-pointer">
                      Vừa (2.5-3 lít)
                    </label>
                  </div>
                  <div>
                    <input type="radio" id="" name="type2" hidden />
                    <label
                      htmlFor=""
                      className="border border-solid border-gray2 text-[1.2rem] min-w-[4.8rem] p-[0.8rem] cursor-pointer">
                      To (4-5 lít)
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <div className="text-[1.4rem] text-gray mr-[1rem] min-w-[10rem]">
                Số lượng
              </div>
              <div className="flex">
                <button
                  onClick={handleDecreaseQuantity}
                  className="size-[3.6rem] flex justify-center items-center text-[1.6rem] bg-white3 border border-solid border-gray2">
                  &#8722;
                </button>
                <input
                  className="size-[3.6rem] text-center text-[1.4rem] border border-solid border-gray2 shadow3 outline-none"
                  value={quantity}
                  onChange={handleInputQuantity}
                />
                <button
                  onClick={handleIncreaseQuantity}
                  className="size-[3.6rem] flex justify-center items-center text-[1.6rem] bg-white3 border border-solid border-gray2">
                  &#43;
                </button>
              </div>
            </div>
            <div className="my-[1.8rem]">
              <button className="text-white text-[1.6rem] bg-secondary font-bold p-[1rem] mr-[1rem]">
                Thêm vào giỏ
              </button>
              <button className="text-white text-[1.6rem] bg-secondary font-bold p-[1rem]">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
        <div className="p-12">
          <h2 className="text-[2.1rem] text-dark font-bold mb-[0.8rem]">
            Mô tả
          </h2>
        </div>
        <div className="p-12">
          <form className="p-6 border-2 border-solid border-secondary">
            <h2 className="text-[2.1rem] text-dark font-bold mb-[0.8rem]">
              Thêm đánh giá
            </h2>
            <div className="flex items-center mb-[1rem]">
              <h3 className="text-[1.6rem] text-dark mr-[1rem]">
                Đánh giá của bạn
              </h3>
              <div className="flex flex-row-reverse">
                <input type="radio" id="rate1" name="rate" />
                <label htmlFor="rate1" className="text-[1.6rem] text-gray mr-4">
                  <GoStarFill />
                </label>
                <input type="radio" id="rate2" name="rate" />
                <label htmlFor="rate2" className="text-[1.6rem] text-gray mr-4">
                  <GoStarFill />
                </label>
                <input type="radio" id="rate3" name="rate" />
                <label htmlFor="rate3" className="text-[1.6rem] text-gray mr-4">
                  <GoStarFill />
                </label>
                <input type="radio" id="rate4" name="rate" />
                <label htmlFor="rate4" className="text-[1.6rem] text-gray mr-4">
                  <GoStarFill />
                </label>
                <input type="radio" id="rate5" name="rate" />
                <label htmlFor="rate5" className="text-[1.6rem] text-gray mr-4">
                  <GoStarFill />
                </label>
              </div>
            </div>
            <div className="">
              <h3 className="text-[1.6rem] text-dark mr-[1rem]">
                Nhận xét của bạn
              </h3>
              <textarea className="min-h-[12rem] mb-[1.6rem] border border-solid border-gray2 text-[1.4rem] outline-none shadow3 w-2/4 p-[1rem]"></textarea>
            </div>
            <button className="text-white text-[1.6rem] bg-secondary font-bold p-[1rem]">
              Gửi đánh giá
            </button>
          </form>
        </div>
        <div className="p-12">
          <h2 className="text-[2.1rem] text-dark font-bold mb-[0.8rem]">
            Nhận xét về sản phẩm
          </h2>
          <ul>
            <li className="flex">
              <figure className="mr-[1rem]">
                <Image
                  alt=""
                  width="60"
                  height="60"
                  src={
                    "https://cdn.sforum.vn/sforum/wp-content/uploads/2023/10/avatar-trang-4.jpg"
                  }
                  className="rounded-full"
                />
              </figure>
              <div>
                <div className="flex text-[1.4rem] mb-[0.5rem]">
                  <GoStarFill className="text-secondary" />
                  <GoStarFill className="text-secondary" />
                  <GoStarFill className="text-secondary" />
                  <GoStarFill className="text-secondary" />
                  <GoStarFill className="text-secondary" />
                </div>
                <div>
                  <strong className="text-[1.4rem]">Admin</strong>
                  <span className="text-[1.4rem]"> – 27 Tháng Mười, 2017</span>
                </div>
                <p className="text-[1.4rem]">Rất hợp với dáng em</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="p-12">
          <h2 className="text-[2.1rem] text-dark font-bold mb-[0.8rem]">
            Sản phẩm tương tự
          </h2>
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
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
