const {
    ComponentDialog,
    WaterfallDialog,
    TextPrompt,
    ChoicePrompt,
    ChoiceFactory,
    ConfirmPrompt
} = require('botbuilder-dialogs');
const {nanoid} = require('nanoid');
const {CardFactory} = require('botbuilder');
// const validator = require('validators')


const bookTable = 'bookTable'
const bookTableWaterafall1 = 'bookTableWaterafall1'
const TextPromptDialog = 'TextPromptDialog'
const ChoicePromptDialog = 'ChoicePromptDialog'
const ConfirmPromptDialog = 'ConfirmPromptDialog'

const {bookTableCard,confirmationCard,finalBookingCard} = require('../Cards');

let dialogState;

class BookTable extends ComponentDialog{
    constructor(convesationState){
        super(bookTable);

        this.convesationState = convesationState
        this.bookTableData = this.convesationState.createProperty('BOOK_A_TABLE');

        this.addDialog(new TextPrompt(TextPromptDialog));
        this.addDialog(new ChoicePrompt(ChoicePromptDialog));
        this.addDialog(new ConfirmPrompt(ConfirmPromptDialog));

        this.addDialog(new WaterfallDialog(bookTableWaterafall1,[
            this.preprocessEntities.bind(this),
            this.getNumberOfPerson.bind(this),
            this.getDateOfBooking.bind(this),
            this.showConfirmationCard.bind(this),
            this.finalBooking.bind(this)
        ]))

        this.initialDialogId = bookTableWaterafall1;
    }

    async preprocessEntities(stepContext){
        try{
          if(stepContext.options && stepContext.options.luisResult){
            console.log(JSON.stringify(stepContext.options.entities));
    
            let numberEntity = stepContext.options.entities.number ? stepContext.options.entities.number[0] : null;
    
    
            let dateTimeEntity = stepContext.options.entities.datetimeV2 ? stepContext.options.entities.datetimeV2 : null;
    
            let dateFrameObj = {}
    
            if(dateTimeEntity != null){
              dateTimeEntity.forEach((subEntities, index)=>{
                if(subEntities.type === 'date'){
                  dateFrameObj['date'] = subEntities.values[0]["resolution"][0]["value"];
                }
              })
            }
    
            stepContext.values.Entities = {
              numberEntity,
              dateFrameObj
            }
    
            console.log("Entities : ",stepContext.values.Entities)
    
            return stepContext.next();
          }
        }catch(error){
          console.log(error);
        }
      }

    
    async getNumberOfPerson(stepContext){
        // await stepContext.context.sendActivity({
        //     attachments : [
        //         CardFactory.adaptiveCard(bookTableCard())
        //     ]
        // })
        if(!stepContext.values.Entities.numberEntity)
        {
            return await stepContext.prompt(TextPromptDialog,`Fow how many people you want me to book a table for?`);
        }
        else{
          return await stepContext.next();
        }
    }


    async getDateOfBooking(stepContext){
        dialogState = await this.bookTableData.get(stepContext.context,{});
        if(stepContext.values.Entities.numberEntity){ 
            dialogState.numberOfPeople = stepContext.values.Entities.numberEntity;
        }else{
            dialogState.numberOfPeople = stepContext.result;
        }  

        if(stepContext.values.Entities.dateFrameObj.date){
                return await stepContext.next();
            }else{
                return await stepContext.prompt(TextPromptDialog,`On Which Date You want be to book a Table at ?`);

            } 
    }

    async showConfirmationCard(stepContext){
        if(stepContext.values.Entities.dateFrameObj.date){ 
            dialogState.dateOfBooking = stepContext.values.Entities.dateFrameObj.date;
        }else{
            dialogState.dateOfBooking = stepContext.result;
        }
        console.log(dialogState);
        await stepContext.context.sendActivity({
          attachments : [
            CardFactory.adaptiveCard(confirmationCard(
              "TB-1",
              dialogState.numberOfPeople,
              dialogState.dateOfBooking,
              nanoid()
              ))
          ]
        })
      //   return await stepContext.prompt(ChoicePromptDialog,{
      //     prompt : 'Please help me with the type of leave you want to apply for',
      //     choices : ChoiceFactory.toChoices([
      //         'Yes',
      //         'No',
      //     ])
      // })
      return await stepContext.prompt(ConfirmPromptDialog,
        'Do You want to Confirm me Your Booking',
        ['Yes','No']
        )

    }

    async finalBooking(stepContext){
      if(stepContext.result){
        await stepContext.context.sendActivity({
          attachments : [
            CardFactory.adaptiveCard(finalBookingCard(
              "TB-1",
              dialogState.numberOfPeople,
              dialogState.dateOfBooking,
              nanoid()
              ))
          ]
        });
        return await stepContext.endDialog();
      }else{
        return await stepContext.endDialog();
      }
    }

}

module.exports.BookTable = BookTable