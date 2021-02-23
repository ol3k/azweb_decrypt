javascript:(function() {
        
var pattern = new RegExp("_aid-");
var pattern_login = new RegExp("(_bid-|imgs)");

var website_links = document.getElementsByTagName("a"); 
var ads = document.getElementsByTagName("aside");
var eyediv = document.getElementById("eyeDiv");
var fullads = document.getElementsByClassName("park-fakebody")[0];
var fulladsdiv = document.getElementById("animation_container");
var fulladscanvas = document.getElementById("omsv_sky_DhtmlLayer");


var new_link = "";

for (var i = 0; i < ads.length; i++) {
		ads[i].setAttribute("style", ads[i].getAttribute("style") + "display: none;");		
}

for (var i = 0; i < website_links.length; i++) { 

        var link = website_links[i].getAttribute("href").split("?")[0];

        if (link.match(pattern)) { 
                website_links[i].setAttribute("href", link + "?utm_campaign=share&utm_medium=instant-message&utm_medium=referral&utm_source=mail");
                new_link = link + "?utm_campaign=share&utm_medium=instant-message&utm_medium=referral&utm_source=mail";                
        } else if (link.match(pattern_login) && !window.location.href.includes("instant-message")) {
                document.getElementsByClassName("park-article__headline")[0].innerHTML = "Click on Image to decrypt!";
                document.getElementsByClassName("park-article__headline")[0].style.backgroundColor = "red";
                document.getElementsByClassName("park-article__headline")[0].style.color = "white";
                website_links[i].setAttribute("href", window.location.href.split("?")[0] + "?utm_campaign=share&utm_medium=instant-message&utm_medium=referral&utm_source=mail");
                website_links[i].removeAttribute("target");             
        }
}

if (eyediv) {
	eyediv.setAttribute("style", eyediv.getAttribute("style") + "display: none;");
}

if (fullads) {
	fullads.setAttribute("style", fullads.getAttribute("style") + "background-image: none;");
}

if (fulladsdiv) {
	fulladsdiv.setAttribute("style", fulladsdiv.getAttribute("style") + "display: none;");
}

if (fulladscanvas) {
	fulladscanvas.setAttribute("style", fulladscanvas.getAttribute("style") + "display: none;");
}

}
)();
