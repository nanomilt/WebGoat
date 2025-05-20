$(document).ready(() => {
  loadVotes();
  average();
});

function loadVotes() {
  $.get('challenge/8/votes/', (votes) => {
    let totalVotes = 0;
    for (let i = 1; i <= 5; i++) {
      totalVotes += votes[i] || 0; // Define votes[i] with a default value of 0 if undefined
    }
    console.log(totalVotes);
    for (let i = 1; i <= 5; i++) {
      const percent = (votes[i] || 0) * 100 / totalVotes; // Define votes[i] with a default value of 0 if undefined
      console.log(percent);
      const progressBar = $(`#progressBar${ i}`);
      progressBar.width(`${Math.round(percent) * 2 }%`);
      $(`#nrOfVotes${ i}`).html(votes[i] || 0); // Display 0 if votes[i] is undefined
    }
  });
}

function average() {
  $.get('challenge/8/votes/average', (average) => {
    for (let i = 1; i <= 5; i++) {
      const number = average.average || 0; // Define average.average with a default value of 0 if undefined
      $(`#star${ i}`).removeClass('btn-warning');
      $(`#star${ i}`).removeClass('btn-default');
      $(`#star${ i}`).removeClass('btn-grey');

      if (i <= number) {
        $(`#star${ i}`).addClass('btn-warning');
      } else {
        $(`#star${ i}`).addClass('btn-grey');
      }
    }
  });
}

function doVote(stars) {
  $('#voteResultMsg').hide();
  $.get(`challenge/8/vote/${ stars}`, (result) => {
    if (result.error) {
      $('#voteResultMsg').addClass('alert-danger alert-dismissable');
    } else {
      $('#voteResultMsg').addClass('alert-success alert-dismissable');
    }
    $('#voteResultMsg').html(result.message);
    $('#voteResultMsg').show();
  });
  loadVotes();
  average();
}