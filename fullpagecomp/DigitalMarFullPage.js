import ReactFullpage from '@fullpage/react-fullpage';
import DigtalMarktngBanner from '@/components/DigtalMarktngBanner';
import DigtalMarktngServics from '@/components/DigtalMarktngServics';
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
                            <DigtalMarktngBanner />
                        </div>
                        <div className="section">
                            <DigtalMarktngServics />
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
