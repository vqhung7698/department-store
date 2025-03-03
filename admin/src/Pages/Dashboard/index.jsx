import React, { useState } from "react";
import DashboardBoxes from "../../Components/DashboardBoxes";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Badge from "../../Components/Badge"; // File index.jsx bên Badge có default thì không cần dấu {}
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Checkbox from "@mui/material/Checkbox";
import Progress from "../../Components/ProgressBar";
import { AiOutlineEdit } from "react-icons/ai";
import { FaRegEye } from "react-icons/fa6";
import { GoTrash } from "react-icons/go";
import Tooltip1 from "@mui/material/Tooltip";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
// Bảng SP của MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "image", label: "Ảnh sản phẩm", minWidth: 170 },
  { id: "modify", label: "Chỉnh sửa", minWidth: 100 },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const Dashboard = () => {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(false);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };

  const [categoryFilter, setCategoryFilter] = useState("");

  const handleChangeCatFilter = (event) => {
    setCategoryFilter(event.target.value);
  };

  // Trục Ox là tháng, trục Oy là số lượng
  const [chart1Data] = useState([
    {
      name: "Tháng 1",
      TổngDoanhSố: 4000,
      TổngKháchHàng: 2400,
      amt: 2400,
    },
    {
      name: "Tháng 2",
      TổngDoanhSố: 3000,
      TổngKháchHàng: 1398,
      amt: 2210,
    },
    {
      name: "Tháng 3",
      TổngDoanhSố: 2000,
      TổngKháchHàng: 9800,
      amt: 2290,
    },
    {
      name: "Tháng 4",
      TổngDoanhSố: 2780,
      TổngKháchHàng: 3908,
      amt: 2000,
    },
    {
      name: "Tháng 5",
      TổngDoanhSố: 1890,
      TổngKháchHàng: 4800,
      amt: 2181,
    },
    {
      name: "Tháng 6",
      TổngDoanhSố: 2390,
      TổngKháchHàng: 3800,
      amt: 2500,
    },
    {
      name: "Tháng 7",
      TổngDoanhSố: 3490,
      TổngKháchHàng: 4300,
      amt: 2100,
    },
    {
      name: "Tháng 8",
      TổngDoanhSố: 3590,
      TổngKháchHàng: 4362,
      amt: 2100,
    },
    {
      name: "Tháng 9",
      TổngDoanhSố: 5790,
      TổngKháchHàng: 2600,
      amt: 1500,
    },
    {
      name: "Tháng 10",
      TổngDoanhSố: 1490,
      TổngKháchHàng: 2300,
      amt: 1200,
    },
    {
      name: "Tháng 11",
      TổngDoanhSố: 3490,
      TổngKháchHàng: 4300,
      amt: 2100,
    },
    {
      name: "Tháng 12",
      TổngDoanhSố: 3490,
      TổngKháchHàng: 4300,
      amt: 2100,
    },
  ]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <div
        className="w-full py-2 px-5 border bg-white border-[rgba(0,0,0,0.1)] 
      flex items-center gap-8 mb-5 justify-between rounded-md"
      >
        <div className="info">
          <h1 className="text-[35px] font-bold leading-10 mb-3">Xin chào</h1>
          <p>Bên dưới là những thống kê mới nhất của đợt này </p>
        </div>

        <img
          src="../../../icons/shop.png"
          alt="Ảnh đại diện"
          className="w-[150px]"
        />
      </div>

      <DashboardBoxes></DashboardBoxes>

      {/* Danh sách SP (MUI) */}
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">DS sản phẩm (MUI)</h2>
        </div>

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="small"></Checkbox>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>

      {/* Danh sách đơn hàng gần đây */}
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Đơn hàng gần đây</h2>
        </div>

        <div className="relative overflow-x-auto mt-5 pb-5">
          <table className="w-full border-collapse border border-gray-300 text-[14px] text-gray-700">
            {/* Tiêu đề cột bảng "Đơn hàng gần đây" */}
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-4 py-2"></th>
                <th className="border border-gray-300 px-4 py-2">
                  Mã đơn hàng
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Mã thanh toán
                </th>
                <th className="border border-gray-300 px-4 py-2">Tên</th>
                <th className="border border-gray-300 px-4 py-2">
                  Số điện thoại
                </th>
                <th className="border border-gray-300 px-4 py-2">Địa chỉ</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">
                  Trạng thái đơn hàng
                </th>
                <th className="border border-gray-300 px-4 py-2">
                  Ngày đặt hàng
                </th>
              </tr>
            </thead>
            {/* Nội dung bảng "Đơn hàng gần đây" */}
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                    onClick={() => isShowOrderedProduct(0)}
                  >
                    {isOpenOrderedProduct === 0 ? (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">750364050133</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">67897645342</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]"> User123</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">0123456789</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">
                    {" "}
                    123/21, Hưng Lợi, Ninh Kiều, Cần Thơ
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">
                    User123@gmail.com
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Badge status="Chưa giải quyết" />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">26/02/2025</span>
                </td>
              </tr>

              {isOpenOrderedProduct === 0 && (
                <tr>
                  <td className="bg-[#f1f1f1" colSpan={9}>
                    <div className="relative overflow-x-auto mt-5">
                      <table className="w-full border-collapse border border-gray-300 text-[14px] text-gray-700">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">
                              Mã sản Phẩm
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Tên sản Phẩm
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Hình ảnh
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Số lượng
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Giá tiền
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Tổng phụ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              123213
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Váy đầm maxi BCBG
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              <img
                                src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400"
                                className="w-[70px] h-[90px] object-cover rounded-md"
                              />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              4
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              1.249.000đ
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              4.996.000đ
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}

              {/* Copy ở trên xuống */}
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <Button
                    className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                    onClick={() => isShowOrderedProduct(1)}
                  >
                    {isOpenOrderedProduct === 1 ? (
                      <FaAngleDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    ) : (
                      <FaAngleUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    )}
                  </Button>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">759596439125</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">53426789762</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]"> User586</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">0983745190</span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">
                    {" "}
                    133, Trần Hưng Đạo, Ninh Kiều, Cần Thơ
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">
                    User586@gmail.com
                  </span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Badge status="Đang giao hàng" />
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <span className="text-primary font-[500]">23/02/2025</span>
                </td>
              </tr>

              {isOpenOrderedProduct === 1 && (
                <tr>
                  <td className="bg-[#f1f1f1" colSpan={9}>
                    <div className="relative overflow-x-auto mt-5">
                      <table className="w-full border-collapse border border-gray-300 text-[14px] text-gray-700">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">
                              Mã sản Phẩm
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Tên sản Phẩm
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Hình ảnh
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Số lượng
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Giá tiền
                            </th>
                            <th className="border border-gray-300 px-4 py-2">
                              Tổng phụ
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 px-4 py-2">
                              123213
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              Váy đầm maxi BCBG
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              <img
                                src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400"
                                className="w-[70px] h-[90px] object-cover rounded-md"
                              />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              4
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              1.249.000đ
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                              4.996.000đ
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Danh sách sản phẩm  */}
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">Sản phẩm</h2>
        </div>

        <div className="flex items-center w-full pl-5 justify-between">
          <div className="col w-[20%]">
            <h4 className="font-[600] text-[15px] mb-2">Phân loại danh mục</h4>
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
        </div>

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
                    Đầm xòe chân bông
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

      {/* Biểu đồ */}
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5 pb-0">
          <h2 className="text-[18px] font-[600]">
            {" "}
            Tổng khách hàng & Tổng doanh số
          </h2>
        </div>

        <div className="flex items-center gap-5 px-5 py-5 pt-1">
          <span className="flex items-center gap-1 text-[15px]">
            <span className="block w-[8px] h-[8px] rounded-full bg-green-600"></span>
            Tổng khách hàng
          </span>
          <span className="flex items-center gap-1 text-[15px]">
            <span className="block w-[8px] h-[8px] rounded-full bg-blue-600"></span>
            Tổng doanh số
          </span>
        </div>

        <LineChart
          width={1000}
          height={500}
          data={chart1Data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="none" />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="TổngDoanhSố"
            stroke="#2563eb"
            strokeWidth={3}
            activeDot={{ r: 8 }}
          />
          <Line
            type="monotone"
            dataKey="TổngKháchHàng"
            stroke="#82ca9d"
            strokeWidth={3}
          />
        </LineChart>
      </div>
    </>
  );
};
export default Dashboard;
