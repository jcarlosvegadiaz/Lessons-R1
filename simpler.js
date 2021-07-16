var images = [
  'images/11 nformation.png'
];

$(window).load(function() {
  var num = Math.floor(Math.random() * 1);
  var img = $('<img id="fotos" src="' + images[num] + '" style="width:100%">');
  img.appendTo('#nformation');
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
        if (backgroundSizeX > 90000) {
          window.location = './page3.html'
        }
    });
  });

  var domImg = document.getElementById('fotos')
  observer.observe(domImg, { attributes : true, attributeFilter : ['style'] });
// });