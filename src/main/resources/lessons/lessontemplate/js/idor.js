// need custom js for this?

webgoat.customjs.idorViewProfile = function(data) {
    let name = data.name;
    let color = data.color;
    let size = data.size;
    webgoat.customjs.jquery('#idor-profile').html(
        'name:' + name + '<br/>'+
        'color:' + color + '<br/>'+
        'size:' + size + '<br/>'
    );
}

const onViewProfile = function () {
    console.warn("on view profile activated");
    webgoat.customjs.jquery.ajax({
        method: "GET",
        url: "IDOR/profile",
        contentType: 'application/json; charset=UTF-8'
     }).then(webgoat.customjs.idorViewProfile);
}