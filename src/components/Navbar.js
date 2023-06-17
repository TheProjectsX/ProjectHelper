import React, { useState } from "react";
import Dropdown from "./HoverDropdown";
import Search from "./Search";
import searchIcon from "../icons/search.svg";
import hamburgerIcon from "../icons/hamburger.svg";
import { Link } from "react-router-dom/dist";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Routes from "../data/LinkRoutes";

const ListenRouter = (props) => {
  const location = useLocation();

  useEffect(() => {
    props.setOpen(false);
    window.scrollTo(0, 0);
  }, [location]);
};

const Navbar = (props) => {
  const parent = props.parent;

  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      {searchOpen ? <Search parent={parent} setSearchOpen={setSearchOpen}/> : ""}
      <div className="sticky top-0 flex flex-wrap justify-between items-center py-6 px-10 bg-gray-700 text-white">
        <ListenRouter setOpen={setOpen} />
        <Link to={`${parent}`}>
          <h1 className="text-xl cursor-pointer">Projects Helper</h1>
        </Link>
        <div className="flex gap-3 items-center mdl:hidden">
          <button>
            <img
              src={hamburgerIcon}
              alt="More Menu"
              className="w-7 active:w-6 active:m-[2px]"
            />
          </button>
          <button
            onClick={() => {
              searchOpen ? setSearchOpen(false) : setSearchOpen(true);
            }}
          >
            <img
              src={searchIcon}
              alt="Search"
              className="w-7 active:w-6 active:m-[2px]"
            />
          </button>
        </div>

        <div
          className={`flex flex-col transition-[max-height] duration-300 justify-center w-full mdl:flex-row mdl:mt-0 mdl:w-auto mdl:gap-0 mdl:max-h-screen overflow-hidden mdl:overflow-visible ${
            open ? "max-h-screen" : "max-h-0"
          }`}
        >
          <Link to={`${parent}`} className="text-center">
            <button className="hover:text-blue-300 font-semibold px-3 py-1 active:text-orange-400">
              Home
            </button>
          </Link>
          <Link to={`${parent}/about`} className="text-center">
            <button className="hover:text-blue-300 font-semibold px-3 py-1 active:text-orange-400">
              About
            </button>
          </Link>
          {Routes.map((item, index) => {
            return (
              <Dropdown
                key={index}
                title={`${item.header} +`}
                options={item.routes}
                parent={parent}
                breakPoint={850}
                breakName="mdl"
                className="font-semibold px-3 py-1 hover:text-blue-300 active:text-orange-400"
              />
            );
          })}
        </div>
        <button
          className="hidden mdl:block"
          onClick={() => {
            searchOpen ? setSearchOpen(false) : setSearchOpen(true);
          }}
        >
          <img
            src={searchIcon}
            alt="Search"
            className="w-8 active:w-7 active:m-[2px]"
          />
        </button>
      </div>
    </>
  );
};

export default Navbar;
