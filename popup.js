// the array contains the dependencies : in this case 'ui.router'
const url = "http://localhost:8000/post";
let amazonextension = 
    angular
        .module("amazonextension", [
            'ui.router'
        ])
        .config(['$urlRouterProvider' , '$stateProvider' , function($urlRouterProvider, $stateProvider){
            $urlRouterProvider.otherwise('/welcome');
            
            $stateProvider
            .state('welcome', {
                url: '/welcome',
                templateUrl: 'templates/welcome.html',
                controller:function($scope){
                    $scope.title = "Welcome";
                    $scope.verifyUser = function(){
                        console.log("Verify User Called")
                        let data = {};
                        let res;
                        chrome.storage.sync.get(['token'], function(result) {
                            data.token = result.token;
                        });
                        // send a chrome runtime message to background to verify this token, if verified, send a Cj Runt Msg to Home state
                        // .. . . . . . . . . .
                        data.message = "Verify user through token"
                        chrome.runtime.sendMessage(data, function(response) {
                            res = response;
                        });
                        if(res.message == "Error in Fetching user"){
                            // auth failed
                        }else{
                            // res is the userData
                            res.message = "This is the user data"
                            chrome.runtime.sendMessage(res);
                        }
                    };
                }
            })
            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller:function($scope){
                    $scope.title = "Home";
                    $scope.username = "";
                    chrome.runtime.onMessage.addListener(
                        function(request, sender, sendResponse) {
                            if (request.message == "This is the user data"){
                                $scope.username = request.username
                            }
                        }
                    )
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
                    $scope.username;
                    $scope.submitted= function(){
                        // if($scope.email.)
                        $scope.data = {
                            message : "Sign Up Complete",
                            name : $scope.Name,
                            username : $scope.username,
                            email: $scope.email ,
                            password : $scope.password
                        };
                        console.log($scope.data);
                        chrome.runtime.sendMessage($scope.data, function(response) {
                            console.log(response.message);
                        });
                    };
                }
            })
        }])
