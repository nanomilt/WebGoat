let webgoat = {};

webgoat.customjs = {
  simpleXXE: function() {
    const commentInput = $("#commentInputSimple").val();
    const xml = '<?xml version="1.0"?>' +
      '<comment>' +
      '  <text>' + commentInput + '</text>' +
      '</comment>';
    return xml;
  },

  simpleXXECallback: function() {
    $("#commentInputSimple").val('');
    getComments('#commentsListSimple');
  },

  contentTypeXXE: function() {
    const commentInput = $("#commentInputContentType").val();
    return JSON.stringify({text: commentInput});
  },

  contentTypeXXECallback: function() {
    $("#commentInputContentType").val('');
    getComments('#commentsListContentType');
  },

  blindXXE: function() {
    const commentInput = $("#commentInputBlind").val();
    const xml = '<?xml version="1.0"?>' +
      '<comment>' +
      '  <text>' + commentInput + '</text>' +
      '</comment>';
    return xml;
  },

  blindXXECallback: function() {
    $("#commentInputBlind").val('');
    getComments('#commentsListBlind');
  }
};

$(document).ready(function() {
  getComments('#commentsListSimple');
  getComments('#commentsListContentType');
  getComments('#commentsListBlind');
});

const html = '<li class="comment">' +
  '<div class="pull-left">' +
  '<img class="avatar" src="images/avatar1.png" alt="avatar"/>' +
  '</div>' +
  '<div class="comment-body">' +
  '<div class="comment-heading">' +
  '<h4 class="user">USER</h4>' +
  '<h5 class="time">DATETIME</h5>' +
  '</div>' +
  '<p>COMMENT</p>' +
  '</div>' +
  '</li>';

function getComments(field) {
  $.get("xxe/comments", function(result, _status) {
    $(field).empty();
    for (let i = 0; i < result.length; i++) {
      let comment = html.replace('USER', result[i].user);
      comment = comment.replace('DATETIME', result[i].dateTime);
      comment = comment.replace('COMMENT', result[i].text);
      $(field).append(comment);
    }
  });
}