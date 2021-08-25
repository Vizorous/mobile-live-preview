import React, { useEffect, useLayoutEffect, useState } from "react";
import MobileContainer from "../mobile/MobileContainer";
import "react-quill/dist/quill.snow.css";
import Select from "react-select";
import usePrevious from "../common/usePrevious";
import options from "./selectOptions";
import Editor from "./Editor";
import Button from "./Button";

interface DesktopContainerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setHeading: React.Dispatch<React.SetStateAction<string>>;
}

const DesktopContainer: React.FC<DesktopContainerProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const prevSelection = usePrevious(selectedOption);

  useEffect(() => {
    sessionStorage.setItem("currentArticle", selectedOption.value);

    if (prevSelection) {
      sessionStorage.setItem(prevSelection.value, props.value);
    }
    const newVal = sessionStorage.getItem(selectedOption.value);
    props.setValue(newVal !== null ? newVal : "");
    props.setHeading(selectedOption.value);
  }, [selectedOption]);

  // This effect recreates the state when size is switched from mobile to app
  useLayoutEffect(() => {
    const currentArticle = sessionStorage.getItem("currentArticle");
    if (currentArticle) {
      const index = options.findIndex((value) =>
        value.value === currentArticle ? true : false
      );
      setSelectedOption(options[index]);
    }
  }, []);

  return (
    <>
      <div className="desktop__container">
        <div className="toolbar">
          <Select
            classNamePrefix="react-select"
            className="toolbar__select"
            options={options}
            value={selectedOption}
            defaultValue={options[0]}
            onChange={(val) =>
              setSelectedOption(val !== null ? val : options[0])
            }></Select>

          <Editor setValue={props.setValue} value={props.value}></Editor>

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
