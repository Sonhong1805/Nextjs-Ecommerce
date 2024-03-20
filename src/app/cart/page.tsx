"use client";
import Image from "next/image";
import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegHeart, FaRegTrashCan } from "react-icons/fa6";

const Cart = () => {
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
    <main className="bg-white2">
      <div className="container flex py-16">
        <div className="flex-1">
          <div className="flex items-center justify-between h-[4rem] px-[1.2rem] bg-white">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="size-[1.6rem] mr-[1.6rem] accent-secondary"
              />
              <span className="text-[1.4rem] uppercase">
                Chọn tất cả (0 sản phẩm)
              </span>
            </div>
            <button className="flex py-[1rem] text-gray hover:text-secondary">
              <FaRegTrashCan className="text-[1.6rem] mr-[0.5rem]" />
              <span className="text-[1.4rem] uppercase">Xoá</span>
            </button>
          </div>
          <div className="">
            <div className="flex items-center justify-between bg-white mt-[1.2rem] px-[1.2rem] py-[1.6rem]">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="size-[1.6rem] mr-[1.6rem] accent-secondary"
                />
                <Image
                  src="https://mauweb.monamedia.net/lazada/wp-content/uploads/2017/10/Oganic-01-300x300.jpg"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-1">
                <p className="text-[1.4rem] text-dark2 font-bold">
                  [Natierra] Việt quất, phúc bồn tử, dâu tây, táo xanh hữu cơ
                  sấy lạnh 30g
                </p>
              </div>
              <div className="flex-1 text-center">
                <div className="text-[1.8rem] font-medium text-secondary">
                  170,000 ₫
                </div>
                <div className="mt-[0.5rem] flex items-center gap-[1rem] justify-center">
                  <button className="">
                    <FaRegHeart className="size-[2rem] text-gray3" />
                  </button>
                  <button className="">
                    <FaRegTrashCan className="size-[2rem] text-gray3" />
                  </button>
                </div>
              </div>
              <div>
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
            </div>
            <div className="flex items-center justify-between bg-white mt-[1.2rem] px-[1.2rem] py-[1.6rem]">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="size-[1.6rem] mr-[1.6rem] accent-secondary"
                />
                <Image
                  src="https://mauweb.monamedia.net/lazada/wp-content/uploads/2017/10/Oganic-01-300x300.jpg"
                  alt=""
                  width={80}
                  height={80}
                />
              </div>
              <div className="flex-1">
                <p className="text-[1.4rem] text-dark2 font-bold">
                  [Natierra] Việt quất, phúc bồn tử, dâu tây, táo xanh hữu cơ
                  sấy lạnh 30g
                </p>
              </div>
              <div className="flex-1 text-center">
                <div className="text-[1.8rem] font-medium text-secondary">
                  170,000 ₫
                </div>
                <div className="mt-[0.5rem] flex items-center gap-[1rem] justify-center">
                  <button className="">
                    <FaRegHeart className="size-[2rem] text-gray3" />
                  </button>
                  <button className="">
                    <FaRegTrashCan className="size-[2rem] text-gray3" />
                  </button>
                </div>
              </div>
              <div>
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
            </div>
          </div>
        </div>
        <div className="bg-white ml-[1.2rem] w-[38.8rem] p-[1.6rem]">
          <div className="pb-[1.6rem] border-b border-solid border-gray2">
            <div className="text-[1.4rem] text-gray mb-[1.1rem]">Địa điểm</div>
            <div className="flex items-center gap-[1rem]">
              <CiLocationOn className="text-[2rem] text-gray" />
              <span className="text-[1.2rem]">Địa chỉ</span>
            </div>
          </div>
          <div className="pt-[1.6rem]">
            <div className="text-[1.8rem] mb-[1.4rem]">Thông tin đơn hàng</div>
            <div className="flex items-center justify-between mb-[1.6rem]">
              <div className="text-[1.4rem] text-gray">
                Tạm tính (2 sản phẩm)
              </div>
              <span className="text-[1.6rem]">242.000 ₫</span>
            </div>
            <div className="flex items-center justify-between mb-[1.6rem]">
              <div className="text-[1.4rem] text-gray">Phí vận chuyển</div>
              <span className="text-[1.6rem]">19.600 ₫</span>
            </div>
          </div>
          <div className="flex py-[0.8rem]">
            <input
              className="text-[1.4rem] h-[3.8rem] px-[0.9rem] w-full mr-[0.8rem] border border-solid border-gray2 outline-none"
              placeholder="Mã ưu đãi"
            />
            <button className="bg-primary text-white flex items-center justify-center text-[1.6rem] uppercase px-[1.5rem] whitespace-nowrap">
              Áp dụng
            </button>
          </div>
          <div className="pt-[1rem]">
            <div className="flex justify-between mb-[1.6rem]">
              <div className="text-[1.6rem]">Tổng cộng</div>
              <div className="text-end">
                <span className="text-[1.8rem] text-secondary">242.000 ₫</span>
                <p className="text-[1.2rem]">Đã bao gồm VAT (nếu có)</p>
              </div>
            </div>
          </div>
          <button className="bg-secondary w-full text-white flex items-center justify-center text-[1.6rem] uppercase p-[1rem] whitespace-nowrap">
            Xác nhận giỏ hàng (2)
          </button>
        </div>
      </div>
    </main>
  );
};

export default Cart;
