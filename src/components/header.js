import React, { useEffect, Fragment, useState } from 'react';
import { MdTouchApp } from 'react-icons/md';

const Header = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  const showScrollToTopButton = () => {
    if(document.body.scrollTop >20 || document.documentElement.scrollTop >20) setShowScrollTopButton(true);
    else setShowScrollTopButton(false);
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth'});
  }

  useEffect(() => {
    window.addEventListener('scroll', e => {
      showScrollToTopButton();
    });
    window.scrollTo(0, 0);
  }, []);

  return <Fragment>
    <header>Header</header>
    {showScrollTopButton && <button onClick={scrollToTop} className='toTopButton' id="myBtn" title="Go to top">
      Top <MdTouchApp size={20} />
    </button>}
  </Fragment>
}

export default Header