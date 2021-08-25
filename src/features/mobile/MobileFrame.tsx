import React from "react";
import iphone from "../../assets/iphone.svg";

interface MobileFrameProps {}

const MobileFrame: React.FC<MobileFrameProps> = (props) => {
  return (
    <>
      <div className="mobile__frame">
        <img
          className="mobile__frame-img"
          src={iphone}
          alt="iPhone X Frame"></img>
      </div>
    </>
  );
};

export default React.memo(MobileFrame);
