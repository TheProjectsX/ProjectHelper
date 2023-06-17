import React, { useState, useEffect, useRef } from "react";
import searchData from "../data/SearchData";
import { Link } from "react-router-dom";

const Search = (props) => {
  const generateButtonContent = (desc) => {
    if (desc.length <= 49) {
      return desc.replace(
        new RegExp(`(${searchValue})`, "gi"),
        `<span style="color: #00ffd8">$1</span>`
      );
    } else {
      const content = desc.slice(0, 49);
      if (content.toLowerCase().includes(searchValue.toLowerCase())) {
        return (
          content
            .slice(0, 46)
            .replace(
              new RegExp(`(${searchValue})`, "gi"),
              `<span style="color: #00ffd8">$1</span>`
            ) + "..."
        );
      } else {
        return (
          content.slice(0, 49 - searchValue.length - 3) +
          "..." +
          searchValue.replace(
            new RegExp(`(${searchValue})`, "gi"),
            `<span style="color: #00ffd8">$1</span>`
          )
        );
      }
    }
  };

  const [searchValue, setSearchValue] = useState("");
  const [matches, setMatches] = useState([]);
  const { parent } = props;
  const parentRef = useRef(null);

  useEffect(() => {
    const matchedItems = [];
    searchData.forEach((data) => {
      if (searchValue === "") return;
      let topTitle = data.topTitle;
      let descArr = [];
      let path = data.path;
      data.descs.forEach((desc) => {
        if (desc.toLowerCase().includes(searchValue.toLowerCase())) {
          descArr.push(desc);
        }
      });
      matchedItems.push({
        topTitle,
        descArr,
        path,
      });
    });
    setMatches(matchedItems);
  }, [searchValue]);

  return (
    <div className="fixed mx-auto w-full h-full md:pt-10 flex items-center justify-center bg-gray-700/20" ref={parentRef} onClick={(e)=>{if (e.target === parentRef.current) props.setSearchOpen(false)}}>
      <div className="search bg-gray-700 py-6 px-7 md:py-10 rounded-xl border-[2.5px] border-gray-400 w-[calc((100vw/5)*4)] sm:w-2/3 max-w-[525px] flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Enter your Search Query"
          onChange={(e) => setSearchValue(e.target.value)}
          value={searchValue}
          className="py-2 px-4 rounded-lg outline-none border-gray-400 border-2 focus:border-[dodgerBlue] focus:shadow-sm shadow-[dodgerBlue] sm:w-[30vw]"
        />
        <div className="max-h-[calc((100vh/4)*2)] w-full overflow-auto mt-4 scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-200 px-3 text-white">
          {matches.length > 0 ? (
            matches.map((item, index) => {
              if (item.descArr.length < 1) return "";
              return (
                <div className="result text-white" key={index}>
                  <h2 className="font-semibold text-lg mb-2 mt-4">
                    {item.topTitle}
                  </h2>
                  {item.descArr.map((desc, index) => {
                    return (
                      <Link
                        to={parent + item.path}
                        key={index}
                        onClick={() => props.setSearchOpen(false)}
                      >
                        <button
                          className="p-2 my-2 w-[calc(100%-10px)] ml-[10px] bg-gray-500 rounded-lg border-2 border-white cursor-pointer hover:bg-[dodgerBlue] active:bg-orange-500"
                          dangerouslySetInnerHTML={{
                            __html: generateButtonContent(desc),
                          }}
                        ></button>
                      </Link>
                    );
                  })}
                </div>
              );
            })
          ) : (
            <div>
              {searchValue === ""
                ? "Enter Query for Result."
                : "No matches found."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
