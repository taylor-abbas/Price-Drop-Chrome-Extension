const url = "http://localhost:8000/post";
angular
        .module("amazonextension")
        .config('signupCtrl' ,function($scope){
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
                chrome.runtime.sendMessage($scope.data, function(response) {
                    console.log(response.message);
                });
                $.ajax({    
                    type: "POST",
                    url: url,
                    data: $scope.data,
                    success: (data,status)=> {
                        console.log("success ajax post " , data, " this is the data");
                        console.log(data);
                        console.log(status);
                    },
                    error:()=>{
                        console.log("error ajax post");
                    }
                });
            };
        });
        