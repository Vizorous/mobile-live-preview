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
      <Toolbar></Toolbar>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />

      <ArticleContext.Provider value={value}>
        <MobileContainer withFrame={true}></MobileContainer>
      </ArticleContext.Provider>
    </>
  );
};

export default DesktopContainer;
