module.exports = {
	name: 'timer',
	description: 'timer',
	execute(message, args) {
		message.channel.send(`time: ${args[0]}`);
		message.channel.send(`unit: ${args[1]}`);
		message.channel.send(`description(optional): ${args[2]}`);
	},
};
