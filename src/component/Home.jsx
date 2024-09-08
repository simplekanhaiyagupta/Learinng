import React from "react";
const Home =()=>{
    return(
        <>
              {/* <div className="w-full  grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2  bg-slate-100">
                <div className="">
                  <h1 className="text sm:text-[15px] md:text-[30px] lg:text-[46px] font-bold  py-8  px-20">EducAtional  Online Learning React Educational Website</h1>
                  <div className="text sm:text-[10px] md:text-[20px] lg:text-[25] px-20 sm:text-balance md:text-balance text-balance">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis pariatur deserunt nemo, libero minus alias temporibus earum quo,
                        itecto autem esse impedit et!</p>
                  </div>
                  <div className="px-20 py-5 flex gap-3">
      
                    <button className="border border-sky-600 h-10 w-40 bg-blue-600 text-white font-bold hover:text-black hover:bg-yellow-400 rounded-s-2xl">
                     New 
                      Get Start
                      </button>
                    <button className="border border-sky-600 h-10 w-40 bg-green-600 text-white font-bold shadow-md hover:text-black hover:bg-white rounded-e-2xl">Explore More </button>
                  </div>
                </div>
               
                <div className="w-full" >
                  <img src={imag} alt="" className="w-[550px] py-4 "/>
                 

                </div>
                 
                

              </div> */}

              

<section class="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#22ff30] hover:bg-[#009e0d] focus:ring-4 focus:ring-blue-300">
                Get started
                <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
            </a>
            <a href="#" class="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                Learn more
            </a>  
        </div>
    </div>
</section>
        </>

    )
}
export  default Home;