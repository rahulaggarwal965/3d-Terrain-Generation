let scl = 20;
let terrain;

let w = 1200;
let h = 1000;

let canvas;

let cam;

function movePlayerLat() {
  let x = 0;
  let z = 0;
  if(keyIsDown(87)) {
    z -= 5;
  }
  if(keyIsDown(65)) {
    x -= 5;
  }
  if(keyIsDown(83)) {
    z += 5;
  }
  if(keyIsDown(68)) {
    x += 5;
  }
  cam.move(x, 0, z);
}

function movePlayerV() {
  let y = 0;
  if(keyIsDown(32)) {
    y -= 5;
  }
  if(keyIsDown(16)) {
    y += 5;
  }
  cam.move(0, y, 0);
}


// function updatePosition(e) {
//   mx = -e.movementX + mouseX;
//   my = -e.movementY + mouseY;
// }

// function lockChangeAlert() {
//   if( document.pointerLockElement === canvas || document.mozPointerLockElement === canvas) {
//     document.addEventListener("mousemove", updatePosition, false);
//   } else {
//     document.removeEventListener("mousemove", updatePosition, false);
//   }
// }

function canvasSetup(canvas) {
  // canvas = canvas.elt;
  // canvas.requestPointerLock = canvas.requestPointerLock || canvas.mozRequestPointerLock;
  // document.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock;
  //
  // //document.addEventListener('pointerlockchange', lockChangeAlert, false);
  // //document.addEventListener('mozpointerlockchange', lockChangeAlert, false);
  //
  // canvas.onclick = () => {
  //   canvas.requestPointerLock();
  // }
}

function setup() {
  canvas = createCanvas(600, 600, WEBGL);
  //canvasSetup(canvas);

  terrain = new Terrain(w/scl, h/scl, scl)

  cam = createCamera();

}

function draw() {


  movePlayerLat();
  movePlayerV();

  pointLight(255, 255, 255, 0, -600, -259);
  ambientLight(56);
  directionalLight(250, 250, 250, 0, -600, -250)
  terrain.render();
  //console.log(mouseX, mouseY);
  cam.lookAt(mouseX, mouseY, 0);


}

function keyPressed() {
  if(key == "h") {
    console.log(cam);
  }
}
