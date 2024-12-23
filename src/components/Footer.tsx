
import Image from "next/image" 
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
export default function Footer(){
return(
    <footer className="py-16 px-4 md:px-8 lg:px-16 pb-48">
     <div className="flex flex-col md:flex-row mx-auto mb-20 gap-8">
        <div className="flex flex-col md:w-1/2 mb-4 md:mb-0">
          <h3 className="text-[18px] font-semibold text-black mb-2">Subscribe to our newsletter</h3>
          <p className="text-[16px] font-400 text-black mb-6"> 
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="flex flex-col items-center md:items-start gap-4 md:pl-16" >
        <div className="flex flex-col md:flex-row items-center gap-4">
        <input 
        type="email"
        placeholder="Enter your email"
        className="w-full sm:w-[265px] h-[45px] text-[16px] p-[12px] border-[1px] rounded-md
          text-[#505050] border-[#000000] "/>
          <button className="w-full sm:w-[119px] h-[49px] text-[16px] border-[1px]
          text-black px-6 py-2 border-[#000000] rounded-md ">Subscribe</button>
          
        </div>
        <p className="mt-2 text-center md:text-left text-[16px]">
        By subscribing you agree to with our Privacy Policy
        </p>
        </div>
     </div>
            <div className="flex flex-wrap md:flex-nowrap items-start justify-between mb-10">
      <div className="w-full md:w-auto">
      <Image src="/Image/footerlogo.png"
               alt="logo"
               width={130.6}
               height={30.38}
               />
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4">
        <h4 className="font-semibold text-black text-lg mb-2"> Courses</h4>
        <div className="space y-2 text-sm">
          <h2>Business</h2>
          <h2>Development</h2>
          <h2>Technology</h2>
          <h2>Design</h2>
          <h2>Programming</h2>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4">
        <h4 className="font-semibold text-black text-lg mb-2">Resources</h4>
        <div className="space y-2 text-sm">
          <h2>Career</h2>
          <h2>Resume</h2>
          <h2>Learning</h2>
          <h2>Interview Preparation</h2>
          <h2>Jobs</h2>
        </div>
      </div>

      <div className="w-full sm:w-1/2 md:w-1/4">
        <h4 className="font-semibold text-black text-lg mb-2">About Us</h4>
        <div className="space y-2 text-sm mb-10">
          <h2>Contact</h2>
          <h2>Help/Support</h2>
          <h2>FAQ</h2>
          <h2>Terms and Conditions</h2>
          <h2>Partners</h2>
        </div>
      </div>
    </div>
    <div className="border-t border-black pt-4 flex flex-col md:flex-row justify-between items -center space y-4 md:space-y-0 ">
    <p className="text-[14px] text-black">
    2023 Ddsgnr. All right reserved.
    </p>
    <div className="flex gap-4">
       <a href="#" className="text-black"> Privacy Policy</a>
       <a href="#" className="text-black"> Terms of Service</a>
       <a href="#" className="text-black"> Cookies Settings</a>
    </div>
    <div className="flex gap-4">
    <FaFacebookF size={18} color="#000000"/>
    <FaInstagram size={18} color="#000000"/>
     <FaTwitter size={18} color="#000000"/>
     <FaLinkedin size={18} color="#000000"/>
     
    </div>
    </div>
    </footer>
)
}
