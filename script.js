"use strict";

document.addEventListener("DOMContentLoaded", () => {
	// SCROLL BUTTON
	const scrollBtn = document.querySelector(".scrollTop");
	window.addEventListener("scroll", () => {
		scrollBtn.classList.toggle("activ", window.scrollY > 500);
	});

	// MENU BUTTON HAMBURGER
	function menuBtn() {
		const hamburger = document.querySelector(".hamburger"),
			menuContent = document.querySelector(".menu-content"),
			btnGroup = document.querySelectorAll(".btn-group");

		hamburger.addEventListener("click", () => {
			btnGroup.forEach((item) => {
				item.classList.toggle("d-none");
			});
			menuContent.classList.toggle("menu-content-close");
		});

		const links = document.querySelectorAll(".dropdown-toggle"), // knopkalar
			linkItems = document.querySelector(".navbar-item"); // knopkani otasi

		function hideLink() {
			links.forEach((item) => {
				item.classList.remove("link_active");
			});
		}
		function showLink(i = 0) {
			links[i].classList.add("link_active");
		}
		hideLink();
		showLink();

		linkItems.addEventListener("click", (e) => {
			console.log(1);
			if (e.target && e.target.classList.contains("dropdown-toggle")) {
				links.forEach((item, i) => {
					if (e.target == item) {
						hideLink();
						showLink(i);
					}
				});
			}
		});
	}
	menuBtn();

	//   MODAL WINDOW
	function modalWindow() {
		let url = $("#Geeks3").attr("src");
		$("#Geeks2").on("hide.bs.modal", function () {
			$("#Geeks3").attr("src", "");
		});
		$("#Geeks2").on("show.bs.modal", function () {
			$("#Geeks3").attr("src", url);
		});
	}
	modalWindow();


});
