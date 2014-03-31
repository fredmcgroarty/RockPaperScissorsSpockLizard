function Player(name) {
	this.name = name;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
}

function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

// Game.prototype.winner = function(player1, player2) {
// 	if (this.player1.pick == this.player2.pick) {
// 		return null
// 	}
// 	else if ((this.player1.pick == "rock" && this.player2.pick == "scissors") ||
// 		(this.player1.pick == "scissors" && this.player2.pick == "paper") ||
// 		(this.player1.pick == "paper" && this.player2.pick == "rock")) {
// 		return this.player1 }
// 	else {
// 		return this.player2
// 	}
// }

Game.prototype.winner = function(player1, player2) {
	var pairs = {
		"rock": ["scissors", "lizard"],
		"scissors": ["paper", "lizard"],
		"paper": ["rock", "spock"],
		"lizard": ["paper", "spock"],
		"spock": ["rock", "scissor"]
	};


	if (pairs[this.player1.pick].indexOf(this.player2.pick) > -1 ) {
		return this.player1
	}

	else if (this.player1.pick == this.player2.pick) {
		return null
	}

	else {
		return this.player2
	}

}




