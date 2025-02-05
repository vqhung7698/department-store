import "../Search/style.css";
import Button from '@mui/material/Button';
import { IoSearch } from "react-icons/io5";

const Search = () => {
    return (
        <div className='searchBox w-[100%] h-[50px] bg-[#e8e8e8] rounded-[5px] relative p-2'>
            <input type="text" placeholder="Search products here..." 
                   className="w-full h-[35px] focus:outline-none bg-inherit p-2 text-[15px]"/>

            <Button className="!absolute top-[5px] right-[5px] z-50 !w-[40px] !min-w-[40px] h-[40px]
            !rounded-full !text-black">
                <IoSearch className="text-[#8e8e8e] text-[22px]"/></Button>
        </div>
    );
};

export default Search; 