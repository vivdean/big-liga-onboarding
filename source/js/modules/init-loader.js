const initLoader = () => {

  const loader = document.querySelector('.loader');
  const tabletWidth = window.matchMedia('(max-width:1023px)');

  const hideLoader = () => {
    loader.classList.add('hidden');
    setTimeout(() => {
      loader.remove();
    }, 600);
    loader.removeEventListener('click', hideLoader);
  };

  const onEnterPress = (evt) => {
    const isEnterKey = evt.key === 'Enter';

    if (isEnterKey) {
      evt.preventDefault();
      hideLoader();
    }
  };

  if (loader) {
    if (tabletWidth.matches) {
      loader.addEventListener('click', hideLoader);
    }

    if (!tabletWidth.matches) {
      document.addEventListener('keydown', (evt) => {
        onEnterPress(evt);
      });
    }
  }
};

export {initLoader};
