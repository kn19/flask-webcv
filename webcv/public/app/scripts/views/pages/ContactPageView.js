define([
  'views/BaseView',
  'utils/AppConstants',
  'text!templates/pages/ContactPageView.html'
], function (BaseView, AppConstants, viewTemplate) {

  return BaseView.extend({

    // Page id for the rest of the App to reference.
    pageId: AppConstants.PAGE_CONTACT,

    events: {
      'submit #contactForm': 'sendEmail'
    },

    render: function () {
      compiledTemplate = _.template(viewTemplate, {
        AppConstants: AppConstants,
        model: this.model.attributes.info
      });
      this.$el.html(compiledTemplate);
    },

    sendEmail: function (e) {
      e.preventDefault();

      var cname = $('#contactName');
      var cemail = $('#contactEmail');
      var csbj = $('#contactSubject');
      var cmsg = $('#contactMessage');

      $.ajax({
        url: '/send_message',
        type: 'POST',
        contentType: "application/json; charset=utf-8",
        data: JSON.stringify({
          name: cname.val(), email: cemail.val(),
          subject: csbj.val(), message: cmsg.val()
        }),
        success: function () {
          cname.val('');
          cemail.val('');
          csbj.val('');
          cmsg.val('');
          $('#statusMsg').html('<div id="message-success"><i class="fa fa-check"></i>Message sent. Thank you!</div>');
          $('#message-success').show();
          setTimeout(function () {
            $('#message-success').hide();
          }, 6000);
        },
        error: function () {
          $('#statusMsg').html('<div id="message-warning">Unable to send email.</div>');
          $('#message-warning').show();
          setTimeout(function () {
            $('#message-warning').hide();
          }, 6000);
        }
      });

    }
  });
});
