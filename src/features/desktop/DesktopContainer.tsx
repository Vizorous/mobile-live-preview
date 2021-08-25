import React, { useState } from "react";
import ReactQuill from "react-quill";
import MobileContainer from "../mobile/MobileContainer";
import "react-quill/dist/quill.snow.css";
import Toolbar, { modules } from "../toolbar/Toolbar";

interface DesktopContainerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const DesktopContainer: React.FC<DesktopContainerProps> = (props) => {
  return (
    <>
      <div className="desktop__container">
        <div className="toolbar">
          <Toolbar></Toolbar>
          <ReactQuill
            className="editor__container"
            theme="snow"
            value={props.value}
            onChange={props.setValue}
            modules={modules}
          />
        </div>

        <div className="mobile">
          <MobileContainer withFrame={true}></MobileContainer>
        </div>
      </div>
    </>
  );
};

export default DesktopContainer;
