# Javascript Arcade Game

This project was developed to Udacity's Nanodegree Program, this project is a Javascript Game as frogger arcade game.

## Getting Started

To play this game, you can access [here](https://claick-oliveira.github.io/arcade-game/).

### Instructions

1. Select your player;
2. Press 'space' to start the game;
3. Use:
    * **UP**: Move character up
    * **DOWN**: Move character down
    * **LEFT**: Move character left
    * **RIGHT**: Move character right
    * **SPACE**: Pause the game
    * **ESC**: Reset the game
    * **ENTER**: Start the game after the game over

> Obs: You can press 'Esc' anytime to reset the game.

### Rules

1. The player need to reach the water to earn ponts, the point will be 100 * game level. Example: 100 * 3 (game level) = 300 points. When this happens the player comes back to initial position;
2. The player starts with 3 lifes and can't touch the bugs, else the life will be decreased;
3. Each 10 sec, it's generated a random prize and it has a random time life. The prizes could be:
    * Heart: Increases the player's life;
    * Gem Blue: Increases 200 * game level points;
    * Gem Green: Increases 400 * game level points;
    * Gem Orange: Decreases the number of bugs;
4. Each time that the player reach the water or got a prize, a count is increased. If this count reach the game level + 3 the game level will be increased and a new random bug will be genareted;
5. The game starts with 3 bugs, when a bug is generated, the game randomize the position, life and speed. The life is a count about how many time the bug will pass, case the time life is reach, the bug will be removed and a new random bug appears;

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/html)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/css)
* [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE.md](LICENSE.md) file for details.