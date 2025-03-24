import { Button } from "@mui/material";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { CgLogIn } from "react-icons/cg";
// import { FaRegUser } from "react-icons/fa6";
// import { LoadingButton } from "@mui/lab";
// import { FcGoogle } from "react-icons/fc";
// import { BsFacebook } from "react-icons/bs";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

// const Login = () => {
//   // const [loadingGoogle, setLoadingGoogle] = React.useState(false);
//   // const [loadingFb, setLoadingFb] = React.useState(false);

//   const [isPasswordShow, setisPasswordShow] = React.useState(false);

//   // function handleClickGoogle() {
//   //   setLoadingGoogle(true);
//   // }

//   // function handleClickFb() {
//   //   setLoadingFb(true);
//   // }

//   return (
//     <section className="bg-white w-full ">
//       <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
//         <Link to="/">
//           {/* Ảnh logo */}
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

//           {/* <Button className="!rounded-full !text-[rgba(0,0,0,0.8)] !px-5 flex gap-1">
//             <FaRegUser className="text-[15px]" />
//             Đăng ký
//           </Button> */}
//         </div>
//       </header>
//       {/* Ảnh background */}
//       <img
//         src="sadsad"
//         alt="background"
//         className="w-full fixed top-0 left-0 opacity-5"
//       />

//       <div
//         className="loginBox card w-[600px] h-[auto] pb-20 mx-auto
//       pt-20 relative z-50"
//       >
//         {/* <div className="text-center">
//           <img src="../../../public/logo2.png" alt="logo" className="m-auto" />
//         </div> */}

//         <h1 className="text-center text-[35px] font-[800] mt-4">
//           Chào mừng bạn trở lại
//           <br />
//           Đăng nhập để tiếp tục
//         </h1>

//         {/* <div className="flex items-center justify-center w-full mt-5 gap-4">
//           <LoadingButton
//             size="small"
//             onClick={handleClickGoogle}
//             endIcon={<FcGoogle />}
//             loading={loadingGoogle}
//             loadingPosition="end"
//             variant="outlined"
//             className="!bg-none !py-2 !text-[15px] !capitalize
//                     !px-5 !text-rgba(0,0,0,0.7)"
//           >
//             Đăng nhập với Google
//           </LoadingButton>

//           <LoadingButton
//             size="small"
//             onClick={handleClickFb}
//             endIcon={<BsFacebook />}
//             loading={loadingFb}
//             loadingPosition="end"
//             variant="outlined"
//             className="!bg-none !py-2 !text-[15px] !capitalize
//                     !px-5 !text-rgba(0,0,0,0.7)"
//           >
//             Đăng nhập với Facebook
//           </LoadingButton>
//         </div> */}

//         <br />

//         {/* <div className="w-full flex items-center justify-center gap-3">
//           <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.3)]"></span>
//           <span className="text-[14px] font-[500]">
//             {" "}
//             Hoặc có thể đăng nhập qua email của bạn
//           </span>
//           <span className="flex items-center w-[100px] h-[1px] bg-[rgba(0,0,0,0.3)]"></span>
//         </div> */}

//         {/* <br /> */}

//         <form className="w-full px-8 mt-3">
//           <div className="form-group mb-4 w-full">
//             <h4 className="text-[14px] font-[500] mb-1">Email</h4>
//             <input
//               type="email"
//               className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)]
//                     rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
//             />
//           </div>

//           <div className="form-group mb-4 w-full">
//             <h4 className="text-[14px] font-[500] mb-1">Mật khẩu</h4>

//             <div className="relative w-full">
//               <input
//                 type={isPasswordShow === false ? "password" : "text"}
//                 className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)]
//                         rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
//               />

//               <Button
//                 className="!absolute top-[7px] right-[10px] z-50
//                             !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-500"
//                 onClick={() => setisPasswordShow(!isPasswordShow)}
//               >
//                 {isPasswordShow === false ? (
//                   <FaRegEye className="text-[18px]" />
//                 ) : (
//                   <FaEyeSlash className="text-[18px]" />
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
//               className="text-blue-500 font-[700] text-[15px]
//                     hover:underline hover:text-gray-700"
//             >
//               Quên mật khẩu?
//             </Link>
//           </div>

//           <Button className="btn-blue w-full">Đăng nhập</Button>
//         </form>
//       </div>
//     </section>
//   );
// };
// export default Login;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  // Hàm xử lý đăng nhập
  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    setErrorMessage("");

    try {
      // Ví dụ sử dụng fetch API, thay đổi URL endpoint theo backend
      const response = await fetch("http://localhost:8000/api/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
        credentials: "include",
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(data.error || "Đăng nhập thất bại");
      } else {
        // Xử lý token (lưu vào localStorage hoặc chuyển hướng trang, …)
        console.log("Đăng nhập thành công:", data);
        // Ví dụ: localStorage.setItem("accessToken", data.token);
        // Và chuyển hướng:
        // window.location.href = "/dashboard";
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
      setErrorMessage("Lỗi kết nối, vui lòng thử lại.");
    }
    setLoading(false);
  };

  return (
    <section className="bg-white w-full">
      <header className="w-full fixed top-0 left-0 px-4 py-3 flex items-center justify-between z-50">
        <Link to="/">
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
      <img
        src="sadsad"
        alt="background"
        className="w-full fixed top-0 left-0 opacity-5"
      />

      <div className="loginBox card w-[600px] h-[auto] pb-20 mx-auto pt-20 relative z-50">
        <h1 className="text-center text-[35px] font-[800] mt-4">
          Chào mừng bạn trở lại
          <br />
          Đăng nhập để tiếp tục
        </h1>

        {errorMessage && (
          <p className="text-red-500 text-center mt-2">{errorMessage}</p>
        )}

        <form className="w-full px-8 mt-3" onSubmit={handleLogin}>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
            />
          </div>

          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Mật khẩu</h4>
            <div className="relative w-full">
              <input
                type={isPasswordShow ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)] rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              />
              <Button
                className="!absolute top-[7px] right-[10px] z-50 !rounded-full !w-[35px] !h-[35px] !min-w-[35px] !text-gray-500"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow ? (
                  <FaEyeSlash className="text-[18px]" />
                ) : (
                  <FaRegEye className="text-[18px]" />
                )}
              </Button>
            </div>
          </div>

          <div className="form-group mb-4 w-full flex items-center justify-between">
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Ghi nhớ tôi"
            />
            <Link
              to="/forgot-password"
              className="text-blue-500 font-[700] text-[15px] hover:underline hover:text-gray-700"
            >
              Quên mật khẩu?
            </Link>
          </div>

          <Button className="btn-blue w-full" type="submit" disabled={loading}>
            {loading ? "Đang đăng nhập..." : "Đăng nhập"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Login;
