//  Created By : Tharani Gnanasegaram 

"use strict";

var timer;
const INTERVAL = 3000;
var activeLink;

$(function () {
    $("#tabs-1").tabs();
    $("#progressbar-1").progressbar({
        value: 50
    });
    $("#progressbar-2").progressbar({
        value: 70
    });
    $("#progressbar-3").progressbar({
        value: 60
    });
    $("#progressbar-4").progressbar({
        value: 20
    });
});


const clearPrompts = () => {
    $(".control").each((n, control) => {
        $(control).next().text("");
    });
}

$(document).ready(() => {

    $("#subscription_form").submit((evt) => {
        console.log("Hii3");
        clearPrompts();
        var isValid = true;
        $(".control").each((n, control) => {
            console.log("Hii333");
            var val = $(control).val().trim();
            if (val == "") {
                console.log("Hii3444");
                $(control).next().text("This field can't be empty");
                isValid = false;
            } else {
                $(control).val(val);
            }
        });

        if (!isValid) {
            evt.preventDefault();
        }
        else{
            alert("Subscription Successfully Created!");
        }
        
    });
});

$(function () {
    $(document).tooltip();
});

$(function () {
    var availableTags = [
        "Spring",
        "Summer",
        "Autumn",
        "Winter"
    ];
    $("#season").autocomplete({
        source: availableTags
    });
});


var stopSlide = () => clearInterval(timer);

const startSlide = () => {

    timer = setInterval(() => {
        if (activeLink.parentNode.nextElementSibling == null) {
            document.querySelectorAll("#container a")[0].click();
        }
        else {
            activeLink.parentNode.nextElementSibling.firstChild.click();
        }

    }, INTERVAL);
}

window.onload = () => {
    let anchors = document.querySelectorAll("#container a");

    for (let a of anchors)
        (new Image()).src = a.href;
    for (let a of anchors) {
        a.onclick = (evt) => {
            document.querySelectorAll("#image")[0].src = a.href;
            evt.preventDefault();
            stopSlide();
            activeLink = a;
            startSlide();
        }
    }
    anchors[0].click();
}