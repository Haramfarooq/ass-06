import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoursesCatogory from "@/components/Courses catogory";
import Achievment from "@/components/Achievment";
import Courses from "@/components/Courses";
import Team from "@/components/Team";
import CustomerTestimonials from "@/components/Customer testimonials";
import Footer from "@/components/Footer";

const page = () => {
  return(
    <div>
      <Header/>
      <Hero/>
      <CoursesCatogory/>
      <Achievment/>
      <Courses/>
      <Team/>
      <CustomerTestimonials/>
      <Footer/>
      

    </div>

  )
}
export default page
 