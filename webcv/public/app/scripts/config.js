
require.config({
  paths: {
    // Shortcut to the templates directory
    templates        : '../templates',

    jquery      : 'libs/jquery-min',
    underscore  : 'libs/underscore-min',
    backbone    : 'libs/backbone',
    text        : 'libs/text',
    magnific    : 'libs/magnific'
  },
  shim: {
    // Exports 'underscore' to '_'
    underscore: {
      exports: '_'
    },
    // Attaches 'Backbone' to the DOM
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    }
  }
});
