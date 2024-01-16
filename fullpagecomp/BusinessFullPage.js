import ReactFullpage from '@fullpage/react-fullpage';
import BusinessBanner from '@/components/BusinessBanner';
import BusinessAbt from '@/components/BusinessAbt';
import BusinessServics from '@/components/BusinessServics';
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
