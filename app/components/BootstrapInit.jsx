"use client";
// import "bootstrap-icons/font/bootstrap-icons.css";

import { useEffect } from "react";

export default function BootstrapInit() {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return null;
}
