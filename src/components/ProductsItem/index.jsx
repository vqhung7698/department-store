import "../ProductsItem/style.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"; 
import Rating from '@mui/material/Rating';


import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";  
import { MdZoomOutMap } from "react-icons/md";

const ProductsItem = () => {
    return (
       <div className="productsItem shadow-lg rounded-md overflow-hidden border-1 border-[rbga(0,0,0,0.1)]">
            <div className="group ingWrappen w-[100%] h-[220px] overflow-hidden rounded-md relative">
                <Link>
                    <div className="img">
                        <img 
                            src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1736781298/1736781294264_montrez-men-light-blue-solid-jacket-product-images-rvwmdqy2dw-1-202311201747.jpg" 
                            className="w-full"
                        />
                    </div>
                </Link>
            </div>

            <span className="discount flex items-center absolute top-[10px] left-[10px] z-50 bg-primary text-white rounded-lg
            p-1 text-[12px] font-[500]">50%</span>

            <div className="actions absolute top-[15px] right-[5px] z-50 flex items-center gap-2 
                flex-col w-[50px]">
                    {/* transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100 */}
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
                        RARE RABBIT
                    </Link>
                </h6>
                <h3 className="text-[14px] title mt-1 font-[500] mb-1 text-[#000]">
                    <Link to="/" className="link transition-all">
                        Men Layerr Regular Fit Spread
                    </Link>
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly  />

                <div className="flex items-center gap-4">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                        $50.00
                    </span>
                    <span className="price text-primary font-blod text-[15px] font-[600]">
                        $25.00
                    </span>
                </div>
            </div>
       </div>

       
    );
};

export default ProductsItem; 