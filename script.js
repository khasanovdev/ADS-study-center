"use strict";

document.addEventListener("DOMContentLoaded", () => {
	// SCROLL BUTTON
	const scrollBtn = document.querySelector(".scrollTop");
	window.addEventListener("scroll", () => {
		scrollBtn.classList.toggle("activ", window.scrollY > 500);
	});

	// MENU BUTTON HAMBURGER
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

	//  SLIDERS

	const coursesContent = document.querySelector(".courses-content"),
		coursesWrapper = document.querySelector(".courses-wrapper"),
		carouseWrapper = document.querySelector(".carouse-wrapper"),
		carouseSlider = document.querySelectorAll(".itemlar"),
		carouseItem = document.querySelectorAll(".carouse-items"),
		pass = document.querySelectorAll(".pass");

	let offset = 0,
		onset = 0,
		coursesItemWidth = window.getComputedStyle(carouseSlider[0]).width,
		carouseItemWidth = window.getComputedStyle(carouseItem[0]).width;

	function courses() {
		setInterval(() => {
			if (
				onset ==
				parseFloat(coursesItemWidth) * (carouseSlider.length - 3)
			) {
				onset = 0;
			} else {
				onset += parseFloat(coursesItemWidth);
			}
			coursesWrapper.style.transform = ` translateX( -${onset}px ) `;
		}, 3000);
	}
	courses();
	function carouse() {
		setInterval(() => {
			if (
				offset ==
				parseFloat(carouseItemWidth) * (carouseItem.length - 1)
			) {
				offset = 0;
			} else {
				offset += parseFloat(carouseItemWidth);
			}
			carouseWrapper.style.transform = ` translateX( -${offset}px ) `;
		}, 3000);
	}
	carouse();

	coursesContent.addEventListener("mouseenter", () => {
		clearInterval(courses())
	})

	// for (let i = 0; i < pass.length; i++) {
	// 	pass[i].setAttribute("data-slide-to", i + 1);
	// 	if (i == 0) {
	// 		pass[i].style.opacity = 1;
	// 	}
	// }
});
