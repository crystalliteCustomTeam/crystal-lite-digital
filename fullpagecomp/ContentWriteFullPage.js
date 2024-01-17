import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const CwsBanner = React.lazy(() => import("@/components/CwsBanner"));
const CwsServices = React.lazy(() => import("@/components/CwsServices"));
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
              <CwsBanner />
            </div>
            <div className="section">
              <CwsServices />
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
