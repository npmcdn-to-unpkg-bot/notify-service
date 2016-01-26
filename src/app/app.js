'use strict';

angular.module('inspinia', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'toaster' ])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('index', {
            abstract: true,
            url: "/index",
            templateUrl: "components/common/content.html"
        })
        .state('index.toastr', {
            url: "/toastr",
            templateUrl: "app/toastr/toastr.html",
            data: { pageTitle: 'Toastr Notify' }
        });

    $urlRouterProvider.otherwise('/index/toastr');
  })
;
