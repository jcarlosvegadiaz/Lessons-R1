var images = [
    'backgroundimages/00.JPG',
    'backgroundimages/01.JPG',
    'backgroundimages/02.JPG',
    'backgroundimages/03.JPG',
    'backgroundimages/04.JPG',
    'backgroundimages/05.JPG',
    'backgroundimages/06.JPG',
    'backgroundimages/07.JPG',
    'backgroundimages/08.JPG',
    'backgroundimages/09.JPG',
    'backgroundimages/10.JPG',
    'backgroundimages/11.JPG',
    'backgroundimages/12.JPG',
    'backgroundimages/13.JPG',
    'backgroundimages/14.JPG',
    'backgroundimages/15.JPG',
    'backgroundimages/16.JPG',
    'backgroundimages/17.JPG',
    'backgroundimages/18.JPG',
    'backgroundimages/19.JPG'
  ];

$(window).load(function() {
  var num = Math.floor(Math.random() * 20);

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
        if (backgroundSizeX > 30000) {
          window.location = './page2.html'
        }
    });
  });

  var domImg = document.getElementById('fotos')
  observer.observe(domImg, { attributes : true, attributeFilter : ['style'] });
});