$(function () {
  
  var content = JSON.parse(BL.getContentItem());
  var url = content.url;

  if (url.indexOf('http://') == -1 && url.indexOf('https://') == -1) {
    url = 'http://' + url;
  }

  window.location = url;
  
});