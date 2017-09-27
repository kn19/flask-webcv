define([
  'magnific',
  'views/AppView',
  'utils/AppConstants',
  'utils/AppUtil'
], function (magnific, AppView, AppConstants, AppUtil) {

  var ProjectsPageView = AppView.extend({

    // Page id for the rest of the App to reference.
    pageId: AppConstants.PAGE_PROJECTS,

    render: function () {

      $('.content-body')[0].innerHTML = AppUtil.loadingTemplate();
      if (this.model.projectCache) {
        this.showPage(this.model.projectCache);
      } else {
        this.getProjects();
      }
    },

    getProjects: function () {
      _this = this;
      $.ajax({
        url: '/get_projects',
        type: 'GET',
        success: function (data) {
          _this.model.projectCache = data;
          _this.showPage(data)
        }
      });
    },

    showPage: function (content) {
      $('.content-body')[0].innerHTML = content;

      $('.item-wrap a').magnificPopup({
        type: 'inline',
        fixedContentPos: false,
        removalDelay: 200,
        showCloseBtn: false,
        mainClass: 'mfp-fade'

      });
      $(document).on('click', '.popup-modal-dismiss', function (e) {
        e.preventDefault();
        $.magnificPopup.close();
      });
    },
  });

  return ProjectsPageView;
});
