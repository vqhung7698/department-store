// import React from "react";
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";

const AddCategory = () => {
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8 ">
        <div className="grid grid-cols-1 mb-3">
          <div className="col w-[25%]">
            <h3 className="text-[18px] font-[500] mb-1 text-black">
              Tên danh mục
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border 
                        border-[rgba(0,0,0,0.2)} focus:outline-none focus:border-[rgba(0,0,0,0.4)]
                        rounded-sm p-3 text-sm"
            />
          </div>
        </div>
        <br />
        <h3 className="text-[20px] font-[500] mb-1 text-black">Ảnh danh mục</h3>
        <div className="grid grid-cols-7 gap-4">
          {/* Upload ảnh 1 */}
          <div className="uploadBoxWrapper relative">
            <span
              className="absolute w-[20px] h-[20px] rounded-full overflow-hidden
               bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center 
               z-50 cursor-pointer"
            >
              <IoMdClose className="text-white text-[20px]" />
            </span>
            <div
              className="uploadBox p-0 rounded-md overflow-hidden border 
              border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] 
              bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center 
              justify-centerflex-col relative"
            >
              <LazyLoadImage
                className="w-full h-full object-cover"
                alt={"image"}
                effect="blur"
                wrapperProps={{ style: { transitionDelay: "0.5s" } }}
                src="../../../public/Polo_nam.jpg"
              />
            </div>
          </div>
          {/* Upload ảnh 2 */}
          <div className="uploadBoxWrapper relative">
            <span
              className="absolute w-[20px] h-[20px] rounded-full overflow-hidden
               bg-red-700 -top-[5px] -right-[5px] flex items-center justify-center 
               z-50 cursor-pointer"
            >
              <IoMdClose className="text-white text-[20px]" />
            </span>
            <div
              className="uploadBox p-0 rounded-md overflow-hidden border 
              border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] 
              bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center 
              justify-centerflex-col relative"
            >
              <LazyLoadImage
                className="w-full h-full object-cover"
                alt={"image"}
                effect="blur"
                wrapperProps={{ style: { transitionDelay: "0.5s" } }}
                src="../../../public/Polo_nam.jpg"
              />
            </div>
          </div>
          <UploadBox multiple={true} />
        </div>
        <Button type="button" className="btn-blue btn-lg">
          Tải ảnh
        </Button>
      </form>
    </section>
  );
};

export default AddCategory;
