"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand fw-semibold fs-4" href="/">
          Elite Property Management
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/renovations">
                Renovations
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Property Management
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/services_to_landlord">
                    Services to Landlord
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/services_to_tenant">
                    Services to Tenant
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="prices_and_fees">
                    Prices and Fees
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
