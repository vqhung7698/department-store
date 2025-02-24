import { useState } from "react";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import HomeSlider from "../../components/HomeSlider";
import BlogItem from "../../components/BlogItem";
import ProductsSlider from "../../components/ProductsSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeSlider1 from "../../components/HomeSlider1";
import BannerBox1 from "../../components/BannerBox1";


const Home = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <>
            <HomeSlider/>

            <HomeCatSlider/>

                {/* Sản phẩm phổ biến */}
            <section className="bg-white py-8">
                <div className="container">
                    <div className="flex items-center justify-between">
                        <div className="leftSec">
                            <h2 className="text-[22px] font-[600]">Sản phẩm phổ biến</h2>
                            <p className="text-[14px] font-[400]">Đừng bỏ lỡ các ưu đãi hiện tại cho đến cuối tháng.</p>
                        </div>

                        <div className="rightSec w-[60%]">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons="auto"
                                aria-label="scrollable auto tabs example"
                            >
                                <Tab label="Thời trang" />
                                <Tab label="Thiết bị điện tử" />
                                <Tab label="Túi xách" />
                                <Tab label="Giày dép" />
                                <Tab label="Mỹ phẩm" />
                                <Tab label="Trang sức" />
                                <Tab label="Nông sản" />
                            </Tabs>
                        </div>
                    </div>

                    <ProductsSlider items={5}/>
                    <ProductsSlider items={5}/>

                </div>
            </section>

                {/* Miễn phí giao hàng */}
            <section className="py-4 pt-2 bg-white">
                <div className="container">
                    <div className="freeShipping w-[80%] m-auto py-4 p-4 border-2 border-[#ff5252]
                                    flex items-center justify-between rounded-md mb-7">                        
                        <div className="col1 flex items-center gap-4">
                            <LiaShippingFastSolid className="text-[50px]"/>
                            <span className="text-[20px] font-[600] uppercas text-center">Miễn phí giao hàng</span>
                        </div>

                        <div className="col2">
                            <p className="text-[15px] md-0 font-[500] text-center">Giao hàng miễn phí <br /> ngay bây giờ cho đơn hàng đầu tiên của bạn và trên 500.000đ</p>
                        </div>

                        <p className="font-bold text-[25px] text-center">500.00đ*</p>

                    </div>

                    <AdsBannerSlider items={4}/>
                </div>
            </section>

                {/* Sản phẩm mới nhất */}
            <section className="py-5 pt-0 bg-white gap-5">
                <div className="container"> 
                    <h2 className="text-[22px] font-[600] text-center border-b border-[rgba(0,0,0,0.2)]">Sản phẩm mới nhất</h2>


                    <ProductsSlider items={5}/> 

                        {/* Banner */}
                    <section className="py-6">
                        <div className="container flex gap-5">
                            <div className="part1 w-[70%]">
                                <HomeSlider1/>
                            </div>

                            <div className="part2 w-[30%] flex items-center gap-5 justify-between flex-col ">
                                <BannerBox1 info="left" title="Giày Tây Cao Cấp" price="150.000đ" image={"https://res.cloudinary.com/duqoh8gf5/image/upload/v1737022028/1737022025465_New_Project_55.jpg"}/>
                                <BannerBox1 info="right" title="Balo Cao Cấp" price="120.000đ"  image={"https://res.cloudinary.com/duqoh8gf5/image/upload/v1737020760/1737020756772_New_Project_1.png"}/>
                            </div>
                        </div>
                    </section>
                </div>
            </section>

                {/* Sản phẩm nổi bật */}
            <section className="py-5 pt-0 bg-white">
                <div className="container"> 
                    <h2 className="text-[22px] font-[600] text-center border-b border-[rgba(0,0,0,0.2)]">Sản phẩm nổi bật</h2>


                    <ProductsSlider items={5}/> 

                    {/* <AdsBannerSlider items={4}/> */}

                    <div className="container flex gap-5">
                        <div className="part2 w-[100%] flex items-center gap-5 justify-center ">
                            <BannerBox1 info="right" title="Giày Tây Cao Cấp" price="150.000đ" 
                            image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-6.jpg"}/>
                            <BannerBox1 info="right" title="Balo Cao Cấp" price="120.000đ"  
                            image={"https://demos.codezeel.com/prestashop/PRS21/PRS210502/img/cms/cms-banner-7.jpg"}/>
                            
                        </div>
                    </div>
                </div>
            </section>

                {/* Blog */}
            <section className="py-5 pb-8 pt-0 bg-white blogSection">
                <div className="container">
                    <h2 className="text-[25px] font-[600] mb-4 text-center border-b border-[rgba(0,0,0,0.2)]">Blog</h2>
                    <Swiper slidesPerView={3}
                            spaceBetween={25} 
                            navigation={true} 
                            modules={[Navigation]} 
                            className="blogSlider">

                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>

                        <SwiperSlide>
                            <BlogItem/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Home;