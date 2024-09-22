import CTA from "@/components/landingPage/Cta";
// import Footer from "@/components/landingPage/Footer";
import Hero from "@/components/landingPage/Hero";
import ImageSection from "@/components/landingPage/ImageSection";
import Steps from "@/components/landingPage/Steps";
import Testimonials from "@/components/landingPage/Testimonials";
import Courses from "@/components/landingPage/Courses"
// import Image from "next/image";
// import Timeline from "@/components/landingPage/TimeLine";
import FAQ from "@/components/landingPage/FAQ";
import FindCourses from "@/components/landingPage/FindCourses";
import CoachingPage from "@/components/landingPage/Coachig";

export default function Home() {
  return (
    <div className="overflow-x-hidden w-screen ">
      <Hero />
      <ImageSection />
      <Courses />
      <FindCourses />
      <Steps />
      <Testimonials />
      <CoachingPage />
      <FAQ />
      <CTA />
    </div>
  );
}
