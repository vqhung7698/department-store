import { useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleUp } from "react-icons/fa6";
import Badge from "../../Components/Badge"; // File index.jsx bên Badge có default thì không cần dấu {}
import SearchBox from "../../Components/SearchBox";

export const Orders = () => {
  const [isOpenOrderedProduct, setIsOpenOrderedProduct] = useState(false);

  const isShowOrderedProduct = (index) => {
    if (isOpenOrderedProduct === index) {
      setIsOpenOrderedProduct(null);
    } else {
      setIsOpenOrderedProduct(index);
    }
  };
  return (
    <div className="card my-4 shadow-md sm:rounded-lg bg-white">
      <div className="flex items-center justify-between px-5 py-5">
        <h2 className="text-[18px] font-[600]">Đơn hàng gần đây</h2>
        <div className="w-[30%]">
          <SearchBox />
        </div>
      </div>

      <div className="relative overflow-x-auto mt-5 pb-5">
        <table className="w-full border-collapse border border-gray-300 text-[14px] text-gray-700">
          {/* Tiêu đề cột bảng "Đơn hàng gần đây" */}
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2"></th>
              <th className="border border-gray-300 px-4 py-2">Mã đơn hàng</th>
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
  );
};

export default Orders;
