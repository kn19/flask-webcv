define([
  'utils/AppConstants',
  'utils/AppUtil',
  'models/CVModel'
], function (AppConstants, AppUtil, CVModel) {

  'use strict';

  return Backbone.View.extend({

    // Properties
    //-----------

    // Page id for the rest of the App to reference.
    pageId: null,

    // The unparsed view template
    viewTemplate: null,

    // The template view once it has been compileted by _
    compiledTemplate: null,

    el: $(".content-body"),

    model: new CVModel(),

    // Functions (Core)
    // ----------------

    // @override
    initialize: function (options) {
      $(window).on('resize.app', this.onResize);
    },

    addExtraEvents: function (extraEvents) {
      if (!extraEvents) {
        throw new Error('extraEvents should not be empty.');
      }
      var newEvents = _.clone(this.events);
      _.extend(newEvents, extraEvents);
      this.events = newEvents;
    },

    render: function () {
      return this.$el;
    },

    // Resize
    onResize: function () {
      AppUtil.setContentBodyHeight();
    }
  });

});
