import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const SmmBanner = React.lazy(() => import("@/components/SmmBanner"));
const SmmServices = React.lazy(() => import("@/components/SmmServices"));
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
              <SmmBanner />
            </div>
            <div className="section">
              <SmmServices />
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
