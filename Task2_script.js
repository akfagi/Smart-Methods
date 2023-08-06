document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.getElementById('canvas');
  const context = canvas.getContext('2d');

  function drawPath(startX, startY, endX, endY) {
    context.beginPath();
    context.moveTo(startX, startY);
    context.lineTo(endX, endY);
    context.stroke();
  }

  const moveForwardButton = document.getElementById('moveForward');
  moveForwardButton.addEventListener('click', function() {
    drawPath(400, 300, 400, 100);
  });

  const moveRightButton = document.getElementById('moveRight');
  moveRightButton.addEventListener('click', function() {
    drawPath(400, 300, 600, 300);
  });

  const moveLeftButton = document.getElementById('moveLeft');
  moveLeftButton.addEventListener('click', function() {
    drawPath(400, 300, 200, 300);
  });

  const moveBackwardButton = document.getElementById('moveBackward');
  moveBackwardButton.addEventListener('click', function() {
    drawPath(400, 300, 400, 500);
  });
});



function savePath() {
   var direction = document.getElementById("direction").value;
   var distance = document.getElementById("distance").value;

   var formData = new FormData();
   formData.append("direction", direction);
   formData.append("distance", distance);

   fetch("save_path.php", {
      method: "POST",
      body: formData
   })
   .then(response => response.text())
   .then(result => {
      console.log(result);
      // Add code to handle the response as desired
   })
   .catch(error => console.log(error));
}