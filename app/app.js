(function() {
  angular.module("routing", ["header", "home", "login", "register", "custom", "ui.router"]);
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

      var loginDetails = {
        templateUrl: "app/loginDetails/loginDetails.html",
        url: "/loginDetails"
      }

      $stateProvider.state("home", homeObj);
      $stateProvider.state("home.register", registerObj);
      $stateProvider.state("home.login", loginObj);
      $stateProvider.state("home.login.loginDetails", loginDetails);

    }]);

})();
