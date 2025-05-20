function startFollowing(user) {
    let result = null; // Defining result with a default value
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user
    }).then(function (response) {
        result = response;
        $("#toast").append(result);
    })
}