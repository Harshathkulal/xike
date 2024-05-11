import { useEffect, useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SiNike } from "react-icons/si";
import { IoBagOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { SiJordan } from "react-icons/si";
import { IoMdHeartEmpty } from "react-icons/io";
import { useAppSelector } from "../../redux/hooks";

const Header = () => {
  const [sidenav, setSidenav] = useState(false);
  const [search, setSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const cartCount = useAppSelector((state) => state.cart.cartCount);

  const toggleSearch = () => {
    setSearch(!search);
  };

  useEffect(() => {
    if (search && inputRef.current) {
      inputRef.current.focus();
    }
  }, [search]);

  return (
    <div className="w-full bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200 ">
      <nav className="flex justify-between mx-2 m-1">
        <Link to="/">
          <div>
            <SiNike size={48} className=" ml-4" />
          </div>
        </Link>
        <div className="flex items-center justify-between h-full">
          <div className="hidden lg:block">
            <div className="flex gap-6 justify-center items-center m-4">
              <NavLink className="font-medium" to={"shoe/"}>
                New & Featured
              </NavLink>
              <NavLink className="font-medium" to={"shoe/dunk"}>
                Men
              </NavLink>
              <NavLink className="font-medium" to={"shoe/"}>
                Women
              </NavLink>
              <NavLink className="font-medium" to={"shoe/"}>
                kids
              </NavLink>
              <NavLink className="font-medium" to={"shoe/"}>
                Sales
              </NavLink>
            </div>
          </div>
        </div>

        <div className="flex m-2 justify-center items-center gap-4">
          <div
            className="hidden border-black border-1 bg-[#f5f5f5] rounded-full items-center p-1 lg:flex"
            onClick={toggleSearch}
          >
            <IoSearchOutline size={20} className="text-black m-0.5" />
            <input
              ref={inputRef}
              type="text"
              placeholder="  Search"
              className="text-black rounded-lg m-0.5 focus:outline-none bg-[#f5f5f5]"
            />
          </div>

          {search && (
            <div>
              <div
                onClick={toggleSearch}
                className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-60 blur z-20 transition ease-in-out duration-300"
              ></div>
              <div className="fixed top-0 left-0  w-screen h-60 bg-white z-30 shadow-lg transition ease-in-out duration-300">
                <div className="flex justify-center items-center gap-4 mt-4">
                  <div className="flex border-black border-2 bg-[#f5f5f5] rounded-full items-center w-2/3">
                    <IoSearchOutline size={24} className="text-black" />
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Search..."
                      className="text-black rounded-lg p-1 focus:outline-none bg-[#f5f5f5]"
                    />
                  </div>
                  <div
                    className="font-semibold hover:text-slate-500"
                    onClick={toggleSearch}
                  >
                    cancel
                  </div>
                </div>
              </div>
            </div>
          )}

          <IoSearchOutline
            size={24}
            className="lg:hidden"
            onClick={toggleSearch}
          />
          <div className="hidden lg:block">
            <IoMdHeartEmpty size={24} />
          </div>
          <NavLink to={"cart"}>
            <div className="relative flex mr-6">
              <IoBagOutline size={24} />
              <div className=" absolute top-1 right-2 text-sm ">
                {cartCount}
              </div>
            </div>
          </NavLink>

          {/* Mobile View */}
          <AiOutlineMenu
            size={24}
            onClick={() => setSidenav(!sidenav)}
            className="md:hidden cursor-pointer"
          />
          {sidenav && (
            <div className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-70  z-20 ">
              <div className="fixed top-0 right-0 w-[85%] h-full bg-white z-30 shadow-lg">
                <button
                  onClick={() => setSidenav(false)}
                  className="text-black right-2 absolute m-2 top-2"
                >
                  <AiOutlineClose size={24} />
                </button>
                <div className="p-6 mt-14">
                  <ul className="flex flex-col font-semibold text-xl leading-relaxed gap-6">
                    <a href="/shoe">
                      <li className="flex items-center justify-between">
                        New & Featured <IoIosArrowForward size={20} />
                      </li>
                    </a>
                    <li className="flex items-center justify-between">
                      Men <IoIosArrowForward size={20} />
                    </li>
                    <li className="flex items-center justify-between">
                      Women <IoIosArrowForward size={20} />
                    </li>
                    <li className="flex items-center justify-between">
                      Kid <IoIosArrowForward size={20} />
                    </li>
                  </ul>
                </div>
                <div className="flex gap-2 m-4 font-semibold ml-8">
                  <SiJordan size={26} />
                  Jordan
                </div>
                <div className="mt-10 p-4">
                  <p className="font-medium text-gray-500">
                    Become a Xike Member for the best products, inspiration and
                    stories in.
                    <span className="text-black hover:font-bold">
                      Learn more{" "}
                    </span>
                  </p>
                </div>
                <div className="flex gap-6 m-4">
                  <a
                    href="/login"
                    className="rounded-full bg-black text-white font-medium px-4 p-1"
                  >
                    Join Us
                  </a>
                  <a
                    href="/signup"
                    className="rounded-full border-2 border-black font-semibold px-4 p-1"
                  >
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
