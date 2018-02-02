// validEmail checks the email address entered for proper formatting and then breaks up that email address by the @ symbol and outputs the username and the domain separately.
function validEmail(email) {
    var emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
    // verifies if email is in correct format.
    if (email.match(emailRegex)) {
        //gets index position of @ symbol in email string.
        symbolbreak = email.indexOf("@", 0);
        // outputs email username based on @ symbols position from the beginning of the string.
        document.write("The username is: " + email.slice(0, symbolbreak) + ".<br>");
        // outputs email domain based on @ symbols position to the end of the string.
        document.write("The domain is: " + email.slice(symbolbreak + 1, email.length ) + ".<br>");                
    }
    // output displayed if email address is not in valid format.
    else {
        document.write("You have entered an invalid email address.<br>");
    }
        
}

    // returnGreeting uses the time of day to return an appropriate greeting using a switch statement.
function returnGreeting() {
    var now = new Date();
    var today = now.getDate();
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    
    
    switch (hours) {
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            document.write("Good Morning, ");
            break;
        case 11:
            document.write("Happy Lunchtime, ");
            break;
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
            document.write("Good Afternoon, ");
            break;
        case 17:
        case 18:
        case 19:
        case 20:
            document.write("Good Evening, ");
            break;
        default:
            document.write("Good Night, ");
    }
    
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
		
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		
		var month = months[now.getMonth()];	
        
    document.write("the date is: " + month + " " + today + ", " + year+ ". " + "The time is: " + hours + ":" + minutes + ".<br>");
    
}

// This is the area where the arrays are created.
        var questions = ["What is the color of the sky?", "What is the season when the leaves fall from the trees?", "What is the most popular search engine?", "What is the capital of Texas?", "What is another name for New York City?"];
        var answers = ["BLUE", "fall", "google", "AustiN", "Manhattan"];

        function quiz() {
            var score = 0;
            var bonus = Math.floor(Math.random() * 5);
            
            for (var x=0; x<questions.length; x++) {
                var points = 0;
                var tries = 3;
                if (x != bonus) {
                    var ans_given = prompt(questions[x]).toLowerCase();
                    while (tries != 0) {

                     if (ans_given == answers[x].toLowerCase()) {
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
              else {
                  
                  var ans_given = prompt("This is the bonus question: " +(questions[bonus])).toLowerCase();
                    while (tries != 0) {

                     if (ans_given == answers[bonus].toLowerCase()) {
                         points = tries;
                         tries = 0;
                     }
                     else {   
                       tries = (tries - 1);
                       points = tries;
                     }
                }
                points = points * 2;  
                score = score + points;                         
              }
            }
                 
                
               
            return score;
        }

        function comment(score) {
            if (score == 18) {
                score = (score / 18) * 100; 
                document.writeln("Good Job, You answered all questions correct. Your score is " + score.toFixed(2) + "%.<br>");
            }
            
            else if (score >= 12) {
                score = (score / 18) * 100; 
                document.writeln("Good Job. Your score is " + score.toFixed(2) + "%.<br>");
            }
            
            else {
                score = (score / 18) * 100; 
                document.writeln("Better Luck Next Time. Your score is " + score.toFixed(2) + "%.<br>");
            }
        }