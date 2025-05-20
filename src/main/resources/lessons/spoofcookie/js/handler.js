function getCookieValue() {
  const cookie = document.cookie.match(new RegExp('(^| )spoof_auth=([^;]+)'));
  if (cookie !== null)
  {return cookie[2];}
  return null;
}

function cleanup() {
  document.cookie = 'spoof_auth=;Max-Age=0;secure=true';
  $('#spoof_username').removeAttr('disabled');
  $('#spoof_password').removeAttr('disabled');
  $('#spoof_submit').removeAttr('disabled');
  $('#spoof_attack_feedback').html('');
  $('#spoof_attack_output').html('');
}

const target = document.getElementById('spoof_attack_feedback');

const obs = new MutationObserver((mutations) => {
  mutations.forEach(() => {
    const cookie = getCookieValue();
    if (cookie !== null) {
      $('#spoof_username').prop('disabled', true);
      $('#spoof_password').prop('disabled', true);
      $('#spoof_submit').prop('disabled', true);
    }
  });
});

obs.observe(target, { characterData: false, attributes: false, childList: true, subtree: false });