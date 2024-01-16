import ReactFullpage from '@fullpage/react-fullpage';
import CwsBanner from '@/components/CwsBanner';
import CwsServices from '@/components/CwsServices';
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
                            <CwsBanner />
                        </div>
                        <div className="section">
                            <CwsServices />
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
