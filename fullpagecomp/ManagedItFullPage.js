import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const ManagedITBanner = React.lazy(() => import("@/components/ManagedITBanner"));
const ManagedITServics = React.lazy(() => import("@/components/ManagedITServics"));
const ManagedITServicsTab = React.lazy(() => import("@/components/ManagedITServicsTab"));
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
              <ManagedITBanner />
            </div>
            <div className="section">
              <ManagedITServics />
            </div>
            <div className="section">
              <ManagedITServicsTab />
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
