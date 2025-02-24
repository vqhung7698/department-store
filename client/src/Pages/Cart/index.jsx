import { Link } from "react-router-dom";
import { IoBagCheckSharp } from "react-icons/io5";

import Button from "@mui/material/Button";
import CartItem from "./cartItem";

const CartPage = () => {

    return (
       <section className="section py-5 pb-10">
            <div className="container w-[80%] max-w-[80%] flex gap-5">
                {/* Tổng sản phẩm */}
                <div className="leftPage w-[70%]"> 
                    <div className="shadow-md rounded-md bg-white">
                        <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.2)]">
                            <h2 className="text-[20px] font-[600]"> Giỏ hàng của bạn </h2>
                            <p className="text-[16px] font-[500] mt-2 mb-3"> 
                                Có <span className="font-blod text-primary">4</span> sản phẩm trong giỏ hàng của bạn
                            </p>
                        </div>

                        <CartItem size="M"/>
                        
                        
                    </div>
                </div>

                {/* Tổng thanh toán */}
                <div className="rightPage w-[30%]">
                    <div className="shadow-md rounded-md bg-white p-5">
                        <h3 className="text-[20px] font-[600] pb-3">Tổng quan đơn hàng</h3>
                        <hr />

                        <p className="flex items-center justify-between mt-4 mb-4">
                            <span className="text-[14px] text-[rgba(100,100,100)]">Tổng phụ</span>
                            <span className="text-[14px]">4.996.000đ</span>
                        </p>

                        <p className="flex items-center justify-between mt-4 mb-4">
                            <span className="text-[14px] text-[rgba(100,100,100)]">Vận chuyển</span>
                            <span className="text-[14px]">51.000đ</span>
                        </p>

                        <p className="flex items-center justify-between mt-4 mb-4">
                            <span className="text-[14px] text-[rgba(100,100,100)]">Phiếu giảm giá vận chuyển <br /> của Shop</span>
                            <span className="text-[14px] text-primary">-51.000đ</span>
                        </p>

                        <p className="flex items-center justify-between mt-4 mb-4">
                            <span className="text-[14px] font-[600]">Tổng thanh toán</span>
                            <span className="text-[14px] font-[600]">4.996.000đ</span>
                        </p>

                        <div className="flex items-center justify-between w-full mt-10">
                            <Link to="/checkout" className="w-full d-block">
                                <Button className="btn-org btn-lg w-full flex gap-2">
                                    <IoBagCheckSharp className="text-[20px]"/> 
                                    Mua hàng
                                </Button>
                            </Link>
                        </div>      
                    </div>
                </div>
            </div>
       </section>
    );
};

export default CartPage; 