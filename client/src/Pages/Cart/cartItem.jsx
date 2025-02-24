import { Link } from "react-router-dom";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GoTriangleDown } from "react-icons/go";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';

const CartItem = (props) => {

    const [sizeanchorEl, setSizeAnchorEl] = useState(null);
    const [selectedSize, setCartItems] = useState(props.size);
    const openSize = Boolean(sizeanchorEl);

    const handleClickSize = (event) => {
        setSizeAnchorEl(event.currentTarget);
    };
    const handleCloseSize = (value) => {
        setSizeAnchorEl(null);
        if(value!==null){
            setCartItems(value)
        }
    };

    const [quantity, setQuantity] = useState(4);
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);


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
                <h3 className="text-[16px] font-[600] mt-1 mb-1">
                    <Link className="link">
                        Váy đầm maxi BCBG
                    </Link>                                    
                </h3>

                <Rating name="size-small" defaultValue={4} size="small" readOnly  />

                <div className="flex items-center gap-4 mt-2">
                    {/* Kích thước */}
                    <div className="relative">
                        <span className="flex items-center justify-center bg-[#f1f1f1] text-[10px] font-[600]
                            py-1 px-2 rounded-md cursor-pointer"
                            onClick={handleClickSize}>
                            Size: {selectedSize} <GoTriangleDown/>
                        </span>

                        <Menu
                            id="size-menu"
                            anchorEl={sizeanchorEl}
                            open={openSize}
                            onClose={()=>handleCloseSize(null)}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                            <MenuItem onClick={()=>handleCloseSize('S')}>S</MenuItem>
                            <MenuItem onClick={()=>handleCloseSize('M')}>M</MenuItem>
                            <MenuItem onClick={()=>handleCloseSize('L')}>L</MenuItem>
                            <MenuItem onClick={()=>handleCloseSize('XL')}>XL</MenuItem>
                        </Menu>
                    </div>

                    {/* Số lượng */}
                    <div className="relative">
                        <div className="flex items-center justify-center bg-[#f1f1f1] text-[10px] font-[600]
                            px-1 rounded-md cursor-pointer">
                            <button 
                                className="px-2 py-1 text-[10px] font-[600] rounded-md bg-[#f1f1f1] hover:bg-gray-200 transition" 
                                onClick={decreaseQuantity}
                            >−</button>
                            <span className="px-1 py-1 text-[10px] font-[600]">{quantity}</span>
                            <button 
                                className="px-2 py-1 text-[10px] font-[600] rounded-md bg-[#f1f1f1] hover:bg-gray-100 transition" 
                                onClick={increaseQuantity}
                            >+</button>
                        </div>
                    </div>
                </div>
                
                {/* Giá */}
                <div className="flex items-center gap-4 mt-3">
                    <span className="price text-black text-[14px] font-[600]">
                        1.249.000đ
                    </span>
                </div>    
            </div>
        </div>
        </>
    )
}

export default CartItem;