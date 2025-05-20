// Fixed code

webgoat.customjs.idorViewProfile = function(data) {
  const $ = webgoat.customjs.jquery; // Define $ as webgoat.customjs.jquery
  $('#idor-profile').html(
    `name:${ data.name }<br/>`+
        `color:${ data.color }<br/>`+
        `size:${ data.size }<br/>`,
  );
};

const onViewProfile = function () {
  const $ = webgoat.customjs.jquery; // Define $ as webgoat.customjs.jquery
  console.warn('on view profile activated');
  $.ajax({
    method: 'GET',
    url: 'IDOR/profile',
    contentType: 'application/json; charset=UTF-8',
  }).then(webgoat.customjs.idorViewProfile);
};