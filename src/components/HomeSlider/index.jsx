import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const HomeSlider = () => {
    return (
    <>
       <div className='homeSlider py-4'>
            <div className='container'>
                <Swiper spaceBetween={10} 
                        navigation={true} 
                        modules={[Navigation]} 
                        className="sliderHome">

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://api.spicezgold.com/download/file_1734524893797_NewProject(13).jpg" 
                            alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://api.spicezgold.com/download/file_1734524930884_NewProject(6).jpg" 
                            alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://api.spicezgold.com/download/file_1734524958576_NewProject(10).jpg" 
                            alt="Banner Slider" className='w-full' />
                        </div>    
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://api.spicezgold.com/download/file_1734524971122_NewProject(8).jpg" 
                            alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://api.spicezgold.com/download/file_1734524985581_NewProject(11).jpg" 
                            alt="Banner Slider" className='w-full' />
                        </div>    
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://api.spicezgold.com/download/file_1734525002307_1723967638078_slideBanner1.6bbeed1a0c8ffb494f7c.jpg" 
                            alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://api.spicezgold.com/download/file_1734525014348_NewProject(7).jpg" 
                            alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>
                </Swiper> 
            </div>
        </div>
    </>
    );
};

export default HomeSlider;