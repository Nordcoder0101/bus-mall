'use strict';

var frameOne = document.getElementById('frame_one');
var frameTwo = document.getElementById('frame_two');
var frameThree = document.getElementById('frame_three');
var theFrames = [frameOne, frameTwo, frameThree];

var randomThreeNumbers = [];
var counterToEnd = 0;
var isShown = false;

function Products(item, picAddress){
  this.item = item;
  this.picAddress = picAddress;
  this.amountClicked = 0;
  this.amountShown = 0;
  this.isClicked = false;
  this.shownLast = false;
}

var bag = new Products('bag', 'assets/bag.jpg');
var banana = new Products('banana', 'assets/banana.jpg');
var bathroom = new Products('bathroom fixture', 'assets/bathroom.jpg');
var boots = new Products('boots', 'assets/boots.jpg');
var breakfast = new Products('breakfast maker', 'assets/breakfast.jpg');
var bubbleGum = new Products('meatball bubblegum', 'assets/bubblegum.jpg');
var chair = new Products('chair', 'assets/chair.jpg');
var cthulhu = new Products('cthulhu', 'assets/cthulhu.jpg');
var dogDuck = new Products('dog duck', 'assets/dog-duck.jpg');
var dragon = new Products('dragon meat', 'assets/dragon.jpg');
var pen = new Products('cutlery pens', 'assets/pen.jpg');
var petSweep = new Products('pet sweeper', 'assets/pet-sweep.jpg');
var scissors = new Products('scissors', 'assets/scissors.jpg');
var shark = new Products('toy shark', 'assets/shark.jpg');
var babySweep = new Products('baby sweeper', 'assets/sweep.png');
var tauntaun = new Products('tuantuan', 'assets/tauntaun.jpg');
var unicorn = new Products('unicorn meat', 'assets/unicorn.jpg');
var usb = new Products('usb tentacle', 'assets/usb.gif');
var waterCan = new Products('water can', 'assets/water-can.jpg');
var wineGlass = new Products('pet sweeper', 'assets/wine-glass.jpg');

var busMallInv = [bag, banana, bathroom, boots, breakfast, bubbleGum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, babySweep, tauntaun, unicorn, usb, waterCan, wineGlass]; //This will be my array of objects containing item info*//

function rng() {
  return Math.floor(Math.random() * (20));
};


function findThreeItems(){ //This is to find 3 random number*//
  for(var i = 0; i < theFrames.length; i++){
    randomThreeNumbers[i] = rng();
    console.log('my three random numbers are ', randomThreeNumbers[i]);
  }
  while(randomThreeNumbers[0] === randomThreeNumbers[1] || randomThreeNumbers[0] === randomThreeNumbers[2] || randomThreeNumbers[1] === randomThreeNumbers[2]) {
    randomThreeNumbers[0] = rng();
    console.log('new value of first is', randomThreeNumbers[0]);
    randomThreeNumbers[1] = rng();
    console.log('new vaule of second is', randomThreeNumbers[1]);
  }
}


//This is to assign the photos to the three frames *//
function assignPhotoToFrame(){
  findThreeItems();
  for(var i = 0; i < randomThreeNumbers.length; i++){
    theFrames[i].src = busMallInv[randomThreeNumbers[i]].picAddress;
    console.log(busMallInv, ' my objects should have shownLast as true, and a tally on times shown');
    busMallInv[randomThreeNumbers[i]].amountShown ++;
    busMallInv[randomThreeNumbers[i]].shownLast = true;
  }
}

//This will switch the box from not clicked to clicked and tally +1 for its clicked counter*//
function imgClicked(frameClicked) {
  console.log(frameClicked, ' frame was clicked');
  busMallInv[randomThreeNumbers[frameClicked]].amountClicked ++;
  console.log(busMallInv[randomThreeNumbers[frameClicked]].amountClicked, 'should increment amount of clicks');
  assignPhotoToFrame();
}

//   if(theFrames[0].onclick) {
//     busMallInv[randomThreeNumbers].isClicked = true;
//     busMallInv[randomThreeNumbers].amountClicked ++;
//     console.log(busMallInv[randomThreeNumbers]);
//   } else if (theFrames[1].onclick) {
//   } else {
//     busMallInv[randomThreeNumbers].isClicked = true;
//     busMallInv[randomThreeNumbers].amountClicked ++;
//   }
//   console.log(busMallInv[randomThreeNumbers]);
//   assignPhotoToFrame();
// };

assignPhotoToFrame();
console.log(randomThreeNumbers, ' are my random 3 in global form');



frameOne.addEventListener('click', function() {
  imgClicked(0);
});
frameTwo.addEventListener('click', function() {
imgClicked(1);
});
frameThree.addEventListener('click', function() {
  imgClicked(2);
});
