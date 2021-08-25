import React from "react";

interface ButtonProps {}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <>
      <button className="toolbar__btn">
        {`Publish          `}
        <span style={{ fontFamily: "sans-serif" }}>&gt;</span>
      </button>
    </>
  );
};

export default Button;
