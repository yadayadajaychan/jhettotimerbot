module.exports = {
	name: 'timer',
	description: 'timer',
	execute(message, args) {
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
			message.channel.send("You made an error nigger");
			return
		}
		message.channel.send(`${args[0]}`);
		message.channel.send(unit);
	},
};
