import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const BusinessBanner = React.lazy(() => import("@/components/BusinessBanner"));
const BusinessAbt = React.lazy(() => import("@/components/BusinessAbt"));
const BusinessServics = React.lazy(() => import("@/components/BusinessServics"));
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
                            <BusinessBanner />
                        </div>
                        <div className="section">
                            <BusinessAbt />
                        </div>
                        <div className="section">
                            <BusinessServics />
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
