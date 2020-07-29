"use strict";
const path = require("path");
const defaultSettings = require("./src/settings.js");
// const CompressionPlugin = require("compression-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir);
}

const name = defaultSettings.title || "next-demo"; // page title

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
// You can change the port by the following method:
// port = 9527 npm run dev OR npm run dev --port = 9527
const port = process.env.port || process.env.npm_config_port || 9530; // dev port

module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true
  },
  // proxy: {
  //   '/dev-api': {
  //     // target: 'http://10.108.14.198:8080',
  //     target: 'http://10.108.26.83:8080',
  //     pathRewrite: { '^/dev-api': '' },
  //     changeOrigin: true,
  //     onProxyReq(proxyReq, req, res, options) {
  //       if (req.body) {
  //         let bodyData = JSON.stringify(req.body);
  //         proxyReq.setHeader('Content-Type', 'application/json');
  //         proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
  //         proxyReq.write(bodyData);
  //       }
  //     }
  //   }
  // },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // name: name,
    resolve: {
      alias: {
        "@": resolve("src")
      }
    },
    performance: {
      hints: false
    }
    // plugin: [
    //   new CompressionPlugin({
    //     /* [file]被替换为原始资产文件名。
    //        [path]替换为原始资产的路径。
    //        [dir]替换为原始资产的目录。
    //        [name]被替换为原始资产的文件名。
    //        [ext]替换为原始资产的扩展名。
    //        [query]被查询替换。*/
    //     filename: "[path].gz[query]",
    //     //压缩算法
    //     algorithm: "gzip",
    //     //匹配文件
    //     test: /\.js$|\.css$|\.html$/,
    //     //压缩超过此大小的文件,以字节为单位
    //     threshold: 10240,
    //     minRatio: 0.8,
    //     //删除原始文件只保留压缩后的文件
    //     deleteOriginalAssets: true
    //   })
    // ]
  }
  // chainWebpack(config) {
  //   config.plugin("html").tap(args => {
  //     args[0].title = name;
  //     return args;
  //   });
  // }
};