 describe("Rock-Paper-Scissors", function() {

  beforeEach(function() {
    player1 = new Player('Fred');
    player2 = new Player("Mark");
    game = new Game(player1, player2);
  });

  describe('--winning and losing--', function() {
    describe('rock', function() {
      it('should beat scissors', function() {
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.determineWinner()).toBe(player1);
        expect(game.message()).toEqual("rock blunts scissors");
      });

      it('should lose to paper', function() {
        player1.picks('rock');
        player2.picks('paper');
        expect(game.determineWinner()).toBe(player2);
        expect(game.message()).toBe("paper smothers rock")
      });

      it('should beat lizard', function() {
        player1.picks('rock');
        player2.picks('lizard');
        expect(game.determineWinner()).toBe(player1);
        expect(game.message()).toBe("rock squashes lizard")
      });

      it('should lose to spock', function() {
        player1.picks('rock');
        player2.picks('spock');
        expect(game.determineWinner()).toBe(player2)
        expect(game.message()).toBe("spock molests rock")
      }); 
    });

    describe('paper', function() {
      it('should beat rock', function() {
        player1.picks('paper');
        player2.picks('rock');
        expect(game.determineWinner()).toBe(player1);
        expect(game.message()).toBe("paper smothers rock")

      });

      it('should lose to scissors', function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.determineWinner()).toBe(player2);
        expect(game.message()).toBe("scissors cuts paper")
      });
    });

    describe('scissors', function() {
      it('should beat paper', function() {
        player1.picks('scissors');
        player2.picks('paper');
        expect(game.determineWinner()).toBe(player1);
      });

      it('should lose to rock', function() {

        player1.picks('scissors');
        player2.picks('rock');
        expect(game.determineWinner()).toBe(player2);
      });
    });

    describe('lizard', function() {

      it('should beat paper', function() {
        player1.picks('lizard');
        player2.picks('paper');
        expect(game.determineWinner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player1.picks('lizard');
        player2.picks('rock');
        expect(game.determineWinner()).toBe(player2);
      });
    });

    describe('spock', function() {
      it('should beat rock', function() {
        player1.picks('spock');
        player2.picks('rock');
        expect(game.determineWinner()).toBe(player1);
      });

      it('should lose to scissors', function() {
        player1.picks('spock');
        player2.picks('scissors');
        expect(game.determineWinner()).toBe(player1);
      });
    });
  });

  describe('---draws---', function() {

    describe('any identical picks', function() {
      it('should result in no winner', function() {
        var drawGameResults = ['rock', 'paper', 'scissors', 'spock', 'lizard'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.determineWinner();
        });
        expect(drawGameResults).toEqual([null, null, null, null, null]);
      });
    });
  });

});