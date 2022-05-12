var en = 0
var timer = 60
var posib = true
const eatenList = document.querySelector('.el')
const tim = document.querySelector('.tim')

function Blob(x, y, r){
    this.pos = createVector(x, y)
    this.r = r

    this.update = function(){
        var mouse = createVector(mouseX-width/2, mouseY-height/2)
        mouse.setMag(3)
        this.pos.add(mouse)
    }

    this.eats = function(other){
        var d = p5.Vector.dist(this.pos, other.pos)
        if(d < this.r + other.r){
            this.r+=other.r*0.025
            en += 1
            eatenList.innerHTML="Total Eaten: " + en
            return true;
        }else{
            return false;
        }

    }

    this.show = function(){
        fill(255)
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2)
    }

    this.updateTimer = function(){
        setInterval(function(){
            if(posib === true){
                timer -= 1
                tim.innerHTML = `Timer: ${timer}`
                if(timer === 0){
                noLoop()
                posib = false
            }
            }
        }, 1000)        
    }

    this.resetTimer = function(){
        posib = false
        setup();
        timer = 60
        tim.innerHTML = `Timer: ${timer}`
        en = 0
        eatenList.innerHTML="Total Eaten: " + en
    }
}