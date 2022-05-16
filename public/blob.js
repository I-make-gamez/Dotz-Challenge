var en = 0
var posib = true
const eatenList = document.querySelector('.el')

function EnemyAi(x, y, r) {
    this.pos = createVector(x, y)
    this.r = r


    this.update = function(enemy) {
        //var Ai = createVector(Aivo - width / 2, Aivo - height / 2)
        //Ai.setMag(3)
        //this.pos.add(Ai)
    }

    this.show = function() {
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
    }

    this.eats = function(other) {
        var d = p5.Vector.dist(this.pos, other.pos)
        if (d < this.r + other.r - 15) {
            var sum = PI * this.r * this.r + PI * other.r * other.r
            this.r = sqrt(sum / PI)

            //this.r += other.r * 0.025
            return true;
        } else {
            return false;
        }
    }
}

function Blob(x, y, r) {
    this.pos = createVector(x, y)
    this.r = r
    this.vel = createVector(0, 0);
    var r = random(1, 255)
    var g = random(1, 255)
    var b = random(1, 255)

    this.update = function() {
        var newvel = createVector(mouseX - width / 2, mouseY - height / 2)
        newvel.setMag(3)
        this.vel.lerp(newvel, 0.1)
        this.pos.add(this.vel)
    }

    /*this.cons = function() {
        blob.pos.x = constrain(blob.pos.x, -width, width)
        blob.pos.x = constrain(blob.pos.y, -height, height)

    }*/

    this.eats = function(other) {
        var d = p5.Vector.dist(this.pos, other.pos)
        if (d < this.r + other.r - 15) {
            var sum = PI * this.r * this.r + PI * other.r * other.r
            this.r = sqrt(sum / PI)
                //this.r += other.r * 0.050
            eatenList.innerHTML = "Mass: " + Math.round(this.r)
            return true;
        } else {
            return false;
        }

    }

    this.eatsEnemy = function(enemy) {
        var d = p5.Vector.dist(this.pos, enemy.pos)
        if (d < Math.round(this.r + enemy.r) - (32 * 3)) {
            var sum = PI * this.r * this.r + PI * enemy.r * enemy.r
            this.r = sqrt(sum / PI)
                //this.r += enemy.r * 0.1
            en += 1
            eatenList.innerHTML = "Mass: " + Math.round(this.r)
            return true;
        } else {
            return false;
        }

    }

    this.show = function() {
        fill(r, g, b)
        ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2)
    }
}