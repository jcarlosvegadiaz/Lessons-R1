var images = [
  {img:'backgroundimages/00.JPG',  link: './page2.html'},
  {img:'backgroundimages/01.JPG',  link: './page2.html'},
  {img:'backgroundimages/02.JPG',  link: './page2.html'},
  {img:'backgroundimages/03.JPG',  link: './page2.html'},
  {img:'backgroundimages/04.JPG',  link: './page2.html'},
  {img:'backgroundimages/05.JPG',  link: './page2.html'},
  {img:'backgroundimages/06.JPG',  link: './page2.html'},
  {img:'backgroundimages/07.JPG',  link: './page2.html'},
  {img:'backgroundimages/08.JPG',  link: './page2.html'},
  {img:'backgroundimages/09.JPG',  link: './page2.html'},
  {img:'backgroundimages/10.JPG',  link: './page3.html'},
  {img:'backgroundimages/11.JPG',  link: './page3.html'},
  {img:'backgroundimages/12.JPG',  link: './page3.html'},
  {img:'backgroundimages/13.JPG',  link: './page3.html'},
  {img:'backgroundimages/14.JPG',  link: './page3.html'},
  {img:'backgroundimages/15.JPG',  link: './page3.html'},
  {img:'backgroundimages/16.JPG',  link: './page3.html'},
  {img:'backgroundimages/17.JPG',  link: './page3.html'},
  {img:'backgroundimages/18.JPG',  link: './page3.html'},
  {img:'backgroundimages/19.JPG',  link: './page3.html'}
  ];

$(window).load(function() {
  var num = Math.floor(Math.random() * 20);

  var img = $('<img id="fotos" src="' + images[num].img + '" style="width:100%">');
  img.appendTo('#container');
  wheelzoom(img);
  var link=images[num].link;
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
          window.location = link;
        }
    });
  });

  var domImg = document.getElementById('fotos')
  observer.observe(domImg, { attributes : true, attributeFilter : ['style'] });
});