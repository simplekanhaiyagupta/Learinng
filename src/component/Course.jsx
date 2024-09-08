import React from 'react';
import { GoCheck } from "react-icons/go";
import code1 from '../component/IMAGE/code2.jpg';
const Course =()=>{
     
    
    return(
        <>
        <div className='bg-[#000]'> 
     
        <div className="container mx-auto p-4">
  <div className="flex flex-col lg:flex-row">
   
    <div className="lg:w-1/2 w-full">
      <img src={code1} alt="Placeholder Image" className="object-cover h-auto rounded-lg shadow-md" />
    </div>
 
    <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center    mt-4 lg:mt-0 lg:ml-4">
     <p className=' font-bold text-gray-500 '>Information </p>
      <h1 className='text-[20px] md:text-2xl lg:text-4xl font-bold text-white '>Learn & Grow Your Skills From <strong className='text-[#21ff30] font-medium'>Anywhere</strong></h1>
      
      <p className="text-lg py-5 text-gray-300">
        This is some descriptive text that provides information about the image. The text is placed in a column
        descriptive text that provides information about the image. The text is placed in a column  that takes up 40% of the width on larger screens.
      </p>
      <div> 
        <div className='flex '>
            <GoCheck  className='text-3xl text-[#11f80d] font-bold'/>
        <p className='px-4 text-[20px] text-white'>Expert Trainers</p>
        
        </div>
        <div className='flex '>
            <GoCheck  className='text-3xl text-[#11f80d] '/>
        <p className='px-4 text-[20px] text-white'>Lifetime Access</p>
        
        </div>
        <div className='flex '>
            <GoCheck  className='text-3xl text-[#11f80d] font-bold'/>
        <p className='px-4 text-[20px] text-white' >Online Remote Learning</p>
        
        </div>
      </div>
    </div>
  </div>
</div>
     
</div>

 



            
        </>
    )

}
export default Course;

  