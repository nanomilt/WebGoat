$(document).ready(function () {
    loadVotes();
    average();
});

function loadVotes() {
    $.get("challenge/8/votes/", function (votes) {
        let totalVotes = 0;
        for (let i = 1; i <= 5; i++) {
            totalVotes += votes[i] || 0; // VIOLATION #1: Defining votes[i] with a default value of 0 to prevent undefined errors
        }
        console.log(totalVotes);
        for (let i = 1; i <= 5; i++) {
            const percent = (votes[i] || 0) * 100 / totalVotes; // VIOLATION #1: Defining votes[i] with a default value of 0 to prevent undefined errors
            console.log(percent);
            const progressBar = $('#progressBar' + i);
            progressBar.width(Math.round(percent) * 2 + '%');
            $("#nrOfVotes" + i).html(votes[i] || 0); // VIOLATION #1: Defining votes[i] with a default value of 0 to prevent undefined errors
        }
    });
}

function average() {
    $.get("challenge/8/votes/average", function (average) {
        for (let i = 1; i <= 5; i++) {
            const number = average["average"] || 0; // VIOLATION #1: Defining average["average"] with a default value of 0 to prevent undefined errors
            $("#star" + i).removeClass('btn-warning');
            $("#star" + i).removeClass('btn-default');
            $("#star" + i).removeClass('btn-grey');

            if (i <= number) {
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
        const error = result["error"] || false; // VIOLATION #1: Defining result["error"] with a default value of false to prevent undefined errors
        if (error) {
            $("#voteResultMsg").addClass('alert-danger alert-dismissable');
        } else {
            $("#voteResultMsg").addClass('alert-success alert-dismissable');
        }
        const message = result["message"] || ""; // VIOLATION #1: Defining result["message"] with a default value of an empty string to prevent undefined errors
        $("#voteResultMsg").html(message);
        $("#voteResultMsg").show();
    });
    loadVotes();
    average();
}