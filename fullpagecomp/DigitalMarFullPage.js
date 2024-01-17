import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const DigtalMarktngBanner = React.lazy(() => import("@/components/DigtalMarktngBanner"));
const DigtalMarktngServics = React.lazy(() => import("@/components/DigtalMarktngServics"));
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
              <DigtalMarktngBanner />
            </div>
            <div className="section">
              <DigtalMarktngServics />
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
