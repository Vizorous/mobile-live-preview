import React, { useContext } from "react";
import { ArticleContext } from "../desktop/DesktopContainer";
import DOMPurify from "dompurify";

interface MobileViewProps {}

const MobileView: React.FC<MobileViewProps> = (props) => {
  const value = useContext(ArticleContext);
  return (
    <>
      <div className="mobile__white-container">
        <h4 className="mobile__heading">Text </h4>
        <div
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}></div>
      </div>
    </>
  );
};

export default MobileView;
