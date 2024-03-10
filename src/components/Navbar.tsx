import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-primary">
      <ul className="container flex items-center justify-center flex-wrap">
        <li className="p-[0.6rem] cursor-pointer">
          <Link href={"/shop"} className="text-white text-[0.7rem] font-bold">
            Shop
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/bach-hoa-online"}
            className="text-white text-[0.7rem] font-bold">
            Bách hoá online
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/do-choi"}
            className="text-white text-[0.7rem] font-bold">
            Đồ chơi
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/dong-ho"}
            className="text-white text-[0.7rem] font-bold">
            Đồng hồ
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/giay-dep-nam"}
            className="text-white text-[0.7rem] font-bold">
            Giày dép nam
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/giay-dep-nu"}
            className="text-white text-[0.7rem] font-bold">
            Giày dép nữ
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/may-anh-may-quay-phim"}
            className="text-white text-[0.7rem] font-bold">
            Máy ảnh-máy quay phim
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/may-tinh-laptop"}
            className="text-white text-[0.7rem] font-bold">
            Máy tính & Laptop
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/nha-sach-online"}
            className="text-white text-[0.7rem] font-bold">
            Nhà sách online
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/oto-xe-may-xe-dap"}
            className="text-white text-[0.7rem] font-bold">
            Ô tô-Xe máy-Xe đạp
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/phu-kien-thoi-trang"}
            className="text-white text-[0.7rem] font-bold">
            Phụ kiện thời trang
          </Link>
        </li>
        <li className="p-[0.6rem] cursor-pointer">
          <Link
            href={"/shop/suc-khoe-sac-dep"}
            className="text-secondary text-[0.7rem] font-bold">
            Sức khoẻ & sắc đẹp
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
