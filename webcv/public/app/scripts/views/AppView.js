define([
  'views/BaseView',
  'utils/AppConstants',
  'utils/AppUtil'
], function (BaseView, AppConstants, AppUtil) {

  'use strict';

  return BaseView.extend({

    // @override
    initialize: function (options) {
      AppUtil.setContentBodyHeight();
    },
    renderApp: function (options) {
      var _this = this;

      AppUtil.setContentBodyHeight();
      this.model.fetch({
        success: function (cv) {
          _this.model.isLoaded = true;
          require(['views/base/HeaderTemplate', 'views/base/FooterTemplate'], function (HeaderTemplate, FooterTemplate) {
            new HeaderTemplate();
            new FooterTemplate();
            _this.loadPageView()
          });
        }
      });
    },

    loadPageView: function (pageId) {
      switch (pageId) {
        case AppConstants.PAGE_HOME:
          require(['views/pages/HomePageView'],
              this.renderPageView);
          break;
        case AppConstants.PAGE_ABOUT:
          require(['views/pages/AboutPageView'],
              this.renderPageView);
          break;
        case AppConstants.PAGE_RESUME:
          require(['views/pages/ResumePageView'],
              this.renderPageView);
          break;
        case AppConstants.PAGE_PROJECTS:
          require(['views/pages/ProjectsPageView'],
              this.renderPageView);
          break;
        case AppConstants.PAGE_CONTACT:
          require(['views/pages/ContactPageView'],
              this.renderPageView);
          break;
        default:
          require(['views/pages/HomePageView'],
              this.renderPageView);
          break;
      }
      return pageId;
    },

    // Functions (View)
    //-----------------

    renderPageView: function (PageViewClass) {
      var pageViewClass = new PageViewClass();
      AppUtil.setContentBodyHeight();
      pageViewClass.render();
    }

  });
});
