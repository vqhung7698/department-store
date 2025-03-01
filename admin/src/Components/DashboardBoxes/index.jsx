import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { AiTwotoneGift } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { AiTwotonePieChart } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";
import { RiProductHuntLine } from "react-icons/ri";

const DashboardBoxes = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        className="dashboardBoxesSlider"
      >
        <SwiperSlide>
          <div
            className="box bg-white p-5 cursor-pointer hover:bg-[#fafafa] 
                rounded-md border border-[rgba(0,0,0,0.1)]
                flex items-center gap-4"
          >
            <AiTwotoneGift className="text-[40px] text-[#3872fa]"></AiTwotoneGift>

            <div className="info w-[70%]">
              <h3>Đơn hàng mới</h3>
              <b>250</b>
            </div>

            <IoStatsChartSharp className="text-[50px] text-[#3872fa]">
              {" "}
            </IoStatsChartSharp>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box bg-white p-5 cursor-auto hover:bg-[#fafafa] 
                rounded-md border border-[rgba(0,0,0,0.1)]
                flex items-center gap-4"
          >
            <AiTwotonePieChart className="text-[50px] text-[#10b981]"></AiTwotonePieChart>

            <div className="info w-[70%]">
              <h3>Doanh số</h3>
              <b>1.000.000VND</b>
            </div>

            <IoStatsChartSharp className="text-[50px] text-[#10b981]">
              {" "}
            </IoStatsChartSharp>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box bg-white p-5 cursor-auto hover:bg-[#fafafa] 
                rounded-md border border-[rgba(0,0,0,0.1)]
                flex items-center gap-4"
          >
            <BsBank2 className="text-[40px] text-[#7928ca]"></BsBank2>

            <div className="info w-[70%]">
              <h3>Doanh thu</h3>
              <b>3.500.000VND</b>
            </div>

            <IoStatsChartSharp className="text-[50px] text-[#7928ca]">
              {" "}
            </IoStatsChartSharp>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="box bg-white p-5 cursor-auto hover:bg-[#fafafa] 
                rounded-md border border-[rgba(0,0,0,0.1)]
                flex items-center gap-4"
          >
            <RiProductHuntLine className="text-[40px] text-[#312be1d8]"></RiProductHuntLine>

            <div className="info w-[70%]">
              <h3>Tổng sản phẩm</h3>
              <b>100</b>
            </div>

            <IoStatsChartSharp className="text-[50px] text-[#312be1d8]">
              {" "}
            </IoStatsChartSharp>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default DashboardBoxes;
