import ReactFullpage from '@fullpage/react-fullpage';
import SeoBanner from '@/components/SeoBanner';
import SeoServices from '@/components/SeoServices';
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
                            <SeoBanner />
                        </div>
                        <div className="section">
                            <SeoServices />
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
