"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import "./style.scss";
import Image from "next/image";
import Link from "next/link";
import { GoHeart, GoStarFill } from "react-icons/go";
import { IoClose } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchProductsDetail } from "@/lib/features/productDetail/productDetailThunk";
import { TCategories, TCategoriesChild } from "@/types/categories";

const ProductDetail = ({
  params: { detail },
}: {
  params: { detail: string };
}) => {
  const dispatch = useAppDispatch();
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [mainSwiper, setMainSwiper] = useState<any>(null);
  const [quantity, setQuantity] = useState<number>(1);

  const detailData = useAppSelector((state) => state.productDetail.detail);
  const objDetail = detailData?.data?.objDetail;

  const [selectedInput, setSelectedInput] = useState<any>({});

  useEffect(() => {
    if (objDetail) {
      const newObj: { [key: string]: any } = {};
      objDetail.type.forEach((type: any) => {
        if (type.slug && type.value && type.value.length > 0) {
          newObj[type.slug] = type.value[0].name;
        }
      });
      setSelectedInput(newObj);
    }
  }, [objDetail]);

  useEffect(() => {
    dispatch(fetchProductsDetail(detail));
  }, [dispatch, detail]);

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

  const handleMainSlideChange = (swiper: any) => {
    if (thumbsSwiper && mainSwiper) {
      mainSwiper.slideTo(swiper.activeIndex);
    }
  };

  const categoryData = useAppSelector((state) => state.categories.categoryList);
  const categoryList = categoryData?.data?.categories;
  const categoryParent = categoryList?.find((category: TCategories) => {
    return category.id === objDetail?.idCategoryParent;
  });
  const categoryChildren = categoryParent?.children.find(
    (category: TCategoriesChild) => {
      return category.id === objDetail?.idCategoryChildren;
    }
  );

  const objFilterProducts = useAppSelector(
    (state) => state.filtersProducts.productList
  );
  const productList = objFilterProducts?.data?.productFilters;
  const productRelated = productList?.filter(
    (product: TProduct) => product.slug !== detail
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSelectedInput({
      ...selectedInput,
      [name]: value,
    });
  };

  const handleAddToCart = () => {
    console.log(selectedInput);
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
              className="mySwiper2"
              onSlideChange={handleMainSlideChange}>
              {objDetail?.images.map((image: string, index: number) => (
                <SwiperSlide key={index} onClick={() => setIsShowModal(true)}>
                  <Image alt="" width={372} height={372} src={image} />
                </SwiperSlide>
              ))}
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
              {objDetail?.images.map((image: string, index: number) => (
                <SwiperSlide key={index}>
                  <Image alt="" width={372} height={372} src={image} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-7 p-[2.4rem]">
            <div className="flex mb-[1rem]">
              <Link href="/" className="text-gray text-[1.4rem] ">
                TRANG CHỦ
              </Link>
              <div className="text-gray text-[1.4rem] mx-[0.5rem]">/</div>
              <Link href="/categories" className="text-gray text-[1.4rem] ">
                CỬA HÀNG
              </Link>
              <div className="text-gray text-[1.4rem] mx-[0.5rem]">/</div>
              <Link
                href={`/categories/${categoryParent?.slug}`}
                className="text-gray text-[1.4rem] uppercase">
                {categoryParent?.name}
              </Link>
              <div className="text-gray text-[1.4rem] mx-[0.5rem]">/</div>
              <Link
                href={`/categories/${categoryChildren?.slug}`}
                className="text-gray text-[1.4rem] uppercase">
                {categoryChildren?.name}
              </Link>
            </div>
            <h2 className="text-[3.2rem] font-bold">{objDetail?.name}</h2>
            <div className="h-[0.4rem] bg-[rgba(0,0,0,0.1)] my-[1.6rem] w-full max-w-[5rem]"></div>
            <div className="flex items-center justify-between text-[1.4rem]">
              <div className="flex items-center gap-[1.2rem]">
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <GoStarFill key={index} className="text-yellow" />
                  ))}
                </div>
                <Link href={"/"} className="">
                  {objDetail?.evaluates.length} đánh giá
                </Link>
              </div>
              <button>
                <GoHeart className="text-[2rem]" />
              </button>
            </div>
            <div className="my-[1rem]">
              {objDetail?.discount !== 0 && (
                <span className="text-[2rem] line-through text-gray mr-[1rem]">
                  {new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(objDetail?.price)}
                </span>
              )}
              <strong className="text-[2.2rem] text-secondary">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(
                  Math.round(
                    objDetail?.price -
                      (objDetail?.price * objDetail?.discount) / 100
                  )
                )}
              </strong>
            </div>
            {objDetail?.type.map((item: TProductType, index: number) => (
              <div className="flex mb-[1rem]" key={item.slug}>
                <div className="text-[1.4rem] text-gray mr-[1rem] min-w-[10rem]">
                  {item.name}
                </div>
                <div className="">
                  <div className="text-[1.4rem]">
                    {selectedInput[item.slug]}
                  </div>
                  <div className="my-[1rem] flex gap-y-[2.1rem] gap-x-[0.8rem] flex-wrap">
                    {item.value.map((child) => (
                      <div key={child.slug}>
                        <input
                          type="radio"
                          id={child.slug}
                          name={item.slug}
                          value={child.name}
                          data-type1
                          hidden
                          defaultChecked={item.value[0].slug === child.slug}
                          onChange={handleInputChange}
                        />
                        <label
                          htmlFor={child.slug}
                          className="border border-solid border-gray2 text-[1.2rem] min-w-[4.8rem] p-[0.8rem] cursor-pointer noselect">
                          {child.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
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
              <button
                className="text-white text-[1.6rem] bg-secondary font-bold p-[1rem] mr-[1rem]"
                onClick={handleAddToCart}>
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
          <div className="w-full border-2 border-solid border-gray p-[1.5rem]">
            <ul className="list-disc pl-[1.5rem]">
              {objDetail?.descriptions.map(
                (description: string, index: number) => (
                  <li className="text-[1.6rem] mb-[0.8rem]" key={index}>
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
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
                <input type="radio" id="rate1" name="rate" hidden />
                <label
                  htmlFor="rate1"
                  className="text-[1.6rem] text-gray mr-4 cursor-pointer">
                  <GoStarFill />
                </label>
                <input type="radio" id="rate2" name="rate" hidden />
                <label
                  htmlFor="rate2"
                  className="text-[1.6rem] text-gray mr-4 cursor-pointer">
                  <GoStarFill />
                </label>
                <input type="radio" id="rate3" name="rate" hidden />
                <label
                  htmlFor="rate3"
                  className="text-[1.6rem] text-gray mr-4 cursor-pointer">
                  <GoStarFill />
                </label>
                <input type="radio" id="rate4" name="rate" hidden />
                <label
                  htmlFor="rate4"
                  className="text-[1.6rem] text-gray mr-4 cursor-pointer">
                  <GoStarFill />
                </label>
                <input type="radio" id="rate5" name="rate" hidden />
                <label
                  htmlFor="rate5"
                  className="text-[1.6rem] text-gray mr-4 cursor-pointer">
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
            {objDetail?.evaluates.map((evaluate: TProductEvaluate) => (
              <li className="flex" key={evaluate.id}>
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
                    {Array.from({ length: evaluate.star }).map(
                      (_, index: number) => (
                        <GoStarFill key={index} className="text-yellow" />
                      )
                    )}
                  </div>
                  <div>
                    <strong className="text-[1.4rem]">{evaluate.name}</strong>
                    <span className="text-[1.4rem]"> – {evaluate.time}</span>
                  </div>
                  <p className="text-[1.4rem]">{evaluate.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-12">
          <h2 className="text-[2.1rem] text-dark font-bold mb-[1.5rem]">
            Sản phẩm tương tự
          </h2>
          <div className="grid grid-cols-4">
            {productRelated?.slice(0, 8)?.map((product: TProduct) => {
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
        </div>
      </div>
      <div
        className={`fixed inset-0 z-[999] ${isShowModal ? "block" : "hidden"}`}>
        <button
          className="fixed z-[999] right-0 p-[0.5rem]"
          onClick={() => setIsShowModal(false)}>
          <IoClose className="size-[3.2rem] text-white" />
        </button>
        <Swiper
          onSwiper={setMainSwiper}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper3">
          {objDetail?.images.map((image: string, index: number) => (
            <SwiperSlide key={index}>
              <Image alt="" width={372} height={372} src={image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
};

export default ProductDetail;
