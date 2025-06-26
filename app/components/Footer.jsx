import Link from "next/link";
import styles from "./footer.module.css";
export default function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white py-4">
      <div className="container px-3">
        {/* flex-column on mobile, flex-row on lg+ */}
        <div
          className="d-flex flex-column flex-lg-row align-items-center
                    justify-content-center justify-content-lg-between gap-3"
        >
          {/* ----  LINKS  ---- */}
          <nav className="d-flex flex-wrap gap-3 justify-content-center">
            <Link className="text-decoration-none text-white" href="#">
              Home
            </Link>
            <Link className="text-decoration-none text-white" href="#">
              About Us
            </Link>
            <Link className="text-decoration-none text-white" href="#">
              Renovations
            </Link>
            <Link className="text-decoration-none text-white" href="#">
              Property&nbsp;Management
            </Link>
            <Link className="text-decoration-none text-white" href="#">
              Contact
            </Link>
          </nav>

          {/* ----  CREDIT  ---- */}
          <h6 className="mb-0 text-center flex-grow-1 flex-lg-grow-0">
            Powered by Zehran
          </h6>
        </div>
      </div>
    </footer>
  );
}
