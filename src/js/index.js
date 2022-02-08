window.onload = function(){
  // var node = document.getElementById('divisor');
  var btn = document.getElementById('btn-download');

  btn.onclick = function() {
    domtoimage.toBlob(document.getElementById('divisor'))
      .then(function(blob) {
        window.saveAs(blob, 'img.png');
      });
  }
}