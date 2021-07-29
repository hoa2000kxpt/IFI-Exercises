// CONTROLLERS
myWebApp.controller('productMenuController', ['$scope', 'productService', function ($scope, productService) {

  $scope.items = [];
  $scope.categories = ["Trang sức vàng ta", " Trang sức đá quý",
    "Trang sức ngọc trai", "Trang sức ngọc",
    "Trang sức vàng", "Trang sức cưới", "Trang sức bạc",
    "Kim cương", "Quà tặng", "Trang sức phong thuỷ",
    "Bộ sưu tập Chearing"];
  $scope.genders = ['Male', 'Female', 'Unisex', 'Children'];
  $scope.types = ['Nhẫn', 'Lắc', 'Vòng', 'Dây chuyền', 'Kiềng', 'Khác'];
  $scope.filter = {
    category: "",
    type: [],
    gender: []
  };
  $scope.resultedProduct = [];
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $('body').css('overflow-x', 'scroll');


  $scope.setCategoryFilter = function (category) {
    // console.log($scope.filter.category);
    if ($scope.filter.category == category) {
        $scope.filter.category = "";
    } else {
      $scope.filter.category = category;
    }
    filterize($scope.items, $scope.filter);
  }

  $scope.setTypeFilter = function (type) {

    // console.log($scope.filter.type);
    if ($scope.filter.type.includes(type)) {
      $scope.filter.type = removeItemOnce($scope.filter.type, type);
    } else {
      $scope.filter.type.push(type);
    }
    filterize($scope.items, $scope.filter);
  }

  $scope.setGenderFilter = function (gender) {

    // console.log($scope.filter.type);
    if ($scope.filter.gender.includes(gender)) {
      $scope.filter.gender = removeItemOnce($scope.filter.gender, gender);
    } else {
      $scope.filter.gender.push(gender);
    }
    filterize($scope.items, $scope.filter);

  }

  function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  function filterize(allProducts, filter) {
    let resultedProduct = JSON.parse(JSON.stringify(allProducts));
    let filterKeys = Object.keys(filter);
    if (filter[filterKeys[0]] != "") {
      for (let j = 0; j < resultedProduct.length; j++) {
        if (filter[filterKeys[0]] != (resultedProduct[j][filterKeys[0]])) {
          resultedProduct = removeItemOnce(resultedProduct, resultedProduct[j]);
          j--;
        }
      }
    }
    for (let i = 1; i < filterKeys.length; i++) {
      for (let j = 0; j < resultedProduct.length; j++) {
        if (filter[filterKeys[i]].length != 0) {
          if (!filter[filterKeys[i]].includes(resultedProduct[j][filterKeys[i]])) {
            resultedProduct = removeItemOnce(resultedProduct, resultedProduct[j]);
            j--;
          }
        }

      }


    }
    $scope.resultedProduct = resultedProduct;
    return resultedProduct;
  }


  productService.getAllProducts().then(
    function (data) {
      // console.log(data);
      $scope.items = data;
      $scope.resultedProduct = JSON.parse(JSON.stringify(data));
    }
  )






}]);

myWebApp.controller('PaginationDemoCtrl', function ($scope, $log) {
  $scope.totalItems = 10;
  $scope.currentPage = 4;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function () {
    $log.log('Page changed to: ' + $scope.currentPage);
  };

  $scope.maxSize = 5;
  $scope.bigTotalItems = 175;
  $scope.bigCurrentPage = 1;
});

