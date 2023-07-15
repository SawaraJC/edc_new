import React, { useState,useEffect } from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import './Startup.css'
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'
import { Autoplay,Navigation, Pagination } from 'swiper'

const startups=[
    {
        id:1,
        name:'Company-1',
        image:'https://cdn.pixabay.com/photo/2022/05/15/04/36/art-7196739_1280.jpg',
        website:"/",
    },
    {
        id:2,
        name:'Company-2',
        image:'https://cdn.pixabay.com/photo/2022/05/15/04/36/art-7196739_1280.jpg',
        website:"/",
    },
    {
        id:3,
        name:'Company-3',
        image:'https://cdn.pixabay.com/photo/2022/05/15/04/36/art-7196739_1280.jpg',
        website:"/",
    },
    {
        id:4,
        name:'Company-4',
        image:'https://cdn.pixabay.com/photo/2022/05/15/04/36/art-7196739_1280.jpg',
        website:"/",
    },
    {
        id:5,
        name:'Company-5',
        image:'https://cdn.pixabay.com/photo/2022/05/15/04/36/art-7196739_1280.jpg',
        website:"/",
    },
    {
        id:6,
        name:'Company-6',
        image:'https://cdn.pixabay.com/photo/2022/05/15/04/36/art-7196739_1280.jpg',
        website:"/",
    },
    
]

export default function Startup() {

    const [active,setActive]=useState(null);
    const [slideCount, setslideCount]=useState({
        slidesperview : 1,
        space:10
    })
    
        useEffect(() => {
            const updateScreenSize = () => {
                const scrnwidth = window.innerWidth;

                if(scrnwidth>640) {
                    setslideCount({
                        slidesperview:3,
                        space:10
                    })
                }
                else{
                  setslideCount({
                      slidesperview:1,
                      space:10
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
    
      <div className={`w-screen grid place-items-center bg-navy`}>

        <div className=" min-w-[24rem] min-h-[39rem] w-11/12 sm:5/6 felx  bg-navy text-blond px-1 py-10">
            <Swiper
                spaceBetween={slideCount.space}
                slidesPerView={slideCount.slidesperview}
                onSlideChange={(cur) => setActive(cur.realIndex)}
                loop={true}
                centeredSlides={true}
                speed={800}
                pagination={{el:'.swip_pagination',clickable:true,
            }}
                navigation={{nextEl:'.swiper-button-next',prevEl:'.swiper-button-prev',clickable:true, hideOnClick:true,}}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true
                }}
                modules={[Autoplay,Pagination,Navigation]}
            >

                { 
                    startups.map((startup,i)=>(
                    <SwiperSlide key={i}>
                        <div className="h-[32rem] flex justify-center">
                            <div className={`slides ${active === i && "slide-active" }  to-light_navy/40 `}>
                            {/* <div className={`slides ${active === i && "slide-active" }  to-blond/20 `}> */}
                                <div className={`logo-cir ${active === i && "logo-active-cir"}`}>
                                    <img key={startup.id} src={startup.image} alt="object-cover" />
                                    {/* <ion-icon name="logo-angular"></ion-icon> */}
                                </div>           
                                <a href={startup.website}>
                                    <h2 key={startup.id} className='text-2xl  font-semibold '>{startup.name}</h2>
                                </a>
                                <p className='para'>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ad sed ratione vitae quasi magni sit, eius voluptas maxime tempore molestias doloremque unde consequuntur reiciendis amet pariatur accusantium. Nulla, eaque?
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                    ))
                }
            </Swiper>
            <div className='grid place-content-center'>
                <div className=" justify-center ">
                    <ul>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                        <li> </li>
                    </ul>
                </div>   
            </div>
        </div>
        <div className="absolute w-full  px-8 flex justify-between text-transparent text-5xl z-50  hover:text-blond ">
            <button className='swiper-button-prev '>
                <ion-icon name="caret-back-circle"></ion-icon>
            </button>
            <button className='swiper-button-next'>
                <ion-icon name="caret-forward-circle"></ion-icon>
            </button>
        </div>

        
    </div>
  )
}