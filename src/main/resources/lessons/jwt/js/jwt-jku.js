function follow(user) {
  let result = null; // Defining result with a default value to avoid undefined
  $.ajax({
    type: 'POST',
    url: `JWT/kid/follow/${ user}`,
  }).then((_) => { // Unused parameter replaced with _
    result = _;
    $('#toast').append(result);
  });
}