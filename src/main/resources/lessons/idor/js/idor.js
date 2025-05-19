// need custom js for this?

webgoat.customjs.idorViewProfile = function(data) {
    const $ = webgoat.customjs.jquery; // Declare $ variable
    $('#idor-profile').html(
        'name:' + data.name + '<br/>'+
        'color:' + data.color + '<br/>'+
        'size:' + data.size + '<br/>'
    );
}

const onViewProfile = function () { // Declare onViewProfile as const
    console.warn("on view profile activated");
    const $ = webgoat.customjs.jquery; // Declare $ variable
    $.ajax({
        method: "GET",
        url: "IDOR/profile",
        contentType: 'application/json; charset=UTF-8'
     }).then(webgoat.customjs.idorViewProfile);
}