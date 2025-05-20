// FIXED_CODE
$(document).ready(function() {
    let secretToken; // Declare the variable with a default value
    $("#secrettoken").load('JWT/secret/gettoken', function(response) {
        secretToken = response; // Assign the response to the variable
        // Use the secretToken variable as needed
    });
});