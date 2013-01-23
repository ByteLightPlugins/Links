$(function () {
  $('#post').click(function (e) {
    var content = JSON.stringify({name:$('#name').val(), url:$('#url').val()});
    BL.createContent(content);
  });
});