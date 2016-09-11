(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.checkIfTooMuch = function () {
    var totalCount = countNumberOfItems($scope.lunchMenu);
    if (totalCount == 0) {
      $scope.message = "Please enter data first";
    }
    else if (totalCount <= 3) {
      $scope.message = "Enjoy!";
    }
    else {
      $scope.message = "Too much!";
    }
  };

  function countNumberOfItems(items) {
    var totalStringValue = 0;
    var item = items.split(",");
    for (var i = 0; i < item.length; i++) {
      if (item[i].trim().length > 0) {
        totalStringValue += 1;
      }
    }
    return totalStringValue;
  }

}

})();
