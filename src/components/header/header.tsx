import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { HiMenuAlt2 } from "react-icons/hi";
//import { motion } from "framer-motion";
//import { logo, logoLight } from "../../../assets/images";
// import Image from "../../designLayouts/Image";
// import { navBarList } from "../../../constants";
// import Flex from "../../designLayouts/Flex";

const Header = () => {
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);
  const [category, setCategory] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const ResponsiveMenu = () => {
      if (window.innerWidth < 667) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <div className="flex items-center justify-between h-full">
          <Link to="/">
            <div>LOGO</div>
          </Link>
          <div>
            {showMenu && (
              <div className="flex items-center w-auto z-50 p-0 gap-2">
                <NavLink
                  className="flex font-bold w-20 h-6 justify-center items-center px-12 text-base text-black  hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] hoverEffect"
                  to={"product"}
                >
                  Home
                </NavLink>

                <NavLink
                  className="flex font-bold w-20 h-6 justify-center items-center px-12 text-base text-black  hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] hoverEffect"
                  to={"product"}
                >
                  Home
                </NavLink>

                <NavLink
                  className="flex font-bold w-20 h-6 justify-center items-center px-12 text-base text-black  hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] hoverEffect"
                  to={"product"}
                >
                  Home
                </NavLink>

                <NavLink
                  className="flex font-bold w-20 h-6 justify-center items-center px-12 text-base text-black  hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] hoverEffect"
                  to={"product"}
                >
                  Home
                </NavLink>
              </div>
            )}
            <HiMenuAlt2
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen text-black z-20">
                <div className="fixed top-0 right-0 w-[80%] h-full bg-white z-30 shadow-lg">
                  <button
                    onClick={() => setSidenav(false)}
                    className="text-black right-2 absolute m-2 top-2"
                  >
                    <MdClose size={24} />
                  </button>
                  <div className="w-full h-full p-6">
                    <ul className="text-black flex flex-col gap-2">
                      <li className="font-bold items-center text-lg text-black hover:underline underline-offset-[4px] decoration-[1px]   hoverEffect">
                        <NavLink to={"login"} onClick={() => setSidenav(false)}>
                          Login
                        </NavLink>
                      </li>
                    </ul>
                    <div className="mt-4">
                      <h1
                        onClick={() => setCategory(!category)}
                        className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                      >
                        Shop by Category{" "}
                        <span className="text-lg">{category ? "-" : "+"}</span>
                      </h1>
                      {category && (
                        <ul className="text-sm flex flex-col gap-1">
                          <li className="headerSedenavLi">New Arrivals</li>
                          <li className="headerSedenavLi">Gudgets</li>
                          <li className="headerSedenavLi">Accessories</li>
                          <li className="headerSedenavLi">Electronics</li>
                          <li className="headerSedenavLi">Others</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
