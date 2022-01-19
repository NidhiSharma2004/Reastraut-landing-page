// create a function which will run on click on submitbtn;


const submitbtn = document.getElementById("submitbtn");
submitbtn.addEventListener("click",submitReview)
// console.log(name.value)
    
function submitReview(){
    let userName = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let text = document.getElementById("text").value;
    let alert1 = document.querySelector(".alert1");
    let alert2 = document.querySelector(".alert2");
    let alert3 = document.querySelector(".alert3");
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(userName==''){
        alert1.innerHTML=`<h2>enter your name</h2>`
        alert1.style.display="block"

    }else if(email==''){
        alert2.innerHTML=`<h2>enter your email</h2>`
        alert2.style.display="block"
    }else if(!email.match(pattern)){
        alert2.innerHTML=`<h2>enter a valid email</h2>`
        alert2.style.display="block"
    }
    else if(text==''){
        alert3.innerHTML=`<h2>enter your suggestions</h2>`
        alert3.style.display="block"
    }else{
        document.querySelector(".formContainer").style.display="none";
        document.querySelector(".happyText").style.display="block"
    }
   
}

