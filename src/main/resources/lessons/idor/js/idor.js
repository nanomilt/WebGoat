// need custom js for this?

const webgoat = {
  customjs: {
    idorViewProfile: function(data) {
      webgoat.customjs.jquery('#idor-profile').html(
        'name:' + data.name + '<br/>'+
                'color:' + data.color + '<br/>'+
                'size:' + data.size + '<br/>',
      );
    },
    jquery: {
      ajax: function(options) {
        // Mock ajax call
        const mockData = {
          name: 'John Doe',
          color: 'blue',
          size: 'large',
        };
        options.then(mockData);
      },
    },
  },
};

const onViewProfile = function () {
  console.warn('on view profile activated');
  webgoat.customjs.jquery.ajax({
    method: 'GET',
    url: 'IDOR/profile',
    contentType: 'application/json; charset=UTF-8',
  }).then(webgoat.customjs.idorViewProfile);
};