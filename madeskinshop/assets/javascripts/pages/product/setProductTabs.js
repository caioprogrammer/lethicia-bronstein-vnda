import { slideToggle } from '../../components/utilities';

export default function setProductTabs() {
    // Se descomentar essa parte a primeira tab iniciará aberta
    // var  tabContainer = $('[open-tab]').first().closest(".tab-container")
    // var tabContent = $(tabContainer).first().find(".content")
    // var btnSpan = $('[open-tab]').first().find("span");

    // $(tabContent).slideToggle();
    // $(btnSpan).toggleClass("open");

    $('[open-tab]').on('click', function() {
        var  tabContainer = $(this).closest(".tab-container")
        var tabContent = $(tabContainer).find(".content")
        var btnSpan = $(this).find("span");

        $(tabContent).slideToggle();
        $(btnSpan).toggleClass("open");
    })
}