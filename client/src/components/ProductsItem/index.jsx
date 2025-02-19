import "../ProductsItem/style.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"; 
import Rating from '@mui/material/Rating';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";  
import { MdZoomOutMap } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";

const ProductsItem = () => {
    return (
       <div className="productsItem shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
            <div className="group ingWrappen w-[100%] overflow-hidden rounded-md relative">
                <Link to="/">
                    <div className="img h-[220px] overflow-hidden">
                        <img 
                            src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400" 
                            className="w-full"
                        />
                        <img 
                            src="https://bizweb.dktcdn.net/thumb/large/100/311/013/products/2.jpg?v=1598952230033" 
                            className="w-full transition-all duration-700 absolute top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
                        />
                    </div> 
                </Link>
            </div>

            <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg
            p-1 text-[12px] font-[500]">50%</span>

            <div className="actions absolute top-[15px] right-[5px] z-50 flex items-center gap-2 
                flex-col w-[50px]"> 
                {/* transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100" */}
                    
                <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black 
                hover:!bg-primary hover:!text-white group">
                    <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white"/>
                </Button>

                <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black
                hover:!bg-primary hover:!text-white group">
                    <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white"/>
                </Button>

               
                <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white text-black
                hover:!bg-primary hover:!text-white group">
                    <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white"/>
                </Button>
            </div>    

            <div className="info p-3 py-5">
                <h6 className="text-[13px]">
                    <Link to="/" className="link transition-all">
                        Thời trang nữ
                    </Link>
                </h6>
                <h3 className="text-[14px] title mt-1 font-[500] mb-1 text-[#000]">
                    <Link to="/" className="link transition-all">
                        Váy đầm maxi BCBG
                    </Link>
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly  />

                <div className="flex items-center gap-4">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                        400.000đ
                    </span>
                    <span className="price text-primary font-blod text-[15px] font-[600]">
                        200.000đ
                    </span>
                </div>

                <div className="mt-3 flex items-center justify-center">
                    <Button className="btn-org flex gap-2"><MdShoppingCart className="text-[18px]"/>
                        Thêm vào giỏ hàng
                    </Button>
                </div>
            </div>
       </div>       
    );
};

export default ProductsItem; 