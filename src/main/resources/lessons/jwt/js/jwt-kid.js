function startFollowing(user) {
    let result;
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user
    }).then(function (_) {
        result = _;
        $("#toast").append(result);
    })
}