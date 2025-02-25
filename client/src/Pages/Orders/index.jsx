import Button from '@mui/material/Button';
import AccountSiderBar from "../../components/AccountSiderBar";
import Badge from "../../components/Badge";
import { FaAngleDown } from "react-icons/fa";
import { useState } from 'react';
import { FaAngleUp } from "react-icons/fa";

const Orders = () => {

    const [isOpenOrder, setIsOpenOrder] = useState(null);

    const isShowOrder = (index) => {
        if(isOpenOrder===index){
            setIsOpenOrder(null);
        }else{
            setIsOpenOrder(index);
        }
        
    };

    return (
        <section className="py-10 w-full">
            <div className="container flex gap-5">
                <div className="col1 w-[15%]">
                    <AccountSiderBar/>
                </div>

                <div className="col2 w-[85%]">
                    <div className="shadow-md rounded-md bg-white">
                        <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.2)]">
                            <h2 className="text-[20px] font-[600]"> Đơn hàng</h2>
                            <p className="text-[16px] font-[500] mt-2 mb-3"> 
                                Có <span className="font-blod text-primary">1 </span>đơn hàng
                            </p>

                            
                            <div className="relative overflow-x-auto mt-5">
                                <table className="w-full border-collapse border border-gray-300 text-[14px] text-gray-700">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-300 px-4 py-2"></th>
                                            <th className="border border-gray-300 px-4 py-2">Mã đơn</th>
                                            <th className="border border-gray-300 px-4 py-2">Mã thanh toán</th>
                                            <th className="border border-gray-300 px-4 py-2">Tên</th>
                                            <th className="border border-gray-300 px-4 py-2">Số điện thoại</th>
                                            <th className="border border-gray-300 px-4 py-2">Địa chỉ</th>
                                            <th className="border border-gray-300 px-4 py-2">Email</th>
                                            <th className="border border-gray-300 px-4 py-2">Trạng thái đơn hàng</th>
                                            <th className="border border-gray-300 px-4 py-2">Ngày đặt đơn</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">
                                                <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-[#f1f1f1]"
                                                onClick={()=>isShowOrder(0)}>

                                                    {
                                                        isOpenOrder === 0 ?  <FaAngleDown className='text-[16px] text-[rgba(0,0,0,0.7)]'/>
                                                        : <FaAngleUp className='text-[16px] text-[rgba(0,0,0,0.7)]'/>
                                                    }
                                                    
                                                </Button>
                                            </td>
                                            <td className="border border-gray-300 px-4 py-2">123</td>
                                            <td className="border border-gray-300 px-4 py-2">67897645342</td>      
                                            <td className="border border-gray-300 px-4 py-2">User123</td>
                                            <td className="border border-gray-300 px-4 py-2">0123456789</td>
                                            <td className="border border-gray-300 px-4 py-2">123/21, Hưng Lợi, Ninh Kiều, Cần Thơ</td>
                                            <td className="border border-gray-300 px-4 py-2">User123@gmail.com</td>
                                            <td className="border border-gray-300 px-4 py-2"><Badge status="Chưa giải quyết"/></td>
                                            <td className="border border-gray-300 px-4 py-2">26/2/2025</td>
                                        </tr>

                                        {
                                            isOpenOrder === 0 && (

                                            <tr>
                                                <td className="bg-[#f1f1f1" colSpan={9}>
                                                    <div className="relative overflow-x-auto mt-5">
                                                        <table className="w-full border-collapse border border-gray-300 text-[14px] text-gray-700">
                                                            <thead>
                                                                <tr className="bg-gray-100">
                                                                    <th className="border border-gray-300 px-4 py-2">Mã sản Phẩm</th>
                                                                    <th className="border border-gray-300 px-4 py-2">Tên sản Phẩm</th>
                                                                    <th className="border border-gray-300 px-4 py-2">Hình ảnh</th>
                                                                    <th className="border border-gray-300 px-4 py-2">Số lượng</th>
                                                                    <th className="border border-gray-300 px-4 py-2">Giá tiền</th>
                                                                    <th className="border border-gray-300 px-4 py-2">Tổng phụ</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="border border-gray-300 px-4 py-2">123213</td>
                                                                    <td className="border border-gray-300 px-4 py-2">Váy đầm maxi BCBG</td>
                                                                    <td className="border border-gray-300 px-4 py-2">
                                                                    <img 
                                                                        src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400" 
                                                                        className="w-[70px] h-[90px] object-cover rounded-md"
                                                                    />
                                                                    </td>
                                                                    <td className="border border-gray-300 px-4 py-2">4</td>
                                                                    <td className="border border-gray-300 px-4 py-2">1.249.000đ</td>
                                                                    <td className="border border-gray-300 px-4 py-2">4.996.000đ</td>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Orders; 