// need custom js for this?

webgoat.customjs.idorViewProfile = function(data) {
    const _ = webgoat.customjs.jquery;
    _('#idor-profile').html(
        'name:' + data.name + '<br/>'+
        'color:' + data.color + '<br/>'+
        'size:' + data.size + '<br/>'
    );
}

const onViewProfile = function () {
    console.warn("on view profile activated");
    const _ = webgoat.customjs.jquery;
    _.ajax({
        method: "GET",
        url: "IDOR/profile",
        contentType: 'application/json; charset=UTF-8'
     }).then(webgoat.customjs.idorViewProfile);
}