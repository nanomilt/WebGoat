function startFollowing(user) {
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user,
        success: function (res) {
            $("#toast").append(res);
        }
    });
}