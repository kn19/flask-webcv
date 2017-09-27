define([
  'views/BaseView',
  'utils/AppConstants',
  'text!templates/pages/HomePageView.html'
], function (BaseView, AppConstants, viewTemplate) {

  return BaseView.extend({

    // Page id for the rest of the App to reference.
    pageId: AppConstants.PAGE_HOME,

    render: function () {
      compiledTemplate = _.template(viewTemplate, {
        AppConstants: AppConstants,
        model: this.model.attributes.info
      });
      this.$el.html(compiledTemplate);
    }
  });
});
