// FIXED_CODE

$(document).ready(
  () =>{
    let token;
    $('#secrettoken').load('JWT/secret/gettoken', (response) => {
      token = response;
    });
  },
);