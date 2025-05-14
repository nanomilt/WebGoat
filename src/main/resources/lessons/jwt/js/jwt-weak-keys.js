let $ = require('jquery');

$(document).ready(function() {
  $("#secrettoken").load('JWT/secret/gettoken');
});