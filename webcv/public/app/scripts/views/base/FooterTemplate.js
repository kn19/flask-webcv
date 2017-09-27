define([
  'views/AppView',
  'utils/AppConstants',
  'text!templates/base/FooterTemplate.html'
], function (AppView, AppConstants, viewTemplate) {

  return AppView.extend({

    el: $("footer"),

    initialize: function () {
      this.render();
    },

    render: function () {
      compiledTemplate = _.template(viewTemplate, {
        AppConstants: AppConstants,
        model: this.model.attributes.info
      });
      this.$el.html(compiledTemplate);
    }
  });
});
