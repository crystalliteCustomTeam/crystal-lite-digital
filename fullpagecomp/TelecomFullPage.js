import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const TeleComBanner = React.lazy(() => import("@/components/TeleComBanner"));
const TeleComServics = React.lazy(() => import("@/components/TeleComServics"));
const Contact = React.lazy(() => import("@/components/Contact"));

const FullPage = () => {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      navigation
      render={() => {
        return (
          <>
            <div className="section">
              <TeleComBanner />
            </div>
            <div className="section">
              <TeleComServics />
            </div>
            <div className="section">
              <Contact />
            </div>
          </>
        );
      }}
    />
  );
};

export default FullPage;
