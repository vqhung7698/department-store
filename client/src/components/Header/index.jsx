import Search from "../Search";
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Navigation from "./Navigation";
import Button  from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { useState } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { MyContext } from "../../App";
import { useContext } from "react";
import { FaRegUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { fetchDataFromApi } from "../../utils/api";



const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
}));

const Header = () => {

    const context = useContext(MyContext);

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logout = () => {
        setAnchorEl(null);

        fetchDataFromApi(`/api/user/logout?token=${localStorage.getItem('accessToken')}`, 
            {withCredentials: true}).then((res) =>{
            console.log(res);
            if(res?.error === false) {
                context.setIsLogin(false);
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");

            }
        })
        .catch(err => {
            console.error("Logout error:", err);
        });
    }

    return (
        <header className="bg-white">
            <div className="top-strip py-2 border-t-[1px] border-gray-250 border-b-[1px]">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="col1 w-[50%]">
                            <p className="text-[12px] font-[500]">
                                Giảm giá 50% cho các phong cách mùa mới, thời gian có hạn.
                            </p>
                        </div>

                        <div className="col2 flex items-center justify-end">
                            <ul className="flex items-center gap-3">
                                <li className="list-none">
                                    <Link 
                                        to="/help-center" 
                                        className="text-[13px] link font-[500] transition"
                                        >
                                        Trung tâm trợ giúp{""}
                                    </Link>
                                </li>
                                <li className="list-none">
                                    <Link 
                                        to="/order-tracking" 
                                        className="text-[13px] link font-[500] transition"
                                        >
                                        Theo dõi đơn hàng{""}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div className="header py-4 border-b-[1px] border-gray-250 ">
                    <div className="container flex items-center justify-between">
                        <div className="col1 w-[25%]">
                            <Link to={"/"}><img src="/logo2.png" className="logo"/></Link>
                        </div>

                        <div className="col2 w-[45%]">
                            <Search/>
                        </div>

                        <div className="col3 w-[30%] flex items-center pl-7">
                            <ul className="flex items-center justify-end gap-3 w-full">

                                { context.isLogin === false ? (

                                <li className="list-none">
                                    <Link to="/login" className="link transition text-[15px] font-[500]">
                                        Đăng nhập</Link> | &nbsp;
                                    <Link to="/register" className="link transition text-[15px] font-[500]">
                                        Đăng ký</Link>
                                </li>
                                ) : (
                                    <>
                                    <Button className="!text-[#000] myAccountWrap flex items-center gap-3 cursor-pointer"
                                    onClick={handleClick}>
                                        <Button
                                        className="!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !bg-[#f1f1f1]">
                                            <FaRegUser className="text-[16px] text-[rgba(0,0,0,0.7)]"/>
                                        </Button>

                                        <div className="info flex flex-col">
                                            <h4 className="leading-3 text-[14px] font-[500] text-[rgba(0,0,0,0.6)] mb-0 
                                                capitalize text-left justify-start">
                                                {context?.userData?.name}
                                            </h4>
                                            <span className="text-[13px] font-[400] capitalize text-left text-[rgba(0,0,0,0.6)]
                                                justify-start">
                                                {context?.userData?.email}
                                            </span>
                                        </div>
                                    </Button>

                                    <Menu
                                        anchorEl={anchorEl}
                                        id="account-menu"
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        slotProps={{
                                        paper: {
                                            elevation: 0,
                                            sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&::before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                            },
                                        },
                                        }}
                                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <Link to="/my-account" className="w-full block">
                                            <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                                                <FaRegUser className="text-[18px]"/> 
                                                <span className="text-[14px]">Tài khoản của bạn</span>
                                            </MenuItem>
                                        </Link>

                                        <Link to="/my-order" className="w-full block">
                                            <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                                                <BsBagCheck className="text-[18px]"/>
                                                <span className="text-[14px]">Đơn hàng</span> 
                                            </MenuItem>
                                        </Link>

                                        <Link to="/my-list" className="w-full block">
                                            <MenuItem onClick={handleClose} className="flex gap-2 !py-2">
                                                <FaRegHeart className="text-[18px]"/>
                                                <span className="text-[14px]"> Danh sách yêu thích</span>
                                            </MenuItem>
                                        </Link>
                                       
                                            <MenuItem onClick={logout} className="flex gap-2 !py-2">
                                                <RiLogoutBoxRLine className="text-[18px]"/>
                                                <span className="text-[14px]"> Đăng xuất</span>
                                            </MenuItem>                                  
                                    </Menu>
                                    </>
                                )}

                                <li>
                                    <Tooltip title="So sánh">
                                        <IconButton aria-label="cart">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <IoGitCompareOutline />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>

                                <li>
                                    <Tooltip title="Danh sách yêu thích">
                                        <IconButton aria-label="cart">
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <FaRegHeart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>
                                
                                <li>
                                    <Tooltip title="Giỏ hàng">
                                        <IconButton aria-label="cart" onClick={()=>context.setOpenCartPanel(true)}>
                                            <StyledBadge badgeContent={4} color="secondary">
                                                <MdOutlineShoppingCart />
                                            </StyledBadge>
                                        </IconButton>
                                    </Tooltip>
                                </li>                             
                            </ul>

                           
                            
                        </div>
                    </div>
            </div>

            <Navigation />
                


        </header>
    );
};

export default Header;