// need custom js for this?

webgoat.customjs.idorViewProfile = function(data) {
    webgoat.customjs.jquery('#idor-profile').html(
        'name:' + (data.name || 'N/A') + '<br/>'+
        'color:' + (data.color || 'N/A') + '<br/>'+
        'size:' + (data.size || 'N/A') + '<br/>'
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