import React from "react";
import MobileContainer from "../mobile/MobileContainer";

interface DesktopContainerProps {}

const DesktopContainer: React.FC<DesktopContainerProps> = (props) => {
  return (
    <>
      <MobileContainer withFrame={true}></MobileContainer>
    </>
  );
};

export default DesktopContainer;
