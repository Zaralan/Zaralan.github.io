/*




--------------------This is the first iteration of the script before I found out the extra credit jQuery project------------------------






var positions = ['explore', 'offers', 'download', 'connect'],
    links = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', function () {
    var scroll = document.documentElement.scrollTop,
        scrollSaf = document.body.scrollTop;
    if (scroll < document.getElementById(positions[0]).offsetTop - 200 || scrollSaf >= document.getElementById(positions[0]).offsetTop - 200) {
        links[0].removeAttribute('class');
        links[1].removeAttribute('class');
        links[2].removeAttribute('class');
        links[3].removeAttribute('class');
    }
    if (scroll >= document.getElementById(positions[0]).offsetTop - 200 || scrollSaf >= document.getElementById(positions[0]).offsetTop - 200) {
        links[0].setAttribute('class', 'active-link');
        links[1].removeAttribute('class');
        links[2].removeAttribute('class');
        links[3].removeAttribute('class');
    }
    if (scroll >= document.getElementById(positions[1]).offsetTop - 200 || scrollSaf >= document.getElementById(positions[1]).offsetTop - 200) {
        links[1].setAttribute('class', 'active-link');
        links[0].removeAttribute('class');
        links[2].removeAttribute('class');
        links[3].removeAttribute('class');
    }
    if (scroll >= document.getElementById(positions[2]).offsetTop - 200 || scrollSaf >= document.getElementById(positions[2]).offsetTop - 200) {
        links[2].setAttribute('class', 'active-link');
        links[1].removeAttribute('class');
        links[0].removeAttribute('class');
        links[3].removeAttribute('class');
    }
    if (scroll >= document.getElementById(positions[3]).offsetTop - 200 || scrollSaf >= document.getElementById(positions[3]).offsetTop - 200) {
        links[3].setAttribute('class', 'active-link');
        links[1].removeAttribute('class');
        links[2].removeAttribute('class');
        links[0].removeAttribute('class');
    }
});*/

function myScrollContainer() {
    var elements = ['explore', 'offers', 'download', 'connect'],
        scroll = '',
        counter = 0,
        prevCounter = 0,
        allLinks = document.querySelectorAll('nav ul li a');
    function myScroll() {
        scroll = document.documentElement.scrollTop + 150;
        if (scroll > document.getElementById(elements[elements.length - 1]).offsetTop) {
            counter = elements.length - 1;
        } else if (counter > 0 &&
            scroll < document.getElementById(elements[counter]).offsetTop) {
            counter--;
        } else if (scroll > document.getElementById(elements[counter + 1]).offsetTop) {
            counter++;
        } else if (scroll < document.getElementById(elements[0]).offsetTop) {
            counter = -1;
        }
        if (counter != prevCounter && counter >= 0) {
            for (let i = 0; i < allLinks.length; i++) {
                allLinks[i].removeAttribute('class');
            }
            allLinks[counter].setAttribute('class', 'active-link');
            prevCounter = counter;
        } else if (counter < 0) {
            for (let i = 0; i < allLinks.length; i++) {
                allLinks[i].removeAttribute('class');
            }
        } else if (counter == 0) {
            for (let i = 0; i < allLinks.length; i++) {
                allLinks[i].removeAttribute('class');
            }
            allLinks[counter].setAttribute('class', 'active-link');
        }
    }

    window.addEventListener('load', myScroll);
    window.addEventListener('scroll', myScroll);
}

myScrollContainer();

