({
    baseUrl: "scripts",
    include: ['main','libs/jquery-min','libs/underscore-min',
    'libs/backbone-min',
    'libs/text',
    'views/BaseView',
    'views/AppView',
    'utils/AppRouter',
    'views/base/HeaderTemplate',
    'views/base/FooterTemplate',
    'views/pages/AboutPageView',
    'views/pages/ContactPageView',
    'views/pages/HomePageView',
    'views/pages/ProjectsPageView',
    'views/pages/ResumePageView'

    ],
      paths: {
    // Shortcut to the templates directory
    templates        : '../templates',

    jquery      : 'libs/jquery-min',
    underscore  : 'libs/underscore-min',
    backbone    : 'libs/backbone-min',
    text        : 'libs/text',
    magnific    : 'libs/magnific'
  }
})