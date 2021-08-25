import React from "react";

interface MobileContainerProps {
  withFrame?: boolean;
}

const MobileContainer: React.FC<MobileContainerProps> = (props) => {
  return (
    <>
      <div className="mobile">
        <div className="mobile__bg">
          <div className="mobile__display"></div>
        </div>
        {props.withFrame ? <div>placeholder, with frame</div> : null}
      </div>
    </>
  );
};

export default React.memo(MobileContainer);
