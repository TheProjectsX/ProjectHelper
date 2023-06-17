import React, { useState } from "react";
import { Link } from "react-router-dom/dist";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ListenRouter = (props) => {
  const location = useLocation();

  useEffect(() => {
    props.setOpen(false);
    props.setOpenClick(false);
    window.scrollTo(0, 0);
  }, [location]);
};

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [openClick, setOpenClick] = useState(false);
  const screenWidth = window.innerWidth;
  const parent = props.parent;

  const breakPoint = props.breakPoint ? props.breakPoint : 0;
  const breakName = props.breakName ? props.breakName : "md";
  return (
    <div className={`relative flex flex-col mdl:flex-row justify-center`}>
      <ListenRouter setOpen={setOpen} setOpenClick={setOpenClick} />
      <button
        onMouseOver={() => {
          if (screenWidth > breakPoint) setOpen(true);
        }}
        onMouseLeave={() => {
          if (screenWidth > breakPoint) setOpen(false);
        }}
        onClick={() => {
          if (screenWidth <= breakPoint)
            openClick ? setOpenClick(false) : setOpenClick(true);
        }}
        className={`${open || openClick ? "text-blue-300" : "text-white"} ${
          props.className ? props.className : ""
        }`}
      >
        {props.title}
      </button>

      <div
        className={`relative mdl:absolute mdl:top-[30px] transition-[max-height] duration-300 mdl:max-h-screen overflow-hidden mdl:overflow-visible ${
          open || openClick ? `mdl:block max-h-screen` : `mdl:hidden max-h-0 `
        }`}
      >
        <ul
          className={` bg-gray-800 py-4 text-center text-sm mdl:shadow-xl mdl:rounded-md `}
          onMouseOver={() => {
            if (screenWidth > breakPoint) setOpen(true);
          }}
          onMouseLeave={() => {
            if (screenWidth > breakPoint) setOpen(false);
          }}
        >
          {props.options.map((item, index) => (
            <Link to={parent + item.path} key={index}>
              <li
                className="py-2 px-6 cursor-pointer hover:bg-gray-600"
              >
                {item.title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

Dropdown.defaultProps = {
  options: [],
};

export default Dropdown;
