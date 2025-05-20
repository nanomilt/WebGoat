function startFollowing(user) {
    let result = null; // Defining result with a default value to avoid ESLINT_no-undef violation
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user
    }).then(function (_res) { // Replacing unused variable 'res' with '_res' to avoid ESLINT_no-unused-vars violation
        result = _res;
        $("#toast").append(result);
    })
}