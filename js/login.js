// login form Validation .
document.getElementById('login-submit').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail =emailField.value;
    // get user Password
    const passwordField = document.getElementById('user-password')
    const userPassword = passwordField.value;
    //Check email and password
    if(userEmail == 'sontan@baap.com' && userPassword == 'secret'){
        window.location.href= 'banking.html'
    }
});

