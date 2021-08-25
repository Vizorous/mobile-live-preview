import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import MobileContainer from "../mobile/MobileContainer";
import "react-quill/dist/quill.snow.css";
import Toolbar, { modules } from "../toolbar/Toolbar";
import Select from "react-select";
import usePrevious from "../common/usePrevious";

const options = [
  { value: "Text 1", label: "Text 1" },
  { value: "Text 2", label: "Text 2" },
  { value: "Text 3", label: "Text 3" },
  { value: "Text 4", label: "Text 4" },
  { value: "Text 5", label: "Text 5" },
];
interface DesktopContainerProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setHeading: React.Dispatch<React.SetStateAction<string>>;
}

const DesktopContainer: React.FC<DesktopContainerProps> = (props) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const prevSelection = usePrevious(selectedOption);

  useEffect(() => {
    if (prevSelection) {
      sessionStorage.setItem(prevSelection.value, props.value);
    }
    const newVal = sessionStorage.getItem(selectedOption.value);
    props.setValue(newVal !== null ? newVal : "");
    props.setHeading(selectedOption.value);
  }, [selectedOption]);

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
