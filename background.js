// const { token } = require("morgan");

console.log("Background.js Line 1 is running !");
const url = "http://localhost:8000/";

// function getRequest(reqData, api){
//     $.ajax({    
//         type: "GET",
//         url: url,
//         data : reqData,
//         success: (data,status)=> {
//             console.log("success ajax get from bg.js");
//             console.log(data);
//             console.log(status);
//         },
//         error:()=>{
//             console.log("error ajax post");
//         }
//     });
// }

function postRequest(reqData, api){
    $.ajax({    
        type: "POST",
        url: url + api,
        data: reqData,
        success: (data,status)=> {
            console.log("success ajax post from bg.js");
            console.log(data.token);
            console.log(status);
            if(status == "success"){
                chrome.storage.sync.set({token: data.token}, function() {
                    console.log('Token Value is set to ' + data.token);
                });

                chrome.storage.sync.get(['token'], function(result) {
                    console.log('Token value currently is ' , result.token);
                });
            }
        },
        error:()=>{
            console.log("error ajax post");
        }
    });
}
function verifyUser(reqData , api){
    $.ajax({    
        type: "GET",
        url: url + api,
        headers:{
            token: reqData.token
        },
        success: (data,status)=> {
            return data;
        },
        error:(err)=>{
            console.log("error ajax post");
            return err;
        }
    });
}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message == "Sign Up Complete"){
            sendResponse({"message": "Credentials recieved at background.js"});
            console.log(request);
            postRequest(request, 'user/signup');
        }
        if (request.message == "Verify user through token"){
            sendResponse({"message": "token recieved at background.js"});
            let userData = verifyUser(request, 'user/me');
            return userData;
        }
    }
)