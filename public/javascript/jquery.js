
      $(document).ready(function(){
        var name = prompt('Please enter your name');
        if(name) {
          var p1 = new Player(name);          
        } else {
          var p1 = new Player('Human');
        }
        var p2 = new Player('Computer');
        var game = new Game(p1, p2);

        $('.menu li').on('click', function() {
          if($(this).data('player')) {          
            window.playerChoice = $(this).data('player');
          }
        })

        $('#choices img').on('click', function(){
          p1.picks($(this).data('pick'));
          window.playerChoice ? p2.picks(window.playerChoice) : p2.randompick();

          game.determineWinner()

          $('#players h1').html("Welcome " + p1.name + ". You are playing the mighty " + p1.pick)
          var latestResult = $('<li>' + game.message() + '</li>');
          latestResult.prependTo('#results')
          
          $('#results li:nth-child(5)').fadeOut(function(){
            $(this).remove()
          });
        });
      })