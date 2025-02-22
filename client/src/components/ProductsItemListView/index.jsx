import "../ProductsItemListView/style.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"; 
import Rating from '@mui/material/Rating';
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";  
import { MdZoomOutMap } from "react-icons/md";
import { MdShoppingCart } from "react-icons/md";
import { useContext } from "react";
import { MyContext } from "../../App";


const ProductsItemListView = () => {

    const context = useContext(MyContext);

    return (
       <div className="productsItemListView shadow-lg rounded-md overflow-hidden border-1 border-[rgba(0,0,0,0.1) flex items-center">
            <div className="group ingWrappen w-[30%] overflow-hidden rounded-md relative">
                <Link to="/productDetails/:1234">
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

            <div className="relative group">
                <div className="actions absolute top-[-100px] right-[5px] z-50 flex items-center gap-2 flex-col w-[50px]">
                        {/* transition-all duration-300 group-hover:top-[15px] opacity-0 group-hover:opacity-100"> */}
                        
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black 
                    hover:!bg-primary hover:!text-white group">
                        <FaRegHeart className="text-[18px] !text-black group-hover:text-white hover:!text-white"/>
                    </Button>

                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black 
                    hover:!bg-primary hover:!text-white group">
                        <IoGitCompareOutline className="text-[18px] !text-black group-hover:text-white hover:!text-white"/>
                    </Button>

                
                    <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black 
                    hover:!bg-primary hover:!text-white group"
                        onClick={()=> context.setOpenProductDetailsModal(true)}>
                        <MdZoomOutMap className="text-[18px] !text-black group-hover:text-white hover:!text-white"/>
                    </Button>
                </div>     
            </div>    

            <div className="info p-3 py-5 px-8 w-[75%]">
                <h6 className="text-[18px]">
                    <Link to="/productDetails/:1234" className="link transition-all">
                        BCBG
                    </Link>
                </h6>
                <h3 className="text-[20px] title mt-3 mb-4 font-[500] text-[#000]">
                    <Link to="/productDetails/:1234" className="link transition-all">
                        Váy đầm maxi BCBG
                    </Link>
                </h3>

                <p className="text-[14px] mb-3">
                    Đơn giản và cá tính, đầm maxi cổ yếm của thương hiệu BCBG Generation 
                    có thể cùng bạn đến nhiều sự kiện như dạo phố hoặc tham dự buổi tiệc trang trọng. 
                    Phía sau độc đáo và duyên dáng tạo điểm nhấn thu hút và ấn tượng - Chất liệu chiffon - Cổ...
                </p>

                <Rating name="size-small" defaultValue={4} size="small" readOnly  />

                <div className="flex items-center gap-4">
                    {/* <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                        400.000đ
                    </span> */}
                    <span className="price text-primary font-blod text-[15px] font-[600]">
                        1.249.000đ
                    </span>
                </div>

                <div className="mt-3">
                    <Button className="btn-org flex gap-2"><MdShoppingCart className="text-[18px]"/>
                        Thêm vào giỏ
                    </Button>
                </div>

            </div>
       </div>       
    );
};

export default ProductsItemListView; 