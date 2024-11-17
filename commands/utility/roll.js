const { SlashCommandBuilder } = require("discord.js");

//set a max value for the dice? I think we could probably accidentally do an e notation... so whatever the limit for that is... after a point it just declares infinity.

module.exports = {
  data: new SlashCommandBuilder()
    .setName("roll")
    .setDescription("Rolls a dice in the format <number of dice>d<max value>")
    .addIntegerOption((option) =>
      option
        .setName("numberofdice")
        .setDescription("number of dice to roll between 1 and 100")
        .setMinValue(1)
        .setMaxValue(100)
        .setRequired(true),
    )
    .addIntegerOption((option) =>
      option
        .setName("maxvalue")
        .setDescription("The value of the die")
        .setMinValue(0)
        .setRequired(true),
    ),

  async execute(interaction) {
    const numberofDice = interaction.options.getInteger("numberofdice");
    const maxVal = interaction.options.getInteger("maxvalue");
    returnval = "";
    for (i = 0; i < numberofDice; i++) {
      returnval += "Dice (" + i + "d" + maxVal + "): "+ Math.ceil(Math.random() * maxVal) + " ";
    }
    //channel.send('content');
    //client.channels.fetch(interaction.mention_channels.first().id).then(channel => channel.send(input))

    if (
      interaction.channel.name == "testing-sai" ||
      interaction.channel.name == "general" ||
      interaction.channel.name == "ooc" ||
      interaction.channel.name == "official-dnd-dice-roll-thread" ||
      interaction.channel.name ==
        "the-dungeon-master-is-rolling-dice-for-some-reason" ||
      interaction.channel.name == "testingsai"
    )
      await interaction.reply(returnval);
    else
      await await interaction.reply({
        content: "The bot is not avaliable in this channel.",
        ephemeral: true,
      });
  },
};
