import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImCart } from "react-icons/im";
import { PiMagnifyingGlassBold } from "react-icons/pi";

const Header = () => {
  return (
    <header>
      <div className="bg-dark4">
        <ul className="container flex justify-end items-center gap-[2.5rem]">
          <li className="mx-[0.7rem]">
            <Link
              href="/"
              className="text-white text-gray4 text-[1.2rem] opacity-50 hover:opacity-100 py-[0.7rem] block uppercase">
              Chăm sóc khách hàng
            </Link>
          </li>
          <li className="mx-[0.7rem]">
            <Link
              href="/"
              className="text-white text-gray4 text-[1.2rem] opacity-50 hover:opacity-100 py-[0.7rem] block uppercase">
              Kiểm tra đơn hàng
            </Link>
          </li>
          <li className="mx-[0.7rem]">
            <Link
              href="/"
              className="text-white text-gray4 text-[1.2rem] opacity-50 hover:opacity-100 py-[0.7rem] block uppercase">
              Đăng nhập
            </Link>
          </li>
          <li className="">
            <Link
              href="/"
              className="text-white text-gray4 text-[1.2rem] opacity-50 hover:opacity-100 py-[0.7rem] block uppercase">
              Đăng ký
            </Link>
          </li>
        </ul>
      </div>
      <div className="bg-primary border border-dark4 border-solid">
        <div className="container h-[7.5rem] flex items-center justify-between">
          <Link href={"/"} className="mr-12 block">
            <Image src={"/svg/logo.svg"} alt="logo" width={124} height={2.32} />
          </Link>
          <div className="flex-1 flex items-center gap-[1.4rem]">
            <div className="flex w-[72%]">
              <input
                type="search"
                className="text-[1.2rem] h-[3.8rem] px-[0.9rem] w-full border border-solid border-gray2 outline-none"
                placeholder="Tìm sản phẩm, thương hiệu và tên shop"
              />
              <button className="bg-secondary text-white size-[3.8rem] flex items-center justify-center text-[2rem]">
                <PiMagnifyingGlassBold />
              </button>
            </div>
            <div>
              <ImCart className="text-white w-8 h-8" />
            </div>
          </div>
          <div>
            <Image
              src={"/images/header-promotion.png"}
              alt="header-promotion"
              width={170}
              height={4.173}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
