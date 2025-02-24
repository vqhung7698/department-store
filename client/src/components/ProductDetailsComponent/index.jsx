import { useState } from 'react';
import { Rating } from '@mui/material';
import { MdShoppingCart } from "react-icons/md";
import Button from '@mui/material/Button';


const ProductDetailsComponent = () => {

    const [productActionIndex, setProductActionIndex] = useState(null);
    
    const [quantity, setQuantity] = useState(1);
    const increaseQuantity = () => setQuantity(quantity + 1);
    const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

    return (
        <>
            <h1 className='text-[22px] font-[600] text-black mb-2'>BCBD</h1>
            <h2 className='text-[20px] font-[500] mb-3 '>Váy đầm maxi BCBG</h2>
            <p className='text-[16px] font-[350] mb-2 '>  
                Đơn giản và cá tính, đầm maxi cổ yếm của thương hiệu BCBG Generation <br />
                có thể cùng bạn đến nhiều sự kiện như dạo phố hoặc tham dự buổi tiệc trang trọng. <br />
                    Phía sau độc đáo và duyên dáng tạo điểm nhấn thu hút và ấn tượng - Chất liệu chiffon - Cổ...
            </p>
            <div className='flex items-center gap-3'>
                <Rating name="size-small" defaultValue={4} size="small" readOnly  /> 
                            
                <span className='text-[13px] cursor-pointer'>(2) Đánh giá</span>
            </div>

            <div className="flex items-center gap-4 mt-3">
                {/* <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                    400.000đ
                </span> */}
                <span className="price text-primary font-blod text-[20px] font-[600]">
                    1.249.000đ
                </span>
            </div>
                        
            {/* Size  */}
            <div className='flex items-center gap-4 mt-3'>
                <span className='text-[16px]'>Size:</span>

                <div className='flex items-center gap-1 actions'>
                    <Button className={`${productActionIndex === 0 ? '!bg-primary !text-white' : ''}`}
                        onClick={()=> setProductActionIndex(0)}>S</Button>
                    <Button className={`${productActionIndex === 1 ? '!bg-primary !text-white' : ''}`}
                        onClick={()=> setProductActionIndex(1)}>M</Button>
                    <Button className={`${productActionIndex === 2 ? '!bg-primary !text-white' : ''}`}
                        onClick={()=> setProductActionIndex(2)}>L</Button>
                    <Button className={`${productActionIndex === 3 ? '!bg-primary !text-white' : ''}`}
                        onClick={()=> setProductActionIndex(3)}>XL</Button>
                </div>
            </div>
                        
            {/* Bộ chọn số lượng */}
            <div className="mt-5 flex gap-4">
                <div className="flex border border-gray-300 rounded-md overflow-hidden">
                    <button 
                        className="px-3 py-2 bg-gray-100 hover:bg-gray-300 transition" 
                        onClick={decreaseQuantity}
                        >−</button>
                        <span className="px-4 py-2">{quantity}</span>
                    <button 
                        className="px-3 py-2 bg-gray-100 hover:bg-gray-300 transition" 
                        onClick={increaseQuantity}
                    >+</button>
                </div>
                            
                <Button className="btn-org flex gap-2"><MdShoppingCart className="text-[18px]"/>
                    Thêm vào giỏ
                </Button>
            </div>
        </>
    );
};

export default ProductDetailsComponent; 