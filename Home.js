"use strict";
var $ = s => { return document.querySelectorAll(s); };

var timer;
const INTERVAL = 5000;
var activeLink;

var stopSlide = () => clearInterval(timer);

const startSlide = () => {
    timer = setInterval(() => {
        if (activeLink.parentNode.nextElementSibling == null) {
            $("a")[0].click();
        }
        else {
            activeLink.parentNode.nextElementSibling.firstChild.click();
        }

    }, INTERVAL);
}

window.onload = () => {
    let anchors = $("main a");

    for (let a of anchors)
        (new Image()).src = a.href;
    for (let a of anchors) {
        a.onclick = (evt) => {
            $("#image")[0].src = a.href;
            evt.preventDefault();
            stopSlide();
            activeLink = a;
            startSlide();
        }
    }
    anchors[0].click();
}