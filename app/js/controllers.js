/* Controllers */

// var MyCtrl1 = ['myApp.services', $scope, function(myApp.services, $scope) {}]

function MyCtrl1(Github, $scope) {
    var bagofans = [];
    var page_iterator = 0;

    // Get user data to find out number of pages needed
    $scope.user = Github.user_info.get({
        user: 'paulirish'
    }, function(data) {
        page_iterator = Math.ceil(data.following / 100);
        console.log("Ceil");
        console.log(Math.ceil(data.following / 100));
    });

    $scope.addFans = function() {

        for(var i = 0; i < page_iterator; i++) {
            console.log("Inside for-loop");
            var holder = Github.following_info.query({
                user: 'paulirish',
                pagenum: page_iterator
            }, function(fans) {
                bagofans.push(fans);
                console.log("page_iterator:", page_iterator, "bagofans:", bagofans);
            });
        }
        console.log("Outside for-loop");

    };

    // page_iterator = Math.ceil(user.following / 100);
    $scope.fans = Github.following_info.query({
        user: 'paulirish',
        pagenum: 1
    }, function(fans) {
        $scope.fans_list = fans.length;
        console.log("--------------------------fan1");
        console.log($scope.fans_list);
        bagofans.push(fans);
        console.log("bagofans", bagofans);
    });

    $scope.fans = Github.following_info.query({
        user: 'paulirish',
        pagenum: 2
    }, function(fans) {
        $scope.fans_list = fans.length;
        // console.log(fans.length);
        console.log("--------------------------fan2");
        console.log($scope.fans_list);

        bagofans.push(fans);
        console.log("bagofans", bagofans);

        var unionbags = _.union(bagofans[0], bagofans[1]);
        console.log("--------------------------begin unionbags");
        console.log("unionbags", unionbags.length);
        console.log("unionbags", unionbags);
        console.log("--------------------------end unionbags");
    });

    // $scope.addFans = function() {
    //     alert("I'm real!");
    // };
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



function MyCtrl2() {}
MyCtrl2.$inject = [];