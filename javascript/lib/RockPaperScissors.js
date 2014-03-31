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
	

Game.prototype.PAIRS = {
	"rock": { "scissors": "blunts", "lizard": "squashes" },
	"scissors": { "paper": "cuts", "gets stabby with": "lizard"},
	"paper": {"rock": "smothers", "spock": "confuses"},
	"lizard": {"paper": "bites", "spock": "turns on"},
	"spock": {"rock": "molests", "scissors": "murders"}
	};

Game.prototype.winner = function(player1, player2) {
	if (this.PAIRS[this.player1.pick][this.player2.pick]) {
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
	return (this.winner.pick + " " + this.PAIRS[this.winner.pick][this.loser.pick] + " " + this.loser.pick);
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

