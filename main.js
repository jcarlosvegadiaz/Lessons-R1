
  var images = document.getElementById("estas");



  function imgDisp(num) {
    var num = Math.floor(Math.random()*14);
    estas.style.backgroundImage = 'url(" ' + images[num] +'")';
  }

imgDisp();

// DOM= vincularlo en el document something modelvincular variable fotos con

var scale =  2,
  panning = false,
  pointX = 0,
  pointY = 0,
  start = { x: 0, y: 0 },
  img = estas;

  function setTransform() {
    estas.style.transform = "scale(" + scale + ")";
  }

    // pointX = (e.clientX - start.x);
    //       pointY = (e.clientY - start.y);
    //       setTransform();
    //     }
//
estas.onwheel = function (e) {
  e.preventDefault();
  var xs = (e.clientX - pointX) / scale,
    ys = (e.clientY - pointY) / scale,
    delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
    (delta > 0) ? (scale *= 1.2) : (scale /= 1.2);
    pointX = e.clientX - xs * scale;
    pointY = e.clientY - ys * scale;
    setTransform();
  }
