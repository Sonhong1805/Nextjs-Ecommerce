"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF, FaGooglePlusG } from "react-icons/fa6";
import { TbEyeClosed, TbEye } from "react-icons/tb";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  email: z
    .string()
    .nonempty({ message: "Thông tin bắt buộc" })
    .email({ message: "Địa chỉ Email không hợp lệ" }),
  password: z.string().nonempty({ message: "Thông tin bắt buộc" }),
});

const Login = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<ILoginInputs> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <main className="bg-white2 h-screen">
      <div className="container p-12">
        <div className="w-[80rem] mx-auto bg-white py-12 px-[15rem]">
          <h3 className="text-dark text-[1.75rem] uppercase mb-[0.875rem] font-medium ">
            đăng nhập
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-[0.7rem]">
              <label
                htmlFor="email"
                className="text-[1.26rem] text-dark3 mb-[0.5rem] font-medium block">
                Địa chỉ email *
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="text-[1.4rem] h-[3.2rem] border border-gray2 border-solid shadow3 px-4 w-full outline-none mb-[1.4rem]"
              />
            </div>
            <p className="text-red-500 text-[1.4rem] relative top-[-1.2rem]">
              {errors.email?.message}
            </p>
            <div className="mb-[0.7rem]">
              <div className="flex justify-between items-center">
                <label
                  htmlFor="password"
                  className="text-[1.26rem] text-dark3 mb-[0.5rem] font-medium block">
                  Mật khẩu *
                </label>
                <Link
                  href={"/forgot-password"}
                  className="text-[1.4rem] text-gray hover:text-secondary">
                  Quên mật khẩu?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={isShowPassword ? "text" : "password"}
                  id="password"
                  {...register("password")}
                  className="text-[1.4rem] h-[3.2rem] border border-gray2 border-solid shadow3 px-4 w-full outline-none mb-[1.4rem]"
                />
                {isShowPassword ? (
                  <TbEye
                    className="absolute cursor-pointer right-[1rem] top-[0.4rem] text-[2.6rem]"
                    onClick={() => setIsShowPassword(false)}
                  />
                ) : (
                  <TbEyeClosed
                    className="absolute cursor-pointer right-[1rem] top-[0.4rem] text-[2.6rem]"
                    onClick={() => setIsShowPassword(true)}
                  />
                )}
              </div>
            </div>
            <p className="text-red-500 text-[1.4rem] relative top-[-1.2rem]">
              {errors.password?.message}
            </p>
            <div className="flex items-center gap-3">
              <input type="checkbox" name="isRemember" id="isRemember" />
              <label
                htmlFor="isRemember"
                className="text-[1.26rem] text-dark3 font-medium">
                Ghi nhớ mật khẩu
              </label>
            </div>
            <button
              type="submit"
              className="px-[1.4rem] w-full py-1 bg-secondary text-white font-bold mt-4 mb-8 text-[1.6rem] uppercase">
              Đăng nhập
            </button>
          </form>
          <div>
            <p className="text-center text-gray text-[1.4rem] mb-[1.5rem]">
              Hoặc, đăng nhập bằng
            </p>
            <div className="flex items-center gap-[1.4rem]">
              <button className="flex flex-1 justify-center gap-4 items-center bg-[#3a589d] text-white text-[1.4rem] rounded-full py-4 px-[1.6rem]">
                <FaFacebookF className="size-[1.5rem]" />
                <span>Login with Facebook</span>
              </button>
              <button className="flex flex-1 justify-center gap-4 items-center bg-[#dd4e31] text-white text-[1.4rem] rounded-full py-4 px-[1.6rem]">
                <FaGooglePlusG className="size-[2rem]" />
                <span>Login with Google</span>
              </button>
            </div>
          </div>
          <p className="text-gray text-[1.4rem] mt-4">
            Đăng ký tại đây?{" "}
            <Link href={"/signup"} className="text-secondary">
              Đăng ký
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Login;
