import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const HomeBanner = React.lazy(() => import("@/components/HomeBanner"));
const Journey = React.lazy(() => import("@/components/Journey"));
const Services = React.lazy(() => import("@/components/Services"));
const Career = React.lazy(() => import("@/components/Career"));
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
              <HomeBanner />
            </div>
            <div className="section">
              <Journey />
            </div>
            <div className="section">
              <Services />
            </div>
            <div className="section">
              <Career />
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
