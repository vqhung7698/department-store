import Breadcrumbs from '@mui/material/Breadcrumbs';
import  Link  from '@mui/material/Link';
import ProductsZoom from '../../components/ProductsZoom';
import { Rating } from '@mui/material';

import { useState } from 'react';
import ProductsSlider from '../../components/ProductsSlider';
import ProductDetailsComponent from '../../components/ProductDetailsComponent';


const ProductDetails = () => {

    const [activeTab, setActiveTab] = useState(0);

    const [reviews, setReviews] = useState([
        { name: "Vương Quốc Hùng", rating: 5, comment: "Sản phẩm rất đẹp, chất lượng tốt!", date: "20/02/2025" },
        { name: "Huỳnh Minh Đăng", rating: 4, comment: "Mình rất thích nhưng giao hàng hơi chậm.", date: "19/02/2025" }
    ]);
    
    const [newName, setNewName] = useState('');
    const [newComment, setNewComment] = useState('');
    const [newRating, setNewRating] = useState(0);
    
    const submitReview = () => {
        if (newName && newComment && newRating > 0) {
            const newReview = {
                name: newName,
                rating: newRating,
                comment: newComment,
                date: new Date().toLocaleDateString("vi-VN"),
            };
    
            setReviews([newReview, ...reviews]);
            setNewName('');
            setNewComment('');
            setNewRating(0);
        } else {
            alert("Vui lòng điền đầy đủ thông tin và chọn số sao!");
        }
    };
    
    return(
        <>
            <div className='py-5'>
                <div className="container">
                    <Breadcrumbs aria-label="breadcrumb">
                        <Link underline="hover" color="inherit" className="link transition !text-[14px]"
                        to="/"  >
                            Trang Chủ
                        </Link>
                        
                        <Link underline="hover" color="inherit" className="link transition !text-[14px]"
                        to="/">
                                Thời Trang
                        </Link>

                        <Link underline="hover" color="inherit" className="link transition !text-[14px]">
                            Váy đầm maxi BCBG
                        </Link>
                    </Breadcrumbs>
                </div>
            </div>

            <section className='py-5 bg-white'>
                <div className='container flex gap-10'> 
                    <div className='productZoomContainer w-[30%]'>
                        <ProductsZoom/>
                    </div>

                    {/* Nội dung sản phẩm */}
                    <div className='productContent w-[70%]'>
                        <ProductDetailsComponent/>
                    </div>    
                </div>

                <div className='container pt-10'>
                    <div className='flex items-center gap-6'>
                        <span className={`link text-[18px] cursor-pointer font-[600] ${activeTab===0 && 'text-primary'}`}
                            onClick={()=> setActiveTab(0)}>
                            Thông tin sản phẩm
                        </span>

                        <span className={`link text-[18px] cursor-pointer font-[600] ${activeTab===1 && 'text-primary'}`}
                            onClick={()=> setActiveTab(1)}>
                            Bảng kích thước
                        </span>

                        <span className={`link text-[18px] cursor-pointer font-[600] ${activeTab===2 && 'text-primary'}`}
                            onClick={()=> setActiveTab(2)}>
                            Đánh giá (2)
                        </span>
                    </div>

                    {/* Phần thông tin sản phẩm */}
                    {activeTab === 0 && (
                        <div className='shadow-md w-full p-5 px-8 rounded-md'>
                            <h3 className="text-[18px] font-semibold mb-4">Mô tả sản phẩm</h3>
                            <p className='text-[14px] text-gray-700 leading-6'>
                                Đầm maxi cổ yếm của thương hiệu <strong>BCBG Generation</strong> mang đến phong cách thanh lịch và quyến rũ. 
                                Với thiết kế hiện đại, sản phẩm phù hợp cho nhiều dịp khác nhau như dạo phố, tiệc tùng hay sự kiện quan trọng.
                            </p>

                            <h4 className="text-[16px] font-semibold mt-4">Đặc điểm nổi bật</h4>
                            <ul className='list-disc pl-5 text-[14px] text-gray-700'>
                                <li>Chất liệu: <strong>100% Polyester</strong>, mềm mại và thoáng mát.</li>
                                <li>Thiết kế cổ yếm sang trọng, khoe khéo bờ vai thon.</li>
                                <li>Phần lưng cut-out tinh tế tạo điểm nhấn nổi bật.</li>
                                <li>Màu sắc: <strong>Xanh lơ</strong>, phù hợp với nhiều phong cách.</li>
                                <li>Lớp lót trong giúp tăng sự thoải mái khi mặc.</li>
                            </ul>

                            <h4 className="text-[16px] font-semibold mt-4">Hướng dẫn bảo quản</h4>
                            <ul className='list-disc pl-5 text-[14px] text-gray-700'>
                                <li>Giặt riêng với nước lạnh và chất tẩy nhẹ.</li>
                                <li>Không vắt mạnh, không tẩy trắng.</li>
                                <li>Không sấy khô, ủi ở nhiệt độ thấp.</li>
                            </ul>
                        </div>
                    )}

                    {/* Bảng kích thước */}
                    {activeTab === 1 && (
                        <div className='shadow-md w-full p-5 px-8 rounded-md'>
                            <div className="overflow-x-auto">
                                <table className="w-full border-collapse border border-gray-300 text-[14px] text-gray-700">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border border-gray-300 px-4 py-2">Size</th>
                                            <th className="border border-gray-300 px-4 py-2">Vòng ngực (cm)</th>
                                            <th className="border border-gray-300 px-4 py-2">Vòng eo (cm)</th>
                                            <th className="border border-gray-300 px-4 py-2">Chiều dài váy (cm)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">S</td>
                                            <td className="border border-gray-300 px-4 py-2">80 - 84</td>
                                            <td className="border border-gray-300 px-4 py-2">62 - 66</td>
                                            <td className="border border-gray-300 px-4 py-2">125</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">M</td>
                                            <td className="border border-gray-300 px-4 py-2">84 - 88</td>
                                            <td className="border border-gray-300 px-4 py-2">66 - 70</td>
                                            <td className="border border-gray-300 px-4 py-2">127</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">L</td>
                                            <td className="border border-gray-300 px-4 py-2">88 - 92</td>
                                            <td className="border border-gray-300 px-4 py-2">70 - 74</td>
                                            <td className="border border-gray-300 px-4 py-2">129</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-gray-300 px-4 py-2">XL</td>
                                            <td className="border border-gray-300 px-4 py-2">92 - 96</td>
                                            <td className="border border-gray-300 px-4 py-2">74 - 78</td>
                                            <td className="border border-gray-300 px-4 py-2">131</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}

                    {/* Phần đánh giá */}
                    {activeTab === 2 && (
                        <div className='shadow-md w-full p-5 px-8 rounded-md'>
                            {/* Danh sách đánh giá */}
                            <div className="space-y-4">
                                {reviews.length > 0 ? (
                                    reviews.map((review, index) => (
                                        <div key={index} className="p-4 border-b border-gray-200">
                                            <div className="flex items-center gap-2">
                                                <span className="font-semibold">{review.name}</span>
                                                <Rating name="read-only" value={review.rating} size="small" readOnly />
                                            </div>
                                            <p className="text-sm text-gray-600">{review.comment}</p>
                                            <span className="text-xs text-gray-400">{review.date}</span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-gray-500 text-sm">Chưa có đánh giá nào.</p>
                                )}
                            </div>

                            {/* Form đánh giá */}
                            <div className="mt-6 p-4 border-t border-gray-200">
                                <h4 className="text-[16px] font-semibold mb-2">Viết đánh giá của bạn</h4>
                                <Rating
                                    name="user-rating"
                                    value={newRating}
                                    onChange={(event, newValue) => setNewRating(newValue)}
                                />
                                <input
                                    type="text"
                                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-300"
                                    placeholder="Nhập tên của bạn"
                                    value={newName}
                                    onChange={(e) => setNewName(e.target.value)}
                                />
                                <textarea
                                    className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-red-300"
                                    placeholder="Nhập đánh giá của bạn"
                                    rows="3"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                ></textarea>
                                <button
                                    className="mt-3 px-4 py-2 bg-primary text-white rounded-md hover:bg-red-600 transition"
                                    onClick={submitReview}
                                >
                                    Gửi đánh giá
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <div className='container pt-8'>
                    <h2 className='text-[18px] font-[600] pb-0'>Sản Phẩm Liên Quan</h2>
                    <ProductsSlider items={5}/>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;



