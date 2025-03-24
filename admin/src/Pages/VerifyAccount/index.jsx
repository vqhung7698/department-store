// import { useState, useRef } from "react";
import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
import OtpBox from "../../Components/OtpBox";

const VerifyAccount = () => {
  return (
    <section className="bg-white w-full h-[100vh]">
      <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
        <Link to="/">
          {/* Ảnh logo */}
          <img
            src="../../../public/logo2.png"
            alt="logo"
            className="w-[120px]"
          />
        </Link>

        <div className="flex items-center gap-0">
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
              <CgLogIn className="text-[18px]" />
              Đăng nhập
            </Button>
          </NavLink>
        </div>
      </header>
      {/* Ảnh background */}
      <img
        src="sadsad"
        alt="background"
        className="w-full fixed top-0 left-0 opacity-5"
      />

      <div
        className="loginBox card w-[600px] h-[auto] pb-20 mx-auto 
      pt-20 relative z-50"
      >
        <div className="text-center">
          <img
            src="../../../public/verify2.png"
            alt="logo xác thực"
            className="w-[100px] m-auto"
          />
        </div>
        <h1 className="text-center text-[35px] font-[800] mt-4">
          Chào mừng bạn trở lại
          <br />
          Xác thực email của bạn
        </h1>

        <br />
        <p className="text-center text-[15px]">
          Mã OTP đã gửi đến
          <span className="text-primary font-bold"> User123@gmail.com</span>
        </p>
        <br />
        <div className="text-center flex items-center justify-center flex-col">
          <OtpBox />
        </div>
        <br />
        <div className="w-[300px] m-auto">
          <Button className="btn-blue w-full">Xác thực OTP </Button>
        </div>
      </div>
    </section>
  );
};
export default VerifyAccount;
