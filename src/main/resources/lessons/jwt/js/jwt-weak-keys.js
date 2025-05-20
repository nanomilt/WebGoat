$(document).ready(function() {
    let secretToken;
    $("#secrettoken").load('JWT/secret/gettoken', function(response) {
        secretToken = response;
    });
});