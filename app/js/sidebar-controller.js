angular
  .module('sidenav', ['ngMaterial'])
  .controller('AppCtrl',['$scope', '$timeout', '$mdSidenav', '$log', function ($scope, $timeout, $mdSidenav, $log) {
    var vm = this;
    vm.toggleLeft = buildDelayedToggler('left');
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    $("header").on("click","#wni-header #menu",function(){
     
      vm.toggleLeft();
    })
    $scope.closeLeft = function () {
     
      $mdSidenav('left').close()
        .then(function () {
         // $log.debug("close LEFT is done");
        });

    };
   
    vm.data = [
    {name:"Login",href:"#/login",icon:"lock"},
     {name:"Review",href:"#/review",icon:"description"},

      {name:"Manual",href:"#/manual",icon:"grade"},
      
    ];
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            //$log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            //$log.debug("toggle " + navID + " is done");
          });
      };
    }
  }])
  .controller('LeftCtrl',['$scope', '$timeout', '$mdSidenav', '$log', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          //$log.debug("close LEFT is done");
        });

    };
  }])
  .controller('RightCtrl',['$scope', '$timeout', '$mdSidenav', '$log', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
        //  $log.debug("close RIGHT is done");
        });
    };
  }]);