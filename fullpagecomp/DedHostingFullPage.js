import ReactFullpage from '@fullpage/react-fullpage';
import DedHostingBanner from '@/components/DedHostingBanner';
import DedHostingServics from '@/components/DedHostingServics';
import DedHostingServTab from '@/components/DedHostingServTab';
import Contact from '@/components/Contact'

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
