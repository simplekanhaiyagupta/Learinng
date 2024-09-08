import pattern from '../component/IMAGE/shape-13.png';
const NumberB = ()=> {
    return( 
        <>
        <div className="w-full flex justify-center    ">
          <div className="items-center py-5">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="border-2 w-72 lg:w-60 h-32 p-6 bg-white shadow-lg  ">
            <h1 className="text-5xl font-bold text-purple-900  ">123.45K</h1>
                <p className="text-[20px] indent-3 ">student enroled</p>
        </div>
        <div className="border-2 w-72 lg:w-60 h-32 p-6 bg-white shadow-lg   ">
            <h1 className="text-5xl font-bold text-pink-900 ">46.45K</h1>
                <p className="text-[20px] indent-3">Complete Course</p>
        </div> 
        <div className="border-2 w-72 lg:w-60 h-32 p-6  bg-white shadow-lg">
            <h1 className="text-5xl  font-bold text-green-800">678+</h1>
               <p className="text-[20px] indent-3">Top Instruction</p>
        </div>
        <div className=" border-2 w-72 lg:w-60 h-32 p-6  bg-white">
            <h1 className="text-5xl  font-bold text-orange-600">100%</h1>
              <p  className="text-[20px] indent-3">Satisfaction Rate</p>
        </div>  
            </div>

          </div>
        </div>

   
{/* <div className="flex justify-center items-center h-80 bg-gray-100">
 
  
  <div className="w-full max-w-screen-lg p-6  rounded-lg">
    
    <h2 className="text-4xl font-[700] text-gray-800  text-center">Get Your Quality Skills <strong className="text-purple-900 font-[700]" >Certificate</strong><br></br> Through EduBlink</h2>
     <div className="mt-6 flex justify-center py-5">
      <button className="px-6 py-2 w-52 h-16 text-[20px] bg-purple-900 text-white font-semibold rounded-md hover:bg-purple-950 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Get start now 
      </button>
    </div>
  </div>
</div>

  */}

<section>
   
		 
   <div class="relative bg-background p-8 h-72 bg-slate-100">
   <div class="absolute top-14 -left-1 w-1/2 h-full flex items-center justify-center   animate-bounce ">
       <div class="hidden md:block">
           <img src={pattern} alt="Decorative pattern" />
       </div>
   </div>
   <div class="absolute top-14 right-0 w-1/2 h-full flex items-center justify-center animate-bounce">
       <div class="hidden md:block">
           <img src={pattern} alt="Decorative pattern" />
       </div>
   </div>
   <div class="text-center">
       <h1 class="text-4xl font-bold text-black">
           Get Your Quality Skills <br></br><span class="text-accent text-[#21ff30]">Certificate</span> Through EduBlink
       </h1>
       <p class="mt-4 py-10">
           <a href="#" class="bg-[#000] text-2xl text-[#21ff30] py-2 border-2 px-4 rounded-lg hover:bg-purple-950 hover:text-white">
               Get started now &rarr;
           </a>
       </p>
   </div>
</div>
  
</section>


 
        </>
        
    )
}
export default NumberB;