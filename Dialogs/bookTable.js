const {
    ComponentDialog,
    WaterfallDialog,
    TextPrompt
} = require('botbuilder-dialogs');
const {CardFactory} = require('botbuilder');

const bookTable = 'bookTable'
const bookTableWaterafall1 = 'bookTableWaterafall1'
const TextPromptDialog = 'TextPromptDialog'

const {bookTableCard} = require('../Cards');

let dialogState;

class BookTable extends ComponentDialog{
    constructor(convesationState){
        super(bookTable);

        this.convesationState = convesationState
        this.bookTableData = this.convesationState.createProperty('BOOK_A_TABLE');

        this.addDialog(new TextPrompt(TextPromptDialog));

        this.addDialog(new WaterfallDialog(bookTableWaterafall1,[
            this.preprocessEntities.bind(this),
            this.getNumberOfPerson.bind(this),
            this.getDateOfBooking.bind(this),
            this.confirmTableBooking.bind(this)
        ]))

        this.initialDialogId = bookTableWaterafall1;
    }

    async preprocessEntities(stepContext){
        try{
          if(stepContext.options && stepContext.options.luisResult){
            console.log(JSON.stringify(stepContext.options.entities));
    
            let numberEntity = stepContext.options.entities.number ? stepContext.options.entities.number[0] : null;
    
            // let leaveTypesEntity = stepContext.options.entities.leaveTypes ? stepContext.options.entities.leaveTypes[0][0] : null;
    
            let dateTimeEntity = stepContext.options.entities.datetimeV2 ? stepContext.options.entities.datetimeV2 : null;
    
            let dateFrameObj = {}
    
            if(dateTimeEntity != null){
              dateTimeEntity.forEach((subEntities, index)=>{
                // if(subEntities.type === 'duration'){
                //   dateFrameObj['duration'] = subEntities.values[0]['timex'].replace("P",
                //   "").replace("D","");
                // }
    
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
          console.log("else")
          return await stepContext.next();
        }
    }


    async getDateOfBooking(stepContext){
        dialogState = await this.bookTableData.get(stepContext.context,{});
        if(stepContext.values.Entities.numberEntity){ 
            dialogState.numberOfPeople = stepContext.values.Entities.numberEntity;
            console.log(dialogState);
            return await stepContext.next();
        }else{
            dialogState.numberOfPeople = stepContext.result;
            if(stepContext.values.Entities.dateFrameObj.date){
                return await stepContext.next();
            }else{
                return await stepContext.prompt(TextPromptDialog,`On Which Date You want be to book a Table at ?`);

            }
        }   
    }

    async confirmTableBooking(stepContext){
        if(stepContext.values.Entities.dateFrameObj.date){ 
            dialogState.dateOfBooking = stepContext.values.Entities.dateFrameObj.date;
        }else{
            dialogState.dateOfBooking = stepContext.result;
        }
        console.log(dialogState);
        return stepContext.endDialog();
    }



}

module.exports.BookTable = BookTable