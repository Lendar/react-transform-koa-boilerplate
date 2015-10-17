import koa from 'koa'
import c2k from 'koa-connect'
import webpack from 'webpack'
import webpackConfig from './webpack.config'
import webpackMiddleware from 'koa-webpack-dev-middleware'
import hotMiddleware from 'webpack-hot-middleware'

const port = process.env.PORT || 3000
const app = koa()
const compiler = webpack(webpackConfig)

app.use(webpackMiddleware(compiler, {
  noInfo: true
}))

app.use(c2k(hotMiddleware(compiler)))

app.listen(port)
