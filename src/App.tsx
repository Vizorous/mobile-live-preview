import React, { useEffect, useState } from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import MobileContainer from "./features/mobile/MobileContainer";
import DesktopContainer from "./features/desktop/DesktopContainer";
import options from "./features/desktop/selectOptions";
import usePrevious from "./features/common/usePrevious";

interface IArticleContext {
  article: string;
  heading: string;
}
export const ArticleContext = React.createContext<IArticleContext>({
  article: "",
  heading: options[0].value,
});

function App() {
  const [article, setArticle] = useState("");
  const [heading, setHeading] = useState(options[0].value);
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const prevSelection = usePrevious(selectedOption);

  useEffect(() => {
    if (prevSelection) {
      sessionStorage.setItem(prevSelection.value, article);
    }

    const newVal = sessionStorage.getItem(selectedOption.value);
    setArticle(newVal !== null ? newVal : "");
    setHeading(selectedOption.value);
  }, [selectedOption]);

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div className="app">
      <ArticleContext.Provider value={{ article: article, heading: heading }}>
        {isMobile ? (
          <MobileContainer />
        ) : (
          <DesktopContainer
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            article={article}
            setArticle={setArticle}
            setHeading={setHeading}
          />
        )}
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
