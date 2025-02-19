import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import ProductsItem from '../ProductsItem';


import { Navigation } from 'swiper/modules';

const ProductsSlider = (props) => {
    return (
       <div className="productsSlider py-5">
            <Swiper slidesPerView={props.items}
                    spaceBetween={10} 
                    navigation={true} 
                    modules={[Navigation]} 
                    className="homeCatSlider">

                <SwiperSlide>
                    <ProductsItem/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductsItem/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductsItem/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductsItem/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductsItem/>
                </SwiperSlide>

                {/* <SwiperSlide>
                    <ProductsItem/>
                </SwiperSlide> */}

                {/* <SwiperSlide>
                    <ProductsItem/>
                </SwiperSlide>

                <SwiperSlide>
                    <ProductsItem/>
                </SwiperSlide> */}

            </Swiper>
       </div>
    );
};

export default ProductsSlider; 