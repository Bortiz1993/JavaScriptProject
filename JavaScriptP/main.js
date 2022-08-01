
// Sprite Width contains how wide the sprite is.
const SPRITE_WIDTH = 125;
// SPRITE HEIGHT contains how tall the sprite is.
const SPRITE_HEIGHT = 110;
const BORDER_WIDTH = 1;
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

var spriteSheetURL = "../images/RalfSpriteWalking.png"
// var spriteSheetURLImage = document.createElement("img");
// spriteSheetURLImage.src = "./images/RalfSpriteSheet.png";

// document.body.appendChild(spriteSheetURLImage);

// var spriteSheetURL = new XMLHttpRequest();
// spriteSheetURL('get', 'https://www.spriters-resource.com/resources/sheets/108/110910.png?updated=1543085484');
// spriteSheetURL.withCredentials = true;

var image = new Image();
image.src = spriteSheetURL;
image.crossOrigin = true;

var row = 0;
var col = 0;

function animate() {
    // once we hit the end of a row,
    // move to the next
    if (col === 3) {
        col = 0;
        // row += 1;
    }
    // once we finish the last row,
    // start again
    // if (row === 2) {
    //     row = 0;
    // }
    
    // make an image position using the 
    // current row and colum
    var position = 
    spritePositionImagePosition(row, col);
    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );
    context.drawImage(
        image,
        position.x,
        position.y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        0,
        0,
        SPRITE_WIDTH,
        SPRITE_HEIGHT
    );
    col += 1;
}

image.onload = function() {
    setInterval(animate, 75);
};

