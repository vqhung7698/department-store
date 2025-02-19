import { Swiper, SwiperSlide } from 'swiper/react';
import Button from '@mui/material/Button';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const HomeSlider1 = () => {
    return (
        <Swiper
            loop={true}
            spaceBetween={30}
            effect={'fade'}
            navigation={true}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination, Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="homeSlider1">

            <SwiperSlide>
                <div className='item w-full rounded-md overflow-hidden'>
                    <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737036776/1737036773579_sample-1.jpg" />
                
                    <div className='info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 
                        flex items-center flex-col justify-center transition-all duration-700'>
                        <h4 className='text-[18px] font-[500] w-full text-letf mb-3 relative -right-[100%] opacity-0'>
                            big saving fays sales
                        </h4>

                        <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0'>
                            women solid round green t - shirt
                        </h2>

                        <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-letf mb-3 mt-3 
                            relative -right-[100%] opacity-0'>
                            starting at only{" "}
                            <span className='text-primary text-[30px] font-[800]'>200000d</span>
                        </h3>

                        <div className='w-full  relative -right-[100%] opacity-0 btn_'>
                            <Button className='btn-org'>Show now</Button>
                        </div>
                    </div>
                
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div className='item w-full rounded-md overflow-hidden'>
                        <img src="https://res.cloudinary.com/duqoh8gf5/image/upload/v1737085794/1737085794016_New_Project_49.jpg" />
                    
                        <div className='info absolute top-0 -right-[100%] opacity-0 w-[50%] h-[100%] z-50 p-8 
                            flex items-center flex-col justify-center transition-all duration-700'>
                            <h4 className='text-[18px] font-[500] w-full text-letf mb-3 relative -right-[100%] opacity-0'>
                                big saving fays sales
                            </h4>

                            <h2 className='text-[35px] font-[700] w-full relative -right-[100%] opacity-0'>
                                women solid round green t - shirt
                            </h2>

                            <h3 className='flex items-center gap-3 text-[18px] font-[500] w-full text-letf mb-3 mt-3 
                                relative -right-[100%] opacity-0'>
                                starting at only{" "}
                                <span className='text-primary text-[30px] font-[800]'>200000d</span>
                            </h3>

                            <div className='w-full  relative -right-[100%] opacity-0 btn_'>
                                <Button className='btn-org'>Show now</Button>
                            </div>
                        </div>
                    
                    </div>
            </SwiperSlide>
            
      </Swiper>
    );
};

export default HomeSlider1; 