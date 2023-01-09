// const { defineConfig } = require('@vue/cli-service')
const path =require('path')

function reslove(dir){
  return path.join(__dirname, './', dir)
}

module.exports = {
  chainWebpack:config=>{
    // Here is the configuration of the environment, different environments correspond to different BASE_API, so that the request address of axios is different
    config.plugin('define').tap(args => {
      const argv = process.argv
      const mode = argv[argv.indexOf('--project-mode') + 1]
      args[0]['process.env'].MODE = `"${mode}"`
      args[0]['process.env'].BASE_API = '"https://dog.ceo"'
      return args
    })
  }
}
