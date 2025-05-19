function startFollowing(user) {
    let result;
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user
    }).then(function (res) {
        result = res;
        $("#toast").append(result);
    }).catch(function(err) {
        console.error(err);
    });
}