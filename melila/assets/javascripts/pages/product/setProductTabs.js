export default function setProductTabs() {
    const sections = document.querySelectorAll('.secondary-infos');

    sections.forEach((section) => {
        const tabs = section.querySelectorAll('.tabs .titulo');
        const contentsWrapper = section.querySelector('.contents');
        const contents = section.querySelectorAll('.content');

        tabs.forEach((tab) => {
            tab.addEventListener('click', (event) => {
                event.preventDefault();

                const id = tab.getAttribute('data-content');
                const content = contentsWrapper.querySelector(id);

                // remove o active de todas as tabs
                tabs.forEach((checkTab) => checkTab.classList.remove('-active'));
                contents.forEach((checkContent) => checkContent.classList.remove('-active'));

                // adiciona active na tab clicada
                tab.classList.add('-active');
                content.classList.add('-active');
            });
        });
    });
}