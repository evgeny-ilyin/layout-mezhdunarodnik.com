import * as fn from "./modules/functions.js";
import * as sw from "./modules/swiper.js";
import * as sl from "./modules/form-custom-select.js";
import * as form from "./modules/form-submit.js";
import { globalForm } from "./modules/form-submit.js";
// import { useDynamicAdapt } from "./modules/dynamicAdapt.js";

addEventListener("DOMContentLoaded", () => {
	fn.isTouchDevice();
	fn.hamburgerMenu();
	fn.subMenu();
	fn.clickAndDrag();
	fn.scrollHorisontallyByWheel();
	fn.accordion();
	fn.tabsHandler();

	sl.selectsInit();

	// sw.swiperResortsHandler();
	// sw.swiperQuotesHandler();
	// sw.swiperPressHandler();
	// sw.swiperAllianceHandler();
	// sw.swiperReferenceHandler();
	// sw.swiperMainHandler();
	sw.swipersInit();

	// fn.closeMenuHandler();
	// useDynamicAdapt();
	// fn.isWebp();
	// fn.stickyHeader();
	form.submitPrevent();
	form.maskHandler();
	Object.assign(window, { globalForm });
	globalForm.validation();
});

// import "./modules/cookies.js";
import "./modules/fancyapps.js";
