// Filename: router.js
define([
      'utils/AppConstants'
    ],
    function (AppConstants) {

      'use strict';
      return Backbone.Router.extend({

        appView: null,

        pageRoute: null,

        routes: {
          'page/:pageId': 'showPage',

          '*actions': 'defaultAction'
        },

        initialize: function (options) {
          // Initialize the AppView in the AppRouter
          this.appView = options.appView;
        },


        // Update the page and subpage with options
        getRouteAndNavigate: function (pageId) {
          // Remove any query param that is not related to the page route
          // Update the route for paging
          this.pageRoute = {
            'pageId': pageId,
            'url': this.getUrlByPageId(pageId)
          };

          // Show the page
          this.navigateToRoute(this.pageRoute.url)
        },

        getUrlByPageId: function (pageId) {
          if (!pageId) {
            throw new Error('Specify a pageId.');
          }
          switch (pageId) {
            case AppConstants.PAGE_HOME:
              return 'page/home';
            case AppConstants.PAGE_ABOUT:
              return 'page/about';
            case AppConstants.PAGE_RESUME:
              return 'page/resume';
            case AppConstants.PAGE_PROJECTS:
              return 'page/projects';
            case AppConstants.PAGE_CONTACT:
              return 'page/contact';
            default:
              return 'page/' + pageId;
          }
        },

        // To standardize the route transfer of views
        navigateToRoute: function (url) {
          // If same URL, refresh the route
          Backbone.history.navigate(url, {trigger: true, replace: false});
        }

      });
    });
