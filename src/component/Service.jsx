import { default as image1, default as image2 } from '../component/IMAGE/banner3.jpg';
import image3 from '../component/IMAGE/instructor-3.jpg';
const Service = () =>{
    return(
        <>
     <div className="text-[25px] md:text-2xl lg:text-2xl text-center font-bold  ">
                <p>Our Service Teem </p>
                <h1 className="text-blue-950 text-[20px] md:text-3xl lg:text-4xl py-2"><strong className="text-cyan-700 ">09</strong> Creative  & Tranding Homepage  </h1> 
      </div>
<div className="max-w-[1750px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-6 py-4    ">
  <div>
    <img src={image1} alt="round"  className=' border border-blue-800 w-80 cursor-pointer     rounded-e-[20px]'/>

    <h1 className=' text sm:text-2xl lg:text-3xl font-medium text-blue-950 cursor-pointer '>Our Product now </h1>
    <p  className='text  sm:text-[15px] lg:text-[17px] text-gray-600 font-sans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat explicabo, labore nesciunt velit quae quia porro, 
      provident laudantium </p>
  </div>
  <div>
  <img src={image2} alt="round"  className=' border border-blue-800 w-80 cursor-pointer rounded-2xl'/>
    <h1  className='text sm:text-2xl lg:text-3xl font-medium text-blue-950 cursor-pointer '>Explore Now  </h1>
    <p  className='text  sm:text-[15px] lg:text-[17px] text-gray-600 font-sans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat explicabo, labore nesciunt velit quae quia porro, 
      provident laudantium </p>
    </div>
  <div>
  <img src={image3} alt="round"  className=' border border-blue-800 w-80 cursor-pointer  '/>
    <h1 className='text sm:text-2xl lg:text-3xl font-medium text-blue-950 cursor-pointer rounded-2xl'>Visite Site</h1>
    <p  className='text  sm:text-[15px] lg:text-[17px] text-gray-600 font-sans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat explicabo, labore nesciunt velit quae quia porro, 
      provident laudantium </p>
  </div>
  <div>
  <img src={image1} alt="round"  className=' border border-blue-800 w-80 cursor-pointer rounded-2xl'/>
    <h1 className='text sm:text-2xl lg:text-3xl font-medium text-blue-950 cursor-pointer text-balance'>Purchace Now </h1>
    <p  className='text  sm:text-[15px] lg:text-[17px] text-gray-600 font-sans'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat explicabo, labore nesciunt velit quae quia porro, 
      provident laudantium </p>
  </div>

</div>

        </>
    )
}
export default Service;