import ReactFullpage from '@fullpage/react-fullpage';
import TranscriptionBanner from '@/components/TranscriptionBanner';
import TranscriptionAbt from '@/components/TranscriptionAbt';
import TranscriptionServics from '@/components/TranscriptionServics';
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
                            <TranscriptionBanner />
                        </div>
                        <div className="section">
                            <TranscriptionAbt />
                        </div>
                        <div className="section">
                            <TranscriptionServics />
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
