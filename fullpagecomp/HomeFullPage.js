// import { useState, useRef } from 'react';
// import styles from '@/styles/Fullpage.module.css';


// const FullPageScroll = ({ sections, scrollDuration }) => {
//     const [currentSection, setCurrentSection] = useState(0);
//     const sectionRefs = useRef([]);
//     const navItems = [];

//     const handleScroll = (event) => {
//         const { deltaY } = event;
//         const direction = deltaY > 0 ? 'down' : 'up';
//         const newIndex =
//             direction === 'down' ? currentSection + 1 : currentSection - 1;

//         if (newIndex >= 0 && newIndex < sections.length) {
//             scrollToSection(newIndex);
//         }
//     };

//     const scrollToSection = (index) => {
//         const target = sectionRefs.current[index];
//         const targetTop = target.offsetTop;

//         window.scrollTo({
//             top: targetTop,
//             behavior: 'smooth',
//             duration: 7000,
//         });

//         setCurrentSection(index);
//     };

//     sections.forEach((section, index) => {
//         const handleNavClick = () => {
//             scrollToSection(index);
//         };

//         navItems.push(
//             <li key={index}>
//                 <button onClick={handleNavClick}></button>
//             </li>
//         );
//     });

//     return (
//         <>
//             <div className={styles.fullPageNav}>
//                 <nav>
//                     <ul>{navItems}</ul>
//                 </nav>
//             </div>
//             <div className="fullpage-scroll" onWheel={handleScroll}>
//                 {sections.map((section, index) => (
//                     <div
//                         key={index}
//                         className={`section-${index + 1}`}
//                         ref={(el) => (sectionRefs.current[index] = el)}
//                     >
//                         {section}
//                     </div>
//                 ))}
//             </div>
//         </>
//     );
// };

// export default FullPageScroll;


import ReactFullpage from '@fullpage/react-fullpage';
import HomeBanner from '@/components/HomeBanner';
import Journey from '@/components/Journey';
import Services from '@/components/Services';
import Career from '@/components/Career';
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
                            <HomeBanner />
                        </div>
                        <div className="section">
                            <Journey />
                        </div>
                        <div className="section">
                            <Services />
                        </div>
                        <div className="section">
                            <Career />
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
