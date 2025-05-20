// FIXED_CODE

function startFollowing(user) {
  $.ajax({
    type: 'POST',
    url: `JWT/kid/follow/${ user}`,
    success: function (result) {
      $('#toast').append(result);
    },
  });
}