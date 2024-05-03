import { useState } from "react";
//import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./footerListTitle";
//import { paymentCard } from "../../../assets/images";
//import Image from "../../designLayouts/Image";

const Footer = () => {
  const [emailInfo, setEmailInfo] = useState("");
  const [subscription, setSubscription] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  return (
    <div className="w-full bg-black text-white py-10">
      <div className="footer1">
        <div className="footer2 flex justify-between m-2">
          <div>
          <ul className="">
            <li className="text-bold">FIND A STORE</li>
            <li className="text-bold">BECOME A MEMBER</li>
            <li className="text-bold">Send Us Feedback</li>
          </ul>
          </div>

          <div>
          <ul className="">
            <li className="text-bold">HELP</li>
            <li className="text-bold">BECOME A MEMBER</li>
            <li className="text-bold">Send Us Feedback</li>
          </ul>
          </div>

          <div>
          <ul className="">
            <li className="text-bold">COMPANY</li>
            <li className="text-bold">BECOME A MEMBER</li>
            <li className="text-bold">Send Us Feedback</li>
          </ul>
          </div>

        </div>

        <div className="flex justify-between m-2">
        <span className="text-sm text-gray-500 sm:text-center">
          © 2024 Xike, Inc. All rights reserved.
        </span>
        <ul className=" flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0 hidden lg:flex">
          <li>
            <a href="#" className="hover:text-white me-4 md:me-6">
            Guides
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white me-4 md:me-6">
              
Terms of Sale


            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white me-4 md:me-6">
            Terms of Use
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
            Nike Privacy Policy
            </a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Footer;
