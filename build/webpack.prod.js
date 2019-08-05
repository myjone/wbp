const merge = require('webpack-merge')
const commonConfig = require("./webpack.common.js")
 const productConfig= {
    mode: 'production',
    devtool: "cheap-module-source-map",
}

module.exports = merge(productConfig, commonConfig)