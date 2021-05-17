const { parallel, watch, task, src } = require('gulp');


// Pull in each task
const sass = require('./gulp-tasks/sass.js');
// const fonts = require('./gulp-tasks/fonts.js');
// const images = require('./gulp-tasks/images.js');
const ghPages = require('gulp-gh-pages');

// Set each directory and contents that we want to watch and
// assign the relevant task. `ignoreInitial` set to true will
// prevent the task being run when we run `gulp watch`, but it
// will run when a file changes.
const watcher = () => {
  watch('./src/scss/**/*.scss', { ignoreInitial: true }, sass);
  // watch('./src/images/**/*', { ignoreInitial: true }, images);
};


task('deploy', () => src('./dist/**/*').pipe(ghPages()));


// The default (if someone just runs `gulp`) is to run each task in parrallel
exports.default = parallel(sass);

// This is our watcher task that instructs gulp to watch directories and
// act accordingly
exports.watch = watcher;