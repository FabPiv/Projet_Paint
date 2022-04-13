
function makeDraggable(evt) {
    var svg = evt.target;

    svg.addEventListener('mousedown', startDrag);
    svg.addEventListener('mousemove', drag);
    svg.addEventListener('mouseup', endDrag);
    svg.addEventListener('mouseleave', endDrag);
    svg.addEventListener('touchstart', startDrag);
    svg.addEventListener('touchmove', drag);
    svg.addEventListener('touchend', endDrag);
    svg.addEventListener('touchleave', endDrag);
    svg.addEventListener('touchcancel', endDrag);

    var selectedElement, offset, transform,
        bbox, minX, maxX, minY, maxY, confined;

    var boundaryX1 = 5; //limite gauche
    var boundaryX2 = 30; // limite droite
    var boundaryY1 = 0; //limite haut
    var boundaryY2 = 17; //limite bas

    function getMousePosition(evt) {
      var CTM = svg.getScreenCTM();
      if (evt.touches) { evt = evt.touches[0]; }
      return {
        x: (evt.clientX - CTM.e) / CTM.a,
        y: (evt.clientY - CTM.f) / CTM.d
      };
    }

    function startDrag(evt) {
      if (evt.target.classList.contains('draggable')) {
        selectedElement = evt.target;
        offset = getMousePosition(evt);

        // Make sure the first transform on the element is a translate transform
        var transforms = selectedElement.transform.baseVal;

        if (transforms.length === 0 || transforms.getItem(0).type !== SVGTransform.SVG_TRANSFORM_TRANSLATE) {
          // Create an transform that translates by (0, 0)
          var translate = svg.createSVGTransform();
          translate.setTranslate(0, 0);
          selectedElement.transform.baseVal.insertItemBefore(translate, 0);
        }

        // Get initial translation
        transform = transforms.getItem(0);
        offset.x -= transform.matrix.e;
        offset.y -= transform.matrix.f;

        confined = evt.target.classList.contains('confine');
        if (confined) {
            bbox = selectedElement.getBBox();
            minX = boundaryX1 - bbox.x;
            maxX = boundaryX2 - bbox.x - bbox.width;
            minY = boundaryY1 - bbox.y;
            maxY = boundaryY2 - bbox.y - bbox.height;
        }
      }
    }

    function drag(evt) {
      if (selectedElement) {
        evt.preventDefault();

        var coord = getMousePosition(evt);
        var dx = coord.x - offset.x;
        var dy = coord.y - offset.y;

        if (confined) {
            if (dx < minX) { dx = minX; }
            else if (dx > maxX) { dx = maxX; }
            if (dy < minY) { dy = minY; }
            else if (dy > maxY) { dy = maxY; }
        }

        transform.setTranslate(dx, dy);
      }
    }

    function endDrag(evt) {
      selectedElement = false;
    }
  }
  //afficher ou supprimer carré
  function showCarre() {
    var x = document.getElementById("square");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function showCercle() {
    var x = document.getElementById("Circle");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function showStar() {
    var x = document.getElementById("etoile");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  function showRect() {
    var x = document.getElementById("rec");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  //changer couleur 
  function changeSquareColor(input) {
     var color = input.value;
    var sqc = document.getElementById('square');
    sqc.style.fill = color;
  }
  function changeCircleColor(input) {
     var color = input.value;
    var sqc = document.getElementById('Circle');
    sqc.style.fill = color;
  }
  function changeRectColor(input) {
     var color = input.value;
    var sqc = document.getElementById('rec');
    sqc.style.fill = color;
  }
  function changeStarColor(input) {
     var color = input.value;
    var sqc = document.getElementById('etoile');
    sqc.style.fill = color;
  }
 