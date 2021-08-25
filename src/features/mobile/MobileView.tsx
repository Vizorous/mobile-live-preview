import React, { useContext } from "react";
import { ArticleContext } from "../desktop/DesktopContainer";

interface MobileViewProps {}

const MobileView: React.FC<MobileViewProps> = (props) => {
  const value = useContext(ArticleContext);
  // ! utilizing dangerouslySetInnerHTML, sanitize the input
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: value }}></div>
    </>
  );
};

export default MobileView;
