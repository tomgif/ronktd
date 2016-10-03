'use strict';

function initMap() {
	var rsnttd = {lat: 55.7225013, lng: 37.5608125};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 15,
		center: rsnttd
	});
	var marker = new google.maps.Marker({
		position: rsnttd,
		map: map
	});
}

var rsnttd = {
	init: function () {
		var menuToggle = document.querySelector('.js-menu-toggle');
		menuToggle.addEventListener("click", rsnttd.toggleMenu);
	},
	toggleMenu: function () {
		document.querySelector('.js-menu').classList.toggle('is-shown');
	}
};

document.addEventListener("DOMContentLoaded", rsnttd.init)