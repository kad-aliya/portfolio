module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => {
        console.log('!!! opt: ', options)
        options.fallback.options.name = "img/[name].[ext]"
        console.log('!!! opt 2: ', options)
        return options
      })
  }
}