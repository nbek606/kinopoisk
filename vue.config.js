module.exports = {
  assetsDir: 'static',
  
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/css/app.scss";
        `
      }
    }
  },
}
