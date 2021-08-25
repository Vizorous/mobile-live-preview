import React, { useState } from "react";
import ReactQuill from "react-quill";
import MobileContainer from "../mobile/MobileContainer";
import "react-quill/dist/quill.snow.css";
import Toolbar, { modules } from "../toolbar/Toolbar";

interface DesktopContainerProps {}

const DesktopContainer: React.FC<DesktopContainerProps> = (props) => {
  const [value, setValue] = useState("");

  return (
    <>
      <ReactQuill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={modules}
      />

      <MobileContainer withFrame={true}></MobileContainer>
    </>
  );
};

export default DesktopContainer;
