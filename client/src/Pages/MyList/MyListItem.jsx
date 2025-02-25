import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { MdShoppingCart } from "react-icons/md";
import Button from "@mui/material/Button"; 
import Rating from '@mui/material/Rating';

const MyListItem = () => {

    return (
        <>
        <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.2)]">
            <div className="img w-[15%] rounded-md overflow-hidden">
                <Link to="/productDetails/3243" className="group">
                    <img src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400"
                    className="w-full group-hover:scale-105"/>
                </Link>
            </div>

            <div className="info w-[85%] relative">
                <IoCloseSharp className='text-[22px] absolute top-[0px] right-[0px] link transition-all'/>
                <span className="text-[13px] font-[500]">BCBG</span>
                <h3 className="text-[16px] font-[600] mt-1 mb-2">
                    <Link className="link">
                        Váy đầm maxi BCBG
                    </Link>                                    
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly  />

                {/* Giá */}
                <div className="flex items-center gap-4 mt-1 mb-4">
                    <span className="price text-black text-[14px] font-[600]">
                        1.249.000đ
                    </span>
                </div>    

                <Button className="btn-org flex gap-2">
                    <MdShoppingCart className="text-[18px]"/>
                    Thêm vào giỏ
                </Button>
            </div>
        </div>
        </>
    )
}

export default MyListItem;