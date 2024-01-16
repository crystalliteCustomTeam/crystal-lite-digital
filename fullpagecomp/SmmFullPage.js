import ReactFullpage from '@fullpage/react-fullpage';
import SmmBanner from '@/components/SmmBanner';
import SmmServices from '@/components/SmmServices';
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
                            <SmmBanner />
                        </div>
                        <div className="section">
                            <SmmServices />
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
