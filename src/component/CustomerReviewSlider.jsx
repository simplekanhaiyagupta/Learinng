import { MdOutlineDateRange } from "react-icons/md";
import { PiChats } from "react-icons/pi";
import code1 from '../component/IMAGE/girl2.jpg';
const  CustomerReviewSlider  = () =>{
    return(
        <>
             
 
<section>
  <div className="text-center font-bold text-gray-300">
    <p>Latest Articles</p>
    <h1 className="text-4xl text-white font-bold">Get News with <span className="text-[#22ff39]"> EduBlink</span> </h1>
  </div>

<div class="container mx-auto py-8 px-4">
  <div class="flex flex-col items-center justify-center gap-6 md:flex-row">
    {/* <!-- Image Box 1 --> */}
    <div class="flex flex-col items-center text-center max-w-xs">
      <img
        src={code1}
        alt="Image 1"
        class="w-full h-70 object-cover rounded-lg shadow-md"
      />
      <div class="relative  -mt-16 shadow-lg  h-52  bg-white w-64">
        <p className="text-left px-5 py-2 text-gray-500 font-semibold">Bussiness</p>
        <h3 class="text-lg font-semibold text-left px-5 text-black">Four Ways to Keep Your Workout Routine Fresh</h3>
        <div className="flex gap-2 px-4 py-2  text-black ">
        <MdOutlineDateRange className=" text-xl  text-purple-900 " />
        <p>Oct 10, 2024</p>
        <div className="flex  gap-3 border-2 px-2 border-gray-500 border-r-0 border-t-0 border-b-0">
          <PiChats className=" text-xl  gap-3 text-purple-900" />
          <p className="text-[13px] font-serif text-gray-700 ">Com</p>
        </div>

        </div>
        <p class="text-sm text-gray-600">
          This is a brief description or caption for the first image.
        </p>
      </div>
    </div>

    {/* <!-- Image Box 2 --> */}
    <div class="flex flex-col items-center text-center max-w-xs">
      <img
        src={code1}
        alt="Image 2"
        class="w-full h-70 object-cover rounded-lg shadow-md"
      />
        <div class="relative  -mt-16 shadow-lg  h-52  bg-white w-64">
        <p className="text-left px-5 py-2 text-black font-semibold">Bussiness</p>
        <h3 class="text-lg font-semibold text-left px-5 text-black">Four Ways to Keep Your Workout Routine Fresh</h3>
        <div className="flex gap-2 px-4 py-2 text-black">
        <MdOutlineDateRange className=" text-xl  text-purple-900 " />
        <p>Oct 10, 2024</p>
        <div className="flex  gap-3 border-2 px-2 border-gray-500 border-r-0 border-t-0 border-b-0">
          <PiChats className=" text-xl  gap-3 text-purple-900" />
          <p className="text-[13px] font-serif text-gray-700 ">Com</p>
        </div>

        </div>
        <p class="text-sm text-gray-600">
          This is a brief description or caption for the first image.
        </p>
      </div>
    </div>
    {/* <!-- Image Box 3 --> */}
    <div class="flex flex-col items-center text-center max-w-xs">
      <img
        src= {code1}
        alt="Image 3"
        class="w-full h-70 object-cover rounded-lg shadow-md"
      />
        <div class="relative  -mt-16 shadow-lg  h-52  bg-white w-64">
        <p className="text-left px-5 py-2 text-gray-500 font-semibold">Bussiness</p>
        <h3 class="text-lg font-semibold text-left px-5 text-black">Four Ways to Keep Your Workout Routine Fresh</h3>
        <div className="flex gap-2 px-4 py-2  text-black  ">
        <MdOutlineDateRange className=" text-xl  text-purple-900 " />
        <p>Oct 10, 2024</p>
        <div className="flex  gap-3 px-2 border-2 border-gray-500 border-r-0 border-t-0 border-b-0">
          <PiChats className=" text-xl  gap-3 text-purple-900" />
          <p className="text-[13px] font-serif text-gray-700 ">Com</p>
        </div>

        </div>
        <p class="text-sm text-gray-600">
          This is a brief description or caption for the first image.
        </p>
      </div>
    </div>
  </div>
</div>

</section>
 

        </>
    )
 }
 export default CustomerReviewSlider;