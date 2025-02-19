import { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { Collapse } from 'react-collapse';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import "../Sidebar/style.css";
import Rating from '@mui/material/Rating';

const Sidebar = () => {
    const [priceRange, setPriceRange] = useState([0, 1000000]);
    const [isOpenCategogyFilter, setIsOpenCategogyFilter] = useState(true);
    const [isOpenAvaFilter, setIsOpenAvaFilter] = useState(true);
    const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

    const categories = ["Thời Trang", "Thiết Bị Điện Tử", "Túi Xách", "Giày Dép", "Mỹ Phẩm", "Trang Sức", "Nông Sản"];

    return (
        <aside className="sidebar py-5">
            {/* Lọc theo danh mục */}
            <div className="box">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center">
                    Shop by Category
                    <Button className="!w-[30px] !h-[30px] !ml-auto !text-[#000]" 
                        onClick={() => setIsOpenCategogyFilter(!isOpenCategogyFilter)}>
                        {isOpenCategogyFilter ? <FaAngleUp /> : <FaAngleDown />}
                    </Button>
                </h3>
                <Collapse isOpened={isOpenCategogyFilter}>
                    <div className="scroll px-4">
                        {categories.map((item, index) => (
                            <FormControlLabel 
                                key={index} 
                                control={<Checkbox size='small' />} 
                                label={item} 
                                className='w-full' 
                            />
                        ))}
                    </div>
                </Collapse>
            </div>

            {/* Lọc theo tình trạng hàng */}
            <div className="box mt-2">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center">
                    Availability
                    <Button className="!w-[30px] !h-[30px] !ml-auto !text-[#000]" 
                        onClick={() => setIsOpenAvaFilter(!isOpenAvaFilter)}>
                        {isOpenAvaFilter ? <FaAngleUp /> : <FaAngleDown />}
                    </Button>
                </h3>
                <Collapse isOpened={isOpenAvaFilter}>
                    <div className="scroll px-4">
                        <FormControlLabel 
                            control={<Checkbox size='small' />} 
                            label="In Stock (17)" 
                            className='w-full' 
                        />
                    </div>
                </Collapse>
            </div>

            {/* Lọc theo kích thước */}
            <div className="box mt-3">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center">
                    Size
                    <Button className="!w-[30px] !h-[30px] !ml-auto !text-[#000]" 
                        onClick={() => setIsOpenSizeFilter(!isOpenSizeFilter)}>
                        {isOpenSizeFilter ? <FaAngleUp /> : <FaAngleDown />}
                    </Button>
                </h3>
                <Collapse isOpened={isOpenSizeFilter}>
                    <div className="scroll px-4">
                        {["S (0)", "M (1)", "L (7)", "XL (13)", "XXL (10)"].map((size, index) => (
                            <FormControlLabel 
                                key={index} 
                                control={<Checkbox size='small' />} 
                                label={size} 
                                className='w-full' 
                            />
                        ))}
                    </div>
                </Collapse>
            </div>

            {/* Lọc theo giá */}
            <div className="mt-4">
                <h3 className="w-full mb-3 text-[16px] font-[600]">
                    Filter by Price
                </h3>
                <RangeSlider 
                    value={priceRange} 
                    onInput={setPriceRange} 
                    min={0} 
                    max={1000000} 
                    step={1000} 
                />
                <div className="flex pt-4 pb-2 priceRange">
                    <span className="text-[13px]">
                        From: <strong className="text-dark">{priceRange[0].toLocaleString()}</strong>
                    </span>
                    <span className="ml-auto text-[13px]">
                        To: <strong className="text-dark">{priceRange[1].toLocaleString()}</strong>
                    </span>
                </div>
            </div>

            <div className="box mt-3">
                <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
                    Filter by Rating
                </h3>
                    
                <div className='w-full'>
                   <Rating name="size-small" defaultValue={5} size="small" readOnly  />           
                </div>

                <div className='w-full'>
                    <Rating name="size-small" defaultValue={4} size="small" readOnly  />           
                </div>

                <div className='w-full'>
                    <Rating name="size-small" defaultValue={3} size="small" readOnly  />           
                </div>

                <div className='w-full'>
                    <Rating name="size-small" defaultValue={2} size="small" readOnly  />           
                </div>

                <div className='w-full'>
                    <Rating name="size-small" defaultValue={1} size="small" readOnly  />           
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;


// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import "../Sidebar/style.css";
// import Button from '@mui/material/Button';
// import {Collapse} from 'react-collapse';
// import { FaAngleDown } from "react-icons/fa6";
// import { FaAngleUp } from "react-icons/fa6";
// import { useState } from 'react';

// import RangeSlider from 'react-range-slider-input';
// import 'react-range-slider-input/dist/style.css';
// import Rating from '@mui/material/Rating';


// const Sidebar = () => {

//     const [isOpenCategogyFilter, setIsOpenCategogyFilter] = useState(true);
//     const [isOpenAvaFilter, setIsOpenAvaFilter] = useState(true);
//     const [isOpenSizeFilter, setIsOpenSizeFilter] = useState(true);

//     return(
//         <div>
//             <aside className="sidebar py-5">
//                 <div className="box">
//                     <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
//                         Shop by Categogy
//                         <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' 
//                             onClick={()=>setIsOpenCategogyFilter(!isOpenCategogyFilter)}>
//                                 {
//                                     isOpenCategogyFilter===true ? <FaAngleUp/> : <FaAngleDown/>
//                                 }
//                         </Button>
//                         </h3>
//                     <Collapse isOpened={isOpenCategogyFilter}>
//                         <div className="scroll px-4 relative  -left-[13px]">          
//                             <FormControlLabel control={<Checkbox size='small'/>} label="Thời Trang" className='w-full'/>
//                             <FormControlLabel control={<Checkbox size='small'/>} label="Thời Trang" className='w-full'/>
//                             <FormControlLabel control={<Checkbox size='small'/>} label="Thời Trang" className='w-full'/>
//                             <FormControlLabel control={<Checkbox size='small'/>} label="Thời Trang" className='w-full'/>
//                             <FormControlLabel control={<Checkbox size='small'/>} label="Thời Trang" className='w-full'/>
//                             <FormControlLabel control={<Checkbox size='small'/>} label="Thời Trang" className='w-full'/>
//                             <FormControlLabel control={<Checkbox size='small'/>} label="Thời Trang" className='w-full'/>
//                             <FormControlLabel control={<Checkbox size='small'/>} label="Thời Trang" className='w-full'/>                       
//                         </div>
//                     </Collapse>
//                 </div>

//                 <div className="box">
//                     <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
//                         Availability
//                         <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' 
//                             onClick={()=>setIsOpenAvaFilter(!isOpenAvaFilter)}>
//                                 {
//                                     isOpenAvaFilter===true ? <FaAngleUp/> : <FaAngleDown/>
//                                 }
//                         </Button>
//                         </h3>
//                     <Collapse isOpened={isOpenAvaFilter}>
//                         <div className="scroll px-4 relative  -left-[13px]">          
//                             <FormControlLabel 
//                                 control={<Checkbox size='small'/>} 
//                                 label=" Availability (17)" 
//                                 className='w-full'/>                      
//                         </div>
//                     </Collapse>
//                 </div>

//                 <div className="box mt-3">
//                     <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
//                         Size
//                         <Button className='!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !text-[#000]' 
//                             onClick={()=>setIsOpenSizeFilter(!isOpenSizeFilter)}>
//                                 {
//                                     isOpenSizeFilter===true ? <FaAngleUp/> : <FaAngleDown/>
//                                 }
//                         </Button>
//                         </h3>
//                     <Collapse isOpened={isOpenSizeFilter}>
//                         <div className="scroll px-4 relative  -left-[13px]">          
//                             <FormControlLabel 
//                                 control={<Checkbox size='small'/>} 
//                                 label=" S (0)" 
//                                 className='w-full'
//                             />      
//                             <FormControlLabel 
//                                 control={<Checkbox size='small'/>} 
//                                 label=" M (1)" 
//                                 className='w-full'
//                             /> 
//                             <FormControlLabel 
//                                 control={<Checkbox size='small'/>} 
//                                 label=" L (7)" 
//                                 className='w-full'
//                             />          
//                             <FormControlLabel 
//                                 control={<Checkbox size='small'/>} 
//                                 label=" XL (13)" 
//                                 className='w-full'
//                             />        
//                         </div>
//                     </Collapse>
//                 </div>

//                 <div className="box mt-3">
//                     <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
//                         Filter by Price
//                     </h3>

//                     <RangeSlider/>

//                     <div className='flex pt-2 pb-2 priceRange'>
//                         <span>
//                             From: <strong className='text-dark'>Rs: {[0]}</strong>
//                         </span>
//                         <span className='ml-auto'>
//                             To: <strong className='text-dark'>Rs: {[1000]}</strong>
//                         </span>
//                     </div>
//                 </div>

//                 <div className="box mt-3">
//                     <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
//                         Filter by Rating
//                     </h3>
                    
//                     <div className='w-full'>
//                         <Rating name="size-small" defaultValue={5} size="small" readOnly  />           
//                     </div>
//                     <div className='w-full'>
//                         <Rating name="size-small" defaultValue={4} size="small" readOnly  />           
//                     </div>
//                     <div className='w-full'>
//                         <Rating name="size-small" defaultValue={3} size="small" readOnly  />           
//                     </div>
//                     <div className='w-full'>
//                         <Rating name="size-small" defaultValue={2} size="small" readOnly  />           
//                     </div>
//                     <div className='w-full'>
//                         <Rating name="size-small" defaultValue={1} size="small" readOnly  />           
//                     </div>
//                 </div>
//             </aside>
//         </div>
//     );
// };

// export default Sidebar;
