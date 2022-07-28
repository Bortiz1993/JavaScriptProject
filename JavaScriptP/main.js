const SPRITE_WIDTH = 13;
const SPRITE_HEIGHT = 14;
const BORDER_WIDTH = 1;
const SPACING_WIDHT = 1;

//converts a row and column of the spritesheets
// to coordinates in an image
function spritePositionImagePosition(row, col){
return {
    x: (
       BORDER_WIDTH +
       col * (SPACING_WIDTH + 
                SPRITE_WIDTH) 
    ),
}
}