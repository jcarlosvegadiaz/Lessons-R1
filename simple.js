var images = [
    'images/00.JPG',
    'images/01.JPG',
    'images/02.JPG',
    'images/03.JPG',
    'images/04.JPG',
    'images/05.JPG',
    'images/06.JPG',
    'images/07.JPG',
    'images/08.JPG',
    'images/09.JPG',
    'images/10.JPG',
    'images/11.JPG',
    'images/12.JPG',
    'images/13.JPG'
  ];

$(window).load(function() {
  var num = Math.floor(Math.random() * 14);

  var img = $('<img id="fotos" src="' + images[num] + '" style="width:100%">');
  img.appendTo('#container');
  // img.style.backgroundRepeat = "no-repeat";
  // img.style.position = "centercenter";
  wheelzoom(img);
});