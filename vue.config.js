module.exports = {
    devServer: {
        port: 3000
    },
    outputDir: './client',
    lintOnSave: true,
    configureWebpack: {
        resolve: {
            alias: {
                '~': __dirname + '/vue'
            }
        },
        entry: {
            app: './vue/app.js'
        }
    }
}