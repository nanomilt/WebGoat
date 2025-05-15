function startFollowing(user) {
  let result;
  $.ajax({
    type: 'POST',
    url: 'JWT/kid/follow/' + user,
    success: function (res) {
      result = res;
      $('#toast').append(result);
    },
  });
}