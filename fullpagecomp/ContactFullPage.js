import React from "react";
//
import ReactFullpage from "@fullpage/react-fullpage";
//
const ContactBanner = React.lazy(() => import("@/components/ContactBanner"));
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
                            <ContactBanner />
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
