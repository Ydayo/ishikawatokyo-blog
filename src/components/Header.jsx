import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../img/menu-blue.png";
import close from "../img/close.png";

const navLinks = [
  {
    id: 1,
    url: "blog",
    title: "Blog",
  },
  {
    id: 2,
    url: "portfolio",
    title: "Portfolio",
  },
  {
    id: 3,
    url: "contact",
    title: "Contact",
  },
];

const Header = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <>
      <header className="w-full h-[80px] flex items-center z-10 relative shadow-md shadow-cyan-700/50 mb-7">
        <div className="max-md:hidden max-w-7xl w-full h-full mx-auto flex justify-between items-center px-5">
          <div>
            <Link to="/" className="w-[200px] h-[50px]">
              <img
                src="./logo1/ishikawa-tokyo-white-transparent.png"
                alt=""
                width={180}
                height={50}
              />
            </Link>
          </div>
          <ul className="flex">
            {navLinks.map((link) => (
              <li key={link.id} className="ml-7">
                <Link
                  className="no-underline text-white font-light hover:opacity-70 duration-300"
                  to={`/${link.url}`}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <nav className="md:hidden flex w-full h-full items-center relative">
          <div className="mx-auto h-full flex items-center">
            <Link to="/" className="w-[160px] h-[40px]">
              <img
                src="./logo1/ishikawa-tokyo-white-transparent.png"
                alt=""
                width={160}
                height={40}
              />
            </Link>
          </div>
          <div className="absolute right-3 top-6 w-8 h-8 text-white cursor-pointer">
            <img
              src={toggle ? menu : close}
              alt="menu"
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                toggle ? "hidden" : "flex"
              } p-6 bg-gradient-to-r from-sky-800 to-indigo-900 absolute top-14 right-0 min-w-[140px] z-10 rounded-md`}
            >
              <ul className="flex justify-end items-start flex-col gap-4 text-center">
                {navLinks.map((link) => (
                  <li
                    key={link.id}
                    className="ml-3"
                    onClick={() => setToggle(!toggle)}
                  >
                    <Link
                      className="no-underline text-white font-semibold hover:opacity-70 duration-300"
                      to={`/${link.url}`}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
