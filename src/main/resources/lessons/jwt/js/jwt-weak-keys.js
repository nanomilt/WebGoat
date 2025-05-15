window.$ = window.jQuery;

$(document).ready(function() {
  $('#secrettoken').load('JWT/secret/gettoken');
});