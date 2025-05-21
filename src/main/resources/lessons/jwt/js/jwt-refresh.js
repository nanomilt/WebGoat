$(document).ready(() => {
  login('Jerry');
});

function login(user) {
  $.ajax({
    type: 'POST',
    url: 'JWT/refresh/login',
    contentType: 'application/json',
    data: JSON.stringify({user, password: 'bm5nhSkxCXZkKRy4'}),
  }).success(
    (response) => {
      localStorage.setItem('access_token', response['access_token']);
      localStorage.setItem('refresh_token', response['refresh_token']);
    },
  );
}

webgoat.customjs.addBearerToken = function () {
  const headers_to_set = {};
  headers_to_set['Authorization'] = `Bearer ${ localStorage.getItem('access_token')}`;
  return headers_to_set;
};

function newToken() {
  const refreshToken = localStorage.getItem('refresh_token');
  $.ajax({
    headers: {
      'Authorization': `Bearer ${ localStorage.getItem('access_token')}`,
    },
    type: 'POST',
    url: 'JWT/refresh/newToken',
    data: JSON.stringify({refreshToken}),
  }).success(
    (response) => {
      localStorage.setItem('access_token', response['access_token']);
      localStorage.setItem('refresh_token', response['refresh_token']);
    },
  );
}