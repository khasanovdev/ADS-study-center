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
		sliderIndicators = document.querySelector(".courses-slider-indicator"),
		carouseIndicators = document.querySelector(".carouse-slider-indicator"),
		coursesWrapper = document.querySelector(".courses-wrapper"),
		carouseWrapper = document.querySelector(".carouse-wrapper"),
		carouseSlider = document.querySelectorAll(".itemlar"),
		carouseItem = document.querySelectorAll(".carouse-items");

	let playCourses,
		playCarouse,
		slideIndex = 1,
		dotsOne = [],
		dotsTwo = [],
		offset = 0,
		onset = 0,
		cont = 1,
		coursesItemWidth = window.getComputedStyle(carouseSlider[0]).width,
		carouseItemWidth = window.getComputedStyle(carouseItem[0]).width;

	let courses = () => {
		playCourses = setInterval(function () {
			if (
				onset ==
				parseFloat(coursesItemWidth) * (carouseSlider.length - 3)
			) {
				onset = 0;
				slideIndex = 1;
			} else {
				onset += parseFloat(coursesItemWidth);
				slideIndex++;
			}
			coursesWrapper.style.transform = ` translateX( -${onset}px ) `;
			dotsOne.forEach((slide) => (slide.style.opacity = "0.5"));
			dotsOne[slideIndex - 1].style.opacity = 1;
		}, 5000);
	};
	courses();
	//stop the image slider autoplay on mouseover
	coursesContent.addEventListener("mouseover", () => {
		clearInterval(playCourses);
	});
	//start the image slider autoplay again on mouseout
	coursesContent.addEventListener("mouseout", () => {
		courses();
	});

	for (let i = 0; i < carouseSlider.length - 2; i++) {
		const dot = document.createElement("li");
		dot.setAttribute("data-slide-to", i + 1);
		dot.classList.add("pass");
		sliderIndicators.append(dot);
		if (i == 0) {
			dot.style.opacity = 1;
		}
		dotsOne.push(dot);
	}
///////////////////////////////////////////////////////////////////////////////////////////////////////////
	let carouse = () => {
		playCarouse = setInterval(function () {
			if (
				offset ==
				parseFloat(carouseItemWidth) * (carouseItem.length - 1)
			) {
				offset = 0;
				cont = 1;
			} else {
				offset += parseFloat(carouseItemWidth);
				cont++;
			}
			carouseWrapper.style.transform = ` translateX( -${offset}px ) `;
			dotsTwo.forEach((slide) => (slide.style.opacity = "0.5"));
			dotsTwo[cont - 1].style.opacity = 1;
		}, 5000);
	};
	carouse();
	//stop the image slider autoplay on mouseover
	carouseWrapper.addEventListener("mouseover", () => {
		clearInterval(playCarouse);
	});
	//start the image slider autoplay again on mouseout
	carouseWrapper.addEventListener("mouseout", () => {
		carouse();
	});

	for (let i = 0; i < carouseItem.length; i++) {
		const dotCarouse = document.createElement("li");
		dotCarouse.setAttribute("data-slide-to", i + 1);
		dotCarouse.classList.add("pass");
		carouseIndicators.append(dotCarouse);
		if (i == 0) {
			dotCarouse.style.opacity = 1;
		}
		dotsTwo.push(dotCarouse);
	}
});
