function follow(user) {
    let result = null; // Defining result with a default value to avoid "no-undef" violation
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user
    }).then(function (response) {
        result = response;
        $("#toast").append(result);
    })
}