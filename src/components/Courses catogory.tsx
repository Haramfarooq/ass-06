import Image from "next/image"
export default function CoursesCatogory(){
    return(
        <div className="bg-[#FFFFFF] w-full gap-64  max-w-[1280px] justify-center">
        <div className="w-full text-center ">
            <h1 className="font-bold text-[#000000] text-[24px] "> 
            Explore Courses By Category
             </h1>
             <p className="text-[14px] text-[#000000] font-normal text-center mt-4-">
             Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
             </p>
        </div>
        {/*Cardss*/}
        <div className="mt-[64px] sm:mt-[80px] lg:mt-[96px] ">
            <div className="grid grid-cols-1 gap-[16px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:gap-[24px]
            lg:gap-[32px]">
        {/*1*/}
        <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px] ">
       <Image src="/Image/card1.png" alt="card" width={80} height={80} 
       className="mb-4 sm:mb-0 sm:mr-[16px]"/>
        <div className="text-center sm:text-left">
            <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">
            Design & Development
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
            50+ Courses Available
            </p>
        </div>
        </div>
        {/*2*/}
        <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px] ">
        <Image src="/Image/card2.png" alt="card" width={80} height={80} 
        className="mb-4 sm:mb-0 sm:mr-[16px]"/>
        <div className="text-center sm:text-left">
            <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">
            Marketing
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
            50+ Courses Available
            </p>
        </div>
        </div>
        {/*3*/}
        <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px] ">
        <Image src="/Image/card3.png" alt="card" width={80} height={80} 
        className="mb-4 sm:mb-0 sm:mr-[16px]"/>
        <div className="text-center sm:text-left">
            <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">
            Development
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
            50+ Courses Available
            </p>
        </div>
        </div>
        {/*4*/}
        <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px] ">
        <Image src="/Image/card4.png" alt="card" width={80} height={80} 
        className="mb-4 sm:mb-0 sm:mr-[16px]"/>
        <div className="text-center sm:text-left">
            <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">
            Communication
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
            50+ Courses Available
            </p>
        </div>
        </div>
        {/*5*/}
        <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px] ">
        <Image src="/Image/card5.png" alt="card" width={80} height={80} 
        className="mb-4 sm:mb-0 sm:mr-[16px]"/>
        <div className="text-center sm:text-left">
            <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">
            Digital Marketing
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
            50+ Courses Available
            </p>
        </div>
        </div>
        {/*6*/}
        <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px] ">
        <Image src="/Image/card6.png" alt="card" width={80} height={80} 
        className="mb-4 sm:mb-0 sm:mr-[16px]"/>
        <div className="text-center sm:text-left">
            <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">
            Self Development
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
            50+ Courses Available
            </p>
        </div>
        </div>
        {/*7*/}
        <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px] ">
        <Image src="/Image/card7.png" alt="card" width={80} height={80} 
        className="mb-4 sm:mb-0 sm:mr-[16px]"/>
        <div className="text-center sm:text-left">
            <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">
            Business
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
            50+ Courses Available
            </p>
        </div>
        </div>
        {/*8*/}
        <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px] ">
        <Image src="/Image/card8.png" alt="card" width={80} height={80} 
        className="mb-4 sm:mb-0 sm:mr-[16px]"/>
        <div className="text-center sm:text-left">
            <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">
            Finance
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
            50+ Courses Available
            </p>
        </div>
        </div>
        {/*9*/}
        <div className="bg-[#F7F7F7] h-auto flex flex-col sm:flex-row items-center p-[16px] ">
        <Image src="/Image/card9.png" alt="card" width={80} height={80} 
        className="mb-4 sm:mb-0 sm:mr-[16px]"/>
        <div className="text-center sm:text-left">
            <h3 className="text-[#000000] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[20px] font-semibold">
            Consulting
            </h3>
            <p className="text-[#000000] text-[14px] sm:text-[16px] md:text-[16px] lg:text-[18px]">
            50+ Courses Available
            </p>
        </div>
        </div>
        </div>
         {/*button*/}
         <div className="flex justify-center mt-[32px]">
            <button className="border-[1px] border-[#000000] px-[16px] py-[10px] bg-[#FFFFFF] text-[#000000]
            text-[16px] sm:text-[18px]">
                View All Courses
            </button>

         </div>
        </div>
        </div>
    )
}