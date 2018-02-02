// This is the area where the arrays are created.
        var questions = ["What is your favorite color?", "What is your favorite season?", "What is your dream car?"];
        var answers = ["purple", "fall", "range rover"];

        function quiz() {
            var score = 0;
            for (var x=0; x<questions.length; x++) {
                var points = 0;
                var tries = 3;
                var ans_given = prompt(questions[x]);
                while (tries != 0) {
                 if (ans_given == answers[x]) {
                     points = tries;
                     tries = 0;
                 }
                 else {   
                   tries = (tries - 1);
                   points = tries;
                 }
                    
                   
                }
                score = score + points;
            }
                 
                
                
            return score;
        }

        function comment(score) {
            if (score == 9) {
                document.write("Good Job");
            }
            
            else {
                document.write("Better Luck Next Time.");
            }
        }