import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAngleDownSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";

import "../Navigation/style.css"


const Navigation = () => {


    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel=()=>{
        setIsOpenCatPanel(true);

    }


    return (
      <>
        <nav>
            <div className="container flex items-center justify-end gap-8">
                <div className="col_1 w-[20%]">
                    <Button className="!text-black gap-2 w-full" onClick={openCategoryPanel}>
                        <RiMenu2Fill className="text-[18px]"/>
                            Danh mục mua sắm
                        <LiaAngleDownSolid className="text-[13px] ml-auto font-bold"/>
                    </Button>
                </div>

                <div className="col_2 w-[65%]">
                    <ul className="flex items-center gap-5 nav">
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Trang chủ
                                </Button>
                            </Link>
                        </li>

                            {/* thời trang */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Thời trang
                                </Button> 
                            </Link>

                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                <ul>
                                        
                                    <li className="list-none w-full relative">
                                        <Link to="/productListing" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Thời trang nam
                                            </Button>
                                        
                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Áo thun
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Áo sơ mi
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Quần tây
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Quần jean nam
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Mũ
                                                            </Button>
                                                        </Link>
                                                    </li>                   
                                                </ul>
                                            </div>
                                        </Link>
                                    </li>
                                        
                                    <li className="list-none w-full">
                                        <Link to="/productListing" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Thời trang nữ
                                            </Button>

                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Áo thun
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Áo ngắn
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Váy, Đầm
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Quần jeans nữ
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Giày, Guốc
                                                            </Button>
                                                        </Link>
                                                    </li>                   
                                                </ul>
                                            </div>
                                        </Link>
                                    </li>
                                        
                                    <li className="list-none w-full">
                                        <Link to="/productListing" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Thời trang trẻ em
                                            </Button>

                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Áo thun
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Quần ngắn
                                                            </Button>
                                                        </Link>
                                                    </li>                                          
                                                </ul>
                                            </div>
                                        </Link>
                                    </li>                                                   
                                </ul>
                            </div>
                        </li>

                            {/* thiết bị điện tử*/}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Thiết bị điện tử
                                </Button>                              
                            </Link>

                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                <ul>
                                        {/* Watch */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Đồng hồ
                                            </Button>
                                        </Link>
                                    </li>

                                        {/* Smartphone */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Điện thoại
                                            </Button>
                                        </Link>
                                    </li>

                                        {/* Ipads */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Ipads
                                            </Button>
                                        </Link>
                                    </li>

                                        {/* Laptop */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Laptop
                                            </Button>
                                        </Link>
                                    </li>

                                        {/* Cameras */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Cameras
                                            </Button>
                                        </Link>
                                    </li>  

                                        {/* Radio */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Radio
                                            </Button>
                                        </Link>
                                    </li> 

                                        {/* HeadPhone */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Tai nghe
                                            </Button>
                                        </Link>
                                    </li> 

                                </ul>
                            </div>
                        </li>
                            
                            {/* túi xách */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">  
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Túi xách
                                </Button> 
                            </Link>

                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                <ul>
                                        {/* Tote */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Tote
                                            </Button>                                                                     
                                        </Link>
                                    </li>
                                        {/* Hand Bag */}
                                    <li className="list-none w-full">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Túi xách tay
                                            </Button>
                                        </Link>
                                    </li>
                                        {/* Work Bag */}
                                    <li className="list-none w-full">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Túi làm việc
                                            </Button>
                                        </Link>
                                    </li>
                                        {/* School Bag */}
                                    <li className="list-none w-full">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Túi đi học
                                            </Button>                                            
                                        </Link>
                                    </li>
                                        {/* Crossbody Bag  */}
                                    <li className="list-none w-full">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Túi đeo chéo
                                            </Button>                           
                                        </Link>
                                    </li>  

                                         {/* Handmade Leather   */}
                                    <li className="list-none w-full">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Túi da thủ công
                                            </Button>
                                        </Link>
                                    </li>                  
                                </ul>
                            </div>
                        </li>

                            {/* giày dép */}
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">                               
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Giày dép
                                </Button> 
                            </Link>
                        </li>

                            {/* mỹ phẩm */}
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">                               
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Mỹ phẩm
                                </Button> 
                            </Link>
                        </li>

                            {/* trang sức */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Trang sức
                                </Button> 
                            </Link>

                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                <ul>

                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Bạc
                                            </Button>
                                        </Link>
                                    </li>

                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Vàng
                                            </Button>
                                        </Link>
                                    </li>

                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Kim cương
                                            </Button>
                                        </Link>
                                    </li>              
                                </ul>
                            </div>
                        </li>

                            {/* nông sản */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                                    Nông sản
                                </Button> 
                            </Link>

                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                <ul>
                                
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Thực phẩm sạch
                                            </Button>
                                        </Link>
                                    </li>
    
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Trái cây
                                            </Button>
                                        </Link>
                                    </li>

                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Thực phẩm sống
                                            </Button>
                                        </Link>
                                    </li>              
                                </ul>
                            </div>
                        </li>

                    </ul>
                </div>

                <div className="col_3 w-[15%]">
                    <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0 ">
                        <GoRocket className="text-[18px]"/>
                            Giao hàng hỏa tốc
                    </p>
                </div>
            </div>
        </nav>

        <CategoryPanel  isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>

      </>
    );
};
export default Navigation;