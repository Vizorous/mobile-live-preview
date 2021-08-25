import React from "react";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import MobileContainer from "./features/mobile/MobileContainer";
import DesktopContainer from "./features/desktop/DesktopContainer";

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return (
    <div className="app">
      {isMobile ? <MobileContainer /> : <DesktopContainer />}
    </div>
  );
}

export default App;
