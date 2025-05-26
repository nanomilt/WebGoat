$(document).ready(() => {
  loadVotes();
  average();
});

function loadVotes() {
  $.get('challenge/8/votes/', (votes) => {
    let totalVotes = 0;
    for (let i = 1; i <= 5; i++) {
      totalVotes += votes[i] || 0; // Ensure votes[i] is defined
    }
    console.log(totalVotes);
    for (let i = 1; i <= 5; i++) {
      const percent = (votes[i] || 0) * 100 / totalVotes; // Ensure votes[i] is defined
      console.log(percent);
      const progressBar = $(`#progressBar${ i}`);
      progressBar.width(`${Math.round(percent) * 2 }%`);
      $(`#nrOfVotes${ i}`).html(votes[i] || 0); // Ensure votes[i] is defined
    }
  });
}

function average() {
  $.get('challenge/8/votes/average', (average) => {
    const averageNumber = average['average'] || 0; // Ensure average["average"] is defined
    for (let i = 1; i <= 5; i++) {
      $(`#star${ i}`).removeClass('btn-warning');
      $(`#star${ i}`).removeClass('btn-default');
      $(`#star${ i}`).removeClass('btn-grey');

      if (i <= averageNumber) {
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
    const resultError = result['error'];
    if (resultError) {
      $('#voteResultMsg').addClass('alert-danger alert-dismissable');
    } else {
      $('#voteResultMsg').addClass('alert-success alert-dismissable');
    }
    $('#voteResultMsg').html(result['message']);
    $('#voteResultMsg').show();
  });
  loadVotes();
  average();
}