/* Controllers */

// var MyCtrl1 = ['myApp.services', $scope, function(myApp.services, $scope) {}]


function MyCtrl1(Github, $scope) {
    $scope.fans = Github.list.query({
		user: 'paulirish',
		pagenum: '2'
    });

    $scope.user = Github.user.get({
		user: 'paulirish'
    });

    // $scope.phone = Phone.get({
    //     _id: $routeParams._id
    // }, function(phone) {
    //     $scope.mainImageUrl = phone.details.images[0];
    // });

    // $scope.setImage = function(imageUrl) {
    //     $scope.mainImageUrl = imageUrl;
    // };

}
MyCtrl1.$inject = ['Github', '$scope'];



function MyCtrl2() {
}
MyCtrl2.$inject = [];


	