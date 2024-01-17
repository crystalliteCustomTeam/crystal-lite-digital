import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const CareerBanner = React.lazy(() => import("@/components/CareerBanner"));
const CareerServics = React.lazy(() => import("@/components/CareerServics"));
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
              <CareerBanner />
            </div>
            <div className="section">
              <CareerServics />
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
