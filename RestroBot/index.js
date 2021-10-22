const {ActivityHandler,CardFactory} = require('botbuilder');

class RestroBot extends ActivityHandler{
    constructor(conversationState,rootDialog){
        super();

        if(!conversationState) throw new Error('Conversation State Not Found');
        if(!rootDialog) throw new Error('Root Dialog is Missing');

        this.conversationState = conversationState;
        this.rootDialog = rootDialog;
        this.dialogState = this.conversationState.createProperty('DIALOG_STATE');

        this.onMembersAdded(async(context,next)=>{
            let membersAdded = context.activity.membersAdded;
            for(let cnt = 0; cnt < membersAdded.length; cnt ++){
                if(membersAdded[cnt].id !== context.activity.recipient.id){
                    await context.sendActivity(`Welcome ${membersAdded[cnt].name}`);
                    await this.sendServicesOptions(context);
                }
            }
            await next();
        })

        this.onMessage(async(context,next)=>{
            await this.rootDialog.run(context,this.dialogState);
            await next();
        })
    }

    async run(context){
        await super.run(context);
        await this.conversationState.saveChanges(context,false);
    }

    async sendServicesOptions(context){
        await context.sendActivity(
            {
                attachments : [CardFactory.heroCard(
                    'Here are some suggestions that you can try',
                    null,
                    CardFactory.actions([
                        {
                            type : 'imBack',
                            title : 'About RestroBot',
                            value : 'About'
                        },
                        {
                            type : 'imBack',
                            title : 'Book Table',
                            value : 'Book Table'
                        },
                        {
                            type : 'imBack',
                            title : 'Show Photos',
                            value : 'Show Photos'
                        }
                    ])
                )]
            }
        )
    }
}

module.exports.RestroBot = RestroBot;