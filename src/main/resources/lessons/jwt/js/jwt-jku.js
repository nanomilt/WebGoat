function follow(user) {
  let result;
  $.ajax({
    type: 'POST',
    url: `JWT/kid/follow/${ user}`,
  }).then((_) => {
    result = _;
    $('#toast').append(result);
  });
}