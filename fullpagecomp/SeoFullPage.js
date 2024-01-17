import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const SeoBanner = React.lazy(() => import("@/components/SeoBanner"));
const SeoServices = React.lazy(() => import("@/components/SeoServices"));
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
              <SeoBanner />
            </div>
            <div className="section">
              <SeoServices />
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
