/* Проверка поддержки webp браузером */
export function isWebp() {
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	testWebP(function (support) {
		if (support == true) {
			document.querySelector("body").classList.add("webp");
		} else {
			document.querySelector("body").classList.add("no-webp");
		}
	});
}

/* Проверка на тач девайс */
export function isTouchDevice() {
	const touchClass = "is-touch";
	["load", "resize"].forEach((evt) =>
		window.addEventListener(evt, () => {
			let isTouch = false;
			if ((window.PointerEvent && "maxTouchPoints" in navigator) || (window.PointerEvent && "msMaxTouchPoints" in navigator)) {
				// if Pointer Events are supported, just check maxTouchPoints
				if (navigator.maxTouchPoints > 0) {
					isTouch = true;
				}
			} else {
				// no Pointer Events
				if (window.matchMedia && window.matchMedia("(any-pointer:coarse)").matches) {
					// check for any-pointer:coarse which mostly means touchscreen
					isTouch = true;
				} else if (window.TouchEvent || "ontouchstart" in window) {
					// last resort - check for exposed touch events API / event handler
					isTouch = true;
				}
			}
			document.body.classList[isTouch ? "add" : "remove"](touchClass);
		})
	);
}

export function stickyHeader() {
	const header = document.querySelector("header");

	let handleScroll = () => {
		if (window.scrollY > 0) {
			header.classList.add("header_fixed");
		} else {
			header.classList.remove("header_fixed");
		}
	};
	window.addEventListener("scroll", handleScroll);
	handleScroll();
}

// export function closeMenuHandler() {
// 	const menuToggler = document.getElementById("menu-toggle"),
// 		menuWrapper = document.querySelector(".menu-wrapper"),
// 		linkClassName = "nav__link";
// 	if (!menuToggler || !menuWrapper) return;
// 	document.addEventListener("click", (e) => {
// 		console.log(e.target);
// 		if (menuToggler.checked) {
// 			if (!menuWrapper.contains(e.target) || e.target.classList.contains(linkClassName)) {
// 				menuToggler.click();
// 			}
// 		}
// 	});
// }

export function hamburgerMenu() {
	const menuButton = document.getElementById("menu-toggle"),
		menuWrapper = document.querySelector(".header__nav"),
		activeClass = "is-active";

	document.addEventListener("click", (e) => {
		if (!menuWrapper.contains(e.target) && !e.target.closest(".hamburger-box") && menuButton.checked) {
			menuButton.click();
		}
	});

	menuButton.addEventListener("change", () => {
		menuWrapper.classList.toggle(activeClass);
	});
}

export function subMenu() {
	const menuButton = document.querySelector(".submenu-toggle"),
		menuWrapper = document.querySelector(".header-subnav-inner__list"),
		activeClass = "is-active";

	if (!menuButton) return;

	document.addEventListener("click", (e) => {
		if (!menuWrapper.contains(e.target) && !e.target.closest(".submenu-toggle") && menuButton.classList.contains(activeClass)) {
			menuButton.click();
		}
	});

	menuButton.addEventListener("click", () => {
		menuButton.classList.toggle(activeClass);
		menuWrapper.classList.toggle(activeClass);
	});
}

export function clickAndDrag() {
	document.addEventListener("mousedown", (e) => {
		const scroll_speed = 1.5,
			draggableClass = "js-draggable",
			draggingClass = "js-dragging", // flag for other functions
			el = e.target.closest(`.${draggableClass}`);

		if (!el) return;

		let isDown = false,
			startX,
			scrollLeft;

		e.preventDefault();

		isDown = true;
		startX = e.pageX - el.offsetLeft;
		scrollLeft = el.scrollLeft;

		// prevent default child behavior
		document.addEventListener("click", function (e) {
			if (el.contains(e.target)) {
				if (el.classList.contains(draggingClass)) {
					// оставляем возможность клика ссылок
					e.preventDefault();
				}
			}
		});

		el.addEventListener("mouseleave", () => {
			isDown = false;
		});

		el.addEventListener("mouseup", () => {
			isDown = false;

			// remove the dragging class after a short delay to prevent other click events
			setTimeout(() => {
				el.classList.remove(draggingClass);
			}, 250);
		});

		el.addEventListener("mousemove", (e) => {
			if (!isDown) return;
			e.preventDefault();
			const x = e.pageX - el.offsetLeft,
				walk = (x - startX) * scroll_speed; // scroll fast
			el.scrollLeft = scrollLeft - walk;

			if (scrollLeft !== el.scrollLeft) {
				el.classList.add(draggingClass);
			}
		});
	});
}

export function scrollHorisontallyByWheel() {
	const elements = document.querySelectorAll(".js-wheel-scroll-x");
	elements.forEach((el) => {
		el.addEventListener("wheel", (event) => {
			event.preventDefault();
			el.scrollBy({
				left: event.deltaY < 0 ? -200 : 200,
			});
		});
	});
}

export function accordion() {
	const triggers = document.querySelectorAll(".js-accordion__trigger"),
		isOpenedClass = "is-opened",
		isEnabledClass = "on";
	triggers.forEach((trigger) => {
		const accordionParent = trigger.parentElement,
			accordionContent = trigger.nextElementSibling;
		trigger.addEventListener("click", () => {
			if (accordionParent.classList.contains(isEnabledClass)) {
				accordionParent.classList.toggle(isOpenedClass);
				if (accordionContent.style.maxHeight) {
					accordionContent.style.maxHeight = null;
				} else {
					accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
				}
			}
		});

		["load", "resize"].forEach((evt) =>
			window.addEventListener(evt, () => {
				if (accordionContent.style.maxHeight) {
					accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
				}
			})
		);
	});
}

export function tabsHandler() {
	const triggers = document.querySelectorAll(".js-tab"),
		isActiveClass = "is-active";
	if (!triggers) return;
	triggers.forEach((trigger, index) => {
		trigger.addEventListener("click", () => {
			const parent = trigger.parentElement;
			parent.querySelector(`.${isActiveClass}`).classList.remove(isActiveClass);
			trigger.classList.add(isActiveClass);

			triggers.forEach((el, indexZ) => {
				el.style.zIndex = indexZ <= index ? 5 : "";
			});
		});
	});
}
