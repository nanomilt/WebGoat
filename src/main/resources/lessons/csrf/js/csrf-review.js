$(document).ready(function () {
    let html = '<li class="comment">' +
        '<div class="pull-left">' +
        '<img class="avatar" src="images/avatar1.png" alt="avatar"/>' +
        '</div>' +
        '<div class="comment-body">' +
        '<div class="comment-heading">' +
        '<h4 class="user">USER / STARS stars</h4>' +
        '<h5 class="time">DATETIME</h5>' +
        '</div>' +
        '<p>COMMENT</p>' +
        '</div>' +
        '</li>';

    getChallenges();

    function getChallenges() {
        $("#list").empty();
        $.get('csrf/review', function (result, _) {
            for (let i = 0; i < result.length; i++) {
                let comment = html.replace('USER', result[i].user);
                comment = comment.replace('DATETIME', result[i].dateTime);
                comment = comment.replace('COMMENT', result[i].text);
                comment = comment.replace('STARS', result[i].stars);
                $("#list").append(comment);
            }
        });
    }
});