module.exports = {
  lintOnSave: false,
  chainWebpack: (config) => {
    // GraphQL Loader
    config.module
      .rule("pdf")
      .test(/\.pdf$/)
      .use("file-loader")
      .loader("file-loader")
      .end();
  }
};
