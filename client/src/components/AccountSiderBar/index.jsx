import { MdCloudUpload } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { BsBagCheck } from "react-icons/bs";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink } from "react-router";
import Button  from '@mui/material/Button';

const AccountSiderBar = () => {
    return (
        <>
        <div className="card bg-white shadow-md rounded-md sticky top-[10px]">
            <div className="w-full p-5 flex items-center justify-center flex-col">
                <div className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group">
                    <img src="https://icons.veryicon.com/png/o/miscellaneous/icon-8/my-account-5.png"
                    className="w-full h-full object-cover"/>

                    <div className="overlay w-[100%] h-[100%] absolute top-0 left-0 z-50 bg-[rgba(0,0,0,0.5)]
                        flex items-center justify-center cursor-pointer opacity-0 transition-all
                        group-hover:opacity-100">
                        <MdCloudUpload className="text-[#fff] text-[22px]"/>
                        <input type="file" className="absolute top-0 left-0 w-full h-full opacity-0"/>
                    </div>
                </div>

                <h3 className="text-[16px] font-[600]">User123</h3>
                <h6 className="text-[13px] font-[500]">User123@gmail.com</h6>
            </div>

            <ul className="list-none pb-3 bg-[#f1f1f1] myAccountTabs">
                <li className="w-full">
                    <NavLink to="/my-account" exact={true} activeClassName="isActive">
                        <Button className="w-full !text-left !py-2 !px-5 !justify-start
                           !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <FaRegUser className="text-[18px]"/>
                            Hồ sơ người dùng
                       </Button>
                    </NavLink>
                </li>

                <li className="w-full">
                    <NavLink to="/my-order" exact={true} activeClassName="isActive">
                        <Button className="w-full !text-left !py-2 !px-5 !justify-start
                            !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <BsBagCheck className="text-[18px]"/>
                            Đơn hàng
                        </Button>
                    </NavLink>
                </li>

                <li className="w-full">
                    <NavLink to="/my-list" exact={true} activeClassName="isActive">
                        <Button className="w-full !text-left !py-2 !px-5 !justify-start
                            !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <FaRegHeart className="text-[18px]"/>
                            Danh sách yêu thích
                        </Button>
                    </NavLink>
                </li>

                <li className="w-full">
                    <NavLink to="/logout" exact={true} activeClassName="isActive">
                        <Button className="w-full !text-left !py-2 !px-5 !justify-start
                            !capitalize !text-[rgba(0,0,0,0.8)] !rounded-none flex items-center gap-2">
                            <RiLogoutBoxRLine className="text-[18px]"/>
                            Đăng xuất
                        </Button>
                    </NavLink>
                </li>
            </ul>
        </div>
        </>
    );
};

export default AccountSiderBar; 