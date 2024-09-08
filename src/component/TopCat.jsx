import { AiFillSound } from "react-icons/ai";
import { FaArtstation, FaChartBar, FaChartLine, FaCode, FaCodepen, FaPhotoVideo } from "react-icons/fa";
import { GiHealthPotion } from "react-icons/gi";
import { MdComputer } from "react-icons/md";

const TopCat = ()=>{
    return(
        <>
            <div className="bg-black">
            <div className="">
                <div className='text-center py-9 p-3 text-[35px] font-bold '>
                    <h1 className="text-white">Top Categories </h1>
                    <p className='text-center text-fuchsia-100 text-[20px] py-4'>Consectetur adipiscing elit sed do eiusmod tempor incididunt ut <span className="text-[#11f80d]">labore et dolore.</span>  </p>        
                 </div>
             </div>

            <div className=" container mx-auto flex justify-center ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-7 ">
                    <div className="flex items-center gap-7 py-4  px-3 border-2 text-[#22ff30]  hover:bg-[#14fe24] hover:text-black cursor-pointer hover:duration-500">
                         
                    <FaChartBar className=" text-3xl font-bold text-[#fff537] hover:text-black  " />
                        <h1 className='text-[20px] font-serif '>Java HandWritenNotes</h1>
                    </div>
                    <div className="flex items-center gap-7 py-4 px-3 border-2 text-[#22ff30]  hover:bg-[#04dede] hover:text-black hover:duration-500 cursor-pointer">
                    <FaArtstation  className=" text-3xl font-bold text-[#e61be3dd] "/>
                        <h1 className='text-[20px] font-serif'>
                        Data Structure </h1> 

                    </div>
                    <div className="flex items-center gap-7 py-4  px-3 border-2 text-[#22ff30]  hover:bg-[#09b840] hover:text-black hover:duration-500 cursor-pointer">
                    <FaCode className=" text-3xl font-bold  text-[#e62d2d]" />
                        <h1 className='text-[20px] font-serif'>
                        Python Notes</h1>

                    </div>
                    <div className="flex items-center gap-7 py-4  px-3 border-2 text-[#22ff30]  hover:bg-[#e62929] cursor-pointer hover:text-fuchsia-200 hover:duration-500">
                         <FaPhotoVideo className=" text-3xl font-bold text-[#51afe9]" />
                        <h1 className='text-[20px] font-serif'>React Js</h1>
                    </div>
                    <div className="flex items-center gap-7 py-4  px-3 border-2 text-[#22ff30]  hover:bg-[#cd1571] hover:text-fuchsia-100 hover:duration-500 cursor-pointer">
                    <GiHealthPotion  className=" text-3xl font-bold text-[#f40c0c99] "/>
                        <h1 className='text-[20px] font-serif'>Mobgo DB </h1>

                    </div>
                    <div className="flex items-center gap-7 py-4  px-3 border-2  text-[#22ff30]  hover:bg-[#ff4343] hover:text-fuchsia-200 hover:duration-500  cursor-pointer">
                    <FaCodepen className=" text-3xl font-bold text-[#fb6a0a] " />
                        <h1 className='text-[20px] font-serif '>
                        Data Science</h1>

                    </div>
                    <div className="flex items-center gap-7 py-4  px-3 border-2 text-[#22ff30]  hover:bg-[#670dce] hover:duration-500 cursor-pointer hover:text-fuchsia-200">
                    <AiFillSound className=" text-3xl font-bold  text-[#fff] " />
                        <h1 className='text-[20px] font-serif'>C & C++ Notes </h1>

                    </div>
                    <div className="flex items-center gap-7 py-4  px-3 border-2 text-[#22ff30]  hover:bg-[#e9e107] hover:duration-500 cursor-pointer hover:text-black">
                    <FaChartLine  className=" text-3xl font-bold text-[#e9a423] "/>

                        <h1 className='text-[20px] font-serif'>
                        Web Devlopment</h1>

                    </div>
                    <div className="flex items-center gap-7 py-4 px-3 border-2 text-[#22ff30]  hover:bg-[#00c11d] hover:text-fuchsia-100 cursor-pointer hover:duration-500">
                    <MdComputer className=" text-3xl font-bold  text-[#39d]" />
                        <h1 className='text-[20px] font-serif'>
                        DevOpps</h1>

                    </div>
                     
                </div>
            </div>
            
         
            </div>
        </>
    )
}
export default TopCat;