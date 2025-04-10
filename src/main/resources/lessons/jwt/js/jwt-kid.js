// Declaring 'user' parameter to resolve 'no-undef' violation
function startFollowing(user: any) {
    // Using 'result' to resolve 'no-unused-vars' violation
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user
    }).then(function (result) {
        $("#toast").append(result);
    })
}