import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const DedHostingBanner = React.lazy(() => import("@/components/DedHostingBanner"));
const DedHostingServics = React.lazy(() => import("@/components/DedHostingServics"));
const DedHostingServTab = React.lazy(() => import("@/components/DedHostingServTab"));
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
              <DedHostingBanner />
            </div>
            <div className="section">
              <DedHostingServics />
            </div>
            <div className="section">
              <DedHostingServTab />
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
