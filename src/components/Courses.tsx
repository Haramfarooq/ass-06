import Image from "next/image";
export default function Courses(){
    const courseData = [
        {
            category:"Design",
            title:"UX/UI Design 201",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            price:"$400",
             image:'/Image/course1.png',

        },
        {
            category:"Programmimg",
            title:"Introduction to Python",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            price:"$400",
            image:'/Image/course1.png',

        },
        {
            category:"Buisness",
            title:"Data Analysis for Beginners",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            price:"$400",
            image:'/Image/course3.png',

        },
        {
            category:"Art",
            title:"Art Specialization",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            price:"$400",
            image:'/Image/course 4.png',

        },
        {
            category:"Law",
            title:"Rule of Law",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            price:"$400",
            image:'/Image/course5.png',


        },
        {
            category:"Tech",
            title:"Introduction to webflow",
            description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
            price:"$400",
            image:'/Image/course6.png',


        },
        
    ];
    return(
      <div className="w-full p-8">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-black"> Courses</h1>
             <p className="text-xl text-black mt-2">Your Ultimate Guide to learning</p>
        </div>
      <div className="flex flex-wrap items-center justify-center gap-[16px] text-[16px] mt-10 mb-11">
          <h3 className="border-black border-b pb-1">Popular</h3>
          <h3>Recommended</h3>
          <h3>Best Price</h3>
          
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-[24px]">
      {courseData.map((course, index) => (
  <div key={index} className="w-full max-w-[416px] bg-[#F7F7F7] shadow lg:overflow-hidden ">
    <Image
                      src={course.image}
                      alt={course.title}
                      height={300}
                      width={416}
                     className="object-cover "
                      />

        <div className="p-4">
            <div className="flex items-center">
                <p className="text-[14px] font-semiboldtext-[#000000]">
           {course.category}
                </p>
                <div className="flex items-center ml-auto">
                    <span className="text-black mr-1">*</span>
                    <span className="text-sm">5.0</span>
  </div>
  </div>
  <h3 className="text-black text-[20px] sm:text-[24px] md:text-[24px] font-bold mt-3">
          {course.title}
  </h3>
  <p className="text-14px sm:text-[16px] text-black mt-2">{course.description}</p>
  <div className="flex items-center justify-between mt-4">
    <button className="border-[1px] border-black w-[117px] h-[40px] rounded">
        Enroll Now
    </button>
    <span className="text-[16px]">{course.price}</span>
    </div>
    </div>
    </div>
 ))}
    </div> 
    <div className="flex items-center justify-center mt-8 mb-24">
           <button className="border-[1px] border-black px-[16px] py-[8px] rounded
            hover:bg-black hover:text-white">
              View All Courses
           </button>
      </div>
      </div>
    );
}