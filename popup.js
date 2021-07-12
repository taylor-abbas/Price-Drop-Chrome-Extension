// the array contains the dependencies : in this case 'ui.router'
const url = "http://localhost:8000/post";
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
                controller:  function($scope){
                    $scope.title = "Sign Up";
                    $scope.Name;
                    $scope.email;
                    $scope.password;
                    $scope.submitted= function(){
                        $scope.data = {
                            "message" : "Sign Up Complete",
                            "name" : $scope.Name,
                            "email": $scope.email ,
                            "password" : $scope.password
                        };
                        console.log($scope.data);
                        // $.ajax({    
                        //     type: "POST",
                        //     url: url,
                        //     data: $scope.data,
                        //     success: (data,status)=> {
                        //         console.log("success ajax post " , data, " this is the data");
                        //         console.log(data);
                        //         console.log(status);
                        //     },
                        //     error:()=>{
                        //         console.log("error ajax post");
                        //     }
                        // });
                        chrome.runtime.sendMessage($scope.data, function(response) {
                            console.log(response.message);
                        });
                    };
                }
            })
        }])
