import { useState } from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [help, setHelp] = useState(false);
  const [company, setCompany] = useState(false);

  return (
    <div className="w-full bg-black text-white py-4">
      <div className="footer1 m-2 ">
        <div className="footer2 flex justify-between m-2 flex-col lg:flex-row gap-6 ">
          <div>
            <ul className="font-medium space-y-2">
              <li className="text-bold">FIND A STORE</li>
              <li className="text-bold">BECOME A MEMBER</li>
              <li className="text-bold ">Send Us Feedback</li>
            </ul>
          </div>

          <div className="space-y-3 ">
            <p className="font-medium flex justify-between ">
              HELP{" "}
              <span
                className="text-lg lg:hidden"
                onClick={() => setHelp(!help)}
              >
                {help ? "-" : "+"}
              </span>
            </p>
            {help && (
              <ul className="font-medium text-gray-500 space-y-2">
                <li className="text-xs hover:text-white">Get Help</li>
                <li className="text-xs hover:text-white">Order Status</li>
                <li className="text-xs hover:text-white">Returns</li>
                <li className="text-xs hover:text-white">Payment Options</li>
              </ul>
            )}
            <ul className="font-medium text-gray-500 space-y-2 hidden lg:block">
              <li className="text-xs hover:text-white">Get Help</li>
              <li className="text-xs hover:text-white">Order Status</li>
              <li className="text-xs hover:text-white">Returns</li>
              <li className="text-xs hover:text-white">Payment Options</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="font-medium flex justify-between">
              COMPANY{" "}
              <span
                className="text-lg lg:hidden"
                onClick={() => setCompany(!company)}
              >
                {company ? "-" : "+"}
              </span>
            </div>
            {company && (
              <ul className="font-medium text-gray-500 space-y-2">
                <li className="text-xs hover:text-white">About Xike</li>
                <li className="text-xs hover:text-white">News</li>
                <li className="text-xs hover:text-white">Careers</li>
              </ul>
            )}
            <ul className="font-medium text-gray-500 space-y-2 hidden lg:block">
              <li className="text-xs hover:text-white">About Xike</li>
              <li className="text-xs hover:text-white">News</li>
              <li className="text-xs hover:text-white">Careers</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

        <div className="flex justify-between m-2 mb-0 flex-col lg:flex-row gap-2 mt-10">
          <span className="text-sm text-gray-500 sm:text-center">
            © 2024 Xike, Inc. All rights reserved.
          </span>
          <ul className="text-sm font-medium text-gray-500 flex flex-col lg:flex-row gap-4 mt-2">
            <li>
              <Link to="/" className="hover:text-white me-4 md:me-6">
                Guides
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white me-4 md:me-6">
                Terms of Sale
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white me-4 md:me-6">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-white">
                Xike Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
