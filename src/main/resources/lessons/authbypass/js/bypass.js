// need custom js for this?
let data; // Added declaration for 'data' to fix no-undef violation

webgoat.customjs = webgoat.customjs || {};

webgoat.customjs.onBypassResponse = function(data) {
    webgoat.customjs.jquery('#verify-account-form').hide();
    webgoat.customjs.jquery('#change-password-form').show();
}

const onViewProfile = function () {
    console.warn("on view profile activated");
    webgoat.customjs.jquery.ajax({
        method: "GET",
        url: "IDOR/profile",
        contentType: 'application/json; charset=UTF-8'
    }).then(webgoat.customjs.idorViewProfile);
}