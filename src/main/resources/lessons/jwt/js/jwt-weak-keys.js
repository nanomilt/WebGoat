let secrettoken;

$(document).ready(function() {
    secrettoken = $("#secrettoken").load('JWT/secret/gettoken');
});