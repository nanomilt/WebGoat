function follow(user) {
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user
    }).then(function (res) {
        const result = res;
        $("#toast").append(result);
    })
}