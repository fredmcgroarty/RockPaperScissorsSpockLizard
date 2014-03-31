Array.prototype.include = function(item){
	return (this.indexOf(item)> -1);
}

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
	

	var pairs = {
		"rock": ["smashes", "scissors", "lizard"],
		"scissors": ["cuts", "paper", "lizard"],
		"paper": ["smothers","rock", "spock"],
		"lizard": ["bites","paper", "spock"],
		"spock": ["molests", "rock", "scissor"]
	};

Game.prototype.winner = function(player1, player2) {
	if (pairs[this.player1.pick].include(this.player2.pick)) {
		this.winner = this.player1
		this.loser = this.player2
		return this.player1
	}
	else if (this.player1.pick === this.player2.pick) {
		return null
	}
	else {
		this.winner = this.player2
		this.loser = this.player1
		return this.player2
	}
}


Game.prototype.message = function() {
	return (this.winner.pick + " " + pairs[this.winner.pick][0] + " " + this.loser.pick);
};







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

