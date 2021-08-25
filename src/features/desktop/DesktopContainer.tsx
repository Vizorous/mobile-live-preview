import React, { useEffect, useLayoutEffect, useState } from "react";
import MobileContainer from "../mobile/MobileContainer";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import usePrevious from "../common/usePrevious";
import options, { IOption } from "./selectOptions";
import Editor from "./Editor";
import Button from "./Button";

interface DesktopContainerProps {
  article: string;
  selectedOption: IOption;
  setSelectedOption: React.Dispatch<React.SetStateAction<IOption>>;
  setArticle: React.Dispatch<React.SetStateAction<string>>;
  setHeading: React.Dispatch<React.SetStateAction<string>>;
}

const DesktopContainer: React.FC<DesktopContainerProps> = (props) => {
  return (
    <>
      <div className="desktop__container">
        <div className="toolbar">
          <h3>Customisation</h3>
          <p>The text will reflect mobile view</p>
          <Select
            classNamePrefix="react-select"
            className="toolbar__select"
            options={options}
            value={props.selectedOption}
            defaultValue={options[0]}
            onChange={(val) =>
              props.setSelectedOption(val !== null ? val : options[0])
            }></Select>

          <Editor
            setArticle={props.setArticle}
            article={props.article}></Editor>

          <Button></Button>
        </div>

        <div className="mobile">
          <MobileContainer withFrame={true}></MobileContainer>
        </div>
      </div>
    </>
  );
};

export default DesktopContainer;
