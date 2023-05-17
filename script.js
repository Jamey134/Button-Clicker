// Login to Logout
function switchMe(element){
    console.log("he");
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    }
    else
        element.innerText = "Login"
}
// "Ninja was like" pop-up
function ninjaLiked(element){
    alert("Ninja was liked")
}

// Add definition button will disappear
function removeButton(element){
    element.remove();
}

