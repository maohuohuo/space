/*
*Vue-CLI项目的核心配置文件
*/
const webpack = require("webpack");

module.exports = {
 configureWebpack: {
   plugins: [
     new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery",
       "window.jQuery": "jquery",
       Popper: ["popper.js", "default"]
     })
   ]
 },
  devServer : {
    hot:true,//自动保存
    open : true,//自动启动
    port : 8080,//默认端口号
    host : "0.0.0.0"
  }
};
