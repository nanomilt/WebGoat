// FIXED_CODE

function startFollowing(user) {
  $.ajax({
    type: 'POST',
    url: `JWT/kid/follow/${ user}`,
  }).then((response) => {
    $('#toast').append(response);
  });
}