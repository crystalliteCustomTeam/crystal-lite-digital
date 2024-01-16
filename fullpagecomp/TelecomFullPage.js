import ReactFullpage from '@fullpage/react-fullpage';
import TeleComBanner from '@/components/TeleComBanner';
import TeleComServics from '@/components/TeleComServics';
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
                            <TeleComBanner />
                        </div>
                        <div className="section">
                            <TeleComServics />
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
