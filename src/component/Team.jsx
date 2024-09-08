    import { FaFacebook } from "react-icons/fa";
import { default as code1 } from '../component/IMAGE/man1.jpg';



import { FaInstagram } from "react-icons/fa";

    import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
    const Team =()=>{
       
    return(
        <>   
        <div className=' text-center py-9 '>
            <p className='py-6 font-semibold text-gray-500 uppercase'>Instructor</p>
            <h1 className= 'text-2xl md:text-4xl lg:text-5xl font-semibold '>Course Instructors</h1>

        </div>
      
        <div className="   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4 ">
  
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img src={code1} alt="Image 1" class="w-full h-full object-cover"/>
     
    <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="flex space-y-4 flex-col px-5 py-6 ">
      <a href="#" className="text-blue-800   text-4xl font-bold hover:duration-500 hover:bg-white hover:rounded-full"><FaFacebook /></a>
        <a href="#" className="text-green-700 font-bold hover:duration-700 hover:bg-green-700 hover:rounded-full hover:text-white  text-4xl"><FaWhatsapp /></a>
        <a href="#" className=" text-purple-800 text-4xl font-bold hover:text-pink-700 hover:rounded-full hover:bg-purple-900" ><FaInstagram /></a>
        <a href="#" className="text-blue-800  text-4xl font-bold hover:duration-500  hover:rounded-full"><FaLinkedin />
        </a>
      </div>
      <div className="flex justify-center items-center ">
            <p className= "text-[19px] md:text-2xl lg:text-3xl  text-red-950 font-bold cursor-pointer ">Software devloper</p>
      </div>
    </div>
     
  </div>



  
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img
      src={code1}
      alt="Image 2"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="flex space-y-4 flex-col px-5 py-6 ">
       <a href="#" className="text-blue-800   text-4xl font-bold hover:duration-500 hover:bg-white hover:rounded-full"><FaFacebook /></a>
        <a href="#" className="text-green-700 font-bold hover:duration-700 hover:bg-green-700 hover:rounded-full hover:text-white  text-4xl"><FaWhatsapp /></a>
        <a href="#" className=" text-purple-800 text-4xl font-bold hover:text-pink-700 hover:rounded-full hover:bg-purple-900" ><FaInstagram /></a>
        <a href="#" className="text-blue-800  text-4xl font-bold hover:duration-500  hover:rounded-full"><FaLinkedin />
        </a>
      </div>
      <div className="flex justify-center items-center ">
            <p className="text-[19px] md:text-2xl lg:text-3xl  text-red-950 font-bold cursor-pointer ">Full-stact Development</p>
      </div>
    </div>
  </div>

   
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img src={code1} alt="Image 3" class="w-full h-full object-cover"/>
    <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex  opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="flex space-y-4 flex-col px-5 py-6 ">
      <a href="#" className="text-blue-800   text-4xl font-bold hover:duration-500 hover:bg-white hover:rounded-full"><FaFacebook /></a>
        <a href="#" className="text-green-700 font-bold hover:duration-700 hover:bg-green-700 hover:rounded-full hover:text-white  text-4xl"><FaWhatsapp /></a>
        <a href="#" className=" text-purple-800 text-4xl font-bold hover:text-pink-700 hover:rounded-full hover:bg-purple-900" ><FaInstagram /></a>
        <a href="#" className="text-blue-800  text-4xl font-bold hover:duration-500  hover:rounded-full"><FaLinkedin />
        </a>
      </div>
      <div className="flex justify-center items-center ">
            <p className="text-[19px] md:text-2xl lg:text-3xl  text-red-950 font-bold cursor-pointer ">Python Developer </p>
      </div>
    </div>
  </div>

  
  <div className="relative group overflow-hidden rounded-lg shadow-lg">
    <img src={code1} alt="Image 4"
      className="w-full h-full object-cover"
    />


    <div className="absolute inset-0 bg-blue-500 bg-opacity-50 flex opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    <div className="flex space-y-4 flex-col px-5 py-6 ">
      <a href="#" className="text-blue-800   text-4xl font-bold hover:duration-500   hover:rounded-full"><FaFacebook /></a>
        <a href="#" className="text-green-700 font-bold hover:duration-700  hover:rounded-full hover:text-white  text-4xl"><FaWhatsapp /></a>
        <a href="#" className=" text-purple-800 text-4xl font-bold hover:text-pink-700 hover:rounded-full " ><FaInstagram /></a>
        <a href="#" className="text-blue-800  text-4xl font-bold hover:duration-500  hover:rounded-full"><FaLinkedin />
        </a>
        
      </div>
      <div className="flex justify-center items-center ">
            <p className="text-3xl  text-red-950 font-bold cursor-pointer ">web develope</p>
      </div>
    </div>
  </div>
</div>


       
 
        </>

    )
 }
 export default Team;