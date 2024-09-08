import React from 'react';
const Slider =() =>{
    return(
        <>

{/* 
<section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center">
            <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
            <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
            <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0">
                <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Get started
                    <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
                <a href="#" class="py-3 px-5 sm:ms-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                    Learn more
                </a>  
            </div>
        </div>
        <div>
            <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
</section>

</section> */}


{/* <section>
  <div class="grid grid-cols-1 md:grid-cols-4 gap-4 p-4">
  <div class="relative group">
    <img src={slid} alt="Image 1" class="w-full h-auto object-cover"/>
    <div className="absolute flex  inset-0   bg-sky-300 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="flex space-y-4 flex-col px-5 py-6   ">
        <a href="#" className="text-blue-800   text-4xl font-bold hover:duration-500 hover:bg-white hover:rounded-full"><FaFacebook /></a>
        <a href="#" className="text-green-700 font-bold hover:duration-700 hover:bg-green-700 hover:rounded-full hover:text-white  text-4xl"><FaWhatsapp /></a>
        <a href="#" className=" text-purple-800 text-4xl font-bold hover:text-pink-700 hover:rounded-full hover:bg-purple-900" ><BsInstagram /></a>
        <a href="#" className="text-blue-800  text-4xl font-bold hover:duration-500  hover:rounded-full"><IoLogoLinkedin /></a>
      </div>
    </div>
  </div>
  <div class="relative group">
    <img src={slid} alt="Image 2" class="w-full h-auto object-cover"/>
    <div class="absolute inset-0 flex   bg-sky-300 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="flex space-y-4 flex-col px-5 py-6 ">
      <a href="#" className="text-blue-800   text-4xl font-bold hover:duration-500 hover:bg-white hover:rounded-full"><FaFacebook /></a>
        <a href="#" className="text-green-700 font-bold hover:duration-700 hover:bg-green-700 hover:rounded-full hover:text-white  text-4xl"><FaWhatsapp /></a>
        <a href="#" className=" text-purple-800 text-4xl font-bold hover:text-pink-700 hover:rounded-full hover:bg-purple-900" ><BsInstagram /></a>
        <a href="#" className="text-blue-800  text-4xl font-bold hover:duration-500  hover:rounded-full"><IoLogoLinkedin /></a>
         
      </div>
    </div>
  </div>
  <div class="relative group">
    <img src={slid} alt="Image 3" class="w-full h-auto object-cover"/>
    <div class="absolute inset-0 flex   bg-sky-300 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div class="flex space-y-4 flex-col px-5 py-6 ">
      <a href="#" className="text-blue-800   text-4xl font-bold hover:duration-500 hover:bg-white hover:rounded-full"><FaFacebook /></a>
        <a href="#" className="text-green-700 font-bold hover:duration-700 hover:bg-green-700 hover:rounded-full hover:text-white  text-4xl"><FaWhatsapp /></a>
        <a href="#" className=" text-purple-800 text-4xl font-bold hover:text-pink-700 hover:rounded-full hover:bg-purple-900" ><BsInstagram /></a>
        <a href="#" className="text-blue-800  text-4xl font-bold hover:duration-500  hover:rounded-full"><IoLogoLinkedin /></a>
      </div>
    </div>
  </div>
  <div class="relative group">
    <img src={slid} alt="Image 4" class="w-full h-auto object-cover"/>
    <div class="absolute inset-0  flex  bg-sky-300 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="flex space-y-4 flex-col px-5 py-6 ">
      <a href="#" className="text-blue-800   text-4xl font-bold hover:duration-500 hover:bg-white hover:rounded-full"><FaFacebook /></a>
        <a href="#" className="text-green-700 font-bold hover:duration-700 hover:bg-green-700 hover:rounded-full hover:text-white  text-4xl"><FaWhatsapp /></a>
        <a href="#" className=" text-purple-800 text-4xl font-bold hover:text-pink-700 hover:rounded-full hover:bg-purple-900" ><BsInstagram /></a>
        <a href="#" className="text-blue-800  text-4xl font-bold hover:duration-500  hover:rounded-full"><IoLogoLinkedin /></a>
      </div>
    </div>
  </div>
</div>
</section>  */}


         
        
        </>
    )
}
export default Slider;