(function() {
  document.addEventListener("DOMContentLoaded", function(event) {
    var boxes = document.getElementsByClassName('box_content');
    Array.prototype.forEach.call(boxes, function(box) {
      box.addEventListener('click', showInfo);
      box.addEventListener('touchstart', showInfo);
    });
  });

  function showInfo(e) {
    e.preventDefault();
    var el_children = this.children;

    if (el_children[1].style.visibility !== 'visible') {
      el_children[0].style.visibility = 'hidden';
      el_children[1].style.visibility = 'visible';
    } else {
      el_children[1].style.visibility = 'hidden';
      el_children[0].style.visibility = 'visible';
    }
  }
})();
