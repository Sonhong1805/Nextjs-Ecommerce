"use client";
import React from "react";
import { MdWork } from "react-icons/md";
import { TiArrowUnsorted, TiHome } from "react-icons/ti";
import "./style.scss";
import Image from "next/image";
import { FaRegCircle, FaRegTrashCan } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  username: z
    .string()
    .nonempty({ message: "Thông tin bắt buộc" })
    .min(2, "Độ dài phải từ 2 - 50 kí tự")
    .max(50, "Độ dài phải từ 2 - 50 kí tự"),
  phoneNumber: z
    .string()
    .nonempty({ message: "Thông tin bắt buộc" })
    .regex(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, {
      message: "Nhập số điện thoại hợp lệ",
    }),
  address: z
    .string()
    .nonempty({ message: "Thông tin bắt buộc" })
    .min(
      5,
      "Vui lòng chỉ điền Số nhà, Tên Đường, Tên Căn hộ/Tòa Nhà/Công Ty ở đây (Chiều dài từ 5-350 ký tự)"
    )
    .max(
      350,
      "Vui lòng chỉ điền Số nhà, Tên Đường, Tên Căn hộ/Tòa Nhà/Công Ty ở đây (Chiều dài từ 5-350 ký tự)"
    ),
});

const Payment = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPaymentInputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<IPaymentInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <main className="bg-white2">
      <div className="container pt-[1.2rem]">
        <div className="flex items-start gap-[1.2rem]">
          <div className="flex-1">
            <section className="bg-white">
              <h2 className="text-[1.8rem] py-[2.5rem] px-[3.8rem]">
                Thông tin giao hàng
              </h2>
              <div className="px-[3.8rem] pb-[3.8rem]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex gap-[3rem]">
                    <div className="flex-1">
                      <div>
                        <label
                          htmlFor="username"
                          className="text-[1.2rem] mb-[0.5rem] block">
                          Họ tên
                        </label>{" "}
                        <input
                          id="username"
                          {...register("username")}
                          className={`text-[1.4rem] h-[3.2rem] border ${
                            errors.username?.message
                              ? "border-error"
                              : "border-gray2"
                          } border-solid shadow3 px-4 w-full outline-none my-[0.2rem]`}
                          placeholder="Họ Tên"
                        />
                        <div className="mb-[1.4rem] text-error text-[1.2rem]">
                          {errors.username?.message}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="phoneNumber"
                          className="text-[1.2rem] mb-[0.5rem] block">
                          Số điện thoại
                        </label>{" "}
                        <input
                          id="phoneNumber"
                          {...register("phoneNumber")}
                          className={`text-[1.4rem] h-[3.2rem] border ${
                            errors.phoneNumber?.message
                              ? "border-error"
                              : "border-gray2"
                          } border-solid shadow3 px-4 w-full outline-none my-[0.2rem]`}
                          placeholder="Xin vui lòng nhập số điện thoại của bạn"
                        />
                        <div className="mb-[1.4rem] text-error text-[1.2rem]">
                          {errors.phoneNumber?.message}
                        </div>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div>
                        <label
                          htmlFor="address"
                          className="text-[1.2rem] mb-[0.5rem] block">
                          Địa chỉ nhận hàng
                        </label>{" "}
                        <input
                          id="address"
                          {...register("address")}
                          className={`text-[1.4rem] h-[3.2rem] border ${
                            errors.address?.message
                              ? "border-error"
                              : "border-gray2"
                          } border-solid shadow3 px-4 w-full outline-none my-[0.2rem]`}
                          placeholder="Vui lòng nhập địa chỉ của bạn"
                        />
                        <div className="mb-[1.4rem] text-error text-[1.2rem]">
                          {errors.address?.message}
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="username"
                          className="text-[1.2rem] mb-[0.5rem] block">
                          Tỉnh/ Thành phố
                        </label>{" "}
                        <div className="flex items-center justify-between h-[3.2rem] border border-gray2 border-solid shadow3 px-4 w-full outline-none my-[0.2rem]">
                          <span className="text-[1.4rem] text-gray ">
                            Vui lòng chọn tỉnh/thành phố
                          </span>
                          <TiArrowUnsorted className="text-[2rem] text-gray" />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="username"
                          className="text-[1.2rem] mb-[0.5rem] block">
                          Quận/ Huyện
                        </label>{" "}
                        <div className="flex items-center justify-between h-[3.2rem] border border-gray2 border-solid shadow3 px-4 w-full outline-none my-[0.2rem]">
                          <span className="text-[1.4rem] text-gray ">
                            Vui lòng chọn quận/huyện
                          </span>
                          <TiArrowUnsorted className="text-[2rem] text-gray" />
                        </div>
                      </div>
                      <div>
                        <label
                          htmlFor="username"
                          className="text-[1.2rem] mb-[0.5rem] block">
                          Phường/ Xã
                        </label>{" "}
                        <div className="flex items-center justify-between h-[3.2rem] border border-gray2 border-solid shadow3 px-4 w-full outline-none my-[0.2rem]">
                          <span className="text-[1.4rem] text-gray ">
                            Vui lòng chọn phường/xã
                          </span>
                          <TiArrowUnsorted className="text-[2rem] text-gray" />
                        </div>
                      </div>
                      <div className="mt-[1rem]">
                        <p className="text-[1.4rem]">
                          Lựa chọn tên cho địa chỉ thường dùng:
                        </p>
                        <div className="flex items-center gap-[1.5rem] mt-[1.5rem]">
                          <input type="radio" name="type" id="office" />
                          <label
                            htmlFor="office"
                            className="flex items-center justify-between p-[2rem] border border-solid border-primary rounded-[0.6rem]">
                            <MdWork className="text-gray size-[1.8rem] mr-[1rem]" />
                            <span className="text-[1.2rem]">VĂN PHÒNG</span>
                          </label>
                          <input type="radio" name="type" id="home" />
                          <label
                            htmlFor="home"
                            className="flex items-center justify-between p-[2rem] border border-solid border-primary rounded-[0.6rem]">
                            <TiHome className="text-gray size-[1.8rem] mr-[1rem]" />
                            <span className="text-[1.2rem]">NHÀ RIÊNG</span>
                          </label>
                        </div>
                      </div>
                      <div className="mt-[3rem] text-end">
                        <button
                          type="submit"
                          className="w-[16.8rem] h-[4rem] bg-cyan text-[1.4rem] text-white rounded-[0.2rem]">
                          LƯU
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </section>
            <section>
              <div className="flex items-center justify-between bg-gray2 px-[1rem] mt-[1.2rem]">
                <p className="text-[1.4rem] py-[1rem]">Địa chỉ giao hàng</p>
                <button className="text-[1.4rem] text-cyan">Chỉnh sửa</button>
              </div>
              <div className="bg-white p-[1.2rem]">
                <div className="mb-[1.2rem]">
                  <span className="text-[1.4rem] mr-[1.8rem]">
                    Nguyễn Hồng Sơn
                  </span>
                  <span className="text-[1.4rem]">0327842451</span>
                </div>
                <div className="mb-[1.2rem]">
                  <span className="bg-cyan text-white font-bold rounded-full py-[0.2rem] px-[1.3rem] text-[1.2rem] mr-[1rem]">
                    VĂN PHÒNG
                  </span>
                  <span className="text-[1.4rem]">
                    173 Phố Định Công, Phường Định Công, Quận Hoàng Mai, Hà Nội
                  </span>
                </div>
              </div>
            </section>
            <section>
              <article className="mt-[1.2rem]">
                <p className="text-[1.4rem] bg-gray2 pl-[1rem] py-[1rem] font-bold">
                  Gói hàng 1 của 2
                </p>
                <div className="flex justify-between gap-[1rem] bg-white px-[1rem] py-[1.6rem]">
                  <div className="pl-[1rem]">
                    <Image
                      src="https://mauweb.monamedia.net/lazada/wp-content/uploads/2017/10/Oganic-01-300x300.jpg"
                      width={80}
                      height={80}
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[1.6rem]">
                      [Natierra] Việt quất, phúc bồn tử, dâu tây, táo xanh hữu
                      cơ sấy lạnh 30g
                    </p>
                  </div>
                  <div className="flex-1">
                    <span className="text-[1.8rem] text-secondary">
                      170,000 ₫
                    </span>
                    <div>
                      <FaRegTrashCan className="size-[2rem] text-gray3 cursor-pointer" />
                    </div>
                  </div>
                  <div className="pr-[2rem]">
                    <span className="text-[1.4rem] text-gray">Số lượng: </span>
                    <strong className="text-[1.6rem]">1</strong>
                  </div>
                </div>
              </article>
              <article className="mt-[1.2rem]">
                <p className="text-[1.4rem] bg-gray2 pl-[1rem] py-[1rem] font-bold">
                  Gói hàng 2 của 2
                </p>
                <div className="flex justify-between gap-[1rem] bg-white px-[1rem] py-[1.6rem]">
                  <div className="pl-[1rem]">
                    <Image
                      src="https://mauweb.monamedia.net/lazada/wp-content/uploads/2017/10/Oganic-01-300x300.jpg"
                      width={80}
                      height={80}
                      alt=""
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-[1.6rem]">
                      [Natierra] Việt quất, phúc bồn tử, dâu tây, táo xanh hữu
                      cơ sấy lạnh 30g
                    </p>
                  </div>
                  <div className="flex-1">
                    <span className="text-[1.8rem] text-secondary">
                      170,000 ₫
                    </span>
                    <div>
                      <FaRegTrashCan className="size-[2rem] text-gray3 cursor-pointer" />
                    </div>
                  </div>
                  <div className="pr-[2rem]">
                    <span className="text-[1.4rem] text-gray">Số lượng: </span>
                    <strong className="text-[1.6rem]">1</strong>
                  </div>
                </div>
              </article>
            </section>
          </div>
          <aside className="w-[38.8rem] bg-white px-[1.4rem] py-[1.6rem]">
            <div className="mb-[1.4rem]">
              <span className="text-[1.8rem]">Chọn phương thức thanh toán</span>
            </div>
            <div className="pb-[1.6rem]">
              <div className="border border-solid border-cyan rounded-[0.4rem] mb-[1rem]">
                <div className="flex items-center justify-between p-[1.2rem] border-b border-solid border-gray2">
                  <Image
                    src={"/images/method-cash.webp"}
                    alt=""
                    width={28}
                    height={28}
                  />
                  <p className="flex-1 ml-[0.8rem] text-[1.4rem]">
                    Thanh toán khi nhận hàng
                  </p>
                  <FaCheckCircle className="text-cyan size-[1.8rem]" />
                </div>
                <div className="py-[0.6rem] px-[1.2rem] text-[1.2rem] text-gray3">
                  Thanh toán khi nhận hàng
                </div>
              </div>
              <div className="border border-solid border-gray2 rounded-[0.4rem] mb-[1rem]">
                <div className="flex items-center justify-between p-[1.2rem] border-b border-solid border-gray2">
                  <Image
                    src={"/images/method-credit.webp"}
                    alt=""
                    width={28}
                    height={28}
                  />
                  <p className="flex-1 ml-[0.8rem] text-[1.4rem]">
                    Thẻ tín dụng/Thẻ ghi nợ
                  </p>
                  <FaRegCircle className="text-gray2 size-[1.8rem]" />
                </div>
                <div className="py-[0.6rem] px-[1.2rem] text-[1.2rem] text-gray3">
                  Thẻ tín dụng/Thẻ ghi nợ
                </div>
              </div>
            </div>
            <div className="py-[0.8rem]">
              <p className="text-[1.8em] mb-[1.4rem]">Mã giảm giá</p>
              <div className="flex ">
                <input
                  className="text-[1.4rem] h-[3.8rem] px-[0.9rem] w-full mr-[0.8rem] border border-solid border-gray2 outline-none"
                  placeholder="Mã giảm giá"
                />
                <button className="bg-cyan text-white flex items-center justify-center text-[1.6rem] uppercase px-[1.5rem] whitespace-nowrap">
                  Áp dụng
                </button>
              </div>
            </div>
            <div className="py-[1.6rem] flex justify-between">
              <p className="text-[1.8rem]">Thông tin liên hệ và hóa đơn</p>
              <p className="text-[1.4rem] text-cyan">Edit</p>
            </div>
            <div className="pb-[1.6rem] border-b border-solid border-gray2">
              <div className="text-[1.8rem] mb-[1.4rem]">
                Thông tin đơn hàng
              </div>
              <div className="flex items-center justify-between mb-[1.6rem]">
                <div className="text-[1.4rem] text-gray">
                  Tạm tính (2 Sản phẩm)
                </div>
                <div className="text-[1.6rem]">59.880 ₫</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-[1.4rem] text-gray">Phí vận chuyển</div>
                <div className="text-[1.6rem]">33.000 ₫</div>
              </div>
            </div>
            <div className="pt-[1.4rem]">
              <div className="flex justify-between mb-[1.6rem]">
                <div className="text-[1.4rem]">Tổng cộng:</div>
                <div className="text-[1.8rem] text-secondary">92.880 ₫</div>
              </div>
              <button className="h-[4rem] text-[1.4rem] bg-gray2 text-white w-full rounded-[0.2rem] cursor-no-drop">
                ĐẶT HÀNG
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default Payment;
