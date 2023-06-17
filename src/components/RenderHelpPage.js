import React, { useState } from "react";
import CodeViewer from "./CodeViewer";
import { Link } from "react-router-dom/dist";
import { useEffect } from "react";

const RenderHelpPage = (props) => {
  const { titleArray, scriptSubSet, helperScripts, parent, subSet, loadingBarRef } = props;

  const currentScripts = helperScripts[subSet];
  document.title = titleArray[subSet];

  const [opened, setOpened] = useState(subSet);

  useEffect(() => {
    setOpened(subSet);
  }, [subSet]);

  useEffect(() => {
    if (loadingBarRef.current) {
      loadingBarRef.current.complete();
    }
  }, [loadingBarRef]);

  return (
    <div className="pt-5 bg-gray-600 text-white">
      <div className="subSet mdl:w-1/2 mx-auto px-10 py-2">
        <div className="flex overflow-x-auto py-2 space-x-4 whitespace-nowrap scrollbar-none md:scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          {scriptSubSet.map((item, index) => (
            <Link
            key={index}
              to={parent + item.path}
              onClick={(e) => setOpened(item.tag)}
              className={`py-3 underline underline-offset-8 decoration-2 ${
                opened === item.tag
                  ? "decoration-[#00ff13]"
                  : "decoration-gray-400"
              } hover:decoration-blue-500`}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      {currentScripts.map((item, index) => {
        return (
          <div
            key={index}
            id={item.id ? item.id : ""}
            className="item mdl:w-1/2 mx-auto px-10 pb-5"
          >
            {item.topTitle && item.topTitle !== "" && (
              <h2
                className="title font-bold text-2xl sm:text-3xl pt-2 pb-4"
                dangerouslySetInnerHTML={{
                  __html: item.topTitle.replaceAll("\n", "<br/>"),
                }}
              ></h2>
            )}
            {item.title && item.title !== "" && (
              <h2
                className="title font-semibold text-xl sm:text-2xl pt-2 pb-4"
                dangerouslySetInnerHTML={{
                  __html: item.title.replaceAll("\n", "<br/>"),
                }}
              ></h2>
            )}
            {item.desc.map((desc, index) => {
              return (
                <p
                  className="desc px-2 font-semibold text-base flex sm:text-lg  gap-3"
                  key={index}
                >
                  <span className="text-[#00d2ff] text-sm py-[2px] sm:py-1 block">
                    ☐
                  </span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: desc.replaceAll("\n", "<br/>"),
                    }}
                  ></span>
                </p>
              );
            })}
            {item.code && item.code !== "" && (
              <CodeViewer lang={item.lang} code={item.code} className="mt-5" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RenderHelpPage;
