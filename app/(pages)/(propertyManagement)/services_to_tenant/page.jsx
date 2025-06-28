import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import ScheduleVisit from "@/app/components/ScheduleVisit";
import ShadowBox from "@/app/components/ShadowBox";
import styles from "./page.module.css";
import Cards from "@/app/components/Cards";
import { tenant_cards } from "@/utils/cardInfo";
export default function page() {
  return (
    <>
      <Navbar />
      <Hero title={"Services to Tenant"} />
      <ShadowBox>
        <div className={`${styles.tennat_cards} row justify-content-around`}>
          <div className="col-lg-10">
            <p className="px-5 pt-5 px-md-5 px-lg-5">
              Experience more than just property management – discover dedicated
              partners in creating homes with Bbaraq Homes Inc. Our commitment
              extends beyond mere oversight; we aim to foster vibrant
              communities through responsive, supportive, and personalized
              experiences for our tenants.
              <br />
              <br />
              Our mission is clear: prioritize tenant satisfaction by ensuring
              residents feel valued, secure, and genuinely cared for. At Bbaraq
              Homes Inc., we strive to set the standard for tenant and landlord
              services in the GTA, embodying leadership in property management.
              <br />
              <br />
            </p>
            <div className="row my-5 mx-3">
              {tenant_cards.map((el, idx) => {
                return (
                  <div key={idx} className="col-lg-3 my-4">
                    <div className="d-flex flex-column justify-content-center align-items-center border-bottom pb-3">
                      <i class={`bi ${el.icon}`}></i>
                      <h2>{el.title}</h2>
                      <h3>{el.text}</h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <ScheduleVisit />
      </ShadowBox>
      <Footer />
    </>
  );
}
