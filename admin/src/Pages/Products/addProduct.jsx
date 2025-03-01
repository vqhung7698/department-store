import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Rating from "@mui/material/Rating";
import UploadBox from "../../Components/UploadBox";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";

const AddProduct = () => {
  const [productCat, setProductCat] = React.useState("");
  const [productSubCat, setProductSubCat] = React.useState("");
  const [productFeatured, setProductFeatured] = React.useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  const handleChangeProductSubCat = (event) => {
    setProductSubCat(event.target.value);
  };

  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8 ">
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Tên sản phẩm
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border 
                        border-[rgba(0,0,0,0.2)} focus:outline-none focus:border-[rgba(0,0,0,0.4)]
                        rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Mô tả sản phẩm
            </h3>
            <textarea
              type="text"
              className="w-full h-[140px] border 
                        border-[rgba(0,0,0,0.2)} focus:outline-none focus:border-[rgba(0,0,0,0.4)]
                        rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        {/* Hảng đầu trong form thêm SP */}
        <div className="grid grid-cols-4 mb-3 gap-4">
          {/* Danh mục SP */}
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Danh mục sản phẩm
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCatDrop"
              size="small"
              className="w-full"
              value={productCat}
              label="Danh mục"
              onChange={handleChangeProductCat}
            >
              <MenuItem value={10}>Thời trang</MenuItem>
              <MenuItem value={20}>Sắc đẹp</MenuItem>
              <MenuItem value={30}>Sức khoẻ</MenuItem>
            </Select>
          </div>

          {/*Danh mục con  */}
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Danh mục con sản phẩm
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productSubCatDrop"
              size="small"
              className="w-full"
              value={productSubCat}
              label="Danh mục con"
              onChange={handleChangeProductSubCat}
            >
              <MenuItem value={10}>Đàn ông</MenuItem>
              <MenuItem value={20}>Phụ nữ</MenuItem>
              <MenuItem value={30}>Trẻ em</MenuItem>
            </Select>
          </div>

          {/* Giá SP */}
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Giá sản phẩm
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)} 
                focus:outline-none focus:border-[rgba(0,0,0,0.4)]
                rounded-sm p-3 text-sm"
            />
          </div>

          {/* Giá cũ của SP*/}
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Giá cũ của sản phẩm
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)} 
                focus:outline-none focus:border-[rgba(0,0,0,0.4)]
                rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        {/* Hảng thứ 2 trong form thêm SP */}
        <div className="grid grid-cols-5 mb-3 gap-4">
          {/* SP nối bật? */}
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Có nổi bật?
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productFeatured"
              size="small"
              className="w-full"
              value={productFeatured}
              label="Danh mục"
              onChange={handleChangeProductFeatured}
            >
              <MenuItem value={20}>Có</MenuItem>
              <MenuItem value={30}>Không</MenuItem>
            </Select>
          </div>

          {/*Số lượng SP  */}
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Số lượng sản phẩm
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)} 
                    focus:outline-none focus:border-[rgba(0,0,0,0.4)]
                    rounded-sm p-3 text-sm"
            />
          </div>

          {/*Nhãn hiệu  */}
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Nhãn hiệu
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)} 
                    focus:outline-none focus:border-[rgba(0,0,0,0.4)]
                    rounded-sm p-3 text-sm"
            />
          </div>

          {/*Giảm giá SP  */}
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Giảm giá sản phẩm
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)} 
                    focus:outline-none focus:border-[rgba(0,0,0,0.4)]
                    rounded-sm p-3 text-sm"
            />
          </div>

          {/*Đánh giá SP  */}
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Đánh giá sản phẩm
            </h3>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          </div>
        </div>

        {/* Tải ảnh */}
        <div className="col w-full p-5 px-0">
          <h3 className="font-[700] text-[18px] mb-2">Tải hình ảnh</h3>
          <div className="grid grid-cols-7 gap-4">
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
                  src="../../../public/Dam_Xoa_Nu.webp"
                />
              </div>
            </div>

            <UploadBox multiple={true} />
          </div>
        </div>
        <Button type="button" className="btn-blue btn-lg">
          Tải ảnh
        </Button>
      </form>
    </section>
  );
};

export default AddProduct;
