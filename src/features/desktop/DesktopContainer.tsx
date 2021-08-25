import React, { useState } from "react";
import ReactQuill from "react-quill";
import MobileContainer from "../mobile/MobileContainer";
import "react-quill/dist/quill.snow.css";
import Toolbar, { modules } from "../toolbar/Toolbar";

interface DesktopContainerProps {}

export const ArticleContext = React.createContext<any>(null);

const DesktopContainer: React.FC<DesktopContainerProps> = (props) => {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="desktop__container">
        <div className="toolbar">
          <Toolbar></Toolbar>
          <ReactQuill
            className="editor__container"
            theme="snow"
            value={value}
            onChange={setValue}
            modules={modules}
          />
        </div>

        <div className="mobile">
          <ArticleContext.Provider value={value}>
            <MobileContainer withFrame={true}></MobileContainer>
          </ArticleContext.Provider>
        </div>
      </div>
    </>
  );
};

export default DesktopContainer;
