const initIntro = () => {

  const introBlock = document.querySelector('.intro');

  if (introBlock) {
    const header = document.querySelector('.header');
    const loader = document.querySelector('.loader');
    const introContent = document.querySelector('.intro__content');
    const tabletWidth = window.matchMedia('(max-width:1023px)');

    const setContentHeight = () => {
      let headerHeight = header.offsetHeight;

      if (tabletWidth.matches) {
        introContent.style.height = 'calc(100vh - ' + (headerHeight) + 'px)';
      } else {
        introContent.style.height = null;
      }
    };

    const openContent = () => {
      introBlock.classList.add('intro--show');
      introContent.style.maxWidth = '100vw';
    };

    const closeContent = () => {
      introBlock.classList.remove('intro--show');
      introContent.style.maxWidth = null;
    };

    const toggleContent = () => {
      if (!introBlock.classList.contains('intro--show')) {
        openContent();
      } else {
        closeContent();
      }
    };

    setContentHeight();

    window.addEventListener('click', (evt) => {
      if (tabletWidth.matches) {
        if (evt.target !== loader && !evt.target.closest('.header__logo')) {
          toggleContent();
        }
      }
    });

    window.addEventListener('resize', setContentHeight);
  }
};

export {initIntro};
