import { Link } from "react-router-dom";
import { GoGift } from "react-icons/go";
import { MyContext } from "../../App";
import { useContext } from "react";
import { FaInstagram } from "react-icons/fa"; 
import { PiKeyReturn } from "react-icons/pi";
import { FaPinterestP } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { IoLogoYoutube } from "react-icons/io5";
import { LiaWalletSolid } from "react-icons/lia"
import { SlEarphonesAlt } from "react-icons/sl";;
import { FaFacebookSquare } from "react-icons/fa";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { LiaShippingFastSolid } from "react-icons/lia";

import Button from "@mui/material/Button";
import Drawer from '@mui/material/Drawer';
import Checkbox from '@mui/material/Checkbox';
import CartPanel from '../CartPanel';
import FormControlLabel from '@mui/material/FormControlLabel';


const Footer = () => {

    const context = useContext(MyContext)

    return (
        <>
            <footer className="py-6 bg-[#fafafa]">
                <div className="container">
                    <div className="flex items-center justify-center gap-8 py-8 pb-8">
                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <LiaShippingFastSolid className="text-[50px] transition-all duration-300 group-hover:text-primary 
                            group-hover:-translate-y-1"/>
                            <h3 className="text-[18px] font-[600] mt-3">Miễn phí vận chuyển</h3>
                            <p className="text-[13px] font-[500] text-center">Đối với hóa đơn từ 1.000.000đ</p>
                        </div>

                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <PiKeyReturn className="text-[50px] transition-all duration-300 group-hover:text-primary 
                            group-hover:-translate-y-1"/>
                            <h3 className="text-[18px] font-[600] mt-3">Hoàn trả trong 30 ngày</h3>
                            <p className="text-[13px] font-[500] text-center">Đối với sản phẩm trao đổi</p>
                        </div>

                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <LiaWalletSolid className="text-[50px] transition-all duration-300 group-hover:text-primary 
                            group-hover:-translate-y-1"/>
                            <h3 className="text-[18px] font-[600] mt-3">Thanh toán</h3>
                            <p className="text-[13px] font-[500] text-center">Thẻ thanh toán được chấp nhận</p>
                        </div>

                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <GoGift className="text-[50px] transition-all duration-300 group-hover:text-primary 
                            group-hover:-translate-y-1"/>
                            <h3 className="text-[18px] font-[600] mt-3">Quà tặng đặc biệt</h3>
                            <p className="text-[13px] font-[500] text-center">Đối với đơn đặt hàng đầu tiên</p>
                        </div>

                        <div className="col flex items-center justify-center flex-col group w-[15%]">
                            <SlEarphonesAlt className="text-[50px] transition-all duration-300 group-hover:text-primary 
                            group-hover:-translate-y-1"/>
                            <h3 className="text-[18px] font-[600] mt-3">Hỗ trợ 24/7</h3>
                            <p className="text-[13px] font-[500] text-center">Hãy liên hệ khi cần hỗ trợ</p>
                        </div>
                    </div>
                    <br />

                    <hr />

                    <div className="footer flex py-8">
                        <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
                            <h2 className="text-[20px] font-[600] mb-4">
                                Liên hệ với chúng tôi
                            </h2>

                            <p className="text-[13px] font-[400] pb-4">
                                Classyshop - Mega Super Store 
                                <br />
                                123/68 - Trung tâm thương mại Cần Thơ
                            </p>

                            <Link className="link text-[13px]"to="mailto:someone@examle.com">
                                hungb2012212@student.ctu.edu.vn
                            </Link>
                            <br />
                            <Link className="link text-[13px]" to="mailto:someone@examle.com">
                                dangb2012194@student.ctu.edu.vn
                            </Link>

                            <span className="text-[22px] font-[500] block w-full mt-3 mb-5 text-primary">
                                (+84) 1234-567-890
                            </span>

                            <div className="flex items-center gap-3">
                                <HiOutlineChatAlt2 className="text-[45px] text-primary"/>
                                <span className="text-[16px] font-[600]">
                                    Trò chuyện trực tuyến 
                                    <br /> 
                                    Nhận trợ giúp từ chuyên gia
                                </span>
                            </div>
                        </div>

                        <div className="part2 w-[40%] flex pl-8">
                            <div className="part2_col1 w-[50%]">
                                <h2 className="text-[18px] font-[600] mb-4">
                                    Các sản phẩm
                                </h2>

                                <ul className="list">
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Giá giảm
                                        </Link>
                                    </li>

                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Các sản phẩm mới
                                        </Link>
                                    </li>

                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Sẩn phẩm tốt nhất
                                        </Link>
                                    </li>

                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Liên hệ với chúng tôi
                                        </Link>
                                    </li>

                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Sơ đồ trang web
                                        </Link>
                                    </li>

                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Cửa hàng
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="part2_col1 w-[50%]">
                                <h2 className="text-[18px] font-[600] mb-4">
                                    Công ty chúng tôi
                                </h2>

                                <ul className="list">
                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Vận chuyển
                                        </Link>
                                    </li>

                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Thông báo pháp lý
                                        </Link>
                                    </li>

                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Điều khoản và điều kiện sử dụng
                                        </Link>
                                    </li>

                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Về chúng tôi
                                        </Link>
                                    </li>

                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Thanh toán an toàn
                                        </Link>
                                    </li>

                                    <li className="list-none text-[14px] w-full mb-2">
                                        <Link to="/" className="link">
                                            Đăng nhập
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="part2 w-[35%] flex pl-8 flex-col pr-8">
                            <h2 className="text-[18px] font-[600] mb-4">
                                Đăng ký nhận bản tin
                            </h2>

                            <p className="text-[13px]">
                                Đăng ký nhận bản tin mới nhất của chúng tôi để nhận tin tức về giảm giá đặc biệt.
                            </p>
                            <form className="mt-5">
                                <input type="text" className="w-full h-[45px] border outline-none pl-4 pr-4 rouded-sm mb-4
                                focus:border-[rgba(0,0,0,0.3)]" placeholder="Địa chỉ Email của bạn"/>
                            
                                <FormControlLabel control={<Checkbox/>} 
                                label="Tôi đồng ý với các điều khoản và điều kiện cũng như chính sách quyền riêng tư"/>
                                <br /> <br />

                                <Button className="btn-org">Đăng ký</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="bottomStrip border-t border-[rbga(0,0,0,0,2)] py-3 bg-white"> 
                <div className="container flex items-center justify-between">
                    <ul className="flex items-center gap-5">
                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border
                            border-[rbga(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary">
                                <FaFacebookSquare className="text-[15px] group-hover:text-white"/>
                            </Link>
                        </li>

                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border
                            border-[rbga(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary">
                                <IoLogoYoutube className="text-[15px] group-hover:text-white"/>
                            </Link>
                        </li>

                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border
                            border-[rbga(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary">
                                <FaPinterestP className="text-[15px] group-hover:text-white"/>
                            </Link>
                        </li>

                        <li className="list-none">
                            <Link to="/" target="_blank" className="w-[35px] h-[35px] rounded-full border
                            border-[rbga(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary">
                                <FaInstagram className="text-[15px] group-hover:text-white"/>
                            </Link>
                        </li>
                    </ul>

                    <p className="text-[14px] text-center mb-0">
                        © 2025 - Niên Luận Ngành - CT250
                    </p>

                    <div className="flex items-center">
                        <img src="https://ecommerce-frontend-view.netlify.app/carte_bleue.png" alt="image" />
                  
                        <img src="https://ecommerce-frontend-view.netlify.app/visa.png" alt="image" />
                    
                        <img src="https://ecommerce-frontend-view.netlify.app/master_card.png" alt="image" />
                   
                        <img src="https://ecommerce-frontend-view.netlify.app/american_express.png" alt="image" />
                    
                        <img src="https://ecommerce-frontend-view.netlify.app/paypal.png" alt="image" />
                    </div>
                </div>
            </div>

            {/* Giỏ hàng */}
            <Drawer 
                open={context.openCartPanel}
                onClose={context.toggleCartPanel(false)}
                anchor={"right"}
                className="cartPanel"
                
            >

                <div className='flex items-center i=justify-between py-3 px-4 gap-3 border-b border-[rbga(0,0,0,0.1)]'>
                <h4 className='text-[14px] font-[600]'>Giỏ hàng (4)</h4>
                    <IoCloseSharp className='text-[22px] absolute right-[15px]' onClick={context.toggleCartPanel(false)}/>
                </div>

                <CartPanel/>
            
            </Drawer>

        </>
    );
};

export default Footer; 