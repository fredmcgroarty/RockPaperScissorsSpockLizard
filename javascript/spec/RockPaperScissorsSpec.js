 describe("Jeffrey Archer-Captain Birdseye-Mario Balotelli", function() {

  beforeEach(function() {
    player1 = new Player('Fred');
    player2 = new Player("Mark");
    game = new Game(player1, player2);
  });

  describe('--winning and losing--', function() {
    describe('Jeffrey Archer', function() {
      it('should beat Mario Balotelli', function() {
        player1.picks('Jeffrey Archer');
        player2.picks('Mario Balotelli');
        expect(game.determineWinner()).toBe(player1);
        expect(game.message()).toEqual("Jeffrey Archer litigates against Mario Balotelli");
      });

      it('should lose to Captain Birdseye', function() {
        player1.picks('Jeffrey Archer');
        player2.picks('Captain Birdseye');
        expect(game.determineWinner()).toBe(player2);
        expect(game.message()).toBe("Captain Birdseye force feeds fish fingers down the neck of Jeffrey Archer")
      });

      it('should beat James Brown', function() {
        player1.picks('Jeffrey Archer');
        player2.picks('James Brown');
        expect(game.determineWinner()).toBe(player1);
        expect(game.message()).toBe("Jeffrey Archer whispers sweet nothings to James Brown")
      });

      it('should lose to Mr Motivator', function() {
        player1.picks('Jeffrey Archer');
        player2.picks('Mr Motivator');
        expect(game.determineWinner()).toBe(player2)
        expect(game.message()).toBe("Mr Motivator touches up Jeffrey Archer")
      }); 
    });

    describe('Captain Birdseye', function() {
      it('should beat Jeffrey Archer', function() {
        player1.picks('Captain Birdseye');
        player2.picks('Jeffrey Archer');
        expect(game.determineWinner()).toBe(player1);
        expect(game.message()).toBe("Captain Birdseye force feeds fish fingers down the neck of Jeffrey Archer")

      });

      it('should lose to Mario Balotelli', function() {
        player1.picks('Captain Birdseye');
        player2.picks('Mario Balotelli');
        expect(game.determineWinner()).toBe(player2);
        expect(game.message()).toBe("Mario Balotelli cuts Captain Birdseye")
      });
    });

    describe('Mario Balotelli', function() {
      it('should beat Captain Birdseye', function() {
        player1.picks('Mario Balotelli');
        player2.picks('Captain Birdseye');
        expect(game.determineWinner()).toBe(player1);
      });

      it('should lose to Jeffrey Archer', function() {

        player1.picks('Mario Balotelli');
        player2.picks('Jeffrey Archer');
        expect(game.determineWinner()).toBe(player2);
      });
    });

    describe('James Brown', function() {

      it('should beat Captain Birdseye', function() {
        player1.picks('James Brown');
        player2.picks('Captain Birdseye');
        expect(game.determineWinner()).toBe(player1);
      });

      it('should lose to Jeffrey Archer', function() {
        player1.picks('James Brown');
        player2.picks('Jeffrey Archer');
        expect(game.determineWinner()).toBe(player2);
      });
    });

    describe('Mr Motivator', function() {
      it('should beat Jeffrey Archer', function() {
        player1.picks('Mr Motivator');
        player2.picks('Jeffrey Archer');
        expect(game.determineWinner()).toBe(player1);
      });

      it('should lose to Mario Balotelli', function() {
        player1.picks('Mr Motivator');
        player2.picks('Mario Balotelli');
        expect(game.determineWinner()).toBe(player1);
      });
    });
  });

  describe('---draws---', function() {

    describe('any identical picks', function() {
      it('should result in no winner', function() {
        var drawGameResults = ['Jeffrey Archer', 'Captain Birdseye', 'Mario Balotelli', 'Mr Motivator', 'James Brown'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.determineWinner();
        });
        expect(drawGameResults).toEqual([null, null, null, null, null]);
      });
    });
  });

});