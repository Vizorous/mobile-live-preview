import React, { useMemo } from "react";
import MobileFrame from "./MobileFrame";
import MobileView from "./MobileView";
interface MobileContainerProps {
  withFrame?: boolean;
}

const MobileContainer: React.FC<MobileContainerProps> = (props) => {
  return (
    <>
      <div className="mobile">
        <div className="mobile__bg">
          <div className="mobile__display">
            <MobileView></MobileView>
          </div>
        </div>
        {props.withFrame ? <MobileFrame></MobileFrame> : null}
      </div>
    </>
  );
};

export default React.memo(MobileContainer);
