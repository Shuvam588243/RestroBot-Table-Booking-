const restify = require('restify');

const {BotFrameworkAdapter, MemoryStorage, UserState, ConversationState} = require('botbuilder');
const {RestroBot} = require('./RestroBot');
const {RootDialog} = require('./Dialogs/rootDialog');

const adapter = new BotFrameworkAdapter({
    appId : '',
    appPassword : ''
});

adapter.onTurnError = async(context,error) =>{
    console.log('Error Occured : ', error);
     await context.sendActivity('The Bot has encountered an Error');
     await context.sendActivity('Please Fix the Source Code of the Bot to continue');
}

const server = restify.createServer();
server.listen(3978,()=>{
    console.log(`${server.name} listening to ${server.url}`);
});


let memory = new MemoryStorage();
let conversationState = new ConversationState(memory);
let dialog = new RootDialog(conversationState);
const bot = new RestroBot(conversationState,dialog);


server.post('/api/messages',(req,res)=>{
    adapter.processActivity(req,res, async(context)=>{
        await bot.run(context);
    })
})