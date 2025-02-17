import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
    
const HomeCatSlider = () => {
    return (
        <div className="homeCatSlider pt-4 py-8">
            <div className="container">
                <Swiper slidesPerView={7}
                        spaceBetween={10} 
                        navigation={true} 
                        modules={[Navigation]} 
                        className="homeCatSlider">

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-clo
                            item rounded-[20px] overflow-hidden'>
                                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/11-cz_categoryimagelist.jpg" 
                                    className='w-[80px] transition-all'/>
                                    <h3 className='text-[16px] font-[500] mt-3'>
                                        Máy tính bảng
                                    </h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Link to="/">
                            <div className='item py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-clo
                            item rounded-[20px] overflow-hidden'>
                                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/12-cz_categoryimagelist.jpg" 
                                    className='w-[80px]'/>
                                <h3 className='text-[15px] font-[500] mt-3'>
                                    Áo thun Creed
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-clo
                            item rounded-[20px] overflow-hidden'>
                                <img src="https://lagihitech.vn/wp-content/uploads/2023/11/dong-ho-thong-minh-Fitbit-Charge-6-hinh-2.jpg" 
                                    className='w-[80px]'/>
                                <h3 className='text-[15px] font-[500] mt-3'>
                                    Đồng hồ thông minh
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-clo
                            item rounded-[20px] overflow-hidden'>
                                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/14-cz_categoryimagelist.jpg" 
                                    className='w-[80px]'/>
                                <h3 className='text-[15px] font-[500] mt-3'>
                                    Nhẫn kim cương
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Link to="/">
                            <div className='item py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-clo
                            item rounded-[20px] overflow-hidden'>
                                <img src="https://bizweb.dktcdn.net/100/360/581/products/tui-xach-tay-nu-gence-cao-cap-tx05-vang-1.jpg?v=1685612876783"
                                className='w-[80px]' />
                                <h3 className='text-[15px] font-[500] mt-3'>
                                    Túi xách tay cao cấp
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-clo
                            item rounded-[20px] overflow-hidden'>
                                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/16-cz_categoryimagelist.jpg" 
                                    className='w-[80px]'/>
                                <h3 className='text-[15px] font-[500] mt-3'>
                                    Giày thể thao 
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-clo
                            item rounded-[20px] overflow-hidden'>
                                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/18-cz_categoryimagelist.jpg" 
                                    className='w-[80px]'/>
                                <h3 className='text-[15px] font-[500] mt-3'>
                                    Máy chơi game
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    {/* <SwiperSlide>
                        <Link to="/">
                            <div className='item py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-clo
                            item rounded-[20px] overflow-hidden'>
                                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/17-cz_categoryimagelist.jpg" 
                                    className='w-[80px]'/>
                                <h3 className='text-[15px] font-[500] mt-3'>
                                    Purse
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide> */}
                </Swiper>
            </div>
        </div>
    );
};

export default HomeCatSlider;