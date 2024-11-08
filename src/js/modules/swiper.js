import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// init swiper-resorts Swiper
// export function swiperResortsHandler() {
// 	let swiperResorts;
// 	swiperResorts = new Swiper(".swiper-resorts .swiper", {
// 		modules: [Navigation],
// 		slidesPerView: 2.5,
// 		slidesPerGroup: 1,
// 		spaceBetween: 20,
// 		slideToClickedSlide: false,
// 		breakpoints: {
// 			577: {
// 				slidesPerView: 3.5,
// 				spaceBetween: 40,
// 			},
// 			768: {
// 				slidesPerView: 4.5,
// 				spaceBetween: 40,
// 			},
// 			1024: {
// 				slidesPerView: 4.5,
// 				spaceBetween: 60,
// 			},
// 			1280: {
// 				slidesPerView: 5,
// 				spaceBetween: 80,
// 				navigation: {
// 					nextEl: ".swiper-resorts .swiper-button-next",
// 					prevEl: ".swiper-resorts .swiper-button-prev",
// 				},
// 			},
// 		},
// 	});

// 	const resortLinks = document.querySelectorAll(".js-resort"),
// 		resortsSwiper = document.querySelector(".swiper-resorts"),
// 		commonDesc = document.querySelector(`[data-resort="common"]`),
// 		isActiveClass = "is-active";

// 	// set active common description on page load
// 	if (commonDesc) commonDesc.classList.add(isActiveClass);

// 	resortLinks.forEach((link) => {
// 		link.addEventListener("click", (e) => {
// 			let resort = e.target.closest(".js-resort");
// 			if (!resort) return;
// 			resortHandler(resort);
// 		});
// 	});

// 	let getSlideIndex = (slide) => {
// 		let slides = resortsSwiper.querySelectorAll(".swiper-slide");
// 		for (let i = 0; i < slides.length; i++) {
// 			if (slides[i] === slide) {
// 				return i;
// 			}
// 		}
// 	};

// 	let deactivateAll = () => {
// 		const isActive = document.querySelectorAll(`.js-resort.${isActiveClass}, .description .${isActiveClass}`);

// 		if (isActive.length > 0) {
// 			isActive.forEach((e) => {
// 				e.classList.remove(isActiveClass);
// 				// console.log(e.dataset.resort);
// 			});
// 			commonDesc.classList.add(isActiveClass);
// 		}
// 	};

// 	let setActive = (id) => {
// 		const target = id.dataset.resort;
// 		if (!target) return;

// 		commonDesc.classList.remove(isActiveClass);
// 		resortsSwiper.classList.add(isActiveClass);

// 		const element = document.querySelectorAll(`[data-resort="${target}"]`);
// 		element.forEach((el) => {
// 			el.classList.add(isActiveClass);

// 			let slide = el.closest(".swiper-slide");
// 			if (!slide) return;
// 			swiperResorts.slideTo(getSlideIndex(slide));
// 		});
// 	};

// 	let resortHandler = (id) => {
// 		/**
// 		 * если уже активно - отключить все, показать календарь
// 		 * если не активно - отключить все, активировать нажатое, сделать fetch, обновить слой с данными
// 		 */

// 		if (id.classList.contains(isActiveClass)) {
// 			resortsSwiper.classList.remove(isActiveClass);
// 			deactivateAll();
// 			// showCalendar();
// 			return;
// 		}

// 		deactivateAll();
// 		setActive(id);
// 	};
// }

// // init swiper-press Swiper
// export function swiperPressHandler() {
// 	let swiperPress;
// 	swiperPress = new Swiper(".swiper-press", {
// 		modules: [Pagination],
// 		slidesPerView: 1.5,
// 		slidesPerGroup: 1,
// 		spaceBetween: 20,
// 		breakpoints: {
// 			577: {
// 				slidesPerView: 2.5,
// 				slidesPerGroup: 2,
// 			},
// 			1024: {
// 				slidesPerView: 3.5,
// 				slidesPerGroup: 2,
// 			},
// 			1280: {
// 				slidesPerView: 4,
// 				slidesPerGroup: 2,
// 			},
// 		},
// 		pagination: {
// 			el: ".swiper-press .swiper-pagination",
// 			clickable: true,
// 		},
// 	});
// }

// // init swiper-quotes Swiper
// export function swiperQuotesHandler() {
// 	let swiperQuotes;
// 	swiperQuotes = new Swiper(".swiper-quotes", {
// 		modules: [Pagination, Autoplay],
// 		slidesPerView: 1,
// 		spaceBetween: 60,
// 		pagination: {
// 			el: ".swiper-quotes .swiper-pagination",
// 			clickable: true,
// 		},
// 		autoplay: {
// 			delay: 5000,
// 			pauseOnMouseEnter: true,
// 		},
// 	});
// }

