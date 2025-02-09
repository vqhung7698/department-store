import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';
import BannerBox from '../BannerBox';

const AdsBannerSlider = (props) => {
    return (
        <div className='py-5 w-full'>
            <Swiper 
                slidesPerView={props.items}
                spaceBetween={10} 
                navigation={true} 
                modules={[Navigation]} 
                className="smlBtn"
            >
                <SwiperSlide>
                   <BannerBox img={"/banner1.webp"} link={"/"} />
                </SwiperSlide>

                <SwiperSlide>
                   <BannerBox img={"/banner2.webp"} link={"/"}/>
                </SwiperSlide>

                <SwiperSlide>
                   <BannerBox img={"/banner3.webp"} link={"/"}/>
                </SwiperSlide>

                <SwiperSlide>
                   <BannerBox img={"/banner4.jpg"} link={"/"}/>
                </SwiperSlide>

                <SwiperSlide>
                   <BannerBox img={"/banner5.webp"} link={"/"}/>
                </SwiperSlide>
                
                <SwiperSlide>
                   <BannerBox img={"/banner6.webp"} link={"/"}/>
                </SwiperSlide> 
            </Swiper>
        </div>
    );
};

export default AdsBannerSlider; 