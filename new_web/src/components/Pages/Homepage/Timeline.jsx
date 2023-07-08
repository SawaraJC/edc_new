import React from 'react'

const Timeline = () => {
  return (
    
    <div class="container w-[27.5rem] md:w-full mb-20 -mt-28 md:my-20">
      <h2 className='text-[#000000] text-3xl pb-4 pl-44 md:text-4xl md:pb-8 md:pl-[35rem] font-bold'>TimeLine</h2>
              <div
                class="flex flex-col ml-10 md:grid grid-cols-9 md:ml-16 p-2 text-blue-50"
              >
                
                <div class="flex flex-row-reverse md:contents">
                  <div
                    class="bg-navy3 md:w-[34rem] w-96 hover:scale-110 hover:delay-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto hover:drop-shadow-[0_30px_25px_rgba(0,0,0,0.50)]"
                  >
                    <h3 class="text-blond font-semibold text-lg mb-1">Lorem ipsum</h3>
                    <p class="text-blond leading-tight text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                      quaerat?
                    </p>
                  </div>
                  <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-navy4 pointer-events-none"></div>
                    </div>
                    <div
                      class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-navy5 shadow"
                    ></div>
                  </div>
                </div>
                
                <div class="flex md:contents">
                  <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-navy4 pointer-events-none"></div>
                    </div>
                    <div
                      class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-navy5 shadow"
                    ></div>
                  </div>
                  <div
                    class="bg-navy3 hover:scale-110 hover:delay-100 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto hover:drop-shadow-[0_30px_25px_rgba(0,0,0,0.50)]"
                  >
                    
                    <h3 class="text-blond font-semibold text-lg mb-1">Lorem ipsum</h3>
                    <p class="text-blond leading-tight text-justify">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae, facilis.
                    </p>
                  </div>
                </div>
                 
                <div class="flex flex-row-reverse md:contents">
                  <div
                    class="bg-navy3 hover:scale-110 hover:delay-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto hover:drop-shadow-[0_20px_25px_rgba(0,0,0,0.50)]"
                  >
                    <h3 class="text-blond font-semibold text-lg mb-1">Lorem ipsum</h3>
                    <p class="text-blond leading-tight text-justify">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                      quaerat?
                    </p>
                  </div>
                  <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-navy4 pointer-events-none"></div>
                    </div>
                    <div
                      class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-navy5 shadow"
                    ></div>
                  </div>
                </div>
                
                <div class="flex flex-row-reverse md:contents">
                  <div
                    class="bg-navy3 hover:scale-110 hover:delay-100 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto hover:drop-shadow-[0_30px_25px_rgba(0,0,0,0.50)]"
                  >
                    <h3 class="font-semibold text-blond text-lg mb-1">Lorem ipsum</h3>
                    <p class="leading-tight text-justify text-blond">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                      quaerat?
                    </p>
                  </div>
                  <div class="col-start-5 col-end-6 md:mx-auto relative mr-10">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-navy4 pointer-events-none"></div>
                    </div>
                    <div
                      class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-navy5 shadow"
                    ></div>
                  </div>
                </div>
                
                <div class="flex md:contents">
                  <div class="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                    <div class="h-full w-6 flex items-center justify-center">
                      <div class="h-full w-1 bg-navy4 pointer-events-none"></div>
                    </div>
                    <div
                      class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-navy5 shadow"
                    ></div>
                  </div>
                  <div
                    class="bg-navy3 hover:scale-110 hover:delay-100 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto hover:drop-shadow-[0_30px_25px_rgba(0,0,0,0.50)]"
                  >
                    <h3 class="font-semibold text-lg mb-1 text-blond">Lorem ipsum</h3>
                    <p class="leading-tight text-justify text-blond">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Vitae, facilis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Timeline
