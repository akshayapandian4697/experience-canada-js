"use strict"
var $ = function(id) { return document.getElementById(id); };


var select = document.querySelector("select");
var data = document.querySelector("h2");
var data=document.querySelector("h3")
var image=document.querySelector("img");
var button=document.querySelector("button");

select.addEventListener("change", function() {
 data.innerHTML= "A emotional brew that combines the sweetness of summer's end with the bittersweet beginning of fall is called for by the crispness of fall. ";
 
});

button.addEventListener("click",function(){
    data.innerHTML='A emotional brew that combines the sweetness of summers end with the bittersweet beginning of fall is called for by the crispness of fall.Bring on the hard cider! Its not surprising that hard cider has become more popular over time given that apple cider is the official state drink of New Hampshire. This fall, why not check out the states local cideries, visiting cider mills and tasting rooms tucked away in picturesque apple orchards, or just picking up a bottle of NH-produced cider at one of the many outlets spread around the state to enjoy wherever you are?'
});