


function validation(){
    const form = document.getElementById("form");
    console.log(form);
    const email = document.getElementById("email").value;
    const text = document.getElementById("text");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(emailPattern.test(email)){
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email ID is valid";
        text.style.color = '#54E6AF';
    }else{
        form.classList.add("invalid");
        form.classList.remove("valid");
        text.innerHTML = "Oops! Please check your email";
        text.style.color = '#FB3E3E';
    }
}