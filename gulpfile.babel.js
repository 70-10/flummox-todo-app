var gulp = require('gulp');
var $ = require("gulp-load-plugins")();
var watchify = require('watchify');
var browserify = require('browserify');
var assign = require("lodash.assign");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var del = require('del');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var runSequence = require('run-sequence');

let customOptions = {
  entries: ["./src/main.jsx"],
  debug: true,
  transform: [
    ["babelify", { "loose": ["es6.classes"]}]
  ]
};

let options = assign({}, watchify.args, customOptions);
let build = watchify(browserify(options));

let bundle = () => {
  return build.bundle()
              .on("error", $.util.log.bind($.util, "Browserify Error"))
              .pipe(source("bundle.js"))
              .pipe(buffer())
              .pipe($.sourcemaps.init({loadMaps: true}))
              .pipe($.sourcemaps.write("./"))
              .pipe(gulp.dest("./dist"))
              .pipe(reload({stream: true}));
};

gulp.task("build", bundle);
build.on("update", bundle);
build.on("log", $.util.log);

gulp.task("clean", del.bind(null, ["dist/*", "!dist/.git"], {dot: true}));

gulp.task("serve", ["browser", "build"], () => {
});

gulp.task("browser", [], () => {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  });
});
