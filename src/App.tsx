import React, { useState } from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import MobileContainer from "./features/mobile/MobileContainer";
import DesktopContainer from "./features/desktop/DesktopContainer";

interface IArticleContext {
  article: string;
  heading: string;
}
export const ArticleContext = React.createContext<IArticleContext>({
  article: "",
  heading: "text",
});

function App() {
  const [value, setValue] = useState("");
  const [heading, setHeading] = useState("Text");

  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="app">
      <ArticleContext.Provider value={{ article: value, heading: heading }}>
        {isMobile ? (
          <MobileContainer />
        ) : (
          <DesktopContainer value={value} setValue={setValue} />
        )}
      </ArticleContext.Provider>
    </div>
  );
}

export default App;
