import {Swiper,SwiperSlide} from 'swiper/react'
import React from 'react'
// import './Startup.css'
import 'swiper/css'
// import 'swiper/css/pagination';
import "swiper/css/effect-coverflow";
import { Pagination,  Autoplay, EffectCoverflow } from 'swiper/modules';
import { useState, useEffect } from 'react';


const slides=[
    "https://c4.wallpaperflare.com/wallpaper/300/823/635/movie-spider-man-into-the-spider-verse-miles-morales-spider-man-hd-wallpaper-preview.jpg",
    // "https://rare-gallery.com/uploads/posts/4517849-portrait-display-spider-man-spider-man-homecoming-2017-marvel-cinematic-universe.png",
    "https://e1.pxfuel.com/desktop-wallpaper/112/42/desktop-wallpaper-spider-man-portrait.jpg",
    "https://images.hdqwalls.com/download/marvels-spider-man-pc-4k-jf-1440x2560.jpg",
    "https://c4.wallpaperflare.com/wallpaper/668/183/668/city-action-black-the-brooklyn-hd-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/785/965/129/movie-spider-man-into-the-spider-verse-marvel-comics-miles-morales-spider-man-hd-wallpaper-preview.jpg",
    "https://cdn.pixabay.com/photo/2023/05/23/05/47/spiderman-8011929_1280.png",
    "https://cdn.pixabay.com/photo/2022/10/16/07/42/superhero-7524471_1280.png",
    "https://cdn.pixabay.com/photo/2022/05/15/04/36/art-7196739_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/12/29/21/25/spiderman-7685800_1280.png",
]



export default function Carousel() {
    const [changeSlide,setchangeSlide] = useState({slidecount:1,
        effects:{
        rotate: 50,
        stretch: 10,
        depth:100,
        modifier: 1,
        slideShadows: true,} })

        useEffect(() => {
            const updateScreenSize = () => {
                const scrnwidth = window.innerWidth;

                if(scrnwidth>640) {
                    setchangeSlide({
                        slidecount:3,
                    })
                }
                else{
                  setchangeSlide({
                      slidecount:1.5,
                  })
                }
              };

              updateScreenSize();

              window.addEventListener('resize', updateScreenSize);
            return () => {
              window.removeEventListener('resize', updateScreenSize);
            };
          }, []);

  return (

    <div className="min-w-[30rem] h-[30rem] w-screen bg-navy ">
        <div className='  my-5 w-11/12 py-10  h-[27rem] grid place-content-center bg-navy4'>
            <Swiper
              spaceBetween={10}
              slidesPerView={changeSlide.slidecount}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              // pagination={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                coverflowEffect={changeSlide.effects}  
            modules={[EffectCoverflow, Autoplay]}

              onSlideChange={() => console.log('slide change')}
              onSwiper={(swiper) => console.log(swiper)}
              // className='w-11/12 sm:w-full h-full'
              // className=' w-full h-full py-3 '
              // className='w-full'
            >
        {
            
            slides.map((slide,index)=> (
                <SwiperSlide key={index} className='justify-center' >
                    <div className="object-center overflow-hidden h-32 w-36 sm:h-64  ">
                        <img  src={slide} className='object-cover h-32 w-32' />
                    </div>
                    {/* <div className='bg-blond'>slide+{index}</div> */}
                </SwiperSlide> 
            ))
        }

            </Swiper>
        </div>
    </div>
  )
}
