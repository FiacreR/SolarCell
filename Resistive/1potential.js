let leftSide, rightSide, topSide, bottomSide, middle, spring, k, a, electronMembrane, holeMembrane, metal, angle, rotationSpeed, pyramids, monofacial;
let photons = [];
let holes = [];
let electrons = [];
let phonons = [];

function setup() {
  initialise(16, 60, 2, 10);
  for (let l = 0; l < 20; l++) {
    x1 = random(leftSide,rightSide);
    y1 = random(topSide,bottomSide)
    pvx = random(-1,1);
    pvy = random(-1,1);
    let phonon = new Phonon(x1, y1,pvx,pvy, phonons);
    phonons.push(phonon);
  }
  reset();
}

function reset() {
  let electron = new Electron(leftSide,topSide,k,electrons,2,0);       
  electrons.push(electron);
let electron1 = new Electron(leftSide,topSide+10,k,electrons,2,0);       
  electrons.push(electron1);
}

function draw() {
  if(frameCount % 5 === 0){
    reset();
  }
  displayCellElements(1,0,0,0,0,0,1);
  displayLegend(1,1,1,0,0,0,1,1);
  deleteElectronRight();
  electronPhononInteraction(1);
  electrons.forEach(electron => {
    electron.move();
    electron.display();
  });
}