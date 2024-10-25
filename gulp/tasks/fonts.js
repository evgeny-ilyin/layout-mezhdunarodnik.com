/**
 * Копировать шрифты в build
 */
import { existsSync } from "node:fs";
import path from "node:path";

export const fonts = (cb) => {
	cb();

	if (existsSync(path.dirname(app.path.src.fonts))) {
		console.log("Fonts copied");
		return app.gulp.src(app.path.src.fonts, { encoding: false }).pipe(app.gulp.dest(app.path.build.fonts));
	} else {
		console.log("Fonts NOT exists");
	}
};
