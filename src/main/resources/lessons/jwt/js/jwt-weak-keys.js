$(document).ready(
  function() {
    let secretToken; // Define the variable with a default value
    $("#secrettoken").load('JWT/secret/gettoken', function(response) {
      secretToken = response; // Assign the response to the variable
    });
  }
);