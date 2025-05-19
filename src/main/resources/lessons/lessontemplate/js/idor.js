// need custom js for this?

const webgoat = {
  customjs: {
    jquery: {
      ajax: function(options) {
        // Simulating an AJAX request
        const data = {
          name: 'John Doe',
          color: 'blue',
          size: 'large'
        };
        options.then(options.then(data));
      },
      html: function(content) {
        // Simulating setting HTML content
        console.log(content);
      }
    }
  }
};

webgoat.customjs.idorViewProfile = function(data) {
  webgoat.customjs.jquery.html(
    'name:' + data.name + '<br/>' +
    'color:' + data.color + '<br/>' +
    'size:' + data.size + '<br/>'
  );
};

const onViewProfile = function() {
  console.warn("on view profile activated");
  webgoat.customjs.jquery.ajax({
    method: "GET",
    url: "IDOR/profile",
    contentType: 'application/json; charset=UTF-8'
  }).then(webgoat.customjs.idorViewProfile);
};

// FIXED_CODE