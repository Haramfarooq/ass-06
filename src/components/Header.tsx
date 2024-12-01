import {FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Image from "next/image";
export default function Header(){
    return(
        <div className=" hidden md:flex flex-col bg-[#FFFFFF] w-full ">

        <header className="w-full h-[54px] pr-[64px] pl-[62px] bg-[#F7F7F7] border-b border-[#676767] "> 
            <div className="h-full flex justify-between item-center">
            <p className=" flex items-center text-sm"> 
            Phone Number: 956 742 455 678
            <span className="border-l border-[#676767] h-[16px] mx-3"></span>
            Email:info@ddsgnr.com
            </p>
            <div className=" flex items-center justify-center gap-[16px] ">

            <FaFacebookF size={18} color="#000000"/>
            <FaInstagram size={18} color="#000000"/>
            <FaTwitter size={18} color="#000000"/>
            <FaLinkedin size={18} color="#000000"/>
            </div>
        </div>
    
        </header>

 {/* Navbar Section */}
 <nav className="w-full h-[72px] bg-[#F7F7F7] border-b border-[#676767] flex items-center justify-between
 px-4">
     <div className="flex items-center justify-between w-full md:w-auto">
                    <Image src="/Image/footerlogo.png"
               alt="logo"
               width={130.6}
               height={30.38}
               />
              
     </div>
                <div className="flex items-center gap-[32px]">
                    <div className=" md:flex hidden  gap-[16px] md:gap-[32px]  items-center">
                        <a href="#" className="text-black">Home</a>
                        <a href="#" className="text-black">Courses</a>
                        <a href="#" className="text-black">Services</a>
                        <a href="#" className="text-black">Achievements</a>
                        <a href="#" className="text-black">About</a>
                        <a href="#" className="text-black">Testimonial</a>
                    </div>
                    {/* Buttons */}
                    <div className="hidden md:flex items-center gap-[8px] md:gap-[16px] ml-auto md:mt-0">
                        <a href="/loginpage">
                            <button className="w-[80px] h-[40px] border-[1px] border-black rounded-md">Login</button>
                        </a>
                        <a href="/signuppage">
                            <button className="w-[95px] h-[40px] rounded-md bg-black text-white text-[16px] 
                            flex justify-center items-center"> 
                                Signup
                            </button>
                        </a>
                    </div>
                    </div>
                   
                </nav>
            </div>
    

    )
}