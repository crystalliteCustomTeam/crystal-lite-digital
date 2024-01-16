import ReactFullpage from '@fullpage/react-fullpage';
import AboutBanner from '@/components/AboutBanner';
import AboutBody from '@/components/AboutBody';
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
                            <AboutBanner />
                        </div>
                        <div className="section">
                            <AboutBody />
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
