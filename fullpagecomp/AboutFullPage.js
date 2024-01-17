import React from "react";
//
const ReactFullpage = React.lazy(() => import("@fullpage/react-fullpage"));
//
const AboutBanner = React.lazy(() => import("@/components/AboutBanner"));
const AboutBody = React.lazy(() => import("@/components/AboutBody"));
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
              <AboutBanner />
            </div>
            <div className="section">
              <AboutBody />
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
