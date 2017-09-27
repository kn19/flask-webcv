define([
  'views/BaseView',
  'utils/AppConstants',
  'text!templates/pages/AboutPageView.html'
], function (BaseView, AppConstants, viewTemplate) {

  return BaseView.extend({

    // Page id for the rest of the App to reference.
    pageId: AppConstants.PAGE_ABOUT,

    render: function () {
      compiledTemplate = _.template(viewTemplate, {model: this.model.attributes.info});
      this.$el.html(compiledTemplate);
      this.getProfilePic();
    },

    getProfilePic: function () {
      _this = this;
      if (_this.model.aboutImgCache) {
        _this.$('.profile-pic').attr('src', "data:" + _this.model.aboutImgType + ";base64," + _this.model.aboutImgCache);
        _this.$('#about').show();
        return
      }

      $.ajax({
        url: '/get_image',
        data: {'image_name': 'profile_pic'},
        type: 'GET',
        error: function () {
          console.log('profile_pic not found');
          _this.$('#about').show();
        },
        success: function (data, status, xhr) {
          _this.model.aboutImgCache = data;
          _this.model.aboutImgType = xhr.getResponseHeader("content-type");
          _this.$('.profile-pic').attr('src', "data:" + xhr.getResponseHeader("content-type") + ";base64," + data);
          _this.$('#about').show()
        }
      });
    }
  });
});
