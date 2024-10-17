import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import { imagesDesktop, imagesMobile } from "../../data";
import useResize from "../../hooks/useResize";

const ProjectSwiper = () => {
    const screenWidth = useResize();

    return (
        <Swiper
            direction="vertical"
            grabCursor={true}
            touchRatio={0.8}
            slidesPerView={"auto"}
            freeMode={true}
            scrollbar={true}
            // mousewheel={true}
            // modules={[FreeMode, Scrollbar, Mousewheel]}
            modules={[FreeMode, Scrollbar]}
            className="mySwiper h-full"
        >
            {screenWidth > 767
                ? imagesDesktop?.map((image, index) => (
                      <SwiperSlide key={index}>
                          <img
                              src={image}
                              alt={`Slide ${index + 1}`}
                              loading="lazy"
                          />
                      </SwiperSlide>
                  ))
                : imagesMobile?.map((image, index) => (
                      <SwiperSlide key={index}>
                          <img
                              src={image}
                              alt={`Slide ${index + 1}`}
                              loading="lazy"
                          />
                      </SwiperSlide>
                  ))}
        </Swiper>
    );
};

export default ProjectSwiper;
