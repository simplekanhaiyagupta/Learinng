import back2 from '../component/IMAGE/university2.jpg';
import back3 from '../component/IMAGE/university3.jpg';
import back4 from '../component/IMAGE/university4.jpg';
import back5 from '../component/IMAGE/university5.jpg';
import back6 from '../component/IMAGE/university6.jpg';
import back7 from '../component/IMAGE/university7.jpg';
import back8 from '../component/IMAGE/university8.jpg';
import back from '../component/IMAGE/university9.jpg';
const University = ()=>{
    return(
        <>
        <div class="flex flex-wrap justify-center mx-auto gap-4 p-4 ">
  {/* <!-- First Box (40%) --> */}
  <div className=" max-w-[40%] p-4 ">
    <h2 className="text-xl  text-gray-400] uppercase ">our Patner</h2>
    <p className="mt-2 text-[19px] md:text-[30px] lg:text-5xl font-bold py-6">Learn with   Our <br></br> <span className='text-[#22ff30]'>Partners.</span>  </p>
    <p className=' text-[15px]  text-gray-200 md:text-[18px] lg:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae deleniti rem porro iste id. Veniam sapiente exercitationem quia illum consectetur.</p>
  </div>

  {/* <!-- Second Box (60%) --> */}
  <div className="flex-1 max-w-[60%] p-4   ">
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
        <div>
            <img src={back} alt=""  className='border-1 w-48 object-cover   border-b-1 border-l-2 border-t-0  cursor-pointer hover:shadow-2xl '/>
        </div>
        <div>
            <img src={back2} alt=""  className='border-1 w-48 object-cover border-b-1 border-l-2 border-t-0  cursor-pointer hover:shadow-2xl'/>
        </div>
        <div>
            <img src={back3} alt=""  className='border-1 w-48  border-b-1  border-l-2 border-t-[#22ff30]  cursor-pointer hover:shadow-2xl'/>
        </div>
        <div>
            <img src={back4} alt=""  className='border-1 w-48  border-b-1 border-l-2  border-t-[#22ff30]  border-r-[#22FF30]  cursor-pointer hover:shadow-2xl'/>
        </div>
        <div>
            <img src={back5} alt=""  className='border-2  border-b-0 border-r-[#22FF30]w-48  border-t-[#22ff30]  cursor-pointer hover:shadow-2xl'/>
        </div>
        <div>
            <img src={back6} alt=""  className='border-2 border-b-0 border-r-[#22FF30] w-48  border-t-[#22ff30]  cursor-pointer hover:shadow-2xl'/>
        </div>
        <div>
            <img src={back7} alt=""  className='border-2 border-b-0 border-r-[#22FF30] w-48  border-t-[#22ff30]  cursor-pointer hover:shadow-2xl'/>
        </div>
        <div>
            <img src={back8} alt=""  className='border-2 border-b-0 border-r-[#22FF30] w-48 border-t-[#22ff30]  cursor-pointer hover:shadow-2xl'/>
        </div>

    </div>
     
  </div>
</div>
 

        </>
    )
}
export default University;