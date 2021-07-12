console.log("Background.js Line 1 is running !");
const url = "http://localhost:8000/post";

function get_post_Request(){
    // $.ajax({    
    // type: "GET",
    // url: url,
    // success: (data,status)=> {
    //     console.log("success ajax post " , data);
    //     console.log(data);
    //     console.log(status);
    // },
    // error:()=>{
    //     console.log("error ajax post");
    // }
    // });
    $.ajax({    
    type: "POST",
    url: url,
    data:{"test data" : "This is the test data for POST req from bg.js"},
    success: (data,status)=> {
        console.log("success ajax post " , data, " this is the data");
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
            console.log( request.title);
            console.log("Name : ", request.name);
            console.log("Email : ", request.email);
            console.log("Password : ", request.password);
        }
            
      }
)