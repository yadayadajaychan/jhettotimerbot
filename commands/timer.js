module.exports = {
	name: 'timer',
	description: 'timer',
	execute(message, args) {
		if (args[1] === 's') {
			unit = "second(s)";
		} else {
			unit = "idk";
		}
		message.channel.send(`${args[0]}`);
		message.channel.send(unit);
	},
};
