import React, { useState, useEffect, useRef } from 'react';
import { FaChessKnight, FaCopy, FaSuitcase } from 'react-icons/fa';
import { MdDoneAll, MdClear, MdRedo, MdCamera, MdAlarmOn } from "react-icons/md";
import CountUp from 'react-countup';

import '../styles/reset.css';
import '../styles/ham.css'
import '../styles/1.css';

const App = (props) => {
    const { config: { title }, testResult, totalTimeInSecs } = props;
    const { numTotalTestSuites, numTotalTests, numPassedTests, 
        numFailedTests, numPendingTests, 
        snapshot: { total: totalSnapshots }
    } = testResult;

    let timeInSecs;
    const headlineRef = useRef(null);
    const navHeight = 75;

    const [headlineHeight, setHeadlineHeight] = useState(0);
    const [scrollTop, setScrollTop] = useState(0);
    const [showSettings, setShowSettings] = useState(false);
    const [timeCalculated, setTimeCalculated] = useState(false);

    const toggleMenu = () => setShowSettings(!showSettings);
    useEffect(() => {
        window.addEventListener('scroll', e => {
            setScrollTop(window.scrollY);
            setHeadlineHeight(headlineRef.current.clientHeight - navHeight);
        });
        window.scrollTo(0, 0);
    }, [])

    return <div>
        <nav className={`${scrollTop > headlineHeight ? 'scrolled' : ''}`}>
            <div className='heading'>
                <FaChessKnight size='45px' color='white' />
                {title}
            </div>
            {/* <div className='heading'>{title}</div> */}
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
                                <FaSuitcase size='60px' color='black' style={{filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))'}}/>
                                <div style={{margin: '20px 0', fontWeight: 'bold'}}><CountUp end={numTotalTestSuites} delay={1} duration={3}/></div>
                                <div>Test Suites</div>
                            </div>
                            <div>
                                <FaCopy size='60px' color='#0b2c32' style={{filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))'}}/>
                                <div style={{margin: '20px 0', fontWeight: 'bold'}}><CountUp end={numTotalTests} delay={1} duration={3}/></div>
                                <div>Tests</div>
                            </div>
                            <div>
                                <MdDoneAll size='60px' color='lawngreen' style={{filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))'}}/>
                                <div style={{margin: '20px 0', fontWeight: 'bold'}}><CountUp end={numPassedTests} delay={1} duration={3}/></div>
                                <div>Passed</div>
                            </div>
                            <div>
                                <MdClear size='60px' color='red' style={{filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))'}}/>
                                <div style={{margin: '20px 0', fontWeight: 'bold'}}><CountUp end={numFailedTests} delay={1} duration={3}/></div>
                                <div>Failed</div>
                            </div>
                            <div>
                                <MdRedo size='60px' color='#ffce42' style={{filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))'}}/>
                                <div style={{margin: '20px 0', fontWeight: 'bold'}}><CountUp end={numPendingTests} delay={1} duration={3}/></div>
                                <div>Skipped</div>
                            </div>
                            <div>
                                <MdCamera size='60px' color='skyblue' style={{filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))'}}/>
                                <div style={{margin: '20px 0', fontWeight: 'bold'}}><CountUp end={totalSnapshots} delay={1} duration={3}/></div>
                                <div>Snapshots</div>
                            </div>
                            <div>
                                <MdAlarmOn size='60px' color='whitesmoke' style={{filter: 'drop-shadow(1px 2px 3px rgba(0,0,0,0.5))'}}/>
                                <div style={{margin: '20px 0', fontWeight: 'bold'}}><CountUp end={totalTimeInSecs}  delay={1} duration={3}/></div>
                                <div>Seconds</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <h2>Lorem ipsum</h2>
            <p>Sed lectus mi, eleifend quis congue non, lacinia id quam. Cras porta pellentesque nulla, ac auctor ligula scelerisque non. In vel placerat lacus. Nam pretium vitae purus et laoreet. Aliquam erat volutpat. Pellentesque id volutpat sem, et condimentum nisl. Donec bibendum congue mauris, ac commodo tortor volutpat ac. Donec lobortis lorem nisi, sit amet bibendum lacus vestibulum interdum. Donec mollis ligula at semper iaculis.</p>
            <p>Duis et vestibulum turpis. Duis non ultrices quam. Sed volutpat imperdiet sollicitudin. Aliquam erat volutpat. Donec at adipiscing purus. Duis varius metus vitae mattis pellentesque. Etiam tempor urna sed congue vulputate. Nulla neque metus, vulputate a dui ut, suscipit fringilla risus. Suspendisse posuere dignissim vestibulum. Praesent congue vestibulum dolor, quis lobortis libero egestas ac. Sed venenatis bibendum interdum. Curabitur rhoncus urna quis viverra varius. Cras posuere non tortor at volutpat. Suspendisse porta, turpis at ullamcorper imperdiet, felis lacus eleifend sapien, pulvinar elementum ipsum lacus ut elit. Sed ipsum erat, porttitor non malesuada at, interdum at nibh. Mauris ut ornare purus.</p>
            <h2>Nulla vitae lacus</h2>
            <p>Praesent commodo elit vel massa gravida lacinia. Maecenas auctor dignissim porttitor. Donec tincidunt mi eget semper bibendum. Morbi quis sagittis sapien. Fusce ut ligula purus. Nulla tristique augue nec lectus lacinia congue. Nunc tempus eros quam, ac sollicitudin mauris vehicula ac. Vivamus pulvinar elit ac risus placerat rutrum.</p>
            <p>Magna indoctum erroribus no his, alii fabellas eum an. Et tota clita eleifend eum, pri ne euismod eloquentiam, sea ei quas tibique. Ipsum tamquam cum id, tota clita congue ad usu. Ex eos admodum nominati. Eam ei summo dictas nostrum, vim harum graeco apeirian te. Sensibus persequeris nam an, cu legere oblique tincidunt eos, et soleat vivendum indoctum eos.</p>
            <p>Donec lobortis porta ipsum a tristique. Integer sit amet ipsum porta, bibendum mauris vitae, ultricies lectus.</p>
            <h2>Lorem ipsum</h2>
            <p>Sed lectus mi, eleifend quis congue non, lacinia id quam. Cras porta pellentesque nulla, ac auctor ligula scelerisque non. In vel placerat lacus. Nam pretium vitae purus et laoreet. Aliquam erat volutpat. Pellentesque id volutpat sem, et condimentum nisl. Donec bibendum congue mauris, ac commodo tortor volutpat ac. Donec lobortis lorem nisi, sit amet bibendum lacus vestibulum interdum. Donec mollis ligula at semper iaculis.</p>
            <p>Duis et vestibulum turpis. Duis non ultrices quam. Sed volutpat imperdiet sollicitudin. Aliquam erat volutpat. Donec at adipiscing purus. Duis varius metus vitae mattis pellentesque. Etiam tempor urna sed congue vulputate. Nulla neque metus, vulputate a dui ut, suscipit fringilla risus. Suspendisse posuere dignissim vestibulum. Praesent congue vestibulum dolor, quis lobortis libero egestas ac. Sed venenatis bibendum interdum. Curabitur rhoncus urna quis viverra varius. Cras posuere non tortor at volutpat. Suspendisse porta, turpis at ullamcorper imperdiet, felis lacus eleifend sapien, pulvinar elementum ipsum lacus ut elit. Sed ipsum erat, porttitor non malesuada at, interdum at nibh. Mauris ut ornare purus.</p>
            <h2>Nulla vitae lacus</h2>
            <p>Praesent commodo elit vel massa gravida lacinia. Maecenas auctor dignissim porttitor. Donec tincidunt mi eget semper bibendum. Morbi quis sagittis sapien. Fusce ut ligula purus. Nulla tristique augue nec lectus lacinia congue. Nunc tempus eros quam, ac sollicitudin mauris vehicula ac. Vivamus pulvinar elit ac risus placerat rutrum.</p>
            <p>Magna indoctum erroribus no his, alii fabellas eum an. Et tota clita eleifend eum, pri ne euismod eloquentiam, sea ei quas tibique. Ipsum tamquam cum id, tota clita congue ad usu. Ex eos admodum nominati. Eam ei summo dictas nostrum, vim harum graeco apeirian te. Sensibus persequeris nam an, cu legere oblique tincidunt eos, et soleat vivendum indoctum eos.</p>
            <p>Donec lobortis porta ipsum a tristique. Integer sit amet ipsum porta, bibendum mauris vitae, ultricies lectus.</p>

            <h2>Lorem ipsum</h2>
            <p>Sed lectus mi, eleifend quis congue non, lacinia id quam. Cras porta pellentesque nulla, ac auctor ligula scelerisque non. In vel placerat lacus. Nam pretium vitae purus et laoreet. Aliquam erat volutpat. Pellentesque id volutpat sem, et condimentum nisl. Donec bibendum congue mauris, ac commodo tortor volutpat ac. Donec lobortis lorem nisi, sit amet bibendum lacus vestibulum interdum. Donec mollis ligula at semper iaculis.</p>
            <p>Duis et vestibulum turpis. Duis non ultrices quam. Sed volutpat imperdiet sollicitudin. Aliquam erat volutpat. Donec at adipiscing purus. Duis varius metus vitae mattis pellentesque. Etiam tempor urna sed congue vulputate. Nulla neque metus, vulputate a dui ut, suscipit fringilla risus. Suspendisse posuere dignissim vestibulum. Praesent congue vestibulum dolor, quis lobortis libero egestas ac. Sed venenatis bibendum interdum. Curabitur rhoncus urna quis viverra varius. Cras posuere non tortor at volutpat. Suspendisse porta, turpis at ullamcorper imperdiet, felis lacus eleifend sapien, pulvinar elementum ipsum lacus ut elit. Sed ipsum erat, porttitor non malesuada at, interdum at nibh. Mauris ut ornare purus.</p>
            <h2>Nulla vitae lacus</h2>
            <p>Praesent commodo elit vel massa gravida lacinia. Maecenas auctor dignissim porttitor. Donec tincidunt mi eget semper bibendum. Morbi quis sagittis sapien. Fusce ut ligula purus. Nulla tristique augue nec lectus lacinia congue. Nunc tempus eros quam, ac sollicitudin mauris vehicula ac. Vivamus pulvinar elit ac risus placerat rutrum.</p>
            <p>Magna indoctum erroribus no his, alii fabellas eum an. Et tota clita eleifend eum, pri ne euismod eloquentiam, sea ei quas tibique. Ipsum tamquam cum id, tota clita congue ad usu. Ex eos admodum nominati. Eam ei summo dictas nostrum, vim harum graeco apeirian te. Sensibus persequeris nam an, cu legere oblique tincidunt eos, et soleat vivendum indoctum eos.</p>
            <p>Donec lobortis porta ipsum a tristique. Integer sit amet ipsum porta, bibendum mauris vitae, ultricies lectus.</p>

            <h2>Lorem ipsum</h2>
            <p>Sed lectus mi, eleifend quis congue non, lacinia id quam. Cras porta pellentesque nulla, ac auctor ligula scelerisque non. In vel placerat lacus. Nam pretium vitae purus et laoreet. Aliquam erat volutpat. Pellentesque id volutpat sem, et condimentum nisl. Donec bibendum congue mauris, ac commodo tortor volutpat ac. Donec lobortis lorem nisi, sit amet bibendum lacus vestibulum interdum. Donec mollis ligula at semper iaculis.</p>
            <p>Duis et vestibulum turpis. Duis non ultrices quam. Sed volutpat imperdiet sollicitudin. Aliquam erat volutpat. Donec at adipiscing purus. Duis varius metus vitae mattis pellentesque. Etiam tempor urna sed congue vulputate. Nulla neque metus, vulputate a dui ut, suscipit fringilla risus. Suspendisse posuere dignissim vestibulum. Praesent congue vestibulum dolor, quis lobortis libero egestas ac. Sed venenatis bibendum interdum. Curabitur rhoncus urna quis viverra varius. Cras posuere non tortor at volutpat. Suspendisse porta, turpis at ullamcorper imperdiet, felis lacus eleifend sapien, pulvinar elementum ipsum lacus ut elit. Sed ipsum erat, porttitor non malesuada at, interdum at nibh. Mauris ut ornare purus.</p>
            <h2>Nulla vitae lacus</h2>
            <p>Praesent commodo elit vel massa gravida lacinia. Maecenas auctor dignissim porttitor. Donec tincidunt mi eget semper bibendum. Morbi quis sagittis sapien. Fusce ut ligula purus. Nulla tristique augue nec lectus lacinia congue. Nunc tempus eros quam, ac sollicitudin mauris vehicula ac. Vivamus pulvinar elit ac risus placerat rutrum.</p>
            <p>Magna indoctum erroribus no his, alii fabellas eum an. Et tota clita eleifend eum, pri ne euismod eloquentiam, sea ei quas tibique. Ipsum tamquam cum id, tota clita congue ad usu. Ex eos admodum nominati. Eam ei summo dictas nostrum, vim harum graeco apeirian te. Sensibus persequeris nam an, cu legere oblique tincidunt eos, et soleat vivendum indoctum eos.</p>
            <p>Donec lobortis porta ipsum a tristique. Integer sit amet ipsum porta, bibendum mauris vitae, ultricies lectus.</p>

            <h2>Lorem ipsum</h2>
            <p>Sed lectus mi, eleifend quis congue non, lacinia id quam. Cras porta pellentesque nulla, ac auctor ligula scelerisque non. In vel placerat lacus. Nam pretium vitae purus et laoreet. Aliquam erat volutpat. Pellentesque id volutpat sem, et condimentum nisl. Donec bibendum congue mauris, ac commodo tortor volutpat ac. Donec lobortis lorem nisi, sit amet bibendum lacus vestibulum interdum. Donec mollis ligula at semper iaculis.</p>
            <p>Duis et vestibulum turpis. Duis non ultrices quam. Sed volutpat imperdiet sollicitudin. Aliquam erat volutpat. Donec at adipiscing purus. Duis varius metus vitae mattis pellentesque. Etiam tempor urna sed congue vulputate. Nulla neque metus, vulputate a dui ut, suscipit fringilla risus. Suspendisse posuere dignissim vestibulum. Praesent congue vestibulum dolor, quis lobortis libero egestas ac. Sed venenatis bibendum interdum. Curabitur rhoncus urna quis viverra varius. Cras posuere non tortor at volutpat. Suspendisse porta, turpis at ullamcorper imperdiet, felis lacus eleifend sapien, pulvinar elementum ipsum lacus ut elit. Sed ipsum erat, porttitor non malesuada at, interdum at nibh. Mauris ut ornare purus.</p>
            <h2>Nulla vitae lacus</h2>
            <p>Praesent commodo elit vel massa gravida lacinia. Maecenas auctor dignissim porttitor. Donec tincidunt mi eget semper bibendum. Morbi quis sagittis sapien. Fusce ut ligula purus. Nulla tristique augue nec lectus lacinia congue. Nunc tempus eros quam, ac sollicitudin mauris vehicula ac. Vivamus pulvinar elit ac risus placerat rutrum.</p>
            <p>Magna indoctum erroribus no his, alii fabellas eum an. Et tota clita eleifend eum, pri ne euismod eloquentiam, sea ei quas tibique. Ipsum tamquam cum id, tota clita congue ad usu. Ex eos admodum nominati. Eam ei summo dictas nostrum, vim harum graeco apeirian te. Sensibus persequeris nam an, cu legere oblique tincidunt eos, et soleat vivendum indoctum eos.</p>
            <p>Donec lobortis porta ipsum a tristique. Integer sit amet ipsum porta, bibendum mauris vitae, ultricies lectus.</p>

        </section>
        <div id="mySidenav" className="sidenav" style={{width: `${showSettings ? '300px' : 0 }`}}>
            <div className='sideMenuHeading'>Settings</div>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
        </div>
    </div>

}

export default App;