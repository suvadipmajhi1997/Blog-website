import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';

import Datas from './../Data.json'

const Index = () => {
  return (
    <>
      <div className="container mt-3">
        <div className="gap-4 d-flex align-items-center">
          <div className="headline-title">
            <i className="bi bi-lightning">Top News</i>
          </div>
          {/* swiper */}
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            direction={"vertical"}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="headline-text-swiper"
          >
            {Datas.map((data, index) => {
              return (
              <SwiperSlide key={index}>
                <div className="headline d-flex align-items-center gap-2">
                    <p className="m-0">
                        {data.title}
                    </p>
                </div>
              </SwiperSlide>
              )
            })}
          </Swiper>
        </div>

        {/* headline post */}
        <div className="row mt-5">
            <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            direction={'horizontal'}
            modules={[Autoplay]}
            autoplay={{
                delay:2000,
                disableOnInteraction: false,
            }}
            className="headline-post-swiper"
            >
                {Datas.map((data,index)=>{
                    return(
                        <SwiperSlide key={index}>
                            <div className="headline-card d-flex align-items-center gap-2">
                                <div className="headline-image">
                                    <img src={data.Image} className="img-fluid" alt="" />
                                </div>
                                <div className="headline-det">
                                    <span className="">{data.tag}</span>
                                    <p className="">{data.paragraph}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
      </div>
    </>
  );
}

export default Index