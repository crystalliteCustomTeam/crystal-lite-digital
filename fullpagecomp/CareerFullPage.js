import ReactFullpage from '@fullpage/react-fullpage';
import CareerBanner from '@/components/CareerBanner';
import CareerServics from '@/components/CareerServics';
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
                            <CareerBanner />
                        </div>
                        <div className="section">
                            <CareerServics />
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
