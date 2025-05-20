// Fixed code

webgoat.customjs.idorViewProfile = function(data) {
  const name = data.name || 'N/A'; // Defining name with a default value
  const color = data.color || 'N/A'; // Defining color with a default value
  const size = data.size || 'N/A'; // Defining size with a default value

  webgoat.customjs.jquery('#idor-profile').html(
    `name:${ name }<br/>`+
        `color:${ color }<br/>`+
        `size:${ size }<br/>`,
  );
};

const onViewProfile = function () {
  console.warn('on view profile activated');
  webgoat.customjs.jquery.ajax({
    method: 'GET',
    url: 'IDOR/profile',
    contentType: 'application/json; charset=UTF-8',
  }).then(webgoat.customjs.idorViewProfile);
};