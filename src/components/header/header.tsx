import { useEffect, useState, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { SiNike } from "react-icons/si";
import { IoBagOutline, IoSearchOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { SiJordan } from "react-icons/si";
import { FiHeart } from "react-icons/fi";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { logout } from "../../redux/userSlice"; // Import the logout action

const Header = () => {
  const [sidenav, setSidenav] = useState(false);
  const [search, setSearch] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const cartCount = useAppSelector((state) => state.cart.cartCount);
  const userInfo = useAppSelector((state) => state.user.userInfo); // Access userInfo from the Redux state
  const dispatch = useAppDispatch(); // Use dispatch to log out
  const navigate = useNavigate(); // To redirect after logout
  const [favoriteActive, setfavoriteActive] = useState(false);

  const toggleSearch = (close = false) => {
    setSearch(close ? false : !search);
  };

  useEffect(() => {
    if (search && inputRef.current) {
      inputRef.current.focus();
    }
  }, [search]);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    navigate("/login"); // Redirect to login after logout
  };
  const favoriteActivefunc = () => {
    setfavoriteActive(!favoriteActive);
  };

  return (
    <div className="w-full bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
      <div className="bg-gray-100 lg:flex flex-row-reverse text-xs font-semibold p-1 px-6 hidden">
        {userInfo ? (
          <button className="font-medium" onClick={handleLogout}>
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className="font-medium"
            onClick={() => setSidenav(false)}
          >
            Login
          </Link>
        )}
        <p className="px-1">Help | </p>
      </div>
      <nav className="flex justify-between mx-2 m-1">
        <Link to="/">
          <div>
            <SiNike size={48} className="ml-4" />
          </div>
        </Link>
        <div className="flex items-center justify-between h-full">
          <div className="hidden lg:block">
            <div className="flex gap-6 justify-center items-center m-4">
              <Link className="font-medium" to={"/shoe/"}>
                New & Featured
              </Link>
              <Link className="font-medium" to={"shoe/dunk"}>
                Men
              </Link>
              <Link className="font-medium" to={"shoe/"}>
                Women
              </Link>
              <Link className="font-medium" to={"shoe/"}>
                Kids
              </Link>
              <Link className="font-medium" to={"shoe/"}>
                Sales
              </Link>
            </div>
          </div>
        </div>

        <div className="flex m-2 justify-center items-center gap-4">
          <div
            className="hidden border-black border-1 bg-[#f5f5f5] rounded-full items-center p-1 lg:flex"
            onClick={() => toggleSearch(false)}
          >
            <IoSearchOutline size={20} className="text-black m-0.5" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Search"
              className="text-black rounded-lg m-0.5 focus:outline-none bg-[#f5f5f5]"
            />
          </div>

          {search && (
            <div>
              <div
                onClick={() => toggleSearch(false)}
                className="fixed top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-60 blur z-20 transition ease-in-out duration-500"
              ></div>
              <div className="fixed top-0 left-0 w-screen h-60 bg-white z-30 shadow-lg transition ease-in-out duration-300">
                <div className="flex justify-center items-center gap-4 mt-4">
                  <div className="hidden lg:block">
                    <SiNike size={32} />
                  </div>
                  <div className="flex border-black border-2 bg-[#f5f5f5] rounded-full items-center w-3/4">
                    <IoSearchOutline size={20} className="text-black" />
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Search"
                      className="text-black rounded-lg p-1 focus:outline-none bg-[#f5f5f5]"
                    />
                  </div>
                  <div
                    className="font-semibold hover:text-slate-500"
                    onClick={() => toggleSearch(false)}
                  >
                    Cancel
                  </div>
                </div>
                <div className="flex ml-8 lg:ml-44 flex-col">
                  <p className="text-sm text-gray-500 mt-4">
                    Popular Search Terms
                  </p>
                  <ul className="font-medium mt-2 space-y-1">
                    <li>
                      <Link to="/shoe/dunk" onClick={() => toggleSearch(true)}>
                        Dunk
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shoe/Airforce"
                        onClick={() => toggleSearch(true)}
                      >
                        Air Force 1
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shoe/Jordan-1"
                        onClick={() => toggleSearch(true)}
                      >
                        Jordan
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/shoe/Blazer"
                        onClick={() => toggleSearch(true)}
                      >
                        Blazer
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          <IoSearchOutline
            size={24}
            className="lg:hidden"
            onClick={() => toggleSearch(false)}
          />
          <div
            className="hidden lg:block cursor-pointer"
            onClick={favoriteActivefunc}
          >
            <FiHeart fill={favoriteActive ? "red" : "none"} size={24} />
          </div>
          <NavLink to={"cart"}>
            <div className="relative flex mr-6">
              <IoBagOutline size={24} />
              <div className="absolute top-1 right-2 text-sm">{cartCount}</div>
            </div>
          </NavLink>

          {/* Mobile View */}
          <AiOutlineMenu
            size={24}
            onClick={() => setSidenav(true)}
            className="md:hidden cursor-pointer"
          />
        </div>
      </nav>

      {/* Side Navigation */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-70 z-20 transition-opacity duration-500 ease-in-out ${
          sidenav ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setSidenav(false)}
      ></div>
      <div
        className={`fixed top-0 right-0 w-[85%] h-full bg-white z-30 shadow-lg transform transition-transform duration-500 ease-in-out ${
          sidenav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setSidenav(false)}
          className="text-black right-2 absolute m-2 top-2"
        >
          <AiOutlineClose size={24} />
        </button>
        <div className="p-6 mt-14">
          <ul className="flex flex-col font-semibold text-xl leading-relaxed gap-6">
            <Link to="/shoe/" onClick={() => setSidenav(false)}>
              <li className="flex items-center justify-between">
                New & Featured <IoIosArrowForward size={20} />
              </li>
            </Link>
            <Link to="/shoe/" onClick={() => setSidenav(false)}>
              <li className="flex items-center justify-between">
                Men <IoIosArrowForward size={20} />
              </li>
            </Link>
            <li className="flex items-center justify-between">
              Women <IoIosArrowForward size={20} />
            </li>
            <li className="flex items-center justify-between">
              Kids <IoIosArrowForward size={20} />
            </li>
          </ul>
        </div>
        <div className="flex gap-2 m-4 font-semibold ml-8">
          <SiJordan size={26} />
          Jordan
        </div>
        <div className="mt-10 p-4">
          <p className="font-medium text-gray-500">
            Become a Xike Member for the best products, inspiration and stories
            in.
            <span className="text-black hover:font-bold"> Learn more </span>
          </p>
        </div>
        <div className="flex gap-6 m-4">
          {userInfo ? (
            <button
              className="rounded-full bg-black text-white font-medium px-4 py-1"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="rounded-full bg-black text-white font-medium px-4 p-1"
              onClick={() => setSidenav(false)}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
