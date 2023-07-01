import { slideToggle, slideDown } from '../../components/utilities';

export default function setFaq() {
    var collapseWrapper;
    var contentWrapper;
    var content;

    // No primeiro load verifica se tem o id do collapse na url e abre ela
    // console.log(document.location.hash);

    let urlCollapseId = document.location.hash;

    if (urlCollapseId) {
        collapseWrapper = document.querySelector(urlCollapseId);
        contentWrapper = collapseWrapper.querySelector('.content-wrapper');
        content = collapseWrapper.querySelector('.content');

        // Da scroll na página até o collapse
        window.scrollTo({
            top: contentWrapper.offsetTop - 300,
            behavior: 'smooth',
        });

        // Abre o collapse
        slideDown(contentWrapper, content, 300);
    }

    // Lida com o clique nos collapses
    var collapseButtons = document.querySelectorAll('[open-collapse]');

    collapseButtons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            collapseWrapper = button.closest('[data-collapse]');
            contentWrapper = collapseWrapper.querySelector('.content-wrapper');
            content = collapseWrapper.querySelector('.content');

            collapseWrapper.classList.toggle('-open');

            slideToggle(contentWrapper, content, 300);
        });
    });
}
