document.getElementById("forgetPasswordButton").onclick = (event) => {


    document.getElementsByClassName("forgetPassword")[0].style.display = "block";
    document.getElementsByClassName("forgetPassword")[0].style.position = "absolute";
    
    document.getElementsByClassName("left")[0].style.filter = "blur(8px)";
    document.getElementsByClassName("left")[0].style.opacity = "0.8";

    document.getElementsByClassName("heading")[0].style.filter = "blur(8px)";
    document.getElementsByClassName("heading")[0].style.opacity = "0.8";

    document.getElementsByClassName("forms")[0].style.filter = "blur(8px)";
    document.getElementsByClassName("forms")[0].style.opacity = "0.8";
};

document.getElementById("cancel").onclick = ()=> {
    location.reload();
}
