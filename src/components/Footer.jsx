import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full h-[70px] flex justify-center items-center mt-3">
        <Link to="/" className="flex items-center">
          <img
            src="./logo1/ishikawa-tokyo-logo-white-transparent.png"
            alt="footerLogo"
            width={150}
            height={40}
          />
        </Link>
      </footer>
    </>
  );
};

export default Footer;
