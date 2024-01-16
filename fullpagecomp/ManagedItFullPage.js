import ReactFullpage from '@fullpage/react-fullpage';
import ManagedITBanner from '@/components/ManagedITBanner';
import ManagedITServics from '@/components/ManagedITServics';
import ManagedITServicsTab from '@/components/ManagedITServicsTab';
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
