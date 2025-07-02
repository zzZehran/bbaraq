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
              Discover the exceptional services designed specifically for
              landlords that set Elite Property Management apart in the heart of
              Srinagar, Kashmir. Our mission is simple yet powerful: to deliver
              unmatched property management solutions that consistently exceed
              the expectations of our clients across the region.
              <br />
              <br />
              At Elite Property Management, we believe in building transparent,
              trustworthy relationships with every landlord we work with. Backed
              by deep local knowledge and hands-on experience in Kashmir's
              dynamic real estate market, we are dedicated to maximizing the
              value and performance of your property investments.
              <br />
              <br />
              Our commitment to excellence, innovation, and client satisfaction
              drives everything we do. We're not just managing properties —
              we're setting a new standard in property management across
              Srinagar, empowering property owners to thrive in a fast-changing
              real estate environment.
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
