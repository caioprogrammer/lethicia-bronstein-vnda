const Header = {
  lastScrollTop: -1,
  scrollTop: window.pageYOffset,
  header: document.querySelector('#header'),

  setScroll: function (scrollTop, lastScrollTop) {
    const _this = this;

    if (scrollTop <= 0) {
      _this.header.classList.add('scroll-up');
      _this.header.classList.remove('scroll-down');
      _this.header.classList.add('on-top');
    } else {
      if (_this.header.classList.contains('on-top')) {
        _this.header.classList.remove('on-top');
      }
      if (scrollTop > lastScrollTop) {
        _this.header.classList.add('scroll-down');
        _this.header.classList.remove('scroll-up');
      } else {
        _this.header.classList.add('scroll-up');
        _this.header.classList.remove('scroll-down');
      }
    }
  },

  init: function () {
    const _this = this;
    const { lastScrollTop, scrollTop } = _this;

    _this.setScroll(scrollTop, lastScrollTop);

    // cuida quando a página scrolla pra atualizar o header
    window.addEventListener('scroll', function () {
      const newSt = window.pageYOffset;

      _this.setScroll(newSt, lastScrollTop);
      _this.lastScrollTop = newSt;
    });
  },
};

export default Header;
