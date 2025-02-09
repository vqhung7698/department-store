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
                                        Smart Tablet
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
                                    Crepe T-shirt
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
                        <Link to="/">
                            <div className='item py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-clo
                            item rounded-[20px] overflow-hidden'>
                                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/13-cz_categoryimagelist.jpg" 
                                    className='w-[80px]'/>
                                <h3 className='text-[15px] font-[500] mt-3'>
                                    Iaether Watch
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
                                    Rolling Diamond
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <Link to="/">
                            <div className='item py-7 px-3 bg-white rounbded-sm text-center flex items-center justify-center flex-clo
                            item rounded-[20px] overflow-hidden'>
                                <img src="https://demos.codezeel.com/prestashop/PRS21/PRS210502/modules/cz_categoryimagelist/views/img/15-cz_categoryimagelist.jpg" 
                                    className='w-[80px]'/>
                                <h3 className='text-[15px] font-[500] mt-3'>
                                    Wooden Chair
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
                                    Sneaker Shoes
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
                                    Xbox Controller
                                </h3>
                            </div>
                        </Link>
                    </SwiperSlide>

                    <SwiperSlide>
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
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HomeCatSlider;