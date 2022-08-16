//This is code for the JavaScript Graphics program in one file.

// canvas = document.createElement('canvas');
// canvas.width = spriteWidth * scale;
// canvas.height = spriteHeight * scale;
// canvas.style.display = 'none';
// document.body.appendChild(this.canvas);
//Basically this code creates a canvas manually using JavaScript and setting it to none so it that it dosen't show up. Then give the canvas the right properties.

//this sets up image rendering directly on the 2d context, it crisps edges.
// this.context = this.canvas.getContext('2d');
// this.context.imageSmoothingEnabled = false;
// this.context.scale(scale, scale);

// Copy this to your code to use the Sprite class.
// Example at the bottom!
var Sprite = (function() {
    function Sprite(options) {
        options = Object.assign({
            spriteSheetURL: '../images/idleWalking.png',
            spriteWidth:  143.5,
            spriteHeight: 126,
            nRows: 2,
            nCols: 12,
            borderWidth: 1,
            spacingWidth: 1,
            scale: 10,
            x: 0,
            y: 0,
        }, options);
        this.x = options.x;
        this.y = options.y;
        this.frames = [];
        this.animations = {};
        this.activeAnimationStep = 0;
        this.spriteWidth = options.spriteWidth;
        this.spriteHeight = options.spriteHeight;
        this.nRows = options.nRows;
        this.nCols = options.nCols;
        this.borderWidth = options.borderWidth;
        this.spacingWidth = options.spacingWidth;
        this.scale = options.scale;
        //canvas is created, the dimensions are the canvas.width and height
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.spriteWidth * this.scale;
        this.canvas.height = this.spriteHeight * this.scale;
        this.canvas.style.display = 'none';
        document.body.appendChild(this.canvas);
        
        this.context = this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
        this.context.scale(this.scale, this.scale);
        var spriteSheetImage = new Image();
        spriteSheetImage.src = options.spriteSheetURL;
        spriteSheetImage.crossOrigin = true;
        spriteSheetImage.onload = (function() {
            for (var row = 0; row < this.nRows; row++) {
                for (var col = 0; col < this.nCols; col++) {
                    var spriteWebImage = new WebImage('');
                    spriteWebImage.width = this.spriteWidth * this.scale;
                    spriteWebImage.height = this.spriteHeight * this.scale;
                    spriteWebImage.displayFromData = true;
                    //canvas gets created again?
                    spriteWebImage.hiddenCanvas = document.createElement('canvas');
                    spriteWebImage.hiddenCanvas.width = spriteWebImage.width;
                    spriteWebImage.hiddenCanvas.height = spriteWebImage.height;
                    spriteWebImage.dirtyHiddenCanvas = true;
                    spriteWebImage.setPosition(getWidth()/2, getHeight()/2);
                    this.context.clearRect(
                        0,
                        0,
                        this.canvas.width,
                        this.canvas.height
                    );
                    var sourceImagePosition = 
                        this.spritePositionToImagePosition(row, col);
                    this.context.drawImage(
                        spriteSheetImage,
                        sourceImagePosition.x,
                        sourceImagePosition.y,
                        this.spriteWidth,
                        this.spriteHeight,
                        0,
                        0,
                        this.spriteWidth,
                        this.spriteHeight
                    );
                    spriteWebImage.data = this.context.getImageData(
                        0,
                        0,
                        this.spriteWidth * this.scale,
                        this.spriteHeight * this.scale
                    );
                    this.frames.push(spriteWebImage);
                }
            }
            this.activeFrame = this.frames[0];
            this.ready();
        }).bind(this);
    };
    
    Sprite.prototype.ready = function() {
        if (typeof this.ready === 'function') {
            this.onReady(this);
        }
    };
    
    Sprite.prototype.onReady = function(handler) {
        this.onReady = handler;   
    };
    
    Sprite.prototype.spritePositionToImagePosition = function(row, col) {
        return {
            x: (
                this.borderWidth +
                col * (this.spacingWidth + this.spriteWidth)
            ),
            y: (
                this.borderWidth +
                row * (this.spacingWidth + this.spriteHeight)
            )
        }
    };
    
    Sprite.prototype.draw = function() {
        this.activeFrame.draw.apply(this.activeFrame, arguments);
    };
    //position of the sprite?
    Sprite.prototype.setPosition = function(x, y) {
        this.x = x;
        this.y = y;
        this.activeFrame.setPosition.apply(this.activeFrame, arguments);
    };
    //when the sprite moves?
    Sprite.prototype.move = function(dx, dy) {
        this.x += dx;
        this.y += dy;
        this.activeFrame.move.apply(this.activeFrame, arguments);
    };
    //this function adds animation to the sprite
    Sprite.prototype.addAnimation = function(options) {
        options = Object.assign({
            name: 'RalfStanding',
            frameIndices: [0],
            timePerFrame: 250,
            onEnd: 'repeat',
            //i just did this.
            name: 'RalfWalking',
            frameIndices: [4],
            timePerFrame:250,
            onEnd: 'repeat',
         }, options);
        this.animations[options.name] = {
            frameIndices: options.frameIndices,
            timePerFrame: options.timePerFrame,
            onEnd: options.onEnd
        };
    };
    Sprite.prototype.animate = function(animationName, smoothStep) {
        var animation = this.animations[animationName];
        if (animation === undefined) {
            return;
        }
        this.activeAnimation = animation;
        this.activeAnimationStep = (
            smoothStep &&
            this.activeAnimationStep < this.activeAnimation.frameIndices.length
        ) ? this.activeAnimationStep : 0;

        // var frameIndex = animation.frameIndices[this.activeAnimationStep];
        this.clearAnimation();
        this.advanceFrame();
        this.activeAnimationID = setInterval((function() {
            this.advanceFrame();
        }).bind(this), animation.timePerFrame);
    };
    Sprite.prototype.advanceFrame = function() {
        if (this.activeAnimationStep >= this.activeAnimation.frameIndices.length) {
            if (this.activeAnimation.onEnd === 'repeat') {
                this.activeAnimationStep = 0;
            } else {
                this.clearAnimation();
            }
        }
        var frameIndex = this.activeAnimation.frameIndices[
            this.activeAnimationStep
        ];
        var frame = this.frames[frameIndex];
        frame.x = this.x;
        frame.y = this.y;
        this.activeFrame = frame;
        this.activeAnimationStep += 1;
    }
    Sprite.prototype.clearAnimation = function() {
        clearInterval(this.activeAnimationID);
        this.activeAnimationID = -1;
    }
    
    return Sprite;
})();

// EXAMPLE!
var sprite = new Sprite({
    spriteSheetURL: '../images/idleWalking.png',
    nRows: 2,
    nCols: 12,
    spriteWidth: 13,
    spriteHeight: 14,
    borderWidth: 1,
    spacingWidth: 1,
    x: getWidth()/2,
    y: getHeight()/2
});
sprite.onReady(function() {
    add(sprite);
    sprite.addAnimation({
        name: 'RalfStanding',
        frameIndices: [0,1,2,3]
    });
    sprite.addAnimation({
        name: 'RalfWalking',
        frameIndices: [4,5,6,7,8,9,10,11,12]
    });
    
    startLoop();
});

function startLoop() {
    var velocity = 1;
    sprite.animate('RalfStanding');
    sprite.animate('RalfWalking');
    
    setInterval(function() {
        if (sprite.activeFrame.x +
            sprite.activeFrame.width >= getWidth()
        ) {
            velocity = -1;
            sprite.animate('RalfStanding', true);
        }
        if (sprite.activeFrame.x <= 0) {
            velocity = 1;
            sprite.animate('RalfWalking', true);
        }
        sprite.move(velocity, 0);
    }, 10);
}