
function Player(name) {
	this.name = name;
}

Player.prototype.randompick = function() {
	var randnum = Math.random()
	if (randnum <= 0.2) {this.pick = 'rock'}
	if (randnum > 0.2 && randnum <= 0.4) {this.pick = 'paper'}
	if (randnum > 0.4 && randnum <= 0.6) {this.pick = 'scissors'}
	if (randnum > 0.6 && randnum <= 0.8) {this.pick = 'lizard'}
	if (randnum > 0.8 && randnum <= 1) {this.pick = 'spock'}
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
}
