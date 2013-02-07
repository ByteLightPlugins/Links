$(function () {
  var content = JSON.parse(BL.getContentForPreview().content[0].data);
  var id = BL.getContentForPreview().content[0].id;

  $('.box-left').html(content.name);

  $('button').click(function (e) {
    BL.showContent(id);
  });
  
  BL.previewReady();
});