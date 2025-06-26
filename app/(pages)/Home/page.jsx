import Navbar from "@/app/components/Navbar";
import styles from "./page.module.css";
import Image from "next/image";
import { services, standFor } from "@/utils/cardInfo";
import Hero from "@/app/components/Hero";
import Footer from "@/app/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className={`${styles.shadow_box} mx-5 p-0 rounded`}>
        <section className={`${styles.hero_body} container px-5 pt-1`}>
          <h3 className="text-center my-5">What we stand for</h3>
          <div className="row justify-content-evenly my-5">
            {standFor.map((el, idx) => {
              return (
                <div key={idx} className="col-lg-4">
                  <div className={`${styles.img_container}`}>
                    <Image
                      src={"/card/card_1.jpg"}
                      fill={true}
                      alt={el.alt}
                    ></Image>
                  </div>
                  <h4 className="text-center my-3">{el.title}</h4>
                  <p className="text-center">{el.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className={`${styles.hero_parallax} container px-5 mx-0`}>
          <div className="row px-5">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h4>Lorem Homes Inc.</h4>
              <p>
                Our mission is simple yet profound: to exceed expectations with
                every project we undertake. We aim to breathe new life into
                properties, enriching lives and enhancing communities through
                our dedication to quality craftsmanship, integrity, and superior
                customer service.
              </p>
            </div>
            <div className="col-lg-6 position-relative">
              <div className={`${styles.img_container}`}></div>
              <Image
                className="rounded"
                src={"/interior.jpg"}
                fill={true}
                alt="person working on home interior"
              ></Image>
            </div>
          </div>
        </section>

        <section className={`${styles.hero_services} container`}>
          <h4 className="text-center my-5 mb-4">SERVICES WE OFFER</h4>
          <div className="d-flex justify-content-center">
            <p className="text-center">
              Transform your property with Lorem Homes Inc.'s expert renovation
              services. With a keen eye for design and quality craftsmanship, we
              breathe new life into spaces, enhancing their appeal and
              functionality. From kitchen remodels to full-scale renovations,
              our team delivers tailored solutions that exceed expectations.
              Trust Bbaraq Homes Inc. to elevate your property to new heights of
              elegance and comfort through our comprehensive renovation
              services.
            </p>
          </div>
          <div className="py-5">
            <div className="container">
              <div className="row gy-5 px-5 mt-3">
                {services.map(({ title, desc, img }) => (
                  <div key={title} className="col-md-6">
                    <div className="d-flex gap-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={img}
                          alt={title}
                          width={200}
                          height={200}
                          className="rounded shadow"
                          style={{ objectFit: "cover" }}
                        />
                      </div>

                      <div>
                        <h4 className="fw-semibold fs-5 mb-2">{title}</h4>
                        <p className="text-muted mb-0">{desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.contact_info} container mx-0`}>
          <div className="row justify-content-evenly w-100">
            <div className="col-lg-4">
              <h4 className="mb-4">Get in Touch</h4>
              <h6>
                <i className="bi bi-geo-alt-fill me-2"></i>
                Find us at the office
              </h6>
              <p>Srinagar, Jammu and Kashmir, 190001</p>
              <h6>
                <i className="bi bi-telephone-fill me-2"></i> Give us a ring
              </h6>
              <p>
                <a href="tel:" className="text-decoration-none text-white">
                  +91-1234567890
                </a>
              </p>
            </div>
            <div
              className={`${styles.form_container} col-lg-4 rounded py-5 px-4`}
            >
              <h5 className="rounded shadow">Contact Us</h5>
              <form action="">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your name"
                      aria-label="Your name"
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      aria-label="Your email"
                    />
                  </div>
                </div>
                <div className="row my-3">
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      aria-label="Subject"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <textarea
                      name="message"
                      id=""
                      className="w-100 ps-2"
                      placeholder="Message"
                      rows={"5"}
                    ></textarea>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="mt-4 py-2 px-3 rounded">
                    SEND MESSAGE
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
