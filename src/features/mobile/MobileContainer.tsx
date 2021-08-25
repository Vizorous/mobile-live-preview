import React from "react";
import MobileFrame from "./MobileFrame";

interface MobileContainerProps {
  withFrame?: boolean;
}

const MobileContainer: React.FC<MobileContainerProps> = (props) => {
  return (
    <>
      <div className="mobile">
        <div className="mobile__bg">
          <div className="mobile__display">
            <div>testing text</div>
          </div>
        </div>
        {props.withFrame ? <MobileFrame /> : null}
      </div>
    </>
  );
};

export default React.memo(MobileContainer);
