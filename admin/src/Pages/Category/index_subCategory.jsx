import React, { useContext } from "react";
import { Button } from "@mui/material";
import Tooltip1 from "@mui/material/Tooltip";
import Checkbox from "@mui/material/Checkbox";
import { AiOutlineEdit } from "react-icons/ai";
import { GoTrash } from "react-icons/go";
import { MyContext } from "../../App";
import { Link } from "react-router";
// Bảng SP của MUI
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const columns = [
  { id: "imageSubCategory", label: "Ảnh danh mục", minWidth: 250 },
  { id: "category", label: "Danh mục", minWidth: 250 },
  { id: "subCategory", label: "Danh mục con", minWidth: 400 },
  { id: "modify", label: "Chỉnh sửa", minWidth: 100 },
];

export const SubCategoryList = () => {
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
      <div className="flex items-center justify-between px-2 py-0 mt-3">
        <h2 className="text-[18px] font-[600]">Danh sách danh mục con</h2>

        <div className="col w-[30%] flex items-center justify-end gap-3">
          <Button
            className="btn-blue !text-white btn-sm"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Thêm danh mục con",
              })
            }
          >
            Thêm danh mục con
          </Button>
        </div>
      </div>

      {/* Danh sách banner MUI */}
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18px] font-[600]">
            Danh sách danh mục con (MUI)
          </h2>
        </div>

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
                {/* Ảnh danh mục */}
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

                {/*Danh mục*/}
                <TableCell>
                  <Chip label="Thời trang" />
                </TableCell>

                {/*Danh mục con*/}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Chip
                      label="Thời trang nam"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      label="Thời trang nữ"
                      color="primary"
                      variant="outlined"
                    />
                    <Chip
                      label="Thời trang trẻ em"
                      color="primary"
                      variant="outlined"
                    />
                  </div>
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

export default SubCategoryList;
