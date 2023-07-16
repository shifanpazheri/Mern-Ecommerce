import React from "react";

export default function Footer() {
  return (
    <div className="text-center bg-dark text-light">
      <p>All right reserved</p>
      <p>
        {" "}
        Contact Us at{" "}
        <a
          style={{ textDecoration: "none", color: "white" }}
          href="https://www.instagram.com/ozge_abayas"
        >
          Ozge Abayas
        </a>
      </p>
    </div>
  );
}
