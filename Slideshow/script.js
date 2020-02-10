//Get the dots and put them into an array
var dots = document.getElementsByClassName('dot');

//Get the previous button
var prev = document.getElementsByClassName('fa-chevron-circle-left')[0];

//Get the next button
var next = document.getElementsByClassName('fa-chevron-circle-right')[0];

//Add counter
var i = 0;

//Add string of images
var myImages = ['img0.jpg', 'img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg', 'img5.jpg', 'img6.jpg'];

//Listen for click on Next
next.addEventListener('click', nextImage);

//Listen for click on Prev
prev.addEventListener('click', prevImage);

//Listen for click on Dots
dots[0].addEventListener('click', dotImage0);
dots[1].addEventListener('click', dotImage1);
dots[2].addEventListener('click', dotImage2);
dots[3].addEventListener('click', dotImage3);
dots[4].addEventListener('click', dotImage4);
dots[5].addEventListener('click', dotImage5);
dots[6].addEventListener('click', dotImage6);

//function for Next
function nextImage() {
    i++;
    if (i > myImages.length - 1) {
        i = 0;
    };
    document.getElementById('image').src = myImages[i];
    dots[i].setAttribute('class', 'dot activeDot');
    //the error is caused whenever browser tries to assign something to the negative (unexisting) array element 
    //if-else function helps to prevent it
    if (i > 0) {
        dots[i - 1].setAttribute('class', 'dot');
    } else {
        dots[dots.length - 1].setAttribute('class', 'dot');
    };
};

//function for Prev
function prevImage() {
    i--;
    if (i < 0) {
        i = myImages.length - 1;
    };
    document.getElementById('image').src = myImages[i];
    dots[i].setAttribute('class', 'dot activeDot');
    //same thing here
    if (i == myImages.length - 1) {
        dots[0].setAttribute('class', 'dot');
    } else {
        dots[i + 1].setAttribute('class', 'dot');
    };
};

//functions for dots click
//Not the best ones, but I dunno how to make them better ¯\(°_o)/¯
//yet, hopefully
function dotImage0() {
    dots[0].setAttribute('class', 'dot activeDot');
    dots[1].setAttribute('class', 'dot');
    dots[2].setAttribute('class', 'dot');
    dots[3].setAttribute('class', 'dot');
    dots[4].setAttribute('class', 'dot');
    dots[5].setAttribute('class', 'dot');
    dots[6].setAttribute('class', 'dot');
    document.getElementById('image').src = ('img0.jpg');
    i = 0;
};

function dotImage1() {
    dots[1].setAttribute('class', 'dot activeDot');
    dots[0].setAttribute('class', 'dot');
    dots[2].setAttribute('class', 'dot');
    dots[3].setAttribute('class', 'dot');
    dots[4].setAttribute('class', 'dot');
    dots[5].setAttribute('class', 'dot');
    dots[6].setAttribute('class', 'dot');
    document.getElementById('image').src = ('img1.jpg');
    i = 1;
};

function dotImage2() {
    dots[2].setAttribute('class', 'dot activeDot');
    dots[0].setAttribute('class', 'dot');
    dots[1].setAttribute('class', 'dot');
    dots[3].setAttribute('class', 'dot');
    dots[4].setAttribute('class', 'dot');
    dots[5].setAttribute('class', 'dot');
    dots[6].setAttribute('class', 'dot');
    document.getElementById('image').src = ('img2.jpg');
    i = 2;
};

function dotImage3() {
    dots[3].setAttribute('class', 'dot activeDot');
    dots[0].setAttribute('class', 'dot');
    dots[1].setAttribute('class', 'dot');
    dots[2].setAttribute('class', 'dot');
    dots[4].setAttribute('class', 'dot');
    dots[5].setAttribute('class', 'dot');
    dots[6].setAttribute('class', 'dot');
    document.getElementById('image').src = ('img3.jpg');
    i = 3;
};

function dotImage4() {
    dots[4].setAttribute('class', 'dot activeDot');
    dots[0].setAttribute('class', 'dot');
    dots[1].setAttribute('class', 'dot');
    dots[2].setAttribute('class', 'dot');
    dots[3].setAttribute('class', 'dot');
    dots[5].setAttribute('class', 'dot');
    dots[6].setAttribute('class', 'dot');
    document.getElementById('image').src = ('img4.jpg');
    i = 4;
};

function dotImage5() {
    dots[5].setAttribute('class', 'dot activeDot');
    dots[0].setAttribute('class', 'dot');
    dots[1].setAttribute('class', 'dot');
    dots[2].setAttribute('class', 'dot');
    dots[3].setAttribute('class', 'dot');
    dots[4].setAttribute('class', 'dot');
    dots[6].setAttribute('class', 'dot');
    document.getElementById('image').src = ('img5.jpg');
    i = 5;
};

function dotImage6() {
    dots[6].setAttribute('class', 'dot activeDot');
    dots[0].setAttribute('class', 'dot');
    dots[1].setAttribute('class', 'dot');
    dots[2].setAttribute('class', 'dot');
    dots[3].setAttribute('class', 'dot');
    dots[4].setAttribute('class', 'dot');
    dots[5].setAttribute('class', 'dot');
    document.getElementById('image').src = ('img6.jpg');
    i = 6;
};