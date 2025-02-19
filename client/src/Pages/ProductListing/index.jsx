import Sidebar from "../../components/Sidebar";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import ProductsItem from "../../components/ProductsItem";
import ProductsItemListView from "../../components/ProductsItemListView";
import { IoGridSharp } from "react-icons/io5";
import Button from "@mui/material/Button";
import { TfiMenuAlt } from "react-icons/tfi";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from "react";
import Pagination from '@mui/material/Pagination';


const ProductListing = () => {

    const [itemView, setItemView] = useState("grid");

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <section className="py-5 pb-0">
            <div className="container">
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" className="link transition"
                    href="/" >
                        Trang Chủ
                    </Link>
                    
                    <Link underline="hover" color="inherit" className="link transition"
                        href="/">
                            Thời Trang
                        </Link>
                </Breadcrumbs>
            </div>

            <div className="bg-white p-2 mt-4">
                <div className="container flex gap-3">  
                    <div className="sidebarWrapper w-[20%] h-full bg-white">
                        <Sidebar/>
                    </div>

                    <div className="rightContent w-[80%]">

                       {/* Thanh điều hướng */}
                        <div className="bg-[#f1f1f1] p-2 w-full mb-4 rounded-md flex items-centrt justify-between">
                            <div className="col1 flex items-center itemViewActions">
                                <Button 
                                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000
                                        ${itemView === 'list' && 'active'}`}
                                    onClick={()=>setItemView('list')}>
                                    <TfiMenuAlt className="text-[rgba(0,0,0,0.7)]"/>
                                </Button>

                                <Button 
                                    className={`!w-[40px] !h-[40px] !min-w-[40px] !rounded-full !text-[#000
                                        ${itemView === 'grid' && 'active'}`}
                                    onClick={()=>setItemView('grid')}>
                                    <IoGridSharp className="text-[rgba(0,0,0,0.7)]"/>
                                </Button>
                
                                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.6)]">
                                    Có 6 sản phẩm
                                </span>
                            </div>

                            <div className="col2 ml-auto flex items-center justify-end gap-3 pr-4">
                                <span className="text-[14px] font-[500] pl-3 text-[rgba(0,0,0,0.6)]">
                                    Sắp xếp
                                </span>  

                                <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        className="!bg-white !text-[#000] !text-[12px] !capitalize !border-2 !border-[#000]"
                                    >
                                        Sale, cao đến thấp
                                </Button>

                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={open}
                                    onClose={handleClose}
                                    MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}
                                        className="!bg-white !text-[#000] !text-[12px] !capitalize">
                                        Giá, cao đến thấp
                                    </MenuItem>
                                    
                                    <MenuItem onClick={handleClose}
                                        className="!bg-white !text-[#000] !text-[12px] !capitalize">
                                        Mức độ liên quan 
                                    </MenuItem>
                                        
                                    <MenuItem onClick={handleClose}
                                        className="!bg-white !text-[#000] !text-[12px] !capitalize">
                                        Tên A-Z
                                    </MenuItem>

                                    <MenuItem onClick={handleClose}
                                        className="!bg-white !text-[#000] !text-[12px] !capitalize">
                                        Tên Z-A
                                    </MenuItem>
                                </Menu>
                            </div>
                        </div>

                        {/* Danh sách sản phẩm */}
                        <div className={`grid ${itemView==='grid' ? 'grid-cols-4 md:grid-cols-4 gap-4' 
                            : 'grid-cols-1 md:grid-cols-1'} gap-4`}>

                            {
                                itemView === "grid" ?
                                <>
                                    <ProductsItem/>
                                    <ProductsItem/>
                                    <ProductsItem/>
                                    <ProductsItem/>
                                    <ProductsItem/>
                                    <ProductsItem/>
                                </>

                                :

                                <>
                                    <ProductsItemListView/>
                                    <ProductsItemListView/>
                                    <ProductsItemListView/>
                                    <ProductsItemListView/>
                                    <ProductsItemListView/>
                                    <ProductsItemListView/>
                                </>
                            }
                           
                        </div>

                        {/* Phân trang */}
                        <div className="flex items-center justify-center mt-5">
                            <Pagination count={2} showFirstButton showLastButton />
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default ProductListing;

