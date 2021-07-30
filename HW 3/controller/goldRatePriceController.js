myWebApp.controller('goldRatePriceController', ['$scope', '$interval', 'goldService', function ($scope, $interval, goldService) {
  $scope.goldInfo = [];
  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  $scope.goldBuy = function () {
    
    let randomNum = getRandomArbitrary(5063, 5782);
    // return setInterval(function(){
    //   $scope.$apply(randomNum);
    // }, 2000)
    // return $interval(randomNum,1000);
    // console.log($interval(randomNum,1000));
      return randomNum;
  }

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
    google.charts.setOnLoadCallback($scope.getWeekGoldInfo);
    google.charts.setOnLoadCallback($scope.getMonthGoldInfo);
    google.charts.setOnLoadCallback($scope.getQuarterGoldInfo);
    google.charts.setOnLoadCallback($scope.getYearGoldInfo);
    google.charts.setOnLoadCallback($scope.getDayGoldInfo);
  }


  $scope.getDayGoldInfo = function () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Ngày');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ bán ra');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ mua vào');
    data.addColumn('number', 'Vàng Thăng Long bán ra');
    data.addColumn('number', 'Vàng Thăng Long mua vào');
    data.addColumn('number', 'Vàng thế giới 999.9');

    data.addRows([
      ['8h27', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['8h35', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['8h21', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['8h52', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['8h57', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['9h40', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['10h40', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
    ]);

    var options = {
      chart: {
        title: "Biểu đồ giá vàng trong nước (Hà Nội) và thế giới (Hanoi's Gold Price)",
        // subtitle: 'in millions of dollars (USD)'
      },
      width: 750,
      height: 550,
      colors: ['#120E43', '#3498db', '#1C8D73', '#2ecc71', '#E21717']
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
    setInterval($scope.getDayGoldInfo, 20000);
  }

  $scope.getWeekGoldInfo = function () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Tuần');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ bán ra');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ mua vào');
    data.addColumn('number', 'Vàng Thăng Long bán ra');
    data.addColumn('number', 'Vàng Thăng Long mua vào');
    data.addColumn('number', 'Vàng thế giới 999.9');

    data.addRows([
      ['16/07', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['17/07', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['18/07', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['19/07', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
    ]);

    var options = {
      chart: {
        title: "Biểu đồ giá vàng trong nước (Hà Nội) và thế giới (Hanoi's Gold Price)",
        // subtitle: 'in millions of dollars (USD)'
      },
      width: 750,
      height: 550,
      colors: ['#120E43', '#3498db', '#1C8D73', '#2ecc71', '#E21717']
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
    setInterval($scope.getWeekGoldInfo, 20000);
  }

  $scope.getMonthGoldInfo = function () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Tháng');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ bán ra');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ mua vào');
    data.addColumn('number', 'Vàng Thăng Long bán ra');
    data.addColumn('number', 'Vàng Thăng Long mua vào');
    data.addColumn('number', 'Vàng thế giới 999.9');

    data.addRows([
      ['Tuần 1', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['Tuần 2', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['Tuần 3', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['Tuần 4', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
    ]);

    var options = {
      chart: {
        title: "Biểu đồ giá vàng trong nước (Hà Nội) và thế giới (Hanoi's Gold Price)",
        // subtitle: 'in millions of dollars (USD)'
      },
      width: 750,
      height: 550,
      colors: ['#120E43', '#3498db', '#1C8D73', '#2ecc71', '#E21717']
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
    setInterval($scope.getMonthGoldInfo, 20000);
  }

  $scope.getQuarterGoldInfo = function () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Qúy');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ bán ra');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ mua vào');
    data.addColumn('number', 'Vàng Thăng Long bán ra');
    data.addColumn('number', 'Vàng Thăng Long mua vào');
    data.addColumn('number', 'Vàng thế giới 999.9');

    data.addRows([
      ['Qúy 1', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['Qúy 2', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['Qúy 3', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
      ['Qúy 4', getRandomInt(5600, 5800), getRandomInt(5600, 5800), getRandomInt(5050, 5250), getRandomInt(5050, 5250), getRandomInt(5050, 5250)],
    ]);

    var options = {
      chart: {
        title: "Biểu đồ giá vàng trong nước (Hà Nội) và thế giới (Hanoi's Gold Price)",
        // subtitle: 'in millions of dollars (USD)'
      },
      width: 750,
      height: 550,
      colors: ['#120E43', '#3498db', '#1C8D73', '#2ecc71', '#E21717']
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
    setInterval($scope.getQuarterGoldInfo, 20000);
  }

  $scope.getYearGoldInfo = function () {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Năm');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ bán ra');
    data.addColumn('number', 'Vàng miếng SJC GD lẻ mua vào');
    data.addColumn('number', 'Vàng Thăng Long bán ra');
    data.addColumn('number', 'Vàng Thăng Long mua vào');
    data.addColumn('number', 'Vàng thế giới 999.9');

    data.addRows([
      ['T8', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T9', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T10', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T11', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T12', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T1', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T2', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T3', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T4', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T5', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T6', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
      ['T7', getRandomInt(5450, 5752), getRandomInt(5420, 5690), getRandomInt(5016, 5476), getRandomInt(4951, 5546), getRandomInt(4916, 5511)],
    ]);

    var options = {
      chart: {
        title: "Biểu đồ giá vàng trong nước (Hà Nội) và thế giới (Hanoi's Gold Price)",
        // subtitle: 'in millions of dollars (USD)'
      },
      width: 750,
      height: 550,
      colors: ['#120E43', '#3498db', '#1C8D73', '#2ecc71', '#E21717']
    };

    var chart = new google.charts.Line(document.getElementById('linechart_material'));

    chart.draw(data, google.charts.Line.convertOptions(options));
    setInterval($scope.getYearGoldInfo, 20000);
  }

}]);