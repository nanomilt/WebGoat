$(document).ready(function () {
    loadVotes();
    average();
});

function loadVotes() {
    $.get("challenge/8/votes/", function (votes) {
        let totalVotes = 0;
        for (let i = 1; i <= 5; i++) {
            totalVotes += votes[i] || 0;
        }
        console.log(totalVotes);
        for (let i = 1; i <= 5; i++) {
            const percent = (votes[i] || 0) * 100 / totalVotes;
            console.log(percent);
            const progressBar = $('#progressBar' + i);
            progressBar.width(Math.round(percent) * 2 + '%');
            $("#nrOfVotes" + i).html(votes[i] || 0);
        }
    });
}

function average() {
    $.get("challenge/8/votes/average", function (data) {
        const average = data.average;
        for (let i = 1; i <= 5; i++) {
            $("#star" + i).removeClass('btn-warning');
            $("#star" + i).removeClass('btn-default');
            $("#star" + i).removeClass('btn-grey');

            if (i <= average) {
                $("#star" + i).addClass('btn-warning');
            } else {
                $("#star" + i).addClass('btn-grey');
            }
        }
    });
}

function doVote(stars) {
    $("#voteResultMsg").hide();
    $.get("challenge/8/vote/" + stars, function (result) {
        if (result.error) {
            $("#voteResultMsg").addClass('alert-danger alert-dismissable');
        } else {
            $("#voteResultMsg").addClass('alert-success alert-dismissable');
        }
        $("#voteResultMsg").html(result.message);
        $("#voteResultMsg").show();
    });
    loadVotes();
    average();
}