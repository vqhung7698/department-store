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
        <nav className="py-2">
            <div className="container flex items-center justify-end">
                <div className="col_1 w-[20%]">
                    <Button className="!text-black gap-2 w-full" onClick={openCategoryPanel}>
                        <RiMenu2Fill className="text-[18px]"/>
                        Shop By Categories
                        <LiaAngleDownSolid className="text-[13px] ml-auto font-bold"/>
                    </Button>
                </div>

                <div className="col_2 w-[60%]">
                    <ul className="flex items-center gap-5 nav">
                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                    Home
                                </Button>
                            </Link>
                        </li>
                            {/* Fashion */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                    Fashion
                                </Button> 
                            </Link>

                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                <ul>
                                        {/* Men */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Men
                                            </Button>
                                        
                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Shirt
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Trouser
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Western shoes
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Watch
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Hat
                                                            </Button>
                                                        </Link>
                                                    </li>                   
                                                </ul>
                                            </div>
                                        </Link>
                                    </li>
                                        {/* Women */}
                                    <li className="list-none w-full">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Women
                                            </Button>

                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Shirt
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Jeans
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Footwear
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Drees
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Hat
                                                            </Button>
                                                        </Link>
                                                    </li>                   
                                                </ul>
                                            </div>
                                        </Link>
                                    </li>
                                        {/* Kids */}
                                    <li className="list-none w-full">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Kids
                                            </Button>

                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                T-shirt
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Shorts
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Footwear
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Watch
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Hat
                                                            </Button>
                                                        </Link>
                                                    </li>                   
                                                </ul>
                                            </div>
                                        </Link>
                                    </li>
                                        {/* Girls */}
                                    <li className="list-none w-full">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Girls
                                            </Button>

                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Short shirt
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Short
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                High heels
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                short skirt
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Sport shoes
                                                            </Button>
                                                        </Link>
                                                    </li>                   
                                                </ul>
                                            </div>
                                        </Link>
                                    </li>
                                        {/* Boys */}
                                    <li className="list-none w-full">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Boys
                                            </Button>

                                            <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                                <ul>
                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                T-shirt
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Jeans
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Sport shoes
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Watch
                                                            </Button>
                                                        </Link>
                                                    </li>

                                                    <li className="list-none w-full">
                                                        <Link to="/" className="w-full">
                                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                                Hat
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
                            {/* Electronics */}
                        <li className="list-none relative">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                    Electronics
                                </Button>                              
                            </Link>

                            <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                                <ul>
                                        {/* Watch */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Watch
                                            </Button>
                                        </Link>
                                    </li>

                                        {/* Smartphone */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Smartphone
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

                                        {/* Tivi */}
                                    <li className="list-none w-full relative">
                                        <Link to="/" className="w-full">
                                            <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                                Tivi
                                            </Button>
                                        </Link>
                                    </li>                
                                </ul>
                            </div>
                        </li>

                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">  
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                    Bags
                                </Button> 
                            </Link>
                        </li>

                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">                               
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                    Footwear
                                </Button> 
                            </Link>
                        </li>

                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">                                
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                    Groceries
                                </Button> 
                            </Link>
                        </li>

                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">                               
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                    Beauty
                                </Button> 
                            </Link>
                        </li>

                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                    Wellness
                                </Button> 
                            </Link>
                        </li>

                        <li className="list-none">
                            <Link to="/" className="link transition text-[14px] font-[500]">
                                <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                                    Jewellery
                                </Button> 
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="col_3 w-[20%]">
                    <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0 ">
                        <GoRocket className="text-[18px]"/>
                        Free International Delivery
                    </p>
                </div>
            </div>
        </nav>

        {/* category panel */}

        <CategoryPanel  isOpenCatPanel={isOpenCatPanel} setIsOpenCatPanel={setIsOpenCatPanel}/>

      </>
    );
};
export default Navigation;