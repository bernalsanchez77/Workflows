var gulp = require("gulp"),
    gutil = require("gulp-util");
    coffee = require("gulp-coffee");

gulp.task("log", function(){
gutil.log("esto es bueno");
});

gulp.task("coffee", function(){
	gulp.src("components/coffee/tagline.coffee")
	.pipe(coffee({bare: true})
      .on("error",gutil.log))
	.pipe(gulp.dest("components/scripts"))
})