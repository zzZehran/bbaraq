"use client";
import Hero from "@/app/components/Hero";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import styles from "./page.module.css";
import ShadowBox from "@/app/components/ShadowBox";
import { Roboto_Slab } from "next/font/google";
import { useForm, ValidationError } from "@formspree/react";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: "600",
});

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xeokyaol");

  const info = {
    address: "Srinagar, Jammu and Kashmir, 190001",
    phone: "",
  };

  return (
    <>
      <Navbar />
      <Hero title={"Contact Us"} />
      <ShadowBox>
        <section className={`${styles.contact} container py-5`}>
          <div className="row justify-content-evenly">
            {/* Left: Form */}
            <div className="col-lg-4 mb-4">
              <h2 className={`mb-4 ${robotoSlab.className}`}>
                Send us a message
              </h2>

              {state.succeeded ? (
                <p>Thanks for your message!</p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Your name.."
                      className="form-control border-0 border-bottom rounded-0"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Your last name.."
                      className="form-control border-0 border-bottom rounded-0"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your email.."
                      className="form-control border-0 border-bottom rounded-0"
                      required
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Write something.."
                      className="form-control border-0 border-bottom rounded-0"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn text-white px-4 py-2 shadow-sm"
                    style={{ backgroundColor: "#517066", border: "none" }}
                    disabled={state.submitting}
                  >
                    SUBMIT
                  </button>
                </form>
              )}
            </div>

            {/* Right: Info */}
            <div className="col-lg-4">
              <div className="mb-4 d-flex align-items-start">
                <i className="bi bi-map-fill text-danger fs-4 me-2"></i>
                <div>
                  <h6 className="fw-bold">Find us at the office</h6>
                  <p className="mb-0">
                    {info.address}
                    <br />
                    Srinagar, Jammu and Kashmir
                  </p>
                </div>
              </div>

              <div className="d-flex align-items-start">
                <i className="bi bi-telephone-fill text-danger fs-4 me-2"></i>
                <div>
                  <h6 className="fw-bold">Give us a ring</h6>
                  <p className="mb-0">
                    <a
                      href="tel:+917006940036"
                      className="text-decoration-none text-black"
                    >
                      +91-7006940036
                    </a>
                    <br />
                    <a
                      href="tel:+919419023459"
                      className="text-decoration-none text-black"
                    >
                      +91-9419023459
                    </a>
                    <br />
                    <a
                      href="tel:+14165089157"
                      className="text-decoration-none text-black"
                    >
                      +1 (416) 508-9157
                    </a>
                  </p>
                  <small className="text-muted d-block mt-3">
                    Mon-Fri 10am -6pm
                  </small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ShadowBox>
      <Footer />
    </>
  );
}
