import React, { useRef, useState, useEffect, Fragment } from 'react';
import { useStateValue } from '../context/state';
import { FaChessKnight, FaCopy, FaSuitcase } from 'react-icons/fa';
import { MdDoneAll, MdClear, MdRedo, MdCamera, MdAlarmOn, MdTouchApp } from "react-icons/md";
import CountUp from 'react-countup';

const Footer = () => {
  const [{ config, summary }] = useStateValue();

  const { numTotalTestSuites, numTotalTests, numPassedTests,
    numFailedTests, numPendingTests, totalTimeInSecs,
    totalSnapshots
  } = summary;

  const headlineRef = useRef(null);
  const navHeight = 75;

  const [headlineHeight, setHeadlineHeight] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

  }
  const showScrollToTopButton = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) setShowScrollTopButton(true);
    else setShowScrollTopButton(false);
  }

  const toggleMenu = () => setShowSettings(!showSettings);
  useEffect(() => {
    window.addEventListener('scroll', e => {
      setScrollTop(window.scrollY);
      showScrollToTopButton();
      setHeadlineHeight(headlineRef.current.clientHeight - navHeight);
    });
    window.scrollTo(0, 0);
  }, [])

  return <Fragment>
    <nav className={`${scrollTop > headlineHeight ? 'scrolled' : ''}`}>
      <div className='heading'>
        <FaChessKnight size='45px' color='white' />
        {config.title}
      </div>
      <div onClick={toggleMenu}
        className={`hamburger hamburger--spin ${showSettings ? 'is-active' : ''}`}>
        <div className="hamburger-box">
          <div className="hamburger-inner"></div>
        </div>
      </div>
    </nav>
    <header>
      <div ref={headlineRef} className="headline" style={{ opacity: `${1 - scrollTop / headlineHeight}` }}>
        <div className="inner" >
          <div style={{ transform: "translateY(" + scrollTop * 0.4 + "px)", width: '75vw' }}>
            <div className='summaryContainer'>
              <div>
                <FaSuitcase size='60px' color='black' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={numTotalTestSuites} delay={1} duration={3} /></div>
                <div>Test Suites</div>
              </div>
              <div>
                <FaCopy size='60px' color='#0b2c32' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={numTotalTests} delay={1} duration={3} /></div>
                <div>Tests</div>
              </div>
              <div>
                <MdDoneAll size='60px' color='lawngreen' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={numPassedTests} delay={1} duration={3} /></div>
                <div>Passed</div>
              </div>
              <div>
                <MdClear size='60px' color='red' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={numFailedTests} delay={1} duration={3} /></div>
                <div>Failed</div>
              </div>
              <div>
                <MdRedo size='60px' color='#ffce42' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={numPendingTests} delay={1} duration={3} /></div>
                <div>Skipped</div>
              </div>
              <div>
                <MdCamera size='60px' color='skyblue' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={totalSnapshots} delay={1} duration={3} /></div>
                <div>Snapshots</div>
              </div>
              <div>
                <MdAlarmOn size='60px' color='whitesmoke' style={{ filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))' }} />
                <div style={{ margin: '20px 0', fontWeight: 'bold' }}><CountUp end={totalTimeInSecs} delay={1} duration={3} /></div>
                <div>Seconds</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showScrollTopButton && <button onClick={scrollToTop} className='toTopButton' id="myBtn" title="Go to top">
        Top <MdTouchApp size={20} />
      </button>}
      <div id="mySidenav" className="sidenav" style={{ width: `${showSettings ? '100vw' : 0}` }}>
        {/* <div className='sideMenuHeading'>Settings</div> */}
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>
    </header>
  </Fragment>
}

export default Footer
