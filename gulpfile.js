"use strict"
 
const Gulp      = require("gulp");
const MinifyImg = require("gulp-image");
const ImageMin  = require("gulp-imagemin");

Gulp.task("VendorImg", VendorImgCompiler);

Gulp.task('start', function() {
    Gulp.watch("vendor/images/**/*", Gulp.series('VendorImg'));
});

function VendorImgCompiler ( ) {
    return Gulp 
        .src("vendor/images/**/*")
        .pipe(MinifyImg())
        .pipe(ImageMin())
        .pipe(MinifyImg())
        .pipe(ImageMin())
        .pipe(Gulp.dest("vendor/images"));
};
