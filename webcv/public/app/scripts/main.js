// Filename: main.scripts
'use strict';
require(['config'], function () {

  'use strict';
  require(['backbone', 'jquery', 'underscore'],
      function (Backbone, $, _) {

        'use strict';

        require(['views/AppView', 'utils/AppUtil', 'utils/AppRouter'],
            function (AppView, AppUtil, AppRouter) {

              // Initialize AppUtil
              AppUtil.initialize();

              var Router = new AppRouter({appView: new AppView()});
              Router.appView.renderApp();

              Backbone.history.start();
            });
      });
});
