function array2D(cols, rows) {
  let arr = new Array(cols);
  for( let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
}

class Terrain {
  constructor(cols, rows, scl) {
    this.scl = scl;
    this.cols = cols;
    this.rows = rows;
    this.tArray = array2D(cols, rows);
  }

  render() {
    let yoff = 0;
    for (let y = 0; y < this.rows; y++) {
      let xoff = 0;
      for (let x = 0; x < this.cols; x++) {
        this.tArray[x][y] = map(noise(xoff, yoff), 0, 1, -115, 115);
        xoff += 0.1;
      }
      yoff += 0.1;
    }

    rotateX(PI/2.5)
    translate(-w/2, -h/2)

    background(0);
    strokeWeight(1);
    stroke(32);
    fill(255);

    ambientMaterials(250);
    for (let y = 0; y < this.rows - 1; y++) {
      beginShape(TRIANGLE_STRIP);
      for (let x = 0; x < this.cols; x++) {
        vertex(x * this.scl, y * this.scl, this.tArray[x][y]);
        vertex(x * this.scl, (y+1) * this.scl, this.tArray[x][y+1]);
      }
      endShape();
    }
  }
}
