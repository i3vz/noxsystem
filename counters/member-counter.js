module.exports = async (bot) =>{
    const guild = bot.guilds.cache.get('613504635956887562');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('938077957489037312');
        channel.setName(`Total Member: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 60000);
}