import React, { useContext } from "react";
import { Button } from "@mui/material";
import Tooltip1 from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { FaRegEye } from "react-icons/fa6";
import SearchBox from "../../Components/SearchBox";
import { MyContext } from "../../App";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "imageUser", label: "Ảnh người dùng", minWidth: 60 },
  { id: "userName", label: "Tên người dùng", minWidth: 150 },
  { id: "userEmail", label: "Địa chỉ email", minWidth: 150 },
  { id: "userPhone", label: "Số điện thoại", minWidth: 100 },
  { id: "modify", label: "Chỉnh sửa", minWidth: 100 },
];

export const Users = () => {
  const context = useContext(MyContext);

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
      <div className="card my-4 pt-5 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center w-full pl-5 justify-between">
          <div className="col w-[40%]">
            <h2 className=" text-[18px] font-[600]">Danh sách người dùng</h2>
          </div>

          <div className="col w-[20%] ml-auto">
            <SearchBox></SearchBox>
          </div>
        </div>

        <br />

        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell width={60}>
                  <Checkbox {...label} size="small" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    width={column.minWidth}
                    key={column.id}
                    align={column.align}
                    // style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="small" />
                </TableCell>
                {/* Ảnh người dùng */}
                <TableCell width={300}>
                  <div className="flex items-center gap-4 w-[250px]">
                    <div
                      className="img w-full rounded-md 
                        overflow-hidden group"
                    >
                      <Link to="/product/45745" data-discover="true">
                        <img
                          src="../../../public/banner_1.jpg"
                          alt="Banner"
                          className="w-full group-hover:scale-l05 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600px] text-[12px] leading-4 hover:text-primary"></h3>
                    </div>
                  </div>
                </TableCell>

                {/*Tên người dùng*/}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  User123
                </TableCell>

                {/*Email người dùng*/}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <span className="flex items-center gap-2">
                    <MdOutlineMarkEmailRead />
                    User123@gmail.com
                  </span>
                </TableCell>

                {/*SĐT*/}
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <span className="flex items-center gap-2">
                    <MdLocalPhone/>
                    0913487795
                  </span>
                </TableCell>

                {/* Nút chỉnh sửa */}
                <TableCell width={100}>
                  <div className="flex items-center gap-1">
                    {/* Chỉnh sửa */}
                    <Tooltip1 title="Chỉnh sửa" placement="top">
                      <Button
                        className="!w-[35px] !h-[35px] bg-gray-400 !border 
                    !border[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] 
                    !min-w-[35px]"
                      >
                        <AiOutlineEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </Tooltip1>
                    {/* Xem chi tiết */}
                    <Tooltip1 title="Xem chi tiết" placement="top">
                      <Button
                        className="!w-[35px] !h-[35px] bg-gray-400 !border 
                                        !border[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1] 
                                        !min-w-[35px]"
                      >
                        <FaRegEye className="text-[rgba(0,0,0,0.7)] text-[18px]" />
                      </Button>
                    </Tooltip1>

                    {/* Xóa */}
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
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={10}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
};

export default Users;
