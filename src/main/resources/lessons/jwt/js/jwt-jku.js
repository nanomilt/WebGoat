function follow(user) {
    let result;
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user
    }).then(function (_res) {
        result = _res;
        $("#toast").append(result);
    })
}