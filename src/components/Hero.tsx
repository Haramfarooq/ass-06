import Image from "next/image";
export default function Hero () {
    return(
      <div>
      <div className=" flex  h-screen items-centre justify-between -10 bg-white 
      mx-auto ml-20  ">
      <div className=" w-[1280px] mt-52">
        <h1 className="text-6xl font-bold mb-4">
        Learn new skills 
        <br/>
        online with ease
        </h1>
      <p className="text-xl mb-6">
      Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
      </p>
      <div className="flex space-x-4">
        <button className="px-8 py-3 border-2 text-white bg-black rounded-md text-lg">
        Start learning now
        </button>
        <button className="px-8 py-3 border-2 border-[#676767] bg-white text-black text-lg">
        Explore Courses
        </button>
      </div>
      </div>
           {/*image*/}
      <div className="flex w-full justify-end ">
      <Image src="/Image/photo.png"
       alt="photo" 
       width={640} 
       height={900}
       className="ml-[10px] sm:ml-[50px] lg:ml-[210px] md:ml-[100px] w-full max-w-[640px] object-contain" 
       />
      </div>
      </div>

          {/* Heading section*/}

       <div 
       className="w-full md:w-[1430px] h-auto mx-auto px-8 py-[60px] bg-[#F7F7F7] flex items-center
                    justify-center sm:justify-start mb-20 md:mb-72  ">
                      <h5 className="text-[24px] text-[#000000] font-bold text-center md:text-left w-[320px]
                      sm:w-[350px]">Trusted by 2000+ companies worldwide.
      </h5>
        <div className="flex ml-auto gap-[20px] items-center">
               <Image src="/Image/logo2.png"
               alt="photo"
               width={123.8}
               height={38.52}
               />
               <Image src="/Image/logo1.png"
               alt="photo"
               width={123.8}
               height={38.52}
               />
               <Image src="/Image/logo3.png"
               alt="photo"
               width={123.8}
               height={38.52}
               />
               <Image src="/Image/logo4.png"
               alt="photo"
               width={123.8}
               height={38.52}
               />
               <Image src="/Image/logo5.png"
               alt="photo"
               width={123.8}
               height={38.52}
               />
               <Image src="/Image/logo6.png"
               alt="photo"
               width={123.8}
               height={38.52}
               />
               


        </div>
      </div>
      </div>

                  
    
        );
      }