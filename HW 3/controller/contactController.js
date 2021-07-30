myWebApp.controller("contactController", ["$scope", function($scope) {

    $scope.submitContact = function () {
        let fullName = document.getElementById("fullName").value;
        let email = document.getElementById("email").value;
        let content = document.getElementById("content").value;

        if (fullName == "" || email == "" || content == "") {
            Swal.fire({
                icon: 'error',
                title: 'Lỗi',
                text: 'Yêu cầu bạn nhập các trường bắt buộc',
                footer: '<a href="https://stackoverflow.com/" style="color: blue !important">Tại sao tôi bị lỗi này</a>'
            })
        } else {
            Swal.fire({
                title: 'Cảm ơn bạn đã gửi form',
                width: 600,
                padding: '3em',
                background: '#fff url(/images/trees.png)',
                backdrop: `
                  rgba(0,0,123,0.4)
                  url("/images/nyan-cat.gif")
                  left top
                  no-repeat
                `
              })
        }
    }
}])