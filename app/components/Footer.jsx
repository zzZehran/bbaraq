import Link from "next/link";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white py-4">
      <div className="container px-3">
        <div
          className="d-flex flex-column flex-lg-row align-items-center
                    justify-content-center justify-content-lg-between gap-3"
        >
          <nav className="d-flex flex-wrap gap-3 justify-content-center">
            <Link className="text-decoration-none text-white" href="/">
              Home
            </Link>
            <Link className="text-decoration-none text-white" href="/about">
              About Us
            </Link>
            <Link
              className="text-decoration-none text-white"
              href="/renovations"
            >
              Renovations
            </Link>
            <Link
              className="text-decoration-none text-white"
              href="/services_to_landlord"
            >
              Property&nbsp;Management
            </Link>
            <Link className="text-decoration-none text-white" href="/contact">
              Contact
            </Link>
          </nav>

          <h6 className="mb-0 text-center flex-grow-1 flex-lg-grow-0">
            Powered by Zehran
          </h6>
        </div>
      </div>
    </footer>
  );
}
