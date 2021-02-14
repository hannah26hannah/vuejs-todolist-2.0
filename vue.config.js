module.exports = {
  css: {
    extract: true
  },
  outputDir: "./doc",
  publicPath:
    process.env.NODE_ENV === "production" ? "/vuejs-todolist-2.0" : "/",
  configureWebpack: {
    module: {
      rules: [
        {
          //   test: /\.css$/,
          test: /\.(s*)css$/,
          use: ["postcss-loader"]
        }
      ]
    }
  }
};
