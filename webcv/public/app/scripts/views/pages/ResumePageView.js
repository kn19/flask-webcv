define([
  'views/BaseView',
  'utils/AppConstants',
  'text!templates/pages/ResumePageView.html'
], function (BaseView, AppConstants, viewTemplate) {

  return BaseView.extend({

    // Page id for the rest of the App to reference.
    pageId: AppConstants.PAGE_RESUME,

    render: function () {
      compiledTemplate = _.template(viewTemplate, {model: this.model.attributes});
      this.$el.html(compiledTemplate);
    }
  });
});
