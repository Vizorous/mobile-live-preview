import React from "react";
import ReactQuill from "react-quill";
import CustomToolbar, { modules } from "../toolbar/CustomToolbar";

interface EditorProps {
  article: string;
  setArticle: React.Dispatch<React.SetStateAction<string>>;
}

const Editor: React.FC<EditorProps> = (props) => {
  return (
    <>
      <CustomToolbar></CustomToolbar>
      <ReactQuill
        className="editor__container"
        theme="snow"
        value={props.article}
        onChange={props.setArticle}
        modules={modules}
      />
    </>
  );
};

export default React.memo(Editor);
