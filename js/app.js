var Enemy = function (x, y, speed) {

    this.sprite = 'images/enemy-bug.png';
        var x = x;
    var y = y;
    var speed = getRandomInt(500, 500);
    
};
Enemy.prototype.update = function (dt) {
    this.x += this.speed * dt;
    if (this.x > 550) {
        this.x = -120;
        this.speed = getRandomInt(500, 500);
    }
    if (player.x < this.x + 60 && player.x + 37 > this.x && player.y < this.y + 25 && 30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }
};
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


var Player = function () {
    this.sprite = 'images/enemy-bug.png';
};

Player.prototype.update = function (dt) {
    this.x += this.speed * dt;
    if (this.x > 550) {
        this.x = -120;
        this.speed = getRandomInt(500, 500);
    }
    if (player.x < this.x + 60 && player.x + 37 > this.x && player.y < this.y + 25 && 30 + player.y > this.y) {
        player.x = 200;
        player.y = 380;
    }
    
    
};



document.addEventListener('keyup', function (e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});