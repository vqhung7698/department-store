import React from "react";
import { Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddSubCategory = () => {
  const [productCat, setProductCat] = React.useState("");

  const handleChangeProductCat = (event) => {
    setProductCat(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form className="form py-3 p-8 ">
        <div className="grid grid-cols-4 mb-3 gap-5">
          <div className="col ">
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

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Danh mục con
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)} 
              focus:outline-none focus:border-[rgba(0,0,0,0.4)] 
              rounded-sm p-3 text-sm"
            />
          </div>
        </div>
        <br />
        <div className="w-[250px]">
          <Button type="button" className="btn-blue btn-lg w-full flex gap-2">
            <FaCloudUploadAlt className="text-[25px] text-white" />
            Tải lên
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddSubCategory;
