// Fixing VIOLATION #1: ESLINT_no-undef
const onBypassResponse = function(data) {
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

// Fixing VIOLATION #2: ESLINT_no-unused-vars
webgoat.customjs.onBypassResponse = onBypassResponse;