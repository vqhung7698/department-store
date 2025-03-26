import { Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
// import LoadingButton from "@mui/lab/LoadingButton";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import CircularProgress from "@mui/material/CircularProgress";
import { postData } from "../../../utils/api";
import { MyContext } from "../../App.jsx";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPasswordShow, setisPasswordShow] = React.useState(false);

  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const valideValue = Object.values(formFields).every((el) => el);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);

    if (formFields.email === "") {
      context.alertBox("error", "Vui lòng nhập email của bạn");
      return false;
    }

    if (formFields.password === "") {
      context.alertBox("error", "Vui lòng nhập mật khẩu");
      return false;
    }

    // postData("/api/user/login", formFields, { withCredentials: true }).then(
    postData("/api/admin/login", formFields, { withCredentials: true }).then(
      (res) => {
        console.log(res);

        if (res?.error !== true) {
          setIsLoading(false);
          context.alertBox("success", res?.message);
          setFormFields({
            email: "",
            password: "",
          });

          // localStorage.setItem("accessToken", res?.data?.accesstoken);
          localStorage.setItem("accessToken", res?.data?.accessToken); // Chữ T hoa
          localStorage.setItem("refreshToken", res?.data?.refreshToken);

          context.setIsLogin(true);

          history("/");
        } else {
          context.alertBox("error", res?.message);
          setIsLoading(false);
        }
      }
    );
  };

  return (
    <section className="bg-white w-full ">
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
        {/* <div className="text-center">
          <img src="../../../public/logo2.png" alt="logo" className="m-auto" />
        </div> */}

        <h1 className="text-center text-[35px] font-[800] mt-4">
          Chào mừng bạn trở lại
          <br />
          Đăng nhập để tiếp tục
        </h1>

        <br />

        <form className="w-full px-8 mt-3" onSubmit={handleSubmit}>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)]
                    rounded-md focus:border-[rgba(0,0,0,0.7)]
                    focus:outline-none px-3"
              name="email"
              value={formFields.email}
              disabled={isLoading === true ? true : false}
              onChange={onChangeInput}
            />
          </div>

          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Mật khẩu</h4>

            <div className="relative w-full">
              <input
                type={isPasswordShow === false ? "password" : "text"}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)]
                        rounded-md focus:border-[rgba(0,0,0,0.7)]
                        focus:outline-none px-3"
                name="password"
                value={formFields.password}
                disabled={isLoading === true ? true : false}
                onChange={onChangeInput}
              />

              <Button
                className="!absolute top-[7px] right-[10px] z-50
                            !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-500"
                onClick={() => setisPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === false ? (
                  <FaRegEye className="text-[18px]" />
                ) : (
                  <FaEyeSlash className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          <div className="form-group mb-4 w-full flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Ghi nhớ tôi"
            />

            {/* <Link
              to="/forgot-password"
              className="text-blue-500 font-[700] text-[15px]
                    hover:underline hover:text-gray-700"
            >
              Quên mật khẩu?
            </Link> */}
          </div>

          <Button
            type="submit"
            disabled={!valideValue}
            className="btn-blue btn-lg w-full"
          >
            {/* Đăng nhập */}
            {isLoading === true ? (
              <CircularProgress color="inherit" />
            ) : (
              "Đăng nhập"
            )}
          </Button>
        </form>
      </div>
    </section>
  );
};
export default Login;

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [isPasswordShow, setIsPasswordShow] = useState(false);

//   // Hàm xử lý đăng nhập
//   const handleLogin = async (event) => {
//     event.preventDefault();
//     setErrorMessage("");
//     setLoading(true);

//     // Kiểm tra nếu email hoặc mật khẩu rỗng
//     if (!email || !password) {
//       setErrorMessage("Vui lòng nhập email và mật khẩu");
//       setLoading(false);
//       // alert("Vui lòng nhập email và mật khẩu");
//       return;
//     }

//     try {
//       // Sử dụng fetch API, thay đổi URL endpoint theo backend
//       const response = await fetch("http://localhost:8000/api/admin/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ email, password }),
//         credentials: "include",
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         // Nếu lỗi do sai tài khoản hoặc mật khẩu, backend có thể trả về message này
//         if (data.error && data.error.includes("Sai tài khoản")) {
//           setErrorMessage("Sai tài khoản hoặc mật khẩu");
//         } else {
//           setErrorMessage(data.error || "Đăng nhập thất bại");
//         }
//       } else {
//         console.log("Đăng nhập thành công:", data);

//         // Xử lý token (lưu vào localStorage hoặc chuyển hướng trang, …)
//         localStorage.setItem("accessToken", data.token);
//         // Hiển thị thông báo đăng nhập thành công
//         alert("Đăng nhập thành công!");
//         // Chuyển hướng:
//         window.location.href = "/";
//       }
//     } catch (error) {
//       console.error("Lỗi khi đăng nhập:", error);
//       setErrorMessage("Sai tài khoản hoặc mật khẩu.");
//     }
//     setLoading(false);
//   };

//   return (
//     <section className="bg-white w-full">
//       <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
//         <Link to="/">
//           <img
//             src="../../../public/logo2.png"
//             alt="logo"
//             className="w-[120px]"
//           />
//         </Link>
//         <div className="flex items-center gap-0">
//           <NavLink to="/login" exact={true} activeClassName="isActive">
//             <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
//               <CgLogIn className="text-[18px]" />
//               Đăng nhập
//             </Button>
//           </NavLink>
//         </div>
//       </header>
//       <img
//         src="sadsad"
//         alt="background"
//         className="w-full fixed top-0 left-0 opacity-5"
//       />

//       <div className="loginBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50">
//         <h1 className="text-center text-[35px] font-[800] mt-4">
//           Chào mừng bạn trở lại
//           <br />
//           Đăng nhập để tiếp tục
//         </h1>

//         {errorMessage && (
//           <p className="text-red-500 text-center mt-2">{errorMessage}</p>
//         )}

//         <form className="w-full px-8 mt-3" onSubmit={handleLogin}>
//           <div className="form-group mb-4 w-full">
//             <h4 className="text-[14px] font-[500] mb-1">Email</h4>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
//             />
//           </div>

//           <div className="form-group mb-4 w-full">
//             <h4 className="text-[14px] font-[500] mb-1">Mật khẩu</h4>
//             <div className="relative w-full">
//               <input
//                 type={isPasswordShow ? "text" : "password"}
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
//               />
//               <Button
//                 className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-500"
//                 onClick={() => setIsPasswordShow(!isPasswordShow)}
//               >
//                 {isPasswordShow ? (
//                   <FaEyeSlash className="text-[18px]" />
//                 ) : (
//                   <FaRegEye className="text-[18px]" />
//                 )}
//               </Button>
//             </div>
//           </div>

//           <div className="form-group mb-4 w-full flex items-center justify-between">
//             <FormControlLabel
//               control={<Checkbox defaultChecked />}
//               label="Ghi nhớ tôi"
//             />
//             <Link
//               to="/forgot-password"
//               className="text-blue-500 font-[700] text-[15px] hover:underline hover:text-gray-700"
//             >
//               Quên mật khẩu?
//             </Link>
//           </div>

//           <Button className="btn-blue w-full" type="submit" disabled={loading}>
//             {loading ? "Đang đăng nhập..." : "Đăng nhập"}
//           </Button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Login;
