$(function() {
    // Declare variables globally
    let $loginFormLink, $registerFormLink;

    $loginFormLink = $('#login-form-link');
    $registerFormLink = $('#register-form-link');

    $loginFormLink.click(function(e) {
        $("#login-form").delay(100).fadeIn(100);
        $("#register-form").fadeOut(100);
        $registerFormLink.removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });
    $registerFormLink.click(function(e) {
        $("#register-form").delay(100).fadeIn(100);
        $("#login-form").fadeOut(100);
        $loginFormLink.removeClass('active');
        $(this).addClass('active');
        e.preventDefault();
    });

});