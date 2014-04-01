function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.PAIRS = {
	"Jeffrey Archer": { "Mario Balotelli": "litigates against", "James Brown": "whispers sweet nothings to" },
	"Mario Balotelli": { "Captain Birdseye": "cuts", "James Brown": "gets stabby with"},
	"Captain Birdseye": {"Jeffrey Archer": "force feeds fish fingers down the neck of", "Mr Motivator": "launches a public enquiry against"},
	"James Brown": {"Captain Birdseye": "screams in the face of", "Mr Motivator": "does a flying kick into"},
	"Mr Motivator": {"Jeffrey Archer": "touches up", "Mario Balotelli": "stares at"}
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
