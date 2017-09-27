define([
  'views/AppView',
  'text!templates/base/HeaderTemplate.html'
], function (AppView, viewTemplate) {

  return AppView.extend({

    el: $("#nav-wrap"),

    events: {
      'click #page-navbar li a': 'showPage'
    },

    initialize: function () {
      this.render();
    },

    render: function () {
      compiledTemplate = _.template(viewTemplate);
      this.$el.html(compiledTemplate);
    },

    showPage: function (e) {
      var pageId = e.target.attributes.pageid.value;
      $('#page-navbar li.active').removeClass('active');
      $('#page-navbar li a[pageId="' + pageId + '"]').parent().addClass('active');
      this.loadPageView(pageId);
    }
  });
});
