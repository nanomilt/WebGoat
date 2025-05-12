let globallyDeclaredA;

function follow(user) {
    $.ajax({
        type: 'POST',
        url: 'JWT/kid/follow/' + user
    }).then(function (result) {
        const bar = globallyDeclaredA + 1;
        $("#toast").append(result);
    })
}