// // init swiper-alliance Swiper
// export function swiperAllianceHandler() {
// 	let swiperAlliance;
// 	swiperAlliance = new Swiper(".swiper-alliance .swiper", {
// 		modules: [Pagination, Navigation, Autoplay],
// 		slidesPerView: 1,
// 		spaceBetween: 10,
// 		pagination: {
// 			el: ".swiper-alliance .swiper-pagination",
// 			clickable: true,
// 		},
// 		navigation: {
// 			nextEl: ".swiper-alliance .swiper-button-next",
// 			prevEl: ".swiper-alliance .swiper-button-prev",
// 		},
// 		autoplay: {
// 			delay: 3000,
// 			pauseOnMouseEnter: true,
// 		},
// 	});
// }

// // init swiper-reference Swiper
// export function swiperReferenceHandler() {
// 	const swiperReference = document.querySelectorAll(".swiper-reference");

// 	swiperReference.forEach((el) => {
// 		let swiper = el.querySelector(".swiper"),
// 			next = el.querySelector(".swiper-button-next"),
// 			prev = el.querySelector(".swiper-button-prev"),
// 			pagination = el.querySelector(".swiper-pagination");

// 		new Swiper(swiper, {
// 			modules: [Pagination, Navigation],
// 			slidesPerView: 1,
// 			spaceBetween: 10,
// 			loop: true,
// 			pagination: {
// 				el: pagination,
// 				type: "bullets",
// 				clickable: true,
// 			},
// 			navigation: {
// 				enabled: false,
// 				nextEl: next,
// 				prevEl: prev,
// 			},
// 			breakpoints: {
// 				1024: {
// 					slidesPerView: 2,
// 					allowTouchMove: false,
// 					pagination: {
// 						el: pagination,
// 						type: "fraction",
// 					},
// 					navigation: {
// 						enabled: true,
// 					},
// 				},
// 			},
// 		});
// 	});
// }

// // init swiper-main Swiper
// export function swiperMainHandler() {
// 	const swiperMain = document.querySelectorAll(".swiper-about");

// 	swiperMain.forEach((el) => {
// 		let swiper = el.querySelector(".swiper"),
// 			next = el.querySelector(".swiper-button-next"),
// 			prev = el.querySelector(".swiper-button-prev"),
// 			pagination = el.querySelector(".swiper-pagination");

// 		new Swiper(swiper, {
// 			modules: [Pagination, Navigation],
// 			slidesPerView: 1,
// 			spaceBetween: 10,
// 			loop: true,
// 			pagination: {
// 				el: pagination,
// 				type: "bullets",
// 				clickable: true,
// 			},
// 			navigation: {
// 				enabled: false,
// 				nextEl: next,
// 				prevEl: prev,
// 			},
// 			breakpoints: {
// 				1024: {
// 					slidesPerView: 2,
// 					allowTouchMove: false,
// 					pagination: {
// 						el: pagination,
// 						type: "fraction",
// 					},
// 					navigation: {
// 						enabled: true,
// 					},
// 				},
// 				1280: {
// 					slidesPerView: 3,
// 					allowTouchMove: false,
// 					pagination: {
// 						el: pagination,
// 						type: "fraction",
// 					},
// 					navigation: {
// 						enabled: true,
// 					},
// 				},
// 			},
// 		});
// 	});
// }

export function swipersInit() {
	const swiperSimple = document.querySelectorAll(".swiper-simple");

	swiperSimple.forEach((el) => {
		let swiper = el.querySelector(".swiper"),
			pagination = el.querySelector(".swiper-pagination");

		new Swiper(swiper, {
			modules: [Pagination],
			slidesPerView: 1.2,
			slidesPerGroup: 1,
			spaceBetween: 20,
			loop: false,
			centeredSlides: true,
			centeredSlidesBounds: true,
			pagination: {
				enabled: false,
				el: pagination,
				type: "bullets",
				clickable: true,
			},
			breakpoints: {
				768: {
					slidesPerView: 1.5,
					pagination: {
						enabled: false,
					},
				},
				1024: {
					slidesPerView: 2.3,
					centeredSlides: false,
					pagination: {
						enabled: false,
					},
				},
				1280: {
					slidesPerView: 3,
					slidesPerGroup: 3,
					spaceBetween: 24,
					centeredSlides: false,
					pagination: {
						enabled: true,
					},
				},
			},
		});
	});

	const swiperTop = document.querySelectorAll(".swiper-top");

	swiperTop.forEach((el) => {
		let swiper = el.querySelector(".swiper"),
			pagination = el.querySelector(".swiper-pagination");

		new Swiper(swiper, {
			modules: [Pagination],
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 20,
			loop: true,
			pagination: {
				enabled: true,
				el: pagination,
				type: "bullets",
				clickable: true,
			},
		});
	});
}
