javascript:(function() {
	
var pattern = new RegExp("_aid-");
var pattern_login = new RegExp("imgs");

var website_links = document.getElementsByTagName("a"); 
var new_link = "";

for (var i = 0; i < website_links.length; i++) { 

	var link = website_links[i].getAttribute("href").split("?")[0];

	if (link.match(pattern)) { 
		website_links[i].setAttribute("href", link + "?utm_medium=instant-message");
		new_link = link + "?utm_medium=instant-message";		
	} else if (link.match(pattern_login) && !window.location.href.includes("instant-message")) {
		document.getElementsByClassName("park-article__headline")[0].innerHTML = "Click on Image to decrypt!";
		document.getElementsByClassName("park-article__headline")[0].style.backgroundColor = "red";
		document.getElementsByClassName("park-article__headline")[0].style.color = "white";
		website_links[i].setAttribute("href", window.location.href.split("?")[0] + "?utm_medium=instant-message");
		website_links[i].removeAttribute("target");		
	}
}
}
)();
