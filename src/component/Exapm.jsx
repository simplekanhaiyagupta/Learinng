import { FaRegStar } from "react-icons/fa";
import { default as course } from '../component/IMAGE/girl1.jpg';
import girl4 from '../component/IMAGE/girl2.jpg';
import girl3 from '../component/IMAGE/girl3.jpg';
import girl2 from '../component/IMAGE/girl7.jpg';
const Examp = ()=>{
    return(
        <>
         
        
    <div className="flex items-center justify-center min-h-screen  ">
      <div className="w-full max-w-6xl p-6  ">
        <div  className="text-center py-7">
          <p className="text-gray-300 text-[17px] font-medium indent-5">Popular Courses</p>
          <h1 className=" text-[22px] md:text-[35px] lg:text-[40px] text-white font-[500] " >Pick A Course  To Get<span className="text-[#21ff30] font-[500]"> Started</span> </h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-4  rounded-lg shadow-md border-2   ">
            <img src={course} alt="Placeholder" className="w-full h-44   rounded-lg shadow-md object-cover"/>
            <button className='mt-4 text-lg font-semibold border-2 w-24 bg-black text-[#21ff30] hover:bg-[#21ff30] hover:text-[#fff]'>Beginner</button>
            <p className="mt-2 text-[#fff] font-[600] text-lg">
              This is a description for Box It can include .
            </p>
            <div className="flex gap-2 py-3 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
               <FaRegStar />
               <p className="text-white ">(4.5/8 rating)</p>
            </div>
            <p className="text-lg ">$45.00</p>
            <div className=" flex gap-2  py-1">
            <FaRegStar />
                <p className="text-[15px] ">14 lecture</p>
            <div className=" flex gap-2 px-4">
            <FaRegStar />
                <p className="text-[15px] ">98 student</p>
            </div>
            </div>
            
          </div>

          <div className="p-4  rounded-lg shadow-md border-2">
            <img
              src={girl4}
              alt="Placeholder"
              className="w-full h-40 object-cover rounded-lg"
            />
           <button className='mt-4 text-lg font-semibold border-2 w-24 bg-black  text-[#21ff30]'>Advance</button>
            <p className="mt-2 text-[#fff] font-[600] text-lg">
              This is a description for Box It can include .
            </p>
            <div className="flex gap-2 py-3 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
               <FaRegStar />
               <p className="text-white ">(4.5/8 rating)</p>
            </div>
            <p className="text-lg ">$45.00</p>
            <div className=" flex gap-2  py-1">
            <FaRegStar />
                <p className="text-[15px] ">14 lecture</p>
            <div className=" flex gap-2 px-4">
            <FaRegStar />
                <p className="text-[15px]  ">98 student</p>
            </div>
            </div>
            
          </div>
          <div className="p-4 rounded-lg shadow-md border-2">
            <img
              src={girl2}
              alt="Placeholder"
              className="w-full h-40 object-cover rounded-lg"
            />
            <button className='mt-4 text-lg font-semibold border-2 w-[120px] bg-black text-[#21ff30]'>Intermediate</button>
            <p className="mt-2 text-[#ffff] font-[600] text-lg">
              This is a description for Box It can include .
            </p>
            <div className="flex gap-2 py-3 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
               <FaRegStar />
               <p className="text-white ">(4.5/8 rating)</p>
            </div>
            <p className="text-lg text-white ">$45.00</p>
            <div className=" flex gap-2  py-1">
            <FaRegStar />
                <p className="text-[15px] text-white ">14 lecture</p>
            <div className=" flex gap-2 px-4">
            <FaRegStar />
                <p className="text-[15px] text-white ">98 student</p>
            </div>
            </div>
            
          </div>
          <div className="p-4  rounded-lg shadow-md border-2 ">
            <img
              src={girl3}
              alt="Placeholder"
              className="w-full h-40 object-cover rounded-lg"
            />
            <button className='mt-4 text-lg font-semibold border-2 w-24 bg-[#000] text-[#21ff30]'>Beginner</button>
            <p className="mt-2 text-[#ffff] font-[600] text-lg">
              This is a description for Box It can include .
            </p>
            <div className="flex gap-2 py-3 text-yellow-400">
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
                <FaRegStar />
               <FaRegStar />
               <p className="text-white ">(4.5/8 rating)</p>
            </div>
            <p className="text-lg  text-white">$45.00</p>
            <div className=" flex gap-2  py-1">
            <FaRegStar />
                <p className="text-[15px] text-white ">14 lecture</p>
            <div className=" flex gap-2 px-4">
            <FaRegStar />
                <p className="text-[15px] text-white ">98 student</p>
            </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-8 p-4">
        <button className=" w-60 h-16 border-2 bg-[#2de80c] hover:bg-[#04b607] hover:text-fuchsia-100 font-bold text-fuchsia-100 text-center text-[18px] shadow-lg rounded-lg text-2xl ">Brows course more </button>
      

        </div>
        </div>
    </div>
       
     
        </>
    )
}
export default Examp;