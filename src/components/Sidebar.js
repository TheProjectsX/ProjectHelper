import React, { useState } from "react";
import { Link } from "react-router-dom/dist";
import Routes from "../data/LinkRoutes";
import hamburgerIcon from "../icons/hamburger.svg";
import crossIcon from "../icons/cross.svg";

const Sidebar = (props) => {
  const parent = props.parent;

  const [opened, setOpened] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [scrTimeout, setScrTimeout] = useState(0);

  return (
    <>
      <div
        className={`text-white bg-gray-700 transition-all mt-4 mdl:px-6 mdl:py-4 overflow-x-hidden scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-200 overflow-y-auto rounded-r-lg fixed h-[calc(100%-2rem-80px)] mdl:w-fit ${
          opened ? "w-fit px-6 py-4" : "w-0 p-0"
        } ${scrolling ? "" : "scrollbar-none"}`}
        onScroll={() => {
          clearTimeout(scrTimeout);
          setScrolling(true);

          setScrTimeout(
            setTimeout(() => {
              setScrolling(false);
            }, 800)
          );
        }}
      >
        <div>
          <h2 className="text-center font-bold text-lg py-2">Quick Links</h2>
          {Routes.map((item, index) => {
            return (
              <div className="frontend py-3" key={index}>
                <h2 className="font-semibold pb-2">{item.header}</h2>
                <div className="flex flex-col items-start text-sm">
                  {item.routes.map((route, index) => {
                    return (
                      <div
                        key={index}
                        className="flex flex-col items-start text-sm"
                      >
                        {route.subRoutes.length === 0 ? (
                          <Link
                            to={parent + route.path}
                            className="rounded-md py-[0.13rem] w-[120px] text-left pl-5 hover:text-blue-400 active:text-orange-400"
                            onClick={() => setOpened(false)}
                          >
                            {route.title}
                          </Link>
                        ) : (
                          <button
                            className="rounded-md py-[0.13rem] w-[120px] text-left pl-5 hover:text-blue-400 active:text-orange-400"
                            onClick={(e) => {
                              const element = e.target.nextElementSibling;
                              if (element === null) return;
                              if (element.classList.contains("flex")) {
                                element.classList.remove("flex");
                                element.classList.add("hidden");
                              } else {
                                element.classList.remove("hidden");
                                element.classList.add("flex");
                              }
                            }}
                          >
                            {`${route.title} ${
                              route.subRoutes.length !== 0 ? "+" : ""
                            }`}
                          </button>
                        )}
                        {route.subRoutes.length !== 0 && (
                          <div className="hidden flex-col items-start w-fit py-1.5 ml-4 my-1 rounded-md bg-gray-600">
                            {route.subRoutes.map((subRoute, index) => {
                              return (
                                <Link
                                  key={index}
                                  to={parent + subRoute.path}
                                  className="rounded-md w-full text-left py-[0.14rem] px-4 hover:text-blue-400 active:text-orange-400"
                                  onClick={() => setOpened(false)}
                                >
                                  {subRoute.title}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div
        className={`mdl:hidden fixed py-1.5 px-4 bg-gray-700 rounded-r-full cursor-pointer ${
          opened ? "mt-[1.5rem]" : "mt-5"
        }`}
        onClick={() => {
          opened ? setOpened(false) : setOpened(true);
        }}
        style={{ WebkitTapHighlightColor: "transparent" }}
      >
        <img
          src={opened ? crossIcon : hamburgerIcon}
          alt="More Items"
          className={opened ? "h-[12px]" : "h-4"}
        />
      </div>
    </>
  );
};

export default Sidebar;
