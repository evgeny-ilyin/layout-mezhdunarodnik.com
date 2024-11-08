import * as fn from "./modules/functions.js";
import * as sw from "./modules/swiper.js";
// import { useDynamicAdapt } from "./modules/dynamicAdapt.js";

addEventListener("DOMContentLoaded", () => {
	fn.isTouchDevice();
	fn.hamburgerMenu();
	fn.clickAndDrag();
	fn.scrollHorisontallyByWheel();
	fn.accordion();
	fn.tabsHandler();
	
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
});

// import "./modules/cookies.js";
// import "./modules/fancyapps.js";
