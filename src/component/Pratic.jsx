
import { FaRegStar } from "react-icons/fa";
import image3 from '../component/IMAGE/banner3.jpg';
const Pratic =()=>{
    return(
        <>
         <div className=" mx-auto">
            <div className="flex gap-6 flex-col  md:flex-row lg:flex-row px-5 py-3">
                <div className="grow  border-solid flex items-center p-4 gap-2 shadow-lg w-80 ">
                    <div>
                    <h1 className='text-3xl text-wrap px-3'>Introducing to Software Engineering</h1>
                      <div className="flex py-3 gap-2 text-yellow-400 text-[20px] px-10">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p>(5.0)</p>
                      </div>
                      <div className="flex gap-3  py-3 text-[19px]"> 
                          <img src={image3} alt="" className="w-10 rounded-full" />
                        <p>
                        by John Smith
                        </p>
                      </div>
                      <p className="px-6">50 lectures (190 hrs)</p>
                      <h1 className=" text-cyan-600 py-4 sm:text-[18px] md:text-[15px] lg:text-[30px]">$100 All Course / $15 per month</h1>
                      <div  className="  border-2 text-cyan-600  sm:w-50 lg:w-50 text-center text-2xl py-4 border-indigo-700 cursor-pointer hover:bg-cyan-500 hover:text-white font-bold transition-colors animate-bounce">
                        <button>Explore Now</button>
                    </div>
                    </div>
                     
                </div>
                <div className="grow  border-solid flex items-center p-4 gap-2 shadow-lg w-80">
                   
                    <div>
                    <h1 className='text-3xl text-wrap px-3'>Enhancing Adobe Photoshop CC 2020 Skills</h1>
                      <div className="flex py-3 gap-2 text-yellow-400 text-[20px] px-10">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p>(5.0)</p>
                      </div>
                      <div className="flex gap-3  py-3 text-[19px]"> 
                      <img src={image3} alt="" className="w-10 rounded-full" />
                        <p>
                        by John Smith
                        </p>
                      </div>
                      <p className="px-6">50 lectures (190 hrs)</p>
                      <h1 className="text-3xl text-cyan-600 py-4">$100 All Course / $15 per month</h1>
                      <div  className="  border-2 text-cyan-600  md:w-50 lg:w-50 text-center text-2xl py-4 border-indigo-700">
                        <button>Explore Now</button>
                    </div>
                    </div>  
                </div>
                
                <div className="grow  border-solid flex  items-center p-4 gap-2 shadow-lg w-80">
                   
                    <div>
                    <h1 className='text-3xl text-wrap px-3'>HTML, CSS, and Javascript for Web Developers</h1>
                      <div className="flex py-3 gap-2 text-yellow-400 text-[20px] px-10">
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <FaRegStar />
                      <p>(5.0)</p>
                      </div>
                      <div className="flex gap-3  py-3 text-[19px]"> 
                        <img src={image3} alt="" className="w-10 rounded-full" />
                        <p>
                        by John Smith
                        </p>
                      </div>
                      <p className="px-6">50 lectures (190 hrs)</p>
                      <h1 className="text-3xl text-cyan-600 py-4">$100 All Course / $15 per month</h1>
                      <div  className="  border-2 text-cyan-600  md:w-50 lg:w-50 text-center text-2xl py-4 border-indigo-700 cursor-pointer">
                        <button>Explore Now</button>
                    </div>
                    </div>
                     
                </div>
            </div>
         </div>
        </> 

    )
}
export default Pratic;