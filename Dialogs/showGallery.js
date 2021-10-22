const {
    ComponentDialog,
    WaterfallDialog
} = require('botbuilder-dialogs');

const showGallery = 'showGallery'
const showGalleryWaterafall1 = 'showGalleryWaterafall1'

class ShowGallery extends ComponentDialog{
    constructor(convesationState){
        super(showGallery);

        this.convesationState = convesationState

        this.addDialog(new WaterfallDialog(showGalleryWaterafall1,[
            this.showGallery.bind(this)
        ]))

        this.initialDialogId = showGalleryWaterafall1
    }

    async showGallery(stepContext){
        await stepContext.context.sendActivity('In Show Gallery Dialog');
        return await stepContext.endDialog();
    }
}

module.exports.ShowGallery = ShowGallery