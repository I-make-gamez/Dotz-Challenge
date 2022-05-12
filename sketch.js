var blob;

var blobs = [];

const sbtn = document.querySelector('.sbtn')
const rbtn = document.querySelector('.rbtn')

function setup(){
    createCanvas(480, 550)
    blob = new Blob(width/2, height/2, 32)
    for(var i=0; i<1500; i++){
        var x = random(-width,width*4)
        var y = random(-height,height*4)
        var r = random(5, 10)
        if(x || y <= blob.r){
            var x = random(-width,width*4)
            var y = random(-height,height*4)
        }
        blobs[i] = new Blob(x, y, r)
    }
    noLoop()
}

function draw(){
    background(0)
    translate(width/2-blob.pos.x, height/2-blob.pos.y)
    for(var i=blobs.length-1; i>=0; i--){
        if(blob.eats(blobs[i])){
            blobs.splice(i, 1)
        }
        blobs[i].show()
    }
    blob.show();
    blob.update();
}

sbtn.addEventListener('click', function(){
    sbtn.disabled = true
    rbtn.disabled = false
    loop()
    blob.updateTimer();
})

rbtn.addEventListener('click', function(){
    sbtn.disabled = false
    rbtn.disabled = true
    noLoop()
    redraw()
    blob.resetTimer();
})