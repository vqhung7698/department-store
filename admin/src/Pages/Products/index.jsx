import { useContext, useState } from "react";
import { Button } from "@mui/material";
import { IoMdAdd } from "react-icons/io";
import Tooltip1 from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import Progress from "../../Components/ProgressBar";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import SearchBox from "../../Components/SearchBox";
import { MyContext } from "../../App";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const Products = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const context = useContext(MyContext);

  const handleChangeCatFilter = (event) => {
    setCategoryFilter(event.target.value);
  };

  return (
    <>
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">Sản phẩm {""}</h2>

        <div className="col w-[25%] flex items-center justify-end gap-3">
          <Button
            className="btn-blue !text-white btn-sm"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Thêm sản phẩm",
              })
            }
          >
            Thêm sản phẩm
          </Button>
        </div>
      </div>

      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full pl-5 justify-between">
          <div className="col w-[20%]">
            <h4 className="font-[600] text-[13px] mb-2">Phân loại danh mục</h4>
            <Select
              className="w-full"
              size="small"
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={categoryFilter}
              onChange={handleChangeCatFilter}
              label="CatFilter"
            >
              <MenuItem value={10}>Thời trang nam</MenuItem>
              <MenuItem value={20}>Thời trang nữ</MenuItem>
              <MenuItem value={30}>Trẻ em</MenuItem>
            </Select>
          </div>

          <div className="col w-[20%] ml-auto">
            <SearchBox></SearchBox>
          </div>
        </div>

        <br />

        {/* Bắt đầu danh sách sản phẩm */}
        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full border-collapse border border-gray-300 text-[14px] text-gray-700">
            {/* Tiêu đề cột bảng sản phẩm */}
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2">
                  <div className="w-[40px] h-[40px]">
                    <Checkbox {...label} />
                  </div>
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Ảnh sản phẩm
                </th>
                <th className="border border-gray-300 px-4 py-2">Danh mục</th>
                <th className="border border-gray-300 px-4 py-2">Tên</th>
                <th className="border border-gray-300 px-4 py-2">
                  Danh mục con
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Thương hiệu
                </th>
                <th className="border border-gray-300 px-4 py-2">Giá</th>
                <th className="border border-gray-300 px-4 py-2">Đã bán</th>
                <th className="border border-gray-300 px-4 py-2">Chỉnh sửa</th>
              </tr>
            </thead>

            {/* Nội dung bảng "Sản phẩm */}
            <tbody>
              {/* Hàng đầu của bảng sản phẩm */}
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="w-[40px] h-[40px]">
                    <Checkbox {...label} />
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src="../../../public/Dam_Xoa_Nu.webp"
                    alt="Ảnh sản phẩm"
                    className="w-[90px] h-[90px] object-cover rounded-md"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">Thời trang</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">
                    Đầm Xoè Chân Bông
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">Thời trang nữ</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]"> Swanlake</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">250.000đ</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <p className="text-[14px] w-[150px]">
                    Đã bán
                    <span className="font-[650]">50</span>
                  </p>
                  <Progress value={40} type="success" />
                </td>

                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center gap-1">
                    <Tooltip1 title="Chỉnh sửa" placement="top">
                      <Button
                        className="!w-[35px] !h-[35px] bg-gray-400 !border 
                    !border[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] 
                    !min-w-[35px]"
                      >
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip1>

                    <Tooltip1 title="Xem chi tiết" placement="top">
                      <Button
                        className="!w-[35px] !h-[35px] bg-gray-400 !border 
                    !border[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] 
                    !min-w-[35px]"
                      >
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip1>

                    <Tooltip1 title="Xóa" placement="top">
                      <Button
                        className="!w-[35px] !h-[35px] bg-gray-400 !border 
                    !border[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] 
                    !min-w-[35px]"
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip1>
                  </div>
                </td>
              </tr>

              {/* Hàng 2 của bảng sản phẩm */}
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="w-[40px] h-[40px]">
                    <Checkbox {...label} />
                  </div>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src="../../../public/Polo_nam.jpg"
                    alt="Ảnh sản phẩm"
                    className="w-[90px] h-[90px] object-cover rounded-md"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">Thời trang</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">
                    Áo polo nam Basic{" "}
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">
                    Thời trang nam
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]"> Polomanor</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">300.000</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <p className="text-[14px] w-[150px]">
                    Đã bán
                    <span className="font-[650]">100</span>
                  </p>
                  <Progress value={40} type="success" />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <div className="flex items-center gap-1">
                    <Tooltip1 title="Chỉnh sửa" placement="top">
                      <Button
                        className="!w-[35px] !h-[35px] bg-gray-400 !border 
                    !border[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] 
                    !min-w-[35px]"
                      >
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip1>

                    <Tooltip1 title="Xem chi tiết" placement="top">
                      <Button
                        className="!w-[35px] !h-[35px] bg-gray-400 !border 
                    !border[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] 
                    !min-w-[35px]"
                      >
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip1>

                    <Tooltip1 title="Xóa" placement="top">
                      <Button
                        className="!w-[35px] !h-[35px] bg-gray-400 !border 
                    !border[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] 
                    !min-w-[35px]"
                      >
                        <GoTrash className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip1>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/*Phân trang  */}
        <div className=" flex items-center justify-end pt-5 pb-5 px-4">
          <Pagination count={5} color="primary" />
        </div>
      </div>
    </>
  );
};

export default Products;
