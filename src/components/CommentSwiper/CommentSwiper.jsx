import React from "react";
import "./style.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import avatar from "../../Reilverse_Assets/Ellipse 117.png";
import {Autoplay, Navigation, Pagination} from "swiper/modules";


export default function CommentSwiper() {

    const REVIEWS = [
        {
            image: avatar,
            name: "Justin Watt",
            position : 'Doctor',
            quote: 'Here you will find a comparison between every health insurance cover proven to have provided world class services to their customers.'
        },
        {
            image: avatar,
            name: "Justin Watt",
            position : 'Doctor',
            quote: 'Here you will find a comparison between every health insurance cover proven to have provided world class services to their customers.'
        },
        {
            image: avatar,
            name: "Justin Watt",
            position : 'Doctor',
            quote: 'Here you will find a comparison between every health insurance cover proven to have provided world class services to their customers.'
        },
    ]

    return<>
        <div className={'w-full max-w-[850px] h-72 relative mt-7'}>
            <div className={'flex items-center text-8xl text-green-700 w-20 h-20 flex items-center justify-center rounded-lg bg-[#8dc14b]/30 gap-2 absolute top-3 max-[500px]:right-4 right-28 z-10'}>
                <span className={'translate-y-4'}>”</span>
            </div>

            <Swiper
                className={'w-full h-full'}
                style={{
                    "--swiper-pagination-color": "#2983d3",
                    "--swiper-pagination-bullet-inactive-color": "#bac8de",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "16px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",

                }}
                modules={[Navigation , Autoplay,Pagination]}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                spaceBetween={100}
                speed={2000}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {REVIEWS.map((value, index)=> <SwiperSlide className={'w-full h-full cursor-pointer'}>
                    <div key={index} className={'w-full h-60 flex flex-col relative items-start'}>
                        <div className={'w-1 h-16 '}></div>
                        <div className={'w-full h-44 p-5 bg-gradient-to-r from-transparent from-5% to-gray-400/20 rounded-lg relative'}>

                            <div className={'flex items-center gap-2 absolute -top-14 left-4'}>

                                <div className={'w-20 h-20 rounded-full '}>
                                    <img className={'w-full h-full object-cover  '} src={value.image} alt={'avatar'}/>
                                </div>

                                <div className={'flex flex-col items-start'}>
                                    <span className={'font-[400] text-lg'}>{value.name}</span>
                                    <span style={{fontWeight:"400",fontFamily : "Arboria-Book"}}>{value.position}</span>
                                </div>

                            </div>

                            <p style={{fontWeight:"400",fontFamily : "Arboria-Book"}} className={'mt-4 text-xl max-[400px]:text-sm'}>{value.quote}</p>

                        </div>


                    </div>
                </SwiperSlide>)}
            </Swiper>

        </div>
    </>
}