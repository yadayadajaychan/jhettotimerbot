module.exports = {
	name: 'timer',
	description: 'timer',
	execute(message, args) {
		// finds the unit of time
		if (args[1] === 's') {
			unit = "second(s)";
		} else if (args[1] === 'm') {
			unit = "minute(s)";
		} else if (args[1] === 'h') {
			unit = "hour(s)";
		} else if (args[1] === 'd') {
			unit = "day(s)";
		} else if (args[1] === 'y') {
			unit = "year(s)";
		} else {
			message.channel.send("You made a unit error nigger");
			return;
		}
		
		//checks if arg[0] is NaN
		var number = parseFloat(args[0]);
		if (isNaN(number)) {
			message.channel.send("ching chong can't do math");
			return;
		}
		//timer description
		var info = args[2];
		
		//calculates time for reminder
		var current_time = Math.floor(Date.now() / 1000);
		
		
		
		
		message.channel.send(number);
		message.channel.send(unit);
		message.channel.send(info);
	},
};
