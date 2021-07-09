var images = [
    '/Volumes/information studio 2/Proyectos/2021/Website/Lessons R1/Images/00.JPG',
    'Images/01.JPG',
    'Images/02.JPG',
    'Images/03.JPG',
    'Images/04.JPG',
    'Images/05.JPG',
    'Images/06.JPG',
    'Images/07.JPG',
    'Images/08.JPG',
    'Images/09.JPG',
    'Images/10.JPG',
    'Images/11.JPG',
    'Images/12.JPG',
    'Images/13.JPG'
  ];

  var img = document.getElementById("fotos");

  function imgDisp() {
    var num = Math.floor(Math.random()*14);
    img.style.backgroundImage = 'url(" ' + images[num] +'")';
    backgroundRepeat = "no-repeat";
    position: "centercenter";
  }

imgDisp();


var scale =  2,
  panning = false,
  pointX = 0,
  pointY = 0,
  start = { x: 0, y: 0 },
  img = images;

  function setTransform() {
    imgDisp.style.transform = "scale(" + scale + ")";
  }

    // pointX = (e.clientX - start.x);
    //       pointY = (e.clientY - start.y);
    //       setTransform();
    //     }
//
imgDisp.onwheel = function (e) {
  // e.preventDefault();
  var xs = (e.clientX - pointX) / scale,
    ys = (e.clientY - pointY) / scale,
    delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
    (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
    pointX = e.clientX - xs * scale;
    pointY = e.clientY - ys * scale;
    setTransform();
  }
