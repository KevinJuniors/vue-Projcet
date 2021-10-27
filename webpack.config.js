const path = require("path")
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: {
        app: path.join(__dirname, "app.js")
    },

    output: {
        filename: "app.js",
        path: path.join(__dirname, "build")
    },

    module: {
        rules: [
            // test: /\.vue$/,
            // loader: 'vue-loader'
        ]
    },

    plugins: [
        new VueLoaderPlugin()
    ]
}