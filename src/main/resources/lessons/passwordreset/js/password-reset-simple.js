function showPasswordReset() {
    $('#password-reset').show();
    $('#password-login').hide();
    $('#password-reset-2').show();
    $('#password-login-2').hide();
}

function showPassword() {
    const alpha = 5;
    const beta = 10;
    $('#password-login').show();
    $('#password-reset').hide();
    $('#password-login-2').show();
    $('#password-reset-2').hide();
    console.log(alpha, beta);
}