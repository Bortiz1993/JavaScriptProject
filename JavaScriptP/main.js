
// Sprite Width contains how wide the sprite is.
const SPRITE_WIDTH = 143.5;
// SPRITE HEIGHT contains how tall the sprite is.
const SPRITE_HEIGHT = 126;
const BORDER_WIDTH = 1
const SPACING_WIDTH = 1;

//converts a row and column of the spritesheets
// this Function grabs the coordinates of the sprite
///brakes the image into individual frames.
function spritePositionImagePosition(row, col){
return {
    x: (
       BORDER_WIDTH +
       col * (SPACING_WIDTH + 
                SPRITE_WIDTH) 
    ),
    y: (
        BORDER_WIDTH +
        row * (SPACING_WIDTH +
                SPRITE_HEIGHT)
    )
}
}

// console.log(`A sprite at position (3,1) has pixel coordinates
// ${spritePositionImagePosition(3,1).x},
// ${spritePositionImagePosition(3,1).y}`);

// this function draws a sprite into the canvas

// context.drawImage(
// image,
// 0,
// 0,
// image.width,
// image.height,
// 0,
// 0,
// canvas.width,
// canvas.height
// );

let canvas = document.querySelector('canvas');
var context = canvas.getContext('2d');

var spriteSheetURL = "../images/idleWalking.png"
// var spriteSheetURLImage = document.createElement("img");
// spriteSheetURLImage.src = "./images/RalfSpriteSheet.png";

// document.body.appendChild(spriteSheetURLImage);

// var spriteSheetURL = new XMLHttpRequest();
// spriteSheetURL('get', 'https://www.spriters-resource.com/resources/sheets/108/110910.png?updated=1543085484');
// spriteSheetURL.withCredentials = true;

var image = new Image();
image.src = spriteSheetURL;
image.crossOrigin = true;


// // extract all of our frames
var RalfStanding0 = spritePositionImagePosition(0, 0);
var RalfStanding1 = spritePositionImagePosition(0, 1);
var RalfStanding2 = spritePositionImagePosition(0, 2);
var RalfStanding3 = spritePositionImagePosition(0, 3);
var RalfWalking4 = spritePositionImagePosition(0, 4);
var RalfWalking5 = spritePositionImagePosition(0, 5);
var RalfWalking6 = spritePositionImagePosition(0, 6);
var RalfWalking7 = spritePositionImagePosition(0, 7);
var RalfWalking8 = spritePositionImagePosition(0, 8);
var RalfWalking9 = spritePositionImagePosition(0, 9);
var RalfWalking10 = spritePositionImagePosition(0, 10);
var RalfWalking11 = spritePositionImagePosition(0, 11);
var RalfWalking12 = spritePositionImagePosition(0, 12);
var RalfWalking13 = spritePositionImagePosition(0, 13);
var RalfWalking14 = spritePositionImagePosition(0, 14);
var RalfWalking15 = spritePositionImagePosition(0, 15);
var RalfLeftStanding0 = spritePositionImagePosition(1, 0);
var RalfLeftStanding1 = spritePositionImagePosition(1, 1);
var RalfLeftStanding2 = spritePositionImagePosition(1, 2);
var RalfLeftStanding3 = spritePositionImagePosition(1, 3);
var RalfWalkingLeft4 = spritePositionImagePosition(1, 4);
var RalfWalkingLeft5 = spritePositionImagePosition(1, 5);
var RalfWalkingLeft6 = spritePositionImagePosition(1, 6);
var RalfWalkingLeft7 = spritePositionImagePosition(1, 7);
var RalfWalkingLeft8 = spritePositionImagePosition(1, 8);
var RalfWalkingLeft9 = spritePositionImagePosition(1, 9);
var RalfWalkingLeft10 = spritePositionImagePosition(1, 10);
var RalfWalkingLeft11 = spritePositionImagePosition(1, 11);
var RalfWalkingLeft12 = spritePositionImagePosition(1, 12);
var RalfWalkingLeft13 = spritePositionImagePosition(1, 13);
var RalfWalkingLeft14 = spritePositionImagePosition(1, 14);
var RalfWalkingLeft15 = spritePositionImagePosition(1, 15);
// var RalfPunching16 = spritePositionImagePosition(1,0);
// var RalfPunching17 = spritePositionImagePosition(1, 1);
// var RalfPunching18 = spritePositionImagePosition(1, 2);
// var RalfPunching19 = spritePositionImagePosition(1, 3);
// var RalfPunching20 = spritePositionImagePosition(1, 4);
// var RalfPunching21 = spritePositionImagePosition(1, 5);
// var RalfPunching22 = spritePositionImagePosition(1, 6);
// var RalfPunching23 = spritePositionImagePosition(1, 7);
// var RalfPunching24 = spritePositionImagePosition(1, 8);
// var RalfWalking25 = spritePositionImagePosition(1, 9);
// var RalfWalking26= spritePositionImagePosition(1, 10);
// var RalfWalking27= spritePositionImagePosition(1, 11);
// var RalfWalking28= spritePositionImagePosition(1, 12);
// var RalfWalking29= spritePositionImagePosition(1, 13);
// var RalfWalking30= spritePositionImagePosition(1, 14);
// var RalfWalking31 = spritePositionImagePosition(1, 15);
// var RalfWalking32 = spritePositionImagePosition(1, 16);
// var RalfWalking33 = spritePositionImagePosition(1, 17);
// var RalfWalking34 = spritePositionImagePosition(1, 18);
// var RalfWalking35 = spritePositionImagePosition(1, 19);
// var RalfWalking36 = spritePositionImagePosition(1, 20);


