 angular.module('main', ['angular-loading-bar',"ngResource","ngRoute",'sidenav','review','pascalprecht.translate'])
.controller('MainController', MainController)
.directive('mainPage',reviewHtml)


.config(['$translateProvider', function ($translateProvider) {
  // add translation tables

$translateProvider.useStaticFilesLoader({
    'prefix': 'assets/lang-',
    'suffix': '.json'
});
$translateProvider.preferredLanguage('jp');

$translateProvider.forceAsyncReload(true);
//$translateProvider.useSanitizeValueStrategy('escape');
  
}])
.config(function($routeProvider,$locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "app/src/review.html",
        controller: "ReviewController",
        controllerAs:"vm"
    })
    .when("/review",{
        templateUrl : "app/src/review.html",
        controller: "ReviewController",
        controllerAs:"vm"
    })
    
    .otherwise({redirectTo:'/'});
   //$locationProvider.html5Mode(true);
})
.config(function($mdDateLocaleProvider) {
    $mdDateLocaleProvider.formatDate = function(date) {
       return moment(date).format('YYYY-MM-DD');
    };
})
.config(function ($httpProvider) {
  
  $httpProvider.defaults.headers.common["X-Requested-With"] = 'XMLHttpRequest';
})



function MainController($translate,$resource,$scope,$rootScope) {

    var vm = this;
  
    this.message = "hello";
    var headHeight = $('header').outerHeight();

  //vm.changeLanguage("en")
}

function reviewHtml(){
	return {
			restrict: 'E',
			templateUrl: 'app/src/review.html'
		};
}


