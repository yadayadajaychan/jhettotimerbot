import java.io.File;
import java.io.IOException;
module.exports = {
	name: 'timer',
	description: 'timer',
	execute(message, args) {
		//checks if there are no arguments
		if(args.length == 0){
			message.channel.send("Enter a number, a unit, and a description (optional).");
			return;
		}
		//checks if arg[0] is NaN
		var number = parseInt(args[0]);
		if (isNaN(number)) {
			message.channel.send("ching chong can't do math");
			return;
		}		
		// finds the unit of time
		if (args[1] === 's') {
			unit = "second(s)";
			timer = number;
		} else if (args[1] === 'm') {
			unit = "minute(s)";
			timer = number * 60;
		} else if (args[1] === 'h') {
			unit = "hour(s)";
			timer = number * 3600;
		} else if (args[1] === 'd') {
			unit = "day(s)";
			timer = number * 86400;
		} else if (args[1] === 'y') {
			unit = "year(s)";
			timer = number * 31536000
		} else {
			message.channel.send("You made a unit error nigger");
			return;
		}
		
		//timer info fukc it ill go back to this later
		if (args.length > 2) {
			var description = "True";
			var info = args[2];
		} else {
			var description = "False";
			var info = "";
		}
		
		
		//calculates time for reminder
		var current_time = Math.floor(Date.now() / 1000);
		var target_time = current_time + timer;
		
		//finds user
		var author = `${message.author}`;
		
		//creats timer file fisajdoic fix this
		try {
      			File myObj = new File("timer_list.txt");
  		    	if (myObj.createNewFile()) {
        			message.channel.send("File created: " + myObj.getName());
      			} else {
        			message.channel.send("File already exists.");
      			}
    		} catch (IOException e) {
      			message.channel.send("An error occurred.");
     			e.printStackTrace();
    		}
		
		
		//sends confirmation
		message.channel.send(author + ", " + "you have a timer set for " + number + " " + unit);
		message.channel.send(description);
		message.channel.send(info);
	},
};
