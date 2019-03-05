(function() {
    //TODO: Load gif list from external file
    // var bots = $.readFile('./addons/ignorebots.txt');

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function sayTheWordsVj() {
        $.say('!gif ' +  gifs[getRandomInt(0, gifs.length -1)]);
    }

    // List of gifs the bot will select from
    const gifs = [
      'https://media.giphy.com/media/xUOwGdcOfbq12yVhTi/giphy.gif',
      'https://media.giphy.com/media/xT9IgoVvWANezimWgE/giphy.gif',
      'https://media.giphy.com/media/Fvoih2QcVWoyA/giphy.gif',
      'https://media.giphy.com/media/l0HUlfsDvjANDFCbS/giphy.gif',
      'https://media.giphy.com/media/cZ0NAYkELhkCfPeYqd/giphy.gif',
      'https://media.giphy.com/media/3o7bu8nfVT5aLlkkg0/giphy.gif',
      'https://media.giphy.com/media/3oEdv0DUQOagqEI30k/giphy.gif',
      'https://media.giphy.com/media/3ohhwHrEGmN4ASN3xu/giphy.gif',
      'https://media.giphy.com/media/l1J9M4j6gKsiOu73W/giphy.gif',
      'https://media.giphy.com/media/ExYQhwnfUzgLm/giphy.gif',
      'https://media.giphy.com/media/xTiTno2GL7HupVuz84/giphy.gif',
      'https://media.giphy.com/media/l1KcPzLmA5GKK3ECA/giphy.gif',
      'https://media.giphy.com/media/8pD5oU1eHfQek/giphy.gif',
      'https://media.giphy.com/media/5dYiWM1Pm8HMLHVG0Z/giphy.gif',
      'https://media.giphy.com/media/ukX39RMwVTy8M/giphy.gif',
      'https://media.giphy.com/media/xAGmzz3ks92aKOQW7Z/giphy.gif',
      'https://media.giphy.com/media/xT9IgN8YKRhByRBzMI/giphy.gif',
      'https://media.giphy.com/media/l49JRyJSndql02nhS/giphy.gif',
      'https://media.giphy.com/media/sdXkIjcXlch6U/giphy.gif',
      'https://media.giphy.com/media/TDKjSUGGbTAup6w3FO/giphy.gif',
      'https://media.giphy.com/media/39lWTXEdmp4qnZtHIK/giphy.gif',
      'https://media.giphy.com/media/AAUTXrmPyqoUw/giphy.gif',
      'https://media.giphy.com/media/rkM1QfFhHkbWo/giphy.gif',
      'https://media.giphy.com/media/ZymslCeOFvgEU/giphy.gif',
      'https://media.giphy.com/media/3o85xl6sCEV1HXkM7u/giphy.gif',
      'https://media.giphy.com/media/tx8YRv9kwDNSw/giphy.gif',
      'https://media.giphy.com/media/3ohzdT8CcPqRZ5GhgY/giphy.gif',
      'https://media.giphy.com/media/rRKcpDgvYNpEk/giphy.gif',
      'https://media.giphy.com/media/35I3dWbxggpflAgKgV/giphy.gif',
      'https://media.giphy.com/media/8L1J91htDqQlN7H1Lv/giphy.gif',
      'https://media.giphy.com/media/5Y9tDfexTRhjDYyTYq/giphy.gif',
      'https://media.giphy.com/media/jd6TVgsph6w7e/giphy.gif',
      'https://media.giphy.com/media/6UjMu6yJbsBrO/giphy.gif',
      'https://media.giphy.com/media/3o6vXS3XmGBtoc1LIA/giphy.gif',
      'https://media.giphy.com/media/l3q2KnqwBX0bZ9Mre/giphy.gif',
      'https://media.giphy.com/media/l0NwCyRWzhL1adCxi/giphy.gif',
      'https://media.giphy.com/media/3o7aDb47ftRglXMBi0/giphy.gif',
      'https://media.giphy.com/media/6wpHEQNjkd74Q/giphy.gif',
      'https://media.giphy.com/media/3o6ZterMiQkVxi3JWo/giphy.gif',
      'https://media.giphy.com/media/xTiTne31unUpF5HP8I/giphy.gif',
      'https://media.giphy.com/media/d2ossFb7ryQtG/giphy.gif',
      'https://media.giphy.com/media/l0MYJ8H5C9aokJ08U/giphy.gif',
      'https://media.giphy.com/media/26BkNTatnHIZjOtxe/giphy.gif',
      'https://media.giphy.com/media/3oriNQ0GUynXIrFXsA/giphy.gif',
      'https://media.giphy.com/media/XtHRPs99DU24M/giphy.gif',
      'https://media.giphy.com/media/3ohs7WTc4Qd4udKhj2/giphy.gif',
      'https://media.giphy.com/media/3o85xtfl8uqoXPu3cI/giphy.gif',
    ];

    $.bind('command', function(event) {
        var command = event.getCommand(),
            args = event.getArgs(),
            changeInterval = args[0],
            isRunning = false;

        //Initialize table. There has to be a better place to init the DB stuff
        if (!$.inidb.FileExists('intervals')){
          $.inidb.AddFile('intervals')
        }

        /*
        * Command to start the vj. Takes an interval paramater in milliseconds.
          The VJ will randomly select a gif from the above list and send the
          !gif command with url to your twitch chat.
        */
        if (command.equalsIgnoreCase('vjon')) {
            // Initialize an array to store intervals.
            var intervals = [];
            interval = setInterval(sayTheWordsVj, changeInterval || 60000);
            // Store the created interval
            intervals.push(interval);
            // Store the list of intervals in the DB.
            $.inidb.set('intervals', 'intervals', intervals);
        }

        /*
        * Turn off the VJ
        */
        if (command.equalsIgnoreCase('vjoff')) {
          var intervalsToKill = $.inidb.get('intervals','intervals')
          clearInterval(intervalsToKill);
        }
    });

    $.bind('initReady', function() {
        $.registerChatCommand('./commands/vjgiphy.js', 'vjon', 7);
        $.registerChatCommand('./commands/vjgiphy.js', 'vjoff', 7);
    });

})();
