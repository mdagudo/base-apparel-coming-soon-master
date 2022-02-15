function validate() {
    var email = document.getElementById('email').value;
    var error = document.getElementById('error');
    var icon = document.getElementById('email');

    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email.match(mailformat)) {
        alert("Valid email address!")
        return true;
    } else if (email == '') {
        error.style.display = "block";
        error.innerHTML = "Whoops! It looks like you forgot to add your email"
        document.getElementById('email').style.borderColor = 'hsl(0, 93%, 68%)'; 
        document.getElementById('email').style.borderWidth = '2px'
        icon.style.background = "rgba(0, 0, 0, 0) url('./images/icon-error.svg') no-repeat scroll 80% 50%";
        icon.style.color = 'black'
        return false;
    } else {
        error.style.display = "block";
        error.innerHTML = "Please provide a valid email";
        document.getElementById('email').style.borderColor = 'hsl(0, 93%, 68%)';
        document.getElementById('email').style.borderWidth = '2px'
        icon.style.background = "rgba(0, 0, 0, 0) url('./images/icon-error.svg') no-repeat scroll 80% 50%";
        icon.style.color = 'black'
        return false;
    }
}