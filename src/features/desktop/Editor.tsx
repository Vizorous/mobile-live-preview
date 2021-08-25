import React from "react";
import ReactQuill from "react-quill";
import CustomToolbar, { modules } from "../toolbar/CustomToolbar";

interface EditorProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<EditorProps> = (props) => {
  return (
    <>
      <CustomToolbar></CustomToolbar>
      <ReactQuill
        className="editor__container"
        theme="snow"
        value={props.value}
        onChange={props.setValue}
        modules={modules}
      />
    </>
  );
};

export default Editor;
