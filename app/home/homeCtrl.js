(function() {
  function homeCtrl($state) {
    console.log($state);
  };
  angular.module("home").controller("homeCtrl", homeCtrl);
})();
