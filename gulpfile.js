const gulp = require('gulp');
const eslint = require('gulp-eslint');
const nodemon = require('gulp-nodemon');
const mocha = require('gulp-mocha');

const lint = () => gulp.src(['./**/*.js', '!node_modules/**'])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError());
gulp.task('lint', lint);

const test = done => {
  gulp.src('./{,!(node_modules)/**/}*.spec.js')
    .pipe(mocha({ exit: true }));
  done();
};
gulp.task('test', test);

const watch = () => gulp.watch(['./**/*.js', '!node_modules/**'], gulp.series(lint, test));
gulp.task('watch', watch);

const start = (done) => {
  nodemon({
    script: './bin/www',
    env: { NODE_ENV: 'development' }
  })
    .on('crash', () => {
      done();
    })
    .on('exit', () => {
      done();
    });
};

const startDebug = (done) => {
  nodemon({
    script: './bin/www',
    exec: 'node --inspect=0.0.0.0:9229',
    env: { NODE_ENV: 'development' }
  })
    .on('crash', () => {
      done();
    })
    .on('exit', () => {
      done();
    });
};

gulp.task('start', start);

gulp.task('dev', gulp.parallel(watch, start));
gulp.task('debug', gulp.parallel(watch, startDebug));
gulp.task('default', start);
