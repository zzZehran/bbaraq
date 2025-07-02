import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import styles from "./page.module.css";
import Footer from "@/app/components/Footer";
import ShadowBox from "@/app/components/ShadowBox";
export default function page() {
  return (
    <>
      <Navbar />
      <Hero title={"About Us"} button={false} />
      <ShadowBox>
        <div className="container">
          <div className="row justify-content-around">
            <div className="col-lg-6">
              <section className={`${styles.about} mb-5`}>
                <header>
                  <h2 className="text-center my-4 mb-5">
                    About Elite Property Management
                  </h2>
                  <p>
                    At Elite Property Management, we are more than just a
                    renovation company - we are your trusted partner in property
                    transformation and management. With a steadfast commitment
                    to excellence and a passion for innovation, we specialize in
                    residential and commercial renovations, as well as
                    comprehensive property management services.
                  </p>
                </header>

                <section>
                  <p>
                    Our mission is simple yet profound: to exceed expectations
                    with every project we undertake. We aim to breathe new life
                    into properties, enriching lives and enhancing communities
                    through our dedication to quality craftsmanship, integrity,
                    and superior customer service.
                  </p>
                </section>

                <section>
                  <p>
                    <b className="text-black">What We Offer</b> At Elite
                    Property Management, we offer a comprehensive range of
                    services tailored to meet the diverse needs of our clients:
                  </p>
                  <ul>
                    <li>
                      <b className="text-black">Legal Permits:</b> Navigating
                      the complexities of permits and regulations can be
                      daunting. We streamline the process, ensuring all legal
                      requirements are met efficiently and effectively.
                    </li>
                    <li>
                      <b className="text-black">Kitchen Remodelling:</b> The
                      heart of the home deserves meticulous attention to detail.
                      From modern upgrades to timeless designs, we create
                      kitchens that inspire and delight.
                    </li>
                    <li>
                      <b className="text-black">Bathroom Renovations:</b>
                      Transform ordinary bathrooms into luxurious retreats. Our
                      expert team brings expertise and creativity to every
                      project, delivering results that exceed expectations.
                    </li>
                    <li>
                      <b className="text-black">Flooring:</b> Elevate your space
                      with premium flooring solutions. Whether hardwood, tile,
                      or laminate, we offer a wide selection of materials and
                      finishes to suit every style and budget.
                    </li>
                    <li>
                      <b className="text-black">Painting:</b> A fresh coat of
                      paint can breathe new life into any space. Our skilled
                      painters deliver flawless results, enhancing aesthetics
                      and durability.
                    </li>
                    <li>
                      <b className="text-black">Basements:</b> Maximize the
                      potential of your basement with our renovation expertise.
                      From cozy family rooms to functional workspaces, we turn
                      basements into versatile living areas.
                    </li>
                    <li>
                      <b className="text-black">
                        Separate Entrance for Basement:
                      </b>
                      Enhance privacy and convenience with a separate entrance
                      for your basement. Our seamless integration ensures both
                      functionality and aesthetics.
                    </li>
                    <li>
                      <b className="text-black">Interlock Driveway:</b> Make a
                      lasting impression with a beautifully crafted interlock
                      driveway. Our skilled craftsmen create durable, visually
                      stunning driveways that enhance curb appeal and property
                      value.
                    </li>
                    <li>
                      <b className="text-black">Property Management:</b> Entrust
                      your property to our experienced team for comprehensive
                      management services. From tenant screening to maintenance
                      and beyond, we handle every aspect of property management
                      with professionalism and care.
                    </li>
                  </ul>
                </section>

                <section>
                  <h3>Why Choose Us?</h3>
                  <ul>
                    <li>
                      <strong>Expertise:</strong> With years of experience in
                      the industry, our team brings unparalleled expertise to
                      every project.
                    </li>
                    <li>
                      <strong>Quality:</strong> We uphold the highest standards
                      of quality craftsmanship, using premium materials and
                      innovative techniques.
                    </li>
                    <li>
                      <strong>Customer Satisfaction:</strong> Your satisfaction
                      is our top priority. We listen attentively to your needs
                      and preferences, ensuring a personalized approach to every
                      project.
                    </li>
                    <li>
                      <strong>Reliability:</strong> You can count on us to
                      deliver on time and within budget, with transparent
                      communication every step of the way.
                    </li>
                    <li>
                      <strong>Commitment to Excellence:</strong> We are
                      dedicated to excellence in everything we do, from the
                      initial consultation to the final finishing touches.
                    </li>
                  </ul>
                </section>

                <section>
                  <p>
                    At Elite Property Management, we don't just renovate
                    properties - we transform lives.
                    <b className="text-black"> Contact us today</b> to discover
                    the endless possibilities for your home or commercial space.
                  </p>
                </section>
              </section>
            </div>
          </div>
        </div>
      </ShadowBox>
      <Footer />
    </>
  );
}
