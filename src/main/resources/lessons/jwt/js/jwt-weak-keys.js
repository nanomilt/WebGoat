$(document).ready(() => {
  let secretToken; // Declare variable with default value
  $('#secrettoken').load('JWT/secret/gettoken', (response) => {
    secretToken = response; // Assign value to the variable
  });
});