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
    'images/10.JPG'
  ];

$(window).load(function() {
  var num = Math.floor(Math.random() * 11);

  var img = $('<img id="fotos" src="' + images[num] + '" style="width:100%">');
  img.appendTo('#container');
  wheelzoom(img);
  // to go to page2 just set the window.location
  // window.location = 'page2.html'
  // you'll want to listen to the change events on the img for when the background-size changes

  var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutationRecord) {
        console.log('style changed!');
        console.log(mutationRecord)
        console.log(mutationRecord.target.style.backgroundSize)
        var backgroundSizeX = Number((mutationRecord.target.style.backgroundSize).split('px ')[0])
        var backgroundSizeY = Number((mutationRecord.target.style.backgroundSize).split('px')[1].trim())
        console.log(backgroundSizeX)
        console.log("THE TYPE is " + typeof(backgroundSizeX))
        console.log(backgroundSizeY)
        if (backgroundSizeX > 10000) {
          window.location = './page2.html'
        }
    });
  });

  var domImg = document.getElementById('fotos')
  observer.observe(domImg, { attributes : true, attributeFilter : ['style'] });
});