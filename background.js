console.log("Background.js Line 1 is running !");
const url = "http://localhost:8000/post";

function getRequest(){
    $.ajax({    
        type: "GET",
        url: url,
        success: (data,status)=> {
            console.log("success ajax post " , data, " this is the response data to the getRequest");
            console.log(data);
            console.log(status);
        },
        error:()=>{
            console.log("error ajax post");
        }
    });
}

function postRequest(reqData){
    $.ajax({    
        type: "POST",
        url: url,
        data: reqData,
        success: (data,status)=> {
            console.log("success ajax post " , data, " this is the response data to the postRequest");
            console.log(data);
            console.log(status);
        },
        error:()=>{
            console.log("error ajax post");
        }
    });
}

// get_post_Request();
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.message == "Sign Up Complete"){
            sendResponse({"message": "Credentials recieved at background.js"});
            console.log("Name : ", request.name);
            console.log("Email : ", request.email);
            console.log("Password : ", request.password);
            postRequest(request);
        }
            
      }
)