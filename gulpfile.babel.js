import gulp from 'gulp'
import koaService from 'gulp-koa-service'

gulp.task('server', () => {
  return gulp.src('app/server/server.js')
    .pipe(koaService({
      'env': {
        'PORT': 3000,
        'NODE_ENV': 'development'
      }
    }))
})

gulp.task('watch', () => {
  gulp.watch(['app/server/**/*.js'], ['server'])
})

gulp.task('start', ['watch', 'server'])
