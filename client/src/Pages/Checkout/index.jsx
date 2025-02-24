import { useState } from 'react';
import { GoTriangleDown } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoBagCheckSharp } from "react-icons/io5";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const Checkout = (props) => {

    const [vnanchorEl, setVnAnchorEl] = useState(null);
    const [selectedVn, setselectedVn] = useState(props.vn);
    const openSize = Boolean(vnanchorEl);

    const handleClickVn = (event) => {
        setVnAnchorEl(event.currentTarget);
    };
    const handleCloseVn = (value) => {
        setVnAnchorEl(null);
        if(value!==null){
            setselectedVn(value)
        }
    };

    return (
      <section className="py-10">
        <div className="container flex gap-5">
            <div className="leftCol w-[70%]">
                <div className="card bg-white rounded-md p-5 shadow-md w-full">
                    <h1 className="text-[18px] font-[600]">Chi tiết thanh toán</h1>

                    <form className='w-full mt-5'>
                        {/* tên sđt */}
                        <div className='flex items-center gap-5 mb-5'>
                            <div className='col w-[30%]'>
                                <TextField 
                                className='w-full' size='small' 
                                label="Họ và Tên *" variant="outlined"/>   
                            </div>

                            <div className='flex items-center col w-[50%]'>
                                <div className="relative col w-[30%]">
                                    <span className="flex items-center justify-center bg-white text-[14px] font-[500]
                                        py-3 px-4 rounded-md cursor-pointer"
                                        onClick={handleClickVn}>
                                        Mã: {selectedVn} <GoTriangleDown className='text-[20px]'/>
                                    </span>

                                    <Menu
                                        id="size-menu"
                                        anchorEl={vnanchorEl}
                                        open={openSize}
                                        onClose={()=>handleCloseVn(null)}
                                        MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={()=>handleCloseVn('( + 84 )')}>
                                            <Button className='flex w-full !bg-white  !text-black'>
                                                <img src="vn.png"
                                                className="text-[14px] font-[600] w-5 h-5 !gap-3" />
                                                +84
                                            </Button>
                                        </MenuItem>

                                        <MenuItem onClick={()=>handleCloseVn('( + 86 )')}>
                                            <Button className='flex w-full !bg-white  !text-black'>
                                                <img src="tq.png"
                                                className="text-[14px] font-[600] w-5 h-5 !gap-3" /> 
                                                +86
                                            </Button>
                                        </MenuItem>

                                        <MenuItem onClick={()=>handleCloseVn('( + 82 )')}>
                                            <Button className='flex w-full !bg-white  !text-black'>
                                                <img src="hq.png"
                                                className="text-[14px] font-[600] w-5 h-5 !gap-3" /> 
                                                +82
                                            </Button>
                                        </MenuItem>

                                        <MenuItem onClick={()=>handleCloseVn('( + 81 )')}>
                                            <Button className='flex w-full !bg-white  !text-black'>
                                                <img src="nb.png"
                                                className="text-[14px] font-[600] w-5 h-5 !gap-3" /> 
                                                +81
                                            </Button>
                                        </MenuItem>

                                        <MenuItem onClick={()=>handleCloseVn('( + 93 )')}>
                                            <Button className='flex w-full !bg-white  !text-black'>
                                                <img src="lao.png"
                                                className="text-[14px] font-[600] w-5 h-5 !gap-3" /> 
                                                +93
                                            </Button>
                                        </MenuItem>

                                        <MenuItem onClick={()=>handleCloseVn('( + 66 )')}>
                                            <Button className='flex w-full !bg-white  !text-black'>
                                                <img src="tl.png"
                                                className="text-[14px] font-[600] w-5 h-5 !gap-3" /> 
                                                +66
                                            </Button>
                                        </MenuItem>
                                    </Menu>
                                </div>

                                <div className='col w-[60%]'>
                                    <TextField 
                                    type='tel'
                                    className='w-full' size='small' 
                                    label="Số điện thoại *" variant="outlined"/>    
                                </div>   
                            </div>
                        </div>

                        {/* địa chỉ */}
                        <div className='streetAddress'>
                            <h3 className='text-[16px] font-[550]'>Địa chỉ của bạn *</h3>
                            
                            <div className='flex items-center gap-5 pb-5 mt-3'>
                                <div className='col w-[100%]'>
                                    <TextField 
                                    type='text'
                                    className='text-[14px] font-[500]' size='small' 
                                    label="Quốc gia *" variant="outlined"/>   
                                </div>
                            </div>
    
                            <div className='flex items-center gap-5 pb-5'>
                                <div className='col w-[100%]'>
                                    <TextField 
                                    type='text'
                                    className='w-full text-[14px] font-[500]' size='small' 
                                    label="Tỉnh/Thành Phố, Quận/Huyện, Phường/Xã *" variant="outlined"/>   
                                </div>
                            </div>
                            
                            <div className='flex items-center gap-5 pb-5'>
                                <div className='col w-[100%]'>
                                    <TextField 
                                    type='text'
                                    className='w-full text-[14px] font-[500]' size='small' 
                                    label="Địa chỉ cụ thể *" variant="outlined"/>   
                                </div>
                            </div>
                            
                            <div className='flex items-center gap-5 pb-5'>
                                <div className='col w-[100%]'>
                                    <TextField 
                                    type='text'
                                    className='w-full text-[14px] font-[500]' size='small' 
                                    label="Ghi chú (không bắt buộc)" variant="outlined"/>   
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div className='rightCol w-[30%]'>
                <div className='card shadow-md bg-white rounded-md p-5'>
                    <h2 className='text-[18px] font-[600] mb-6'>Đơn đặt hàng của bạn</h2>

                    <div className='flex items-center justify-between py-3
                        border-t border-b border-bg[rbga(0,0,0,0.1)]'>
                        <span className='text-[16px] font-[600]'>Sản phẩm</span>
                        <span className='text-[16px] font-[600]'>Tổng phụ</span>
                    </div>

                    <div className='scroll max-h-[250px] overflow-y-scroll overflow-x-hidden pr-2'>
                        <div className='flex items-center justify-between py-2'>
                            <div className='part1 flex items-center gap-3'>
                                <div className='img w-[50px] h-[50px] object-cover overflow-hidden rounded-md
                                group cursor-pointer'>
                                    <img src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400"
                                    className='w-full transition-all group-hover:scale-105' />
                                </div>

                                <div className='info'>
                                    <h4 className='text-[14px] font-[500]'>
                                        Váy đầm maxi BCBG  
                                    </h4>
                                    <span className='text-[14px] '>x<span>4</span></span>
                                </div>
                            </div>    

                            <span className='text-[14px] '>4.996.000đ</span>
                        </div>
                    </div>

                    

                    <br /> 
            
                    <hr />

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
                    
                    <div className="flex items-center justify-between w-full mt-4">
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

export default Checkout; 