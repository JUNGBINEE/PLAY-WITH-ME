class WhiteKeyBoard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    show() {
        noFill();
        rect(this.x, this.y, windowWidth/2, windowHeight/8);
    }

    clicked(){
        console.log('white');
    }
}

class BlackKeyBoard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    
    show() {
        fill('black');
        rect(this.x, this.y, windowWidth/3, windowHeight/10);
    }

    clicked(){
        console.log('black');
    }
}


function setup() {
    createCanvas(windowWidth, windowHeight);
}
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    drawPiano();
    
}


function drawPiano() {
    for (let i = 0; i < 8; i++) {
        let white = new WhiteKeyBoard(0, i* windowHeight/8);
        white.show();
    }
    for (let i = 0; i < 7; i++) {
        if( i!= 2 && i!= 6 ) {
            let black = new BlackKeyBoard(windowWidth/6, windowHeight/16 + windowHeight/80  + i* windowHeight/8);
            black.show();
        }
    }
}