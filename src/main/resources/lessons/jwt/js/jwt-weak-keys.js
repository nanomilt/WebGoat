let secrettoken;

$(document).ready(() => {
  secrettoken = $('#secrettoken').load('JWT/secret/gettoken');
});