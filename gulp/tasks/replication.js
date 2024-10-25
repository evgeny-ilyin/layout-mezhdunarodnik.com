/**
 * Копировать файлы в build
 */
import { existsSync } from "node:fs";

export const replication = (cb) => {
	cb();
	return copyFiles();
	// return app.gulp.src('.', {allowEmpty: true}); // or return empty stream
};

function copyFiles(cb) {
	let filesExists = [],
		files = ["src/humans.txt"];

	files.forEach((file) => {
		if (existsSync(file)) {
			filesExists.push(file);
		}
	});

	if (filesExists.length > 0) {
		console.log("Files copied");
		return app.gulp.src(filesExists).pipe(app.gulp.dest(app.path.build.html));
	}
}
