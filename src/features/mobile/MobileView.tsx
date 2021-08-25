import React, { useContext } from "react";
import { ArticleContext } from "../../App";
import DOMPurify from "dompurify";

interface MobileViewProps {}

const MobileView: React.FC<MobileViewProps> = (props) => {
  const { article, heading } = useContext(ArticleContext);
  return (
    <>
      <div className="mobile__white-container">
        <h4 className="mobile__heading">{heading} </h4>
        <div
          className="mobile__content"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(article),
          }}></div>
      </div>
    </>
  );
};

export default React.memo(MobileView);
