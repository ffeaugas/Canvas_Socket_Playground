function loadGame() {
  let rectPos = { x: 10, y: 10 };
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "rgb(200, 30, 150)";
  setInterval(() => {
    ctx.clearRect(0, 0, 300, 300);
    if (rectPos.x >= 290) rectPos.x = 10;
    else rectPos.x += 10;
    console.log("RECTPOS :  ", rectPos);
    ctx.fillRect(rectPos.x, rectPos.y, 10, 10);
  }, 1000);
}

loadGame();
