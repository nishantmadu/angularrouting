(function() {
  angular.module("routing", ["header", "home", "login", "register", "ui.router"]);
  angular.module("routing")
    .config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
      var homeObj = {
        templateUrl: "app/home/home.html",
        url: "/home",
        controller: "homeCtrl",
        params: {
          homeData: ""
        }
      }

      var registerObj = {
        templateUrl: "app/register/register.html",
        url: "/register",
        controller: "registerCtrl"

      }

      var loginObj = {
        templateUrl: "app/login/login.html",
        url: "/login",
        controller: "loginCtrl"
      }

      $stateProvider.state("home", homeObj);
      $stateProvider.state("register", registerObj);
      $stateProvider.state("login", loginObj);
    }]);

})();
