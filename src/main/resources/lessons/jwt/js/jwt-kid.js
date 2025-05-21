let result;

function startFollowing(user) {
  $.ajax({
    type: 'POST',
    url: `JWT/kid/follow/${ user}`,
  }).then((res) => {
    result = res;
    $('#toast').append(result);
  });
}