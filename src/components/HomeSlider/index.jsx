import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation, Autoplay} from 'swiper/modules';

const HomeSlider = () => {
    return (
    <>
       <div className='homeSlider py-8 pt-4 '>
            <div className='container'>
                <Swiper spaceBetween={10} 
                        navigation={true} 
                        modules={[Navigation, Autoplay]} 
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                          }}
                        className="sliderHome">

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://bizweb.dktcdn.net/100/113/556/themes/161811/assets/slider_1.jpg?1676963410531" 
                            alt="Banner Slider" className='w-full h-[441px]' />
                        </div>
                    </SwiperSlide>
                    
                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://bizweb.dktcdn.net/100/493/370/themes/940719/assets/slider_lg_2.jpg?1713464283843" 
                            alt="Banner Slider" className='w-full h-[441px] ' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://bizweb.dktcdn.net/100/490/431/themes/927074/assets/slider_2.jpg?1717815949845" 
                            alt="Banner Slider" className='w-full h-[441px]' />
                        </div>    
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://bizweb.dktcdn.net/100/552/882/themes/993317/assets/slider_1.jpg?1739724176201" 
                            alt="Banner Slider" className='w-full' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://bizweb.dktcdn.net/100/448/970/themes/894899/assets/slider_1.jpg?1729735774241" 
                            alt="Banner Slider" className='w-full h-[441px]'/>
                        </div>    
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://bizweb.dktcdn.net/100/508/659/themes/939030/assets/slider_1.jpg?1724730174011" 
                            alt="Banner Slider" className='w-full h-[442px]' />
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='item rounded-[20px] overflow-hidden'>
                            <img src="https://bizweb.dktcdn.net/100/502/883/themes/934584/assets/slider_1.jpg?1719764721426" 
                            alt="Banner Slider" className='w-full h-[442px]' />
                        </div>
                    </SwiperSlide>
                </Swiper> 
            </div>
        </div>
    </>
    );
};

export default HomeSlider;