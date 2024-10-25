/**
 * Копировать favicon в build
 */
import { existsSync } from "node:fs";
import path from "node:path";

export const favicons = (cb) => {
	cb();
	return copyLegacyFavicon(), copyModernFavicons();
};

function copyLegacyFavicon(cb) {
	if (existsSync(app.path.src.faviconLegacy)) {
		console.log("Legacy favicon.ico copied");
		return app.gulp.src(app.path.src.faviconLegacy, { encoding: false }).pipe(app.gulp.dest(app.path.build.faviconLegacy));
	} else {
		console.log("Legacy favicon.ico NOT exists");
	}
}

function copyModernFavicons(cb) {
	if (existsSync(path.dirname(app.path.src.faviconsModern))) {
		console.log("Modern favicons copied");
		return app.gulp.src(app.path.src.faviconsModern, { encoding: false }).pipe(app.gulp.dest(app.path.build.faviconsModern));
	} else {
		console.log("Modern favicons NOT exists");
	}
}
