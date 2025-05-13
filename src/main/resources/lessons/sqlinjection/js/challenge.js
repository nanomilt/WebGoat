$(function() {
    let loginFormLink = $('#login-form-link');
    let registerFormLink = $('#register-form-link');
    let loginForm = $("#login-form");
    let registerForm = $("#register-form");

    loginFormLink.click(function(e) {
        loginForm.delay(100).fadeIn(100);
        registerForm.fadeOut(100);
        registerFormLink.removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    registerFormLink.click(function(e) {
        registerForm.delay(100).fadeIn(100);
        loginForm.fadeOut(100);
        loginFormLink.removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
});