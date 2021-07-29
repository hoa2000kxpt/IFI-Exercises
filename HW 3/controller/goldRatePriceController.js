myWebApp.controller('goldRatePriceController', ['$scope', 'goldService', function ($scope, goldService) {
  $scope.goldInfo = [];
  // $scope.goldBuy = function () {
  //   function getRandomArbitrary(min, max) {
  //     return Math.floor(Math.random() * (max - min) + min);
  // }
  //   let randomNum = getRandomArbitrary(5063, 5782);
  //   // let setTime = setInterval(randomNum, 10000)
  //   // return setInterval(randomNum, 5000)
  //   return randomNum;
  // }

  goldService.getAllGoldRateInfo().then(
    function (data) {
      $scope.goldInfo = data;
      // console.log($scope.goldInfo);
    }
  )
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  $scope.init = function () {
    google.charts.load('current', { 'packages': ['line'] });
    google.charts.setOnLoadCallback(drawChart);
  }

  function drawChart() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Ngày');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ bán ra');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ mua vào');
    data.addColumn('number', 'Vàng Thăng Long bán ra');
    data.addColumn('number', 'Vàng Thăng Long mua vào');
    data.addColumn('number', 'Vàng thế giới 999.9');

    data.addRows([
      ['8h27', getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782)],
      ['8h35', getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782)],
      ['8h21', getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782)],
      ['8h52', getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782)],
      ['8h57', getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782)],
      ['9h40', getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782)],
      ['10h40', getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782), getRandomInt(5063, 5782)],

      // [1,  37.8, 80.8, 41.8],
      // [2,  30.9, 69.5, 32.4],
      // [3,  25.4,   57, 25.7],
      // [4,  11.7, 18.8, 10.5],
      // [5,  11.9, 17.6, 10.4],
      // [6,   8.8, 13.6,  7.7],
      // [7,   7.6, 12.3,  9.6],
      // [8,  12.3, 29.2, 10.6],
      // [9,  16.9, 42.9, 14.8],
      // [10, 12.8, 30.9, 11.6],
      // [11,  5.3,  7.9,  4.7],
      // [12,  6.6,  8.4,  5.2],
      // [13,  4.8,  6.3,  3.6],
      // [14,  4.2,  6.2,  3.4]
    ]);

    var options = {
      chart: {
        title: "Biểu đồ giá vàng trong nước (Hà Nội) và thế giới (Hanoi's Gold Price)",
        // subtitle: 'in millions of dollars (USD)'
      },
      width: 750,
      height: 550
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
    setInterval(drawChart, 20000);
  }
}]);