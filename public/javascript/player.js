
function Player(name) {
	this.name = name;
}

Player.prototype.randompick = function() {
	var randnum = Math.random()
	if (randnum <= 0.2) {this.pick = "Jeffrey Archer"}
	if (randnum > 0.2 && randnum <= 0.4) {this.pick = "Mario Balotelli" }
	if (randnum > 0.4 && randnum <= 0.6) {this.pick = "Captain Birdseye" }
	if (randnum > 0.6 && randnum <= 0.8) {this.pick = "James Brown" }
	if (randnum > 0.8 && randnum <= 1) {this.pick = "Mr Motivator" }
}





Player.prototype.picks = function(pick) {
	this.pick = pick;
}
