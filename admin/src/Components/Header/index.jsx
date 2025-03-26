import { useContext, useState } from "react";
import Button from "@mui/material/Button";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { RiMenu2Line } from "react-icons/ri";
import { FaRegBell } from "react-icons/fa";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { FaRegUser } from "react-icons/fa6";
import { IoMdLogOut } from "react-icons/io";
import { MyContext } from "../../App";
import Link from "@mui/material/Link";
import { fetchDataFromApi } from "../../../utils/api";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorMyAcc, setAnchorMyAcc] = useState(null);
  const openMyAcc = Boolean(anchorMyAcc);
  const handleClickMyAcc = (event) => {
    setAnchorMyAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorMyAcc(null);
  };

  const context = useContext(MyContext);

  const logout = () => {
    setAnchorMyAcc(null);

    // fetchDataFromApi(
    //   `/api/user/logout?token=${localStorage.getItem("accessToken")}`,
    //   { withCredentials: true }
    // ).then((res) => {
    fetchDataFromApi(
      `/api/admin/logout?token=${localStorage.getItem("accessToken")}`,
      { withCredentials: true }
    ).then((res) => {
      console.log(res);
      if (res?.error === false) {
        context.setIsLogin(false);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
      }
    });
  };

  return (
    <header
      className={`w-full h-[auto] py-2 
        ${context.isSidebarOpen === true ? "pl-64" : "pl-5"}  
        shadow-md pr-7 bg-[#fff] flex items-center justify-between transition-all
      `}
    >
      <div className="part1">
        <Button
          className="!w-[40px] !h-[40px] !rounded-full !min-w-[40px] !text-[rgba(0,0,0,0.8)]"
          onClick={() => context.setisSidebarOpen(!context.isSidebarOpen)}
        >
          <RiMenu2Line className="text-[18px] text-[rgba(0,0,0,0.8)]" />
        </Button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <FaRegBell />
          </StyledBadge>
        </IconButton>

        {context.isLogin === true ? (
          <div className="relative">
            <div
              className="rounded-full w-[35px] h-[35px] 
            overflow-hidden cursor-pointer"
              onClick={handleClickMyAcc}
            >
              <img
                src="../../../icons/user.png"
                alt="Avatar"
                className="w-full h-full object-cover"
              />
            </div>

            <Menu
              anchorEl={anchorMyAcc}
              id="account-menu"
              open={openMyAcc}
              onClose={handleCloseMyAcc}
              onClick={handleCloseMyAcc}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer">
                    <img
                      src="../../../icons/user.png"
                      alt="Avatar"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="info">
                    <h3 className="text-[15px] font-[500] leading-5">
                      {context?.userData?.name}
                    </h3>
                    <p className="text-[12px] font-[400] opacity-70">
                      {context?.userData?.email}
                    </p>
                  </div>
                </div>
              </MenuItem>

              <Divider />

              <MenuItem
                onClick={handleCloseMyAcc}
                className="flex items-center gap-3"
              >
                <FaRegUser className="text-[16px]" />
                <span className="text-[14px]"> Hồ sơ</span>
              </MenuItem>

              <MenuItem onClick={logout} className="flex items-center gap-3">
                <IoMdLogOut className="text-[18px]" />
                <span className="text-[14px]"> Đăng xuất</span>
              </MenuItem>
            </Menu>
          </div>
        ) : (
          <Link to="/login">
            <Button className="btn-blue btn-sm !rounded-full">Đăng nhập</Button>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
