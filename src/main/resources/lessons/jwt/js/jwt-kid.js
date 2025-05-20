function startFollowing(user) {
    let result;
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user
    }).then(function (response) {
        result = response;
        $("#toast").append(result);
    })
}