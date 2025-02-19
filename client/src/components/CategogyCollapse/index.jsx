import { FaRegPlusSquare } from "react-icons/fa";
import { FiMinusSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useState } from 'react';
import Button  from '@mui/material/Button';

const CategogyCollapse = () => {

    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);

    const openSubmenu=(index) => {
        if(submenuIndex===index){
            setSubmenuIndex(null);
        }else{
            setSubmenuIndex(index);
        }
    };

    const openInnerSubmenu = (index) => {
        if(innerSubmenuIndex===index){
            setInnerSubmenuIndex(null);
        }else{
            setInnerSubmenuIndex(index);
        }
    };

    return(
        <>
            <div className='scroll'>
                <ul className='w-full'>
                        {/* Fashion */}
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to="/" className='w-full'>
                            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                                Thời trang
                            </Button>
                        </Link>

                        {
                            submenuIndex === 0 ? (
                                <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={()=>openSubmenu(0)}/>
                            ) : (
                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={()=>openSubmenu(0)}/>
                            )
                        }

                        {
                            submenuIndex===0 && (

                            <ul className='submenu w-full pl-3'>
                            <li className='list-none relative'>
                                <Link to="/" className='w-full'>
                                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                                        Trang phục
                                    </Button>
                                </Link>

                                {
                                    innerSubmenuIndex === 0 ? (
                                        <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                        onClick={()=>openInnerSubmenu(0)}/>
                                    ) : (
                                        <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                        onClick={()=>openInnerSubmenu(0)}/>
                                    )
                                }
                                
                                {
                                    innerSubmenuIndex===0 && (
                                        <ul className='inner_submenu w-full pl-3'>
                                            <li className='list-none relative mb-1'>
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    Áo 
                                                </Link>
                                            </li>
        
                                            <li className='list-none relative mb-1'>
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    Quần
                                                </Link>
                                            </li>
        
                                            <li className='list-none relative mb-1'>
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    Đồng hồ
                                                </Link>
                                            </li>
        
                                            <li className='list-none relative mb-1'>
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    Mũ
                                                </Link>
                                            </li>

                                            <li className='list-none relative mb-1'>
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    Giày dép
                                                </Link>
                                            </li>
                                        </ul>
                                    )
                                }
                            </li>
                        </ul>
                        )}

                    </li>

                        {/* Outerwear */}
                    <li className='list-none flex items-center relative flex-col'>
                        <Link to="/" className='w-full'>
                            <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                                Thiết bị điện tử
                            </Button>
                        </Link>
                        
                        {
                            submenuIndex === 1 ? (
                                <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={()=>openSubmenu(1)}/>
                            ) : (
                                <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                onClick={()=>openSubmenu(1)}/>
                            )
                        }

                        {
                            submenuIndex===1 && (

                            <ul className='submenu w-full pl-3'>
                            <li className='list-none relative'>
                                <Link to="/" className='w-full'>
                                    <Button className="w-full !text-left !justify-start !px-3 !text-[rgba(0,0,0,0.8)]">
                                        Đồ dùng thông minh
                                    </Button>
                                </Link>

                                {
                                    innerSubmenuIndex === 1 ? (
                                        <FiMinusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                        onClick={()=>openInnerSubmenu(1)}/>
                                    ) : (
                                        <FaRegPlusSquare className='absolute top-[10px] right-[15px] cursor-pointer'
                                        onClick={()=>openInnerSubmenu(1)}/>
                                    )
                                }
                                
                                {
                                    innerSubmenuIndex===1 && (
                                        <ul className='inner_submenu w-full pl-3'>
                                            <li className='list-none relative mb-1'>
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    Điện thoại thông minh
                                                </Link>
                                            </li>
        
                                            <li className='list-none relative mb-1'>
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    Máy tính bảng
                                                </Link>
                                            </li>
        
                                            <li className='list-none relative mb-1'>
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    Đồng hồ thông minh
                                                </Link>
                                            </li>
        
                                            <li className='list-none relative mb-1'>
                                                <Link to="/" className="link w-full !text-left !justify-start !px-3 transition text-[14px]">
                                                    Máy tính xách tay
                                                </Link>
                                            </li>
                                        </ul>
                                    )
                                }
                            </li>
                        </ul>
                        )}
                    </li>  
                </ul>
            </div>
        </>
    );
};

export default CategogyCollapse;