import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import ShadowBox from "@/app/components/ShadowBox";
import Cards from "@/app/components/Cards";
import { card_info } from "@/utils/cardInfo";
import ScheduleVisit from "@/app/components/ScheduleVisit";
import Footer from "@/app/components/Footer";

export default function page() {
  return (
    <>
      <Navbar />
      <Hero title={"Services to Landlord"} button={false} />
      <ShadowBox>
        <div className={`row justify-content-around`}>
          <div className="col-lg-10">
            <p className="px-5 pt-5 px-md-5 px-lg-5">
              Discover the exceptional services tailored for landlords that set
              Bbaraq Homes Inc. apart from the competition! Our mission is
              clear: to provide unparalleled property management services in the
              Greater Toronto Area (GTA) that consistently exceed our clients
              expectations.
              <br />
              <br />
              At Bbaraq Homes Inc., we are committed to cultivating transparent
              and trusting relationships, leveraging our extensive expertise,
              and optimizing the performance of real estate investments. Our
              dedication to excellence, innovation, and client satisfaction
              drives us to establish a new benchmark in property management.
              <br />
              <br />
              Through our unwavering commitment to excellence, innovation, and
              client satisfaction, we aim to set a new standard in property
              management, empowering our clients to achieve their goals and
              experience the utmost success in the dynamic real estate
              landscape.
            </p>
            <div className="row my-5 mx-3">
              {card_info.map((el, idx) => (
                <Cards
                  key={idx}
                  title={el.title}
                  text={el.text}
                  icon={el.icon}
                />
              ))}
            </div>
          </div>
        </div>
        <ScheduleVisit />
      </ShadowBox>
      <Footer />
    </>
  );
}
