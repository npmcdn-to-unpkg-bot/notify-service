'use strict';

angular.module('notification', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'toaster' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "components/common/content.html"
        })
        .state('index.notify', {
            url: "/notify",
            templateUrl: "app/notify/notify.html",
            data: { pageTitle: 'Toastr Notify' }
        });

    $urlRouterProvider.otherwise('/index/notify');
  })
;
