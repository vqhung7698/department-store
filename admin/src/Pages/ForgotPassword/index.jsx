import { Button } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
// import { FaRegUser } from "react-icons/fa6";

const ForgotPassword = () => {
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

      <div
        className="loginBox card w-[600px] h-[auto] pb-20 mx-auto 
      pt-20 relative z-50"
      >
        <h1 className="text-center text-[35px] font-[800] mt-4">
          Bạn quên tài khoản?
          <br />
          Nhập email để khôi phục
        </h1>

        <br />

        <form className="w-full px-8 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] 
                    rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
            />
          </div>

          <Button className="btn-blue w-full">Khôi phục mật khẩu</Button>
        </form>
      </div>
    </section>
  );
};
export default ForgotPassword;
