import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import {
    ImgDesktop1,
    ImgDesktop10,
    ImgDesktop11,
    ImgDesktop2,
    ImgDesktop3,
    ImgDesktop4,
    ImgDesktop5,
    ImgDesktop6,
    ImgDesktop7,
    ImgDesktop8,
    ImgDesktop9,
} from "../../data";

const ProjectSwiper = () => {
    return (
        <Swiper
            direction="vertical"
            grabCursor={true}
            // spaceBetween={30}
            slidesPerView={"auto"}
            freeMode={true}
            scrollbar={true}
            mousewheel={true}
            modules={[FreeMode, Scrollbar, Mousewheel]}
            className="mySwiper h-full"
        >
            <SwiperSlide>
                <img src={ImgDesktop1} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ImgDesktop2} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ImgDesktop3} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ImgDesktop4} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ImgDesktop5} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ImgDesktop6} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ImgDesktop7} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ImgDesktop8} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ImgDesktop9} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ImgDesktop10} alt="" loading="lazy" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={ImgDesktop11} alt="" loading="lazy" />
            </SwiperSlide>
        </Swiper>
    );
};

export default ProjectSwiper;
