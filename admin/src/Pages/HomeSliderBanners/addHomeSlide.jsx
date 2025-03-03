// import React from "react";
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddHomeSlide = () => {
  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8 ">
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
        <br />
        <div className="w-[250px]">
          <Button type="button" className="btn-blue btn-lg w-full flex gap-2">
            <FaCloudUploadAlt className="text-[25px] text-white" />
            Tải ảnh
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddHomeSlide;
