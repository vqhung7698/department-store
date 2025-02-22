import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const CartPanel = () => {
    return (
    <>
        <div className='scroll w-full max-h-[500px] overflow-y-scroll overflow-x-hidden py-3 px-4'>
            <div className="cartItem w-full flex items-center gap-4 border-b border-[rbga(0,0,0,0.1)] pb-4">
                <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                    <Link to="/productDetails/1213" className="block group">
                        <img src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400"
                        className='w-full group-hover:scale-105'/>
                    </Link>
                </div>
            
                <div className='info w-[75%] pr-5 relative'>
                    <h4 className='text-[14px] font-[500]'>
                        <Link to="/productDetails/1213" className="link transition-all">
                            Váy đầm maxi BCBG
                        </Link>
                    </h4>
                    
                    <p className="flex items-center gap-5 mt-2 mb-2">
                        <span>sl: <span>1</span></span>
                        <span className="text-primary font-blod">Giá: 1.249.000đ</span>
                    </p>

                    <RiDeleteBin6Line className="absolute top-[0px] right-[5px] cursor-pointer 
                    text-[15px] transition-all link"/>

                </div>
            </div>

            <div className="cartItem w-full flex items-center gap-4 border-b border-[rbga(0,0,0,0.1)] pb-4">
                <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                    <Link to="/productDetails/1213" className="block group">
                        <img src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400"
                        className='w-full group-hover:scale-105'/>
                    </Link>
                </div>
            
                <div className='info w-[75%] pr-5 relative'>
                    <h4 className='text-[14px] font-[500]'>
                        <Link to="/productDetails/1213" className="link transition-all">
                            Váy đầm maxi BCBG
                        </Link>
                    </h4>
                    
                    <p className="flex items-center gap-5 mt-2 mb-2">
                        <span>sl: <span>1</span></span>
                        <span className="text-primary font-blod">Giá: 1.249.000đ</span>
                    </p>

                    <RiDeleteBin6Line className="absolute top-[0px] right-[5px] cursor-pointer 
                    text-[15px] transition-all link"/>

                </div>
            </div>

            <div className="cartItem w-full flex items-center gap-4 border-b border-[rbga(0,0,0,0.1)] pb-4">
                <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                    <Link to="/productDetails/1213" className="block group">
                        <img src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400"
                        className='w-full group-hover:scale-105'/>
                    </Link>
                </div>
            
                <div className='info w-[75%] pr-5 relative'>
                    <h4 className='text-[14px] font-[500]'>
                        <Link to="/productDetails/1213" className="link transition-all">
                            Váy đầm maxi BCBG
                        </Link>
                    </h4>
                    
                    <p className="flex items-center gap-5 mt-2 mb-2">
                        <span>sl: <span>1</span></span>
                        <span className="text-primary font-blod">Giá: 1.249.000đ</span>
                    </p>

                    <RiDeleteBin6Line className="absolute top-[0px] right-[5px] cursor-pointer 
                    text-[15px] transition-all link"/>

                </div>
            </div>

            <div className="cartItem w-full flex items-center gap-4 border-b border-[rbga(0,0,0,0.1)] pb-4">
                <div className='img w-[25%] overflow-hidden h-[80px] rounded-md'>
                    <Link to="/productDetails/1213" className="block group">
                        <img src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400"
                        className='w-full group-hover:scale-105'/>
                    </Link>
                </div>
            
                <div className='info w-[75%] pr-5 relative'>
                    <h4 className='text-[14px] font-[500]'>
                        <Link to="/productDetails/1213" className="link transition-all">
                            Váy đầm maxi BCBG
                        </Link>
                    </h4>
                    
                    <p className="flex items-center gap-5 mt-2 mb-2">
                        <span>sl: <span>1</span></span>
                        <span className="text-primary font-blod">Giá: 1.249.000đ</span>
                    </p>

                    <RiDeleteBin6Line className="absolute top-[0px] right-[5px] cursor-pointer 
                    text-[15px] transition-all link"/>

                </div>
            </div>           
        </div>

        <br />

        <div className="bottomSec absolute bottom-[10px] left-[10px] w-full pr-5">
            <div className="bottomInfo w-full py-3 px-4 border-t border-[rgba(0,0,0,0.1)] flex items-center 
                justify-between flex-col">
                <div className="flex items-center justify-between w-full">
                    <span className="text-[14px] font-[600]">1 sản phẩm</span>
                    <span className="text-primary font-blod">1.249.000đ</span>
                </div>

                <div className="flex items-center justify-between w-full">
                    <span className="text-[14px] font-[600]">Phí vận chuyển</span>
                    <span className="text-primary font-blod">51.000đ</span>
                </div>
            </div>

        <div className="bottomInfo w-full py-3 px-4 border-t border-[rgba(0,0,0,0.1)] flex items-center 
            justify-between flex-col">
            <div className="flex items-center justify-between w-full">
                <span className="text-[14px] font-[600]">Tổng thanh toán</span>
                <span className="text-primary font-blod">1.300.000đ</span>
            </div>

            <br />

            <div className="flex items-center justify-between w-full gap-5">
                <Link to="/cart" className="w-[50%] d-block">
                    <Button className="btn-org btn-lg w-full"> Xem giỏ hàng</Button>
                </Link>

                <Link to="/checkout" className="w-[50%] d-block">
                    <Button className="btn-org btn-lg w-full"> Mua hàng</Button>
                </Link>
            </div>           
        </div>
        </div>
    </>
    );
};

export default CartPanel; 