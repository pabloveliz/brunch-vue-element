module.exports = {
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^(?!app)/,
        'app.js': /^app/
      }
    },
    stylesheets: {
      joinTo: {
        'vendor.css': /^(?!app)/,
        'app.css': /^app/      
      }
    },
    templates: {
      joinTo: 'app.js'
    }
  },
  plugins: {
    babel: {
      presets: ['es2015']
    }
  },
  npm: {
    styles: {
      'element-ui': ['lib/theme-chalk/index.css']
    }
  }
}
