const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      "/v1": {
        target: "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  outputDir: "../Guinness-Back/public",
});
