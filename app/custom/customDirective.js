(function() {
  function registerDirective() {
    return {
      restrict: "A,C,E",
      templateUrl: "app/register/register.html",
      transclude: true
    }
  }

  angular.module("custom").directive("registerDirective", registerDirective);
})();
