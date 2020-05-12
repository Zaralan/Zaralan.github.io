myScroll();
mySlider();
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        { pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE },
        'google_translate_element');
}

function mobMenu() {
    var openButton = document.getElementsByClassName('mobOpen')[0],
        closeButton = document.getElementsByClassName('mobClose')[0],
        menu = document.getElementById('mobileMenu');

    openButton.addEventListener('click', function () {
        this.style.display = 'none';
        closeButton.style.display = 'block';
        menu.style.display = 'flex';
    });

    closeButton.addEventListener('click', function () {
        this.style.display = 'none';
        openButton.style.display = 'block';
        menu.style.display = 'none';
    });

    menu.addEventListener('click', function () {
        this.style.display = 'none';
        openButton.style.display = 'block';
        closeButton.style.display = 'none';
    });
}

mobMenu();