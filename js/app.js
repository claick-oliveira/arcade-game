class Game {
  /**
  * @description Represents a Game
  * @constructor
  * @param {number} score - The score of the game
  * @param {number} level - The level of the game
  * @param {boolean} pause - The pause status of the game
  * @param {boolean} over - The over status of the game
  * @param {boolean} reset - The reset status of the game
  * @param {string} sprite - The sprite heart of the game
  */
  constructor() {
    this.score = 0;
    this.level = 1;
    this.pause = false;
    this.over = false;
    this.reset = false;
    this.countBlue = 0
    this.countGreen = 0
    this.countOrange = 0
    this.heart = 'images/Heart.png';
    this.blue = 'images/Gem Blue.png';
    this.green = 'images/Gem Green.png';
    this.orange = 'images/Gem Orange.png';
  }

  increaseLevel() {
    /**
    * @description Increase the game level and call the method to increase enemies
    */
    this.level += 1
    this.increaseEnemy()
  }

  increaseScore(points) {
    /**
    * @description Increase de game score
    * @param {number} score
    */
    this.score += points;
  }

  increaseEnemy() {
    /**
    * @description Increase enemies
    */
    const choices = [40, 130, 220];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    const speed = Math.floor(Math.random()*150*game.level) + 50;
    allEnemies.add(new Enemy(choice, speed));    
  }

  randomPrize() {
    allObjects.clear();
    let choices = [new Heart(), new GemBlue(), new GemGreen(), new GemOrange()];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    allObjects.add(choice);
    choices = [];
  }

  renderStatus() {
    /**
    * @description Renders the game status
    */
    ctx.clearRect(0, 0, 0 , 0);
    ctx.fillStyle = 'black';
    ctx.font = "bold 28px Arial";
    ctx.fillText(" x " + player.life, 40, 575);
    ctx.drawImage(Resources.get(this.heart), 0, 540, 40, 50);
    ctx.clearRect(0, 0, 0, 0);
    ctx.fillStyle = 'black';
    ctx.font = "20px Arial";
    // Draw scores on the top left
    ctx.fillText("Score: " + this.score, 0, 40);
    // Draw lives on the top right
    ctx.fillText("Level: " + this.level, 420, 40);
    ctx.clearRect(0, 0, 0 , 0);
    ctx.font = "20pt Impact";
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3
    ctx.drawImage(Resources.get(this.blue), 140, 0, 40, 50);
    ctx.fillText(this.countBlue, 155, 40);
    ctx.strokeText(this.countBlue, 155, 40);
    ctx.drawImage(Resources.get(this.green), 230, 0, 40, 50);
    ctx.fillText(this.countGreen, 245, 40);
    ctx.strokeText(this.countGreen, 245, 40);
    ctx.drawImage(Resources.get(this.orange), 320, 0, 40, 50);
    ctx.fillText(this.countOrange, 335, 40);
    ctx.strokeText(this.countOrange, 335, 40);
  }

  renderPause() {
    /**
    * @description Renders the game over
    */
    ctx.clearRect(0, 0, 0, 0);
    ctx.font = '30pt Impact';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 3
    ctx.fillText('PAUSE', 200, 290);
    ctx.strokeText('PAUSE', 200, 290);
  }

  renderGameOver() {
    /**
    * @description Renders the game over
    */
    ctx.clearRect(0, 0, 0, 0);
    ctx.font = '23pt Arial';
    ctx.globalAlpha = 0.65;
    ctx.fillStyle = 'black';
    ctx.fillRect(78, 200, 350, 200);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'red';
    ctx.fillText('GAME OVER!', 155, 285);
    ctx.font = '18pt Arial';
    ctx.fillStyle = 'white';
    ctx.fillText('Press Enter to Play Again', 117, 350);
  }

  handlePause() {
    /**
    * @description Changes game pause
    */
    this.pause = !this.pause;
  }

  handleStart() {
    /**
    * @description Start the game
    */
    for (var i = 0; i < ENEMYS; i++) {
      game.increaseEnemy();
    }
  }

  handleReset() {
    /**
    * @description Reset the game
    */
    this.over = !this.over;
    this.reset = !this.reset;
    this.pause = !this.pause;
    this.score = 0;
    this.level = 1;
    this.countBlue = 0;
    this.countGreen = 0;
    this.countOrange = 0;
    player.life = 3;
    player.count = 0;
    allEnemies.clear();
    this.handleStart();
  }

}

class Enemy {
  /**
  * @description Represents a Enemy
  * @constructor
  * @param {number} x - The position X of the enemy
  * @param {number} y - The position Y of the enemy
  * @param {number} width - The width of the enemy
  * @param {number} rate - The rate speed of the enemy
  * @param {number} life - The life of the enemy
  * @param {string} sprite - The sprite of the enemy
  */
  constructor(y = 10, rate) {
    this.x = -100;
    this.y = y;
    this.width = 30;
    this.rate = rate
    this.life = Math.floor(Math.random() * 3) + 1;
    this.sprite = 'images/enemy-bug.png';
  }

