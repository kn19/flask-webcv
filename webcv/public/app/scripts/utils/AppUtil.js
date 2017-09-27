//
define(['utils/AppConstants'], function (AppConstants) {

  'use strict';

  var AppUtil = {

    name: 'AppUtil',


    // Setup the App Utils
    initialize: function () {
    },

    loadingTemplate: _.template('<div class="loading-splash">Loading....</div>'),

    setContentBodyHeight: function () {
      var hApp = this.getAppHeight();
      var hContent = hApp.hWindow - hApp.hFooter;
      $('.content-body').css({
        'height': hContent,
        'padding-top': hApp.hHeader
      });
    },


    setPopupModalHeight: function () {
      var hApp = this.getAppHeight();
      var hContent = hApp.hWindow - hApp.hFooter;
      var modals = $('.popup-modal');
      _.each(modals, function (modal) {
        $(modal).css({
          'height': hContent - 100,
          'padding-top': hApp.hHeader
        });
      })
    },

    getAppHeight: function () {
      var appHeight = {
        hHeader: $('#page-navbar').outerHeight(),
        hFooter: $('#page-footer').outerHeight(),
        hContent: $('.content-body').outerHeight(),
        hWindow: $(window).height()
      };
      return appHeight;
    }
  };

  return _.extend({}, AppUtil);
});