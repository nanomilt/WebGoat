const showPasswordReset = function() {
  $('#password-reset').show();
  $('#password-login').hide();
  $('#password-reset-2').show();
  $('#password-login-2').hide();
};

const showPassword = function() {
  $('#password-login').show();
  $('#password-reset').hide();
  $('#password-login-2').show();
  $('#password-reset-2').hide();
};