  update(dt) {
    /**
    * @description Update the enemies positions
    * @param {number} dt - (now - lastTime) / 1000.0 
    */
    if (this.x > 505) {
      this.x = -100;
      this.life -= 1;
    }
    else this.x += this.rate*dt;
  }

  render() {
    /**
    * @description Renders the enemy
    */
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
};

class Player {
  /**
  * @description Represents a Player
  * @constructor
  * @param {number} x - The position X of the player
  * @param {number} y - The position Y of the player
  * @param {number} width - The width of the player
  * @param {number} life - The life of the player
  * @param {number} count - The count of the enemy
  * @param {string} sprite - The sprite of the enemy
  */
  constructor() {
    this.x = 200;
    this.y = 400;
    this.width = 40;
    this.life = 3;
    this.count = 0;
    this.sprite = 'images/char-boy.png';
  }

  update() {
    /**
    * @description Update player
    */
    
  }

  increaseCount() {
    /**
    * @description Increase the number of times the player has reached the end
    *              how much more harder, the player needs reach more times
    *              Increase the level game
    */
    if (this.count < 3 + game.level) this.count += 1;
    else {
      this.count = 1;
      game.increaseLevel();
    }
  }

  reset() {
     /**
    * @description Reset the player position
    */
    this.x = 200;
    this.y = 400;
  }

  lost() {
     /**
    * @description Reset the player position and decrease player life
    */
    this.reset();
    this.life -= 1;
  }

  render() {
    /**
    * @description Renders the player
    */
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(keyCode) {
    /**
    * @description Changes the player positions
    * @param {number} keyCode - A key that was pressed
    */
    if (keyCode === 'up') this.y -= 90;
    if (keyCode === 'down' && this.y < 400) this.y += 90;
    if (keyCode === 'left' && this.x > 0) this.x -= 100;
    if (keyCode === 'right' && this.x < 400) this.x += 100;
  }
};

class Rewards {
  /**
  * @description Represents a Enemy
  * @constructor
  * @param {number} x - The position X of the enemy
  * @param {number} y - The position Y of the enemy
  * @param {number} width - The width of the enemy
  * @param {number} rate - The rate speed of the enemy
  * @param {number} life - The life of the enemy
  * @param {string} sprite - The sprite of the enemy
  */
  constructor(image) {
    this.width = 30;
    this.height = 80;
    this.pointsX= [10, 110, 213, 313, 413];
    this.pointsY= [120, 210, 300];
    this.lifeTime = Math.floor(Math.random()*8000) + 3000;
    this.createTime = new Date().getTime();
    this.x = this.pointsX[Math.floor(Math.random() * this.pointsX.length)];
    this.y = this.pointsY[Math.floor(Math.random() * this.pointsY.length)];
    this.sprite = image;
  }

  render() {
    /**
    * @description Renders the enemy
    */
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y, 80, 80);
  }
};

class Heart extends Rewards {
  /**
  * @description Represents a Heart
  * @constructor
  * @param {string} id - The id of the heart
  */
  constructor() {
    super('images/Heart.png')
    this.id = 'heart';
  }

  givePrize (){
    player.life += 1;
    player.count += 1;
  }

}

class GemBlue extends Rewards {
  /**
  * @description Represents a GemBlue
  * @constructor
  * @param {string} id - The id of the gemblue
  */
  constructor() {
    super('images/Gem Blue.png')
    this.id = 'blue';
  }

  givePrize (){
    game.increaseScore(200*game.level);
    game.countBlue += 1;
    player.count += 1;
  }

}

class GemGreen extends Rewards {
  /**
  * @description Represents a GemGreen
  * @constructor
  * @param {string} id - The id of the gemgreen
  */
  constructor() {
    super('images/Gem Green.png')
    this.id = 'green';
  }

  givePrize (){
    game.increaseScore(400*game.level);
    game.countGreen += 1;
    player.count += 1;
  }

}

class GemOrange extends Rewards {
  /**
  * @description Represents a GemOrange
  * @constructor
  * @param {string} id - The id of the gemorange
  */
  constructor() {
    super('images/Gem Orange.png')
    this.id = 'orange';
  }

  givePrize (){
    game.increaseScore(600*game.level);
    game.countOrange += 1;
    player.count += 1;
  }

}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
let allEnemies = new Set();
let allObjects = new Set();
const ENEMYS = 3;
let player = new Player();
let game = new Game();
game.handleStart();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
  let allowedKeys = {
      13: 'enter',
      32: 'space',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down'
  };
  if (game.over !== true) {
    if (game.pause !== true && e.keyCode !== 32) player.handleInput(allowedKeys[e.keyCode]);
    else if (e.keyCode === 32) game.handlePause();
  } else if (e.keyCode === 13) game.handleReset();
});