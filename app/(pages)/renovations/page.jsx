import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import ScheduleVisit from "@/app/components/ScheduleVisit";
import Services from "@/app/components/Services";
import ShadowBox from "@/app/components/ShadowBox";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero title={"Renovations"} button={false} />
      <ShadowBox>
        <p className="px-5 pt-5 px-md-5 px-lg-5">
          Transform your property with Elite Property Management's expert
          renovation services. With a keen eye for design and quality
          craftsmanship, we breathe new life into spaces, enhancing their appeal
          and functionality. From kitchen remodels to full-scale renovations,
          our team delivers tailored solutions that exceed expectations. Trust
          Elite Property Management to elevate your property to new heights of
          elegance and comfort through our comprehensive renovation services.
        </p>
        <Services />
        <ScheduleVisit />
      </ShadowBox>
      <Footer />
    </>
  );
}
