function startFollowing(user) {
  let result = null; // Defining result with a default value to avoid ESLINT_no-undef violation
  $.ajax({
    type: 'POST',
    url: `JWT/kid/follow/${ user}`,
  }).then((res) => {
    result = res;
    $('#toast').append(result);
  });
}