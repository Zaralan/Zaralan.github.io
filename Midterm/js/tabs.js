var handlers = document.querySelectorAll('.tabs-container .tabs-handlers .tabs-handler h3 a'),
    content = document.querySelectorAll('.tabs-container .tabs-contents--border .tabs-contents .tabs-content');

for (let i = 0; i < handlers.length; i++) {
    handlers[i].addEventListener('click', function (e) {
        e.preventDefault();
        for (let i = 0; i < handlers.length; i++) {
            handlers[i].classList.remove('tabs-handler--active');
        }
        this.classList.add('tabs-handler--active');
        var thisTab = this.getAttribute('href');
        for (let i = 0; i < content.length; i++) {
            content[i].classList.remove('tabs-content--active');
            document.querySelector(thisTab).classList.add('tabs-content--active');
        }
    });
}

