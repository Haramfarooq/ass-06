import { FaStar } from "react-icons/fa";
import Image from "next/image";
export default function CustomerTestimonials (){
    return(
        <div className="w-full px-[16px] py-[112px] sm:px-[32px] md:px-[64px] bg-[#F7F7F7] ">
          <h2 className="text-[36px] sm:text-[48px] font-bold text-black mb-4">
          Customer testimonials
          </h2>
          <p className="text-[16px] sm:text-[18px] text-black mb-16 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[48px]">
            {/*1*/}
            <div className="w-full max-w-[362.67px] h-[321.89px] border-[1px] border-black p-[16px] sm:p-[32px] text-center">
             <div className="flex justify-center mb-4">
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
            </div>
            <p className="text-[16px] sm:text-[18px] text-black mb-6 font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          <div className="flex justify-center items-center gap-[16px] sm:gap-[24px]">
          <Image
                      src="/Image/team3.png"
                      alt="Team3"
                      height={56}
                      width={56}
                     className=" rounded-full object-cover"/>
                     <div>
                        <h3 className="text-[14px] sm:text-[16px] text-black font-semibold">
                            James Nduku
                        </h3>
                <p className="text-[14px] sm:text-[16px] text-black">Software Developer</p>
        </div>
        </div>
        </div>

     {/*2*/}
     <div className="w-full max-w-[362.67px] h-[321.89px] border-[1px] border-black p-[16px] sm:p-[32px] text-center">
             <div className="flex justify-center mb-4">
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
            </div>
            <p className="text-[16px] sm:text-[18px] text-black mb-6 font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          <div className="flex justify-center items-center gap-[16px] sm:gap-[24px]">
          <Image
                      src="/Image/team1.png"
                      alt="Team1"
                      height={56}
                      width={56}
                     className=" rounded-full object-cover"/>
                     <div>
                        <h3 className="text-[14px] sm:text-[16px] text-black font-semibold">
                        Erick Kipkemboi
                        </h3>
                <p className="text-[14px] sm:text-[16px] text-black">Scrum Master</p>
        </div>
        </div>
        </div>
          {/*3*/}
     <div className="w-full max-w-[362.67px] h-[321.89px] border-[1px] border-black p-[16px] sm:p-[32px] text-center">
             <div className="flex justify-center mb-4">
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
             <FaStar size={20} color="#000000"/>
            </div>
            <p className="text-[16px] sm:text-[18px] text-black mb-6 font-[400]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
             varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </p>
          <div className="flex justify-center items-center gap-[16px] sm:gap-[24px]">
          <Image
                      src="/Image/team6.png"
                      alt="Team6"
                      height={56}
                      width={56}
                     className=" rounded-full object-cover"/>
                     <div>
                        <h3 className="text-[14px] sm:text-[16px] text-black font-semibold">
                        Stephen Kerubo
                        </h3>
                <p className="text-[14px] sm:text-[16px] text-black">UI/UX Designer</p>
        </div>
        </div>
        </div>
        <div className="flex justify-center items-center w-full ">
         <Image
         src="/Image/Content.png" alt="card" width={1920} height={48}
         className="w-full object-cover"/>
        </div>


        </div>
        </div>
    
    )
    
}