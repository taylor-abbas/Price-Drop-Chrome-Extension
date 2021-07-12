// the array contains the dependencies : in this case 'ui.router'
let amazonextension = 
    angular
        .module("amazonextension", [
            'ui.router'
        ])
        .config(['$urlRouterProvider' , '$stateProvider' , function($urlRouterProvider, $stateProvider){
            $urlRouterProvider.otherwise('/login');
            
            $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller:function($scope){
                    $scope.title = "Home";
                }
            })
            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: function($scope){
                    $scope.title = "Login";
                }
            })
            .state('signup', {
                url: '/signup',
                templateUrl: 'templates/signup.html',
                controller: function($scope){
                    $scope.title = "Sign Up";
                    $scope.Name;
                    $scope.email;
                    $scope.password;
                    $scope.submitted= function(){
                        console.log( $scope.title);
                        console.log("Name : ", $scope.Name);
                        console.log("Email : ", $scope.email);
                        console.log("Password : ", $scope.password);
                        $scope.data = {
                            "message" : "Sign Up Complete",
                            "name" : $scope.Name,
                            "email": $scope.email ,
                            "password" : $scope.password
                        };
                        chrome.runtime.sendMessage($scope.data, function(response) {
                            console.log(response.message);
                        });
                        
                    };
                }   
            })
        }])
