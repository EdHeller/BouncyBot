const { SlashCommandBuilder } = require("discord.js");

//set a max value for the dice? I think we could probably accidentally do an e notation... so whatever the limit for that is... after a point it just declares infinity.

module.exports = {
  data: new SlashCommandBuilder()
    .setName("theory")
    .setDescription("Does a complex command... too long to describe here.")
    .addIntegerOption((option) =>
      option
        .setName("a")
        .setDescription("Value Variable A")
        .setMinValue(0)
        .setMaxValue(1000)
        .setRequired(true),
    )
    .addIntegerOption((option) =>
      option
        .setName("b")
        .setDescription("The value of B")
        .setMinValue(0)
        .setMaxValue(1000)
        .setRequired(true),
    )
    .addIntegerOption((option) =>
      option
        .setName("c")
        .setDescription("Value Variable C")
        .setMinValue(0)
        .setMaxValue(1000)
        .setRequired(true),
    )
    .addIntegerOption((option) =>
      option
        .setName("d")
        .setDescription("Value Variable D")
        .setMinValue(0)
        .setMaxValue(1000)
        .setRequired(true),
    ),

  async execute(interaction) {
    const ValA = interaction.options.getInteger("a");
    const ValB = interaction.options.getInteger("b");
    const ValC = interaction.options.getInteger("c");
    const ValD = interaction.options.getInteger("d");
    returnval = "";
    valRoll11 = Math.floor(Math.random() * 12);
    valRoll9 = Math.floor(Math.random() * 10);
    valRoll7 = Math.floor(Math.random() * 8);
    valRoll5 = Math.floor(Math.random() * 6);
    final = valRoll11 + (valRoll9 * ValA) + (valRoll7 * (ValB + ValC)) - (valRoll5 * ValD)
    
    returnval = "(" +  valRoll11 + ") + (" + valRoll9 + ") * (" + ValA + ") + (" + valRoll7 + ") * (" + ValB + " + " + ValC + ") - (" + valRoll5 + ") * (" + ValD + ") = " + final;

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
