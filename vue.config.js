const { defineConfig } = require('@vue/cli-service')
const { IgnorePlugin } = require('webpack')


module.exports = defineConfig({
  transpileDependencies: [
    'vuetify'
  ]
})


module.exports = {
  pluginOptions: {
    plugins: [
      new IgnorePlugin({
        resourceRegExp: /serialport/
      })
    ],
    electronBuilder: {
      nodeIntegration: true,
      externals: [
        'serialport'
      ]
    }
  }
}