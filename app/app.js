angular
    .module('regisafeApp', ['ionic'])
    .config([
        '$stateProvider',
        '$urlRouterProvider',
        function ($stateProvider, $urlRouterProvider) {

            $urlRouterProvider
                .otherwise('/search');

            $stateProvider
                .state('base', {
                    url: '/',
                    abstract: true,
                    views: {
                        'base': {
                            templateUrl: 'app/templates/base.html'
                        }
                    }
                })
                .state('base.search', {
                    url: 'search',
                    controller: 'OrderCtrl',
                    templateUrl: 'app/templates/search.html'
                })
                .state('about', {
                    parent: 'base',
                    url: 'about',
                    templateUrl: 'app/templates/about.html'
                })
        }
    ]);
