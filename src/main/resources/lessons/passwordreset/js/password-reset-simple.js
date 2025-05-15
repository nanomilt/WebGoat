function showPasswordReset() {
    const $passwordReset = $('#password-reset');
    const $passwordLogin = $('#password-login');
    const $passwordReset2 = $('#password-reset-2');
    const $passwordLogin2 = $('#password-login-2');

    $passwordReset.show();
    $passwordLogin.hide();
    $passwordReset2.show();
    $passwordLogin2.hide();
}

function showPassword() {
    const $passwordLogin = $('#password-login');
    const $passwordReset = $('#password-reset');
    const $passwordLogin2 = $('#password-login-2');
    const $passwordReset2 = $('#password-reset-2');

    $passwordLogin.show();
    $passwordReset.hide();
    $passwordLogin2.show();
    $passwordReset2.hide();
}