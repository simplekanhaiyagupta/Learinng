 import { FaCode } from "react-icons/fa";
import { HiMiniUserGroup } from "react-icons/hi2";
import { MdManageAccounts } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
const Boxmode = ()=>{
    return(
        <>
        <div className="">
            <div className=" grid sm:grid-col-1 md:grid-cols-2 lg:grid-cols-4  lg:gap-0">
                <div className='flex gap-4 items-center p-7 border-2 px-10 md:border-t-0 border-b-0 bg-[#000] text-fuchsia-100 border-gray-800'>
                <FaCode className="text-4xl   w-14 h-12  rounded-full p-2 bg-[#11f80d] text-white bg-opacity-85" />
                    <h1 className='text-[20px] md:text-[23px] lg:text-2xl    font-bold '>5999 Online Courses</h1>
                   
                </div>
                <div className='flex gap-4 items-center p-7 border-1 px-10 border-t-0 border-b-0 bg-[#000] text-fuchsia-100 border-gray-800 duration-75'>
                    <MdManageAccounts className="text-4xl   w-14 h-12  rounded-full p-2 bg-[#11f80d] text-white bg-opacity-85" />
                    <h1 className='text-[20px] md:text-[23px] lg:text-2xl font-bold '> Top
                    Instructors </h1>
                   
                </div>
                <div className='flex gap-4 items-center p-7 border-2 px-10 border-t-0 border-b-0  bg-[#000] text-fuchsia-100 border-gray-800'>
                    <PiCertificateBold  className="text-4xl   w-14 h-12  rounded-full p-2 bg-[#11f80d] text-white bg-opacity-85"/>
                    <h1 className='text-[20px] md:text-[23px] lg:text-2xl font-bold '> Online
                    Certifications </h1>
                   
                </div>
                <div className='flex gap-4 items-center p-7 border-1 px-10 border-t-0 border-b-0 bg-[#000] text-fuchsia-100 border-gray-800'>
                    
                   
                     <HiMiniUserGroup className="text-4xl   w-14 h-12 bg-[#11f80d] rounded-full p-2  text-white bg-opacity-85" />
                    <h1 className=' text-[20px] md:text-[23px] lg:text-2xl font-bold '>6000
                    Members</h1>
                   
                </div>

            </div>
        </div>
        </>
    )
}
export default Boxmode;