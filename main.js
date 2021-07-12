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



var img = document.getElementById("fotos");
console.log(img);

  function imgDisp(num) {
    var num = Math.floor(Math.random()*14);
    img.style.backgroundImage = 'url(" ' + images[num] +'")';
    backgroundRepeat = "no-repeat";
    position: "centercenter";
  }

imgDisp();


var scale = 2,
  panning = false,
  pointX = 0,
  pointY = 0,
  start = { x: 0, y: 0 };
  // img = imgDisp();

  function setTransform() {
    img.style.transform = "scale(" + scale + ")";
  }
    //
    // pointX = (e.clientX - start.x);
    //       pointY = (e.clientY - start.y);
    //       setTransform();
    //     }

img.onwheel = function (e) {
  e.preventDefault();
  var xs = (e.clientX - pointX) / scale;
  var ys = (e.clientY - pointY) / scale;
  // var  delta = (e.wheelDelta ? e.wheelDelta : -e.deltaY (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
  var   pointX = e.clientX - xs * scale;
  var   pointY = e.clientY - ys * scale;
  setTransform();
  }
