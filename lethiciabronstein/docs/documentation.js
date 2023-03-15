document.getElementsByTagName('html')[0].style.background = '#F9F8F8';
document.body.style.background = '#F9F8F8';
document.body.style.overflow = 'hidden';

(function(){

  let sectionActive;

  function anchors(e) {
    let num = e.target.textContent.split(' ', 1).join('');
    let textH2 = e.target.textContent.split(' ', 2);
        textH2 = textH2[1];
    if (e.target.nodeName == 'LI' || e.target.nodeName == 'A' || e.target.nodeName == 'H3') {
      console.log(e.target, e)
      
      setTimeout(function(){

        let sectionIndex;
        
        if (e.target.nodeName == 'A') {
          sectionIndex = e.target.href.split('#');
          sectionIndex = sectionIndex[1]
        } else {
          sectionIndex = e.target.closest('section').id;
        }
        console.log(num)

        if (!Number.isInteger(parseFloat(num))) {
          num = undefined;
        }

        if (num) {
          let h2 = document.getElementById(sectionIndex).querySelectorAll('h2')[num -1];
          let offset = h2.offsetTop;
          let marginTop = window.innerWidth / 100 * 2.5;
  
    
          h2.closest('section').scrollTo({
            top: offset - marginTop,
            left: 0,
            behavior: 'smooth'
          })
        } else {
          document.getElementById(sectionIndex).scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          })
        }

        setSectionActive(sectionIndex, num);
        setParam(num);
      }, 700)

    }
  }

  function setParam(index) {

    if (index == undefined) {
      return
    }

    let paramUrl = { opt: index }
    let hash = window.location.hash.split('?', 1).join();

    history.replaceState(paramUrl, '', hash + `?opt=${ paramUrl.opt }`)
  }
  
  function anchorsOnLoad() {
    let hash = window.location.hash.split('?', 1).join().replace('#', '');
    let top = document.getElementById(hash).closest('svg').getBoundingClientRect().top;
    let num = window.location.hash.split('?', 2).pop().replace('opt=', '');


    document.body.scrollTo(0, top);
    
    if (num) {
      let h2 = document.getElementById(hash).querySelectorAll('h2')[num -1];
      let offset = h2.offsetTop;
      let marginTop = window.innerWidth / 100 * 2.5;
      
      h2.closest('section').scrollTo({
        top: offset - marginTop,
        left: 0,
        behavior: 'smooth'
      })
    }

    setSectionActive(hash, num);
  }

  function setSectionActive(id, opt) {
    id = id -1;
    let sections = document.querySelectorAll('section');
    let opts = document.querySelectorAll(`.sidebar ul > li > ul > li`);
    let h3s = document.querySelectorAll(`.sidebar ul > li > h3`);

    console.log(id, opt)

    sections.forEach(function(section){
      section.classList.remove('active');
    })

    opts.forEach(function(opt){
      opt.classList.remove('active');
    })

    h3s.forEach(function(h3){
      h3.classList.remove('active');
    })

    document.getElementById(id).classList.add('active');

    let currentOpt;

    if (opt) {
      currentOpt = document.querySelector(`.sidebar ul > li:nth-child(${ id }) > ul > li:nth-child(${ opt })`);
    } else {
      currentOpt = document.querySelector(`.sidebar ul > li:nth-child(${ id }) > h3`);
    }

    currentOpt.classList.add('active');
  }
  
  window.addEventListener('click', anchors)
  window.addEventListener('load', anchorsOnLoad)
  window.addEventListener('resize', setSvgSize);

  document.querySelectorAll('[data-class="table-of-contents"]')[0].classList.add('sidebar');
  document.querySelector('.sidebar').classList.remove('table-of-contents');
  document.querySelector('.sidebar').closest('svg').classList.add('wrapper-sidebar');

  const style = document.createElement('style');
  style.innerHTML = `
        svg {
          z-index: 1;
          position: relative;
          width: 100vw;
          height: 100vh;
        }
        svg:first-of-type {
          //z-index: 2;
          background: rgb(249, 248, 248);
        }
        svg:not(:first-of-type):not(.wrapper-sidebar) {
          width: 81vw;
          left: 19vw;
        }
        .wrapper-sidebar {
          position: fixed;
          top: 0;
          z-index: 0;
        }
      `;
  document.head.appendChild(style);


  function setSvgSize() {
    var svgs = document.querySelectorAll('svg');
  
    svgs.forEach(function(svg){
      // let width = window.innerWidth;
      let height = window.innerHeight;
      let foreignObject = svg.querySelector('foreignObject');
      let widthSvg = svg.width.baseVal.value;
  
      svg.viewBox.baseVal.width = widthSvg;
      svg.viewBox.baseVal.height = height;
      foreignObject.width.baseVal.value = widthSvg;
      foreignObject.height.baseVal.value = height;
    })
  }

  window.addEventListener('load', setSvgSize)

  document.querySelectorAll('[data-class="table-of-contents"]')[0].style.opacity = 1;
})();
