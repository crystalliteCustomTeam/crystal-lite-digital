import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const TranscriptionBanner = React.lazy(() => import("@/components/TranscriptionBanner"));
const TranscriptionAbt = React.lazy(() => import("@/components/TranscriptionAbt"));
const TranscriptionServics = React.lazy(() => import("@/components/TranscriptionServics"));
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
              <TranscriptionBanner />
            </div>
            <div className="section">
              <TranscriptionAbt />
            </div>
            <div className="section">
              <TranscriptionServics />
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
