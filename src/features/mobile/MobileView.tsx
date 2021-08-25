import React, { useContext } from "react";
import { ArticleContext } from "../desktop/DesktopContainer";
import DOMPurify from "dompurify";

interface MobileViewProps {}

const MobileView: React.FC<MobileViewProps> = (props) => {
  const value = useContext(ArticleContext);
  return (
    <>
      <div
        dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}></div>
    </>
  );
};

export default MobileView;