var walkCycle = [
    RalfStanding0,
    RalfStanding1,
    RalfStanding2,
    RalfStanding3,
    RalfWalking4,
    RalfWalking5,
    RalfWalking6,
    RalfWalking7,
    RalfWalking8,
    RalfWalking9,
    RalfWalking10,
    RalfWalking11,
    RalfWalking12,
    RalfWalking13,
    RalfWalking14,
    RalfWalking15,
    RalfStanding0,
    RalfStanding1,
    RalfStanding2,
    RalfStanding3,
    RalfLeftStanding3,
    RalfLeftStanding2,
    RalfLeftStanding1,
    RalfLeftStanding0,
    RalfWalkingLeft15,
    RalfWalkingLeft14,
    RalfWalkingLeft13,
    RalfWalkingLeft12,
    RalfWalkingLeft11,
    RalfWalkingLeft10,
    RalfWalkingLeft9,
    RalfWalkingLeft8,
    RalfWalkingLeft7,
    RalfWalkingLeft6,
    RalfWalkingLeft5,
    RalfWalkingLeft4,
    RalfLeftStanding3,
    RalfLeftStanding2,
    RalfLeftStanding1,
    RalfLeftStanding0,
   
    // RalfPunching16,
    // RalfPunching17,
    // RalfPunching18,
    // RalfPunching19,
    // RalfPunching20,
    // RalfPunching21,
    // RalfPunching22,
    // RalfPunching23,
    // RalfPunching24,
    // RalfStanding0,
    // RalfStanding1,
    // RalfStanding2,
    // RalfStanding3


];

var frameIndex = 0;
var frame;


// let col = 0;
// let row = 0;

// this function contains if statements that depeding on the Condition, it will animate differently 
function animate() {
    //once we hit the end of the cycle, start the cycle again.
    if(frameIndex === walkCycle.length){
        frameIndex = 0;
    }
    frame = walkCycle[frameIndex];

    // once we hit the end of a row, move to the next
    // if (col === 25) {
    //     col = 0;
        // row = 0;
    // }
    // once we finish the last row, start again, this condition means, if row is on the second row, row will be assigned zero
    // if (row === 0) {
    //     col = 0;
        // row = 0;
        // col = 0;
        //  col = 12
    // }
    
    // make an image position using the current row and column
    // var position = spritePositionImagePosition(row, col);
    //context.clearRect clears the canvas.
    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
    context.drawImage(
        image,
        frame.x,
        frame.y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        0,
        0,
        SPRITE_WIDTH,
        SPRITE_HEIGHT
    );
    frameIndex += 1;
}

image.onload = function() {
    setInterval(animate, 50);
}

