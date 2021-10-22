const {
    ComponentDialog,
    WaterfallDialog,
    DialogSet,
    DialogTurnStatus
} = require('botbuilder-dialogs');

const {BookTable,ShowGallery,AboutMe} = require('./');
const { LuisRecognizer } = require("botbuilder-ai");

const RootDialogWaterfall1 = 'RootDialogWaterfall1'
const rootDialog = 'rootDialog'

const luisConfig = {
    applicationId: "0e14636f-d80b-4030-837e-b01158b1d5ab",
    endpointKey: "39118401844e4e92b01b2e6843ac8c3e",
    endpoint: "https://luistraining122.cognitiveservices.azure.com/",
  };

class RootDialog extends ComponentDialog{
    constructor(conversationState){
        super(rootDialog);

        if(!conversationState) throw new Error('Conversation State is not defined');
        this.conversationState = conversationState;

        this.recognizer = new LuisRecognizer(luisConfig, {
            apiVersion: "v3",
          });

        // this.addDialog(new AboutMe(conversationState));
        this.addDialog(new BookTable(conversationState));
        this.addDialog(new ShowGallery(conversationState));
        this.addDialog(new AboutMe(conversationState));

        this.addDialog(new WaterfallDialog(RootDialogWaterfall1,[
            this.routeMessages.bind(this)
        ]))

        this.initialDialogId = RootDialogWaterfall1;
    }

    async routeMessages(stepContext){
        let luisresponse = await this.recognizer.recognize(stepContext.context);
        let luisIntent = luisresponse.luisResult.prediction.topIntent;
        console.log(luisIntent);
        switch(luisIntent.toLowerCase()){
            // case 'about' : 
            // return await stepContext.beginDialog("aboutRestroBot");

            case 'book a table' : 
            return await stepContext.beginDialog("bookTable",
            {
                luisResult : true,
                entities : luisresponse.luisResult.prediction.entities
            });

            // case 'show photos' : 
            // return await stepContext.beginDialog("showGallery");

            default : context.sendActivity('Sorry, I am still learning can you please refresh your query')
        } 
        console.log('here');
        return stepContext.endDialog();
    }

    async run(context, accessor){
        try{
            const dialogSet = new DialogSet(accessor);
            dialogSet.add(this);
            const dialogContext = await dialogSet.createContext(context);
            const results = await dialogContext.continueDialog();
            if(results && results.status === DialogTurnStatus.empty){
                await dialogContext.beginDialog(this.id);
            }else{
                console.log('Dialog Stack is Empty')
            }
        }catch(error){
            console.log(error);
        }
    }
}



module.exports.RootDialog = RootDialog;