import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation} from 'swiper/modules';
import { useRef, useState } from "react";



const ProductsZoom = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSlideBig = useRef();
    const zoomSlideSml = useRef();

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlideSml.current.swiper.slideTo(index);
        zoomSlideBig.current.swiper.slideTo(index);
    }

    return(
        <>
            <div className="flex gap-3 ">
                <div className="slider w-[15%]">
                    <Swiper
                        ref={zoomSlideSml}
                        direction={'vertical'}
                        slidesPerView={5}
                        spaceBetween={0}
                        navigation={true}
                        modules={[Navigation]} 
                        className="zoomProductSliderThumbs h-[465px] overflow-hidden">

                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group
                                ${slideIndex===0 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(0)}>
                                <img src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400"
                                className="w-full transition-all group-hover:scale-105" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group
                                ${slideIndex===1 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(1)}>
                                <img src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi2.jpg?v=1499357449583" alt=""
                                className="w-full transition-all group-hover:scale-105"/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={`item rounded-md overflow-hidden cursor-pointer group
                                ${slideIndex===2 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(2)}>
                                <img src="https://bizweb.dktcdn.net/100/429/979/products/dammaxi3.jpg?v=1625395177733" alt=""
                                className="w-full transition-all group-hover:scale-105" />
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                                <div className={`item rounded-md overflow-hidden cursor-pointer group
                                    ${slideIndex===3 ? 'opacity-1' : 'opacity-30'}`} onClick={() => goto(3)}>
                                    <img src="https://bizweb.dktcdn.net/100/429/979/products/dammaxi4.jpg?v=1625395177733" alt="" 
                                    className="w-full transition-all group-hover:scale-105"/>
                                </div>
                        </SwiperSlide>     
                    </Swiper>
                </div>

                <div className="zoomContainer w-[85%] h-[465px] overflow-hidden">
                    <Swiper
                        ref={zoomSlideBig}
                        slidesPerView={1}
                        spaceBetween={0}
                        navigation={false}         
                    >
                        <SwiperSlide>
                            <InnerImageZoom 
                                zoomType="hover" 
                                zoomScale={1}
                                src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi.jpg?v=1499356965400"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom 
                                zoomType="hover" 
                                zoomScale={1}
                                src="https://bizweb.dktcdn.net/thumb/grande/100/113/556/products/dammaxi2.jpg?v=1499357449583"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom 
                                zoomType="hover" 
                                zoomScale={1}
                                src="https://bizweb.dktcdn.net/100/429/979/products/dammaxi3.jpg?v=1625395177733"
                            />
                        </SwiperSlide>

                        <SwiperSlide>
                            <InnerImageZoom 
                                zoomType="hover" 
                                zoomScale={1}
                                src="https://bizweb.dktcdn.net/100/429/979/products/dammaxi4.jpg?v=1625395177733"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
};

export default ProductsZoom;