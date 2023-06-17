import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import * as HtmlHelper from "../data/HtmlData";
import * as ReactJSHelper from "../data/ReactJSData";

import RenderHelpPage from "./RenderHelpPage";
import NotFound from "./NotFound";

const RenderPage = (props) => {
  const { parentSet, tech, subSet } = useParams();
  let render = "404";

  if (parentSet === "frontend") {
    if (tech === "html") {
      if (
        !subSet||
        Object.keys(HtmlHelper.titleArray).includes(subSet)
      ) {
        render = "html";
      }
    }
  } else if (parentSet === "framework") {
    if (tech === "reactjs") {
      if (
        !subSet ||
        Object.keys(ReactJSHelper.titleArray).includes(subSet)
      ) {
        render = "reactjs";
      }
    }
  }

  const { parent, loadingBarRef } = props;

  useEffect(() => {
    if (loadingBarRef.current) {
      loadingBarRef.current.continuousStart();
    }
  }, [loadingBarRef]);

  let renderScripts = "";

  if (render === "html") {
    renderScripts = HtmlHelper;
  } else if (render === "reactjs") {
    renderScripts = ReactJSHelper;
  }

  return (
    <div>
      {renderScripts !== "" ? (
        <RenderHelpPage
          parent={parent}
          loadingBarRef={loadingBarRef}
          subSet={subSet ? subSet : "starter"}
          {...renderScripts}
        />
      ) : (
        <NotFound loadingBarRef={loadingBarRef}/>
      )}
    </div>
  );
};

export default RenderPage;
