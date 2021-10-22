const { CardFactory } = require('botbuilder-core');
const {
    ComponentDialog,
    WaterfallDialog
} = require('botbuilder-dialogs');

const {aboutBotCard} = require('../Cards');
const aboutRestroBot = 'aboutRestroBot'
const aboutRestroBotWaterafall1 = 'aboutRestroBotWaterafall1'

class AboutRestroBot extends ComponentDialog{
    constructor(convesationState){
        super(aboutRestroBot);

        this.convesationState = convesationState

        this.addDialog(new WaterfallDialog(aboutRestroBotWaterafall1,[
            this.aboutMe.bind(this)
        ]))

        this.initialDialogId = aboutRestroBotWaterafall1
    }

    async aboutMe(stepContext){
        await stepContext.context.sendActivity({
                    attachments : [
                        CardFactory.adaptiveCard(aboutBotCard())
                    ]
                })
        return await stepContext.endDialog();
    }
}

module.exports.AboutRestroBot = AboutRestroBot