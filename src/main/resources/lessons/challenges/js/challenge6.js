$(function() {
    var $loginFormLink = $('#login-form-link');
    var $registerFormLink = $('#register-form-link');
    var $loginForm = $("#login-form");
    var $registerForm = $("#register-form");

    $loginFormLink.click(function(e) {
        $loginForm.delay(100).fadeIn(100);
        $registerForm.fadeOut(100);
        $registerFormLink.removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $registerFormLink.click(function(e) {
        $registerForm.delay(100).fadeIn(100);
        $loginForm.fadeOut(100);
        $loginFormLink.removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
});