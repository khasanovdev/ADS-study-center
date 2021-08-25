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

	//  EVENTS WITH CONSTRUCTOR START
	class LatestEvents {
		constructor(
			imgLink,
			imgSrc,
			imgAlt,
			eventNameLink,
			eventName,
			eventDate,
			eventCaption,
			parentSelector,
			...classes
		) {
			this.imgLink = imgLink;
			this.imgSrc = imgSrc;
			this.imgAlt = imgAlt;
			this.eventNameLink = eventNameLink;
			this.eventName = eventName;
			this.eventDate = eventDate;
			this.eventCaption = eventCaption;
			this.parent = document.querySelector(parentSelector);
			this.classes = classes;
		}

		render() {
			const element = document.createElement("div");
			element.classList.add("col-md-4");
			element.classList.add("mt-5");

			element.innerHTML = `
				<div class="events-item">
					<div class="event-img">
						<a href=${this.imgLink}><img src=${this.imgSrc} alt=${this.imgAlt}></a>
					</div>
					<div class="event-name">
						<h3><a href=${this.eventNameLink}>${this.eventName}</a></h3>
					</div>
					<div class="event-date"><p>${this.eventDate}</p></div>
					<div class="event-caption"><p>${this.eventCaption}</p></div>
					<div class="event-read-more"><a href="#">Read More</a></div>
				</div>
			`;
			this.parent.append(element);
		}
	}
	new LatestEvents(
		"#",
		"./images/event-5.jpg",
		"...",
		"#",
		"Kiberiada 2018",
		"Event was held on 8 December 2018",
		`Cyber sports by ADC - Counter Strike, C++ Programming, Touch Typing,
		Video Editing, Rubik's Cube, Chess.`,
		" .events-content .events-wrapper"
	).render();
	new LatestEvents(
		"#",
		"./images/event-4.jpg",
		"...",
		"#",
		"Kids new year 2017",
		"Event was held on 24 December 2017",
		`Wonderful new year - kids and lots of amusement, happiness and joy. ADC
		Hotel branch gives warmness to our hearts once more.`,
		".events-content .events-wrapper"
	).render();
	new LatestEvents(
		"#",
		"./images/event-2.jpg",
		"...",
		"#",
		"Impromptu speech contest",
		"Event was held on 23 August 2017",
		`Make an outstanding speech and win the super prize! Requirements: Upper
		Intermediate, Advanced level students`,
		".events-content .events-wrapper"
	).render();
	//  EVENTS WITH CONSTRUCTOR END

	//  TEACHERS WITH CONSTRUCTOR START
	class Teachers {
		constructor(
			teachersSrc,
			teachersAlt,
			teachersFacebook,
			display,
			teachersMessage,
			teachersName,
			teachersExp,
			parentSelectorTeachers,
			...classes
		) {
			this.teachersSrc = teachersSrc;
			this.teachersAlt = teachersAlt;
			this.teachersFacebook = teachersFacebook;
			this.display = display;
			this.teachersMessage = teachersMessage;
			this.teachersName = teachersName;
			this.teachersExp = teachersExp;
			this.parent = document.querySelector(parentSelectorTeachers);
			this.classes = classes;
		}

		render() {
			const elementTeachers = document.createElement("div");

			elementTeachers.classList.add("col-md-3");
			elementTeachers.classList.add("col-sm-6");

			elementTeachers.innerHTML = `
				<div class="teacher-item">
					<div class="teacher-img">
						<img src=${this.teachersSrc} alt=${this.teachersAlt}>
						<div class="teacher-social">
							<a href=${this.teachersFacebook}>
								<i class="fab fa-facebook-f"></i>
							</a>
							<a class=${this.display} href=${this.teachersMessage}>
								<i class="fa fa-envelope"></i>
							</a>
						</div>
					</div>
					<div class="teacher-caption">
						<h4>${this.teachersName}</h4>
						<p>${this.teachersExp}</p>
					</div>
				</div>
				`;
			this.parent.append(elementTeachers);
		}
	}
	new Teachers(
		"./images/teacher-01.png",
		"...",
		"#",
		" ",
		"#",
		"Feruza Sakibaeva",
		"IELTS Teacher",
		" .teachers-content .teachers-wrapper"
	).render();
	new Teachers(
		"./images/teacher-02.png",
		"...",
		"#",
		" ",
		"#",
		"Alisher Alihon",
		"English teacher",
		" .teachers-content .teachers-wrapper"
	).render();
	new Teachers(
		"./images/teacher-03.png",
		"...",
		"#",
		" ",
		"#",
		"Ziyoda Askarova",
		"English Teacher",
		" .teachers-content .teachers-wrapper"
	).render();
	new Teachers(
		"./images/teacher-04.png",
		"...",
		"#",
		"d-none",
		"#",
		"Svetlana Vladimirovna",
		"Grammar teacher",
		" .teachers-content .teachers-wrapper"
	).render();
	//  TEACHERS WITH CONSTRUCTOR END

	//  FEATURES WITH CONSTRUCTOR START
	class Features {
		constructor(icon, coursesName, coursesDesc, coursesLink, parentSelectorFeatures) {
			this.icon = icon;
			this.coursesName = coursesName;
			this.coursesDesc = coursesDesc;
			this.coursesLink = coursesLink;
			this.parent = document.querySelector(parentSelectorFeatures);
		}

		render() {
			const elementFeatures = document.createElement("div");

			elementFeatures.classList.add("col-md-4");

			elementFeatures.innerHTML = `
				<div class="features-item">
					<i class=${this.icon}></i>
					<h4>${this.coursesName}</h4>
					<p>${this.coursesDesc}</p>
					<a href=${this.coursesLink}>read more</a>
				</div>
				`;
			this.parent.append(elementFeatures);
		}
	}
	new Features(
		"fas fa-book",
		"Professional Courses",
		`Adijan Development Center offers a wide range of courses for all levels,
		from standard language courses to specializend courses.`,
		"#",
		" .features-content .features-wrapper"
	).render();
	
	new Features(
		"fas fa-users",
		"Expert Teachers",
		`The teachers of our center are professionals of different ages. Learners can
		benefit from instructors that hold qualifications from well-known
		universities.`,
		"#",
		" .features-content .features-wrapper"
	).render();
	
	new Features(
		"fas fa-comment",
		"Clubs",
		`We are happy to offer not only language courses but also a wide range of
		clubs and groups for enthusiasts. Our Debate Club is open to anyone
		interested in participating.`,
		"#",
		" .features-content .features-wrapper"
	).render();
	
	new Features(
		"fas fa-university",
		"Modern library",
		`Andijan Development Center aims to encourage readership and personal
		development among learners. Our two libraries have comfortable reading rooms
		for visitors.`,
		"#",
		" .features-content .features-wrapper"
	).render();
	
	new Features(
		"fas fa-graduation-cap",
		"100+ alumni",
		`ADC has educated thousands of students who are currently studying or working
		in the USA, the UK, Japan, Australia, Europe, the UAE, China, Korea and
		other countries.`,
		"#",
		" .features-content .features-wrapper"
	).render();
	
	new Features(
		"fas fa-certificate",
		"Professional Certificate",
		`Upon successful completion, students are awarded certificates. These can be
		used as proof of proficiency for admission, scholarships or grants to study
		at overseas universities.`,
		"#",
		" .features-content .features-wrapper"
	).render();
	
	//  FEATURES WITH CONSTRUCTOR END
});
