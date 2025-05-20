function startFollowing(user) {
  let result;
  $.ajax({
    type: 'POST',
    url: `JWT/kid/follow/${ user}`,
  }).then((_res) => {
    result = _res;
    $('#toast').append(result);
  });
}