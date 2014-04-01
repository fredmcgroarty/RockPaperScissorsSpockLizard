function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.PAIRS = {
	"rock": { "scissors": "blunts", "lizard": "squashes" },
	"scissors": { "paper": "cuts", "lizard": "gets stabby with"},
	"paper": {"rock": "smothers", "spock": "confuses"},
	"lizard": {"paper": "bites", "spock": "turns on"},
	"spock": {"rock": "molests", "scissors": "murders"}
	};

Game.prototype.determineWinner = function(player1, player2) {
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

Array.prototype.include = function(item){
	return (this.indexOf(item)> -1);
}

Game.prototype.message = function() {
	if (this.determineWinner() == null) {return this.player1.pick + " pleases himself"};
	return (this.winner.pick + " " + this.PAIRS[this.winner.pick][this.loser.pick] + " " + this.loser.pick);
};
