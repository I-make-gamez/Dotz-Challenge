var blob;

var blobs = [];
var enemies = [];

const sbtn = document.querySelector('.sbtn')
const rbtn = document.querySelector('.rbtn')
const rebtn = document.querySelector('.rebtn')

function setup() {
    createCanvas(460, window.innerHeight)
    for (var i = 0; i < 3000; i++) {

    blob = new Blob(0, 0, 20)
        var x = random(-width, width * 10)
        var y = random(-height, height * 10)
        var r = random(5, 8)
        if (x || y <= blob.r) {
            var x = random(-width, width * 10)
            var y = random(-height, height * 10)
        }
        blobs[i] = new Blob(x, y, r)
    }
    for (var i = 0; i < 25; i++) {
        var x = random(500, width * 4)
        var y = random(500, height * 4)
        var r = random(50, 75)
        if (x || y <= blob.r) {
            var x = random(-width, width * 4)
            var y = random(-height, height * 4)
        }
        enemies[i] = new EnemyAi(x, y, r)

    }
    noLoop()
}

function draw() {
    background(255)
    translate(width/2, height/2)
    scale(32 / blob.r)
    translate(-blob.pos.x, -blob.pos.y)

    for (var i = blobs.length - 1; i >= 0; i--) {
        if (blob.eats(blobs[i])) {
            blobs.splice(i, 1)
            var x = random(-width, width * 6)
            var y = random(-height, height * 6)
            var r = random(5, 8)
            blobs[i] = new Blob(x, y, r)
        }
        blobs[i].show()

    }
    for (var i = enemies.length - 1; i >= 0; i--) {
        for (var hi = blobs.length - 1; hi >= 0; hi--) {
            if (enemies[i].eats(blobs[hi])) {
                blobs.splice(hi, 1)
            }
        }
        if (blob.r > enemies[i].r) {
            if (blob.eatsEnemy(enemies[i])) {
                enemies.splice(i, 1)
            }
        }
        enemies[i].show();
        enemies[i].update();
    }
    blob.show();
    blob.update();
}

sbtn.addEventListener('click', function () {
    sbtn.disabled = true
    rbtn.disabled = false
    able = true
    loop()
})

rbtn.addEventListener('click', function () {
    sbtn.disabled = false
    rbtn.disabled = true
    able = false
    noLoop()
})

rebtn.addEventListener('click', function () {
    window.location.reload()
})