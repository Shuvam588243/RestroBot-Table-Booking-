module.exports = {
    aboutBotCard : () =>{
        return {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "url": "https://i.pinimg.com/originals/51/57/48/515748208487a0c287deb0ac8e9c4986.gif",
                                            "horizontalAlignment": "Center",
                                            "size": "Large",
                                            "height": "143px"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "Image",
                                            "url": "data:image/jpeg;base64,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",
                                            "size": "Medium"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "wrap": true,
                                            "text": "This is a Restaurant Booking Bot for FoodStar developed by Shuvam Sengupta",
                                            "weight": "Bolder",
                                            "color": "Accent"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Contact : 9957588243",
                                            "wrap": true,
                                            "size": "Medium",
                                            "color": "Dark"
                                        },
                                        {
                                            "type": "TextBlock",
                                            "text": "Celebal Technologies",
                                            "wrap": true,
                                            "weight": "Bolder",
                                            "color": "Accent"
                                        }
                                    ]
                                }
                            ],
                            "horizontalAlignment": "Center"
                        }
                    ]
                }
            ]
        }
    },

    bookTableCard : () => {
        return {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "FoodStar Restaurant Reservation Bot",
                            "wrap": true,
                            "size": "Large",
                            "horizontalAlignment": "Center",
                            "color": "Accent",
                            "weight": "Bolder"
                        },
                        {
                            "type": "Image",
                            "url": "https://pro2-bar-s3-cdn-cf6.myportfolio.com/394fda6b242f7f92d5994032dd52abb6/72b96263b7820864bba1eae7_rw_1920.gif?h=0765da6f74d1cf745336035a0d20698d"
                        },
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "ColumnSet",
                                    "columns": [
                                        {
                                            "type": "Column",
                                            "width": "stretch",
                                            "items": [
                                                {
                                                    "type": "TextBlock",
                                                    "text": "Please Fill the below details so that we can help you to book your table",
                                                    "wrap": true,
                                                    "separator": true,
                                                    "size": "Medium",
                                                    "color": "Accent",
                                                    "weight": "Bolder"
                                                },
                                                {
                                                    "type": "Container",
                                                    "items": [
                                                        {
                                                            "type": "ColumnSet",
                                                            "columns": [
                                                                {
                                                                    "type": "Column",
                                                                    "width": "stretch",
                                                                    "items": [
                                                                        {
                                                                            "type": "TextBlock",
                                                                            "wrap": true,
                                                                            "text": "Please Choose Your Meal",
                                                                            "weight": "Bolder",
                                                                            "color": "Dark"
                                                                        },
                                                                        {
                                                                            "type": "Input.ChoiceSet",
                                                                            "choices": [
                                                                                {
                                                                                    "title": "Veg",
                                                                                    "value": "Veg"
                                                                                },
                                                                                {
                                                                                    "title": "Non Veg",
                                                                                    "value": "NonVeg"
                                                                                },
                                                                                {
                                                                                    "title": "Seafood",
                                                                                    "value": "Seafood"
                                                                                }
                                                                            ],
                                                                            "placeholder": "-- Select",
                                                                            "id": "mealCategory"
                                                                        }
                                                                    ],
                                                                    "horizontalAlignment": "Center",
                                                                    "verticalContentAlignment": "Center"
                                                                },
                                                                {
                                                                    "type": "Column",
                                                                    "width": "stretch",
                                                                    "items": [
                                                                        {
                                                                            "type": "TextBlock",
                                                                            "text": "Number of Person",
                                                                            "wrap": true,
                                                                            "weight": "Bolder"
                                                                        },
                                                                        {
                                                                            "type": "Input.ChoiceSet",
                                                                            "choices": [
                                                                                {
                                                                                    "title": "1",
                                                                                    "value": "1"
                                                                                },
                                                                                {
                                                                                    "title": "2",
                                                                                    "value": "2"
                                                                                },
                                                                                {
                                                                                    "title": "3",
                                                                                    "value": "3"
                                                                                },
                                                                                {
                                                                                    "title": "4",
                                                                                    "value": "4"
                                                                                },
                                                                                {
                                                                                    "title": "6",
                                                                                    "value": "6"
                                                                                }
                                                                            ],
                                                                            "placeholder": "--Select",
                                                                            "id": "totalPerson"
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ],
                                                    "horizontalAlignment": "Center",
                                                    "verticalContentAlignment": "Center"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "text": "Date of Booking",
                            "wrap": true,
                            "weight": "Bolder",
                            "separator": true
                        },
                        {
                            "type": "Input.Date",
                            "id": "dateOfBooking"
                        },
                        {
                            "type": "TextBlock",
                            "text": "Time you want to book for",
                            "wrap": true,
                            "weight": "Bolder",
                            "color": "Dark",
                            "separator": true
                        },
                        {
                            "type": "Input.Time",
                            "id": "bookTime"
                        },
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Select Your Meal Type",
                                    "wrap": true,
                                    "weight": "Bolder",
                                    "color": "Dark"
                                }
                            ]
                        }
                    ],
                    "horizontalAlignment": "Center",
                    "verticalContentAlignment": "Center"
                },
                {
                    "type": "Input.ChoiceSet",
                    "choices": [
                        {
                            "title": "Lunch",
                            "value": "Lunch"
                        },
                        {
                            "title": "Dinner",
                            "value": "Dinner"
                        }
                    ],
                    "placeholder": "--Select",
                    "id": "mealType",
                    "separator": true
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "ActionSet",
                                            "actions": [
                                                {
                                                    "type": "Action.Submit",
                                                    "title": "Book Table",
                                                    "id": "submitBooking",
                                                    "style": "positive"
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "ActionSet",
                                            "actions": [
                                                {
                                                    "type": "Action.Submit",
                                                    "title": "Cancel",
                                                    "id": "cancelBooking"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    IntroCard : () => {
        return {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Image",
                                    "url": "data:image/jpeg;base64,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",
                                    "size": "Medium"
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "Image",
                            "url": "https://i.pinimg.com/originals/58/db/55/58db55e378435cfd534201238af2fc21.gif"
                        },
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "text": "Hey, My name is RestroBot. I am a Virtual Assisting Bot. I can assist you in booking your table in our Restaurant. Please Enter you query to book your table below",
                                    "wrap": true,
                                    "size": "Default",
                                    "weight": "Bolder",
                                    "color": "Accent",
                                    "isSubtle": true
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },

    confirmationCard : (table,count,date,id) => {
        return {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Image",
                                    "url": "https://celebaltech.com/assets/img/celebal.webp",
                                    "size": "Medium"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "wrap": true,
                                    "text": "Table Booking Reciept",
                                    "size": "Medium",
                                    "weight": "Bolder",
                                    "color": "Accent",
                                    "horizontalAlignment": "Center"
                                }
                            ]
                        }
                    ],
                    "horizontalAlignment": "Center"
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "Image",
                                    "url": "https://i.pinimg.com/originals/a9/40/98/a9409818883cf155cf3512ddba632ebc.jpg",
                                    "separator": true,
                                    "horizontalAlignment": "Center",
                                    "spacing": "Medium"
                                }
                            ]
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Booking ID",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Default",
                                            "weight": "Bolder",
                                            "color": "Dark"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${id}`,
                                            "wrap": true,
                                            "size": "Default",
                                            "weight": "Lighter"
                                        }
                                    ]
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "separator": true,
                            "spacing": "Large"
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Number of Person",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Default",
                                            "weight": "Bolder",
                                            "color": "Dark"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${count}`,
                                            "wrap": true,
                                            "size": "Default",
                                            "weight": "Lighter"
                                        }
                                    ]
                                }
                            ],
                            "horizontalAlignment": "Center"
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Booking Date",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Default",
                                            "weight": "Bolder",
                                            "color": "Dark"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${date}`,
                                            "wrap": true,
                                            "size": "Default",
                                            "weight": "Lighter"
                                        }
                                    ]
                                }
                            ],
                            "horizontalAlignment": "Center"
                        }
                    ]
                },
                {
                    "type": "Container",
                    "separator": true,
                    "spacing": "Medium",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Table Number",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Default",
                                            "weight": "Bolder",
                                            "color": "Dark"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${table}`,
                                            "wrap": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            
            ]
        }
    },

    finalBookingCard : (table,count,date,id) => {
        return {
            "type": "AdaptiveCard",
            "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
            "version": "1.3",
            "body": [
                {
                    "type": "ColumnSet",
                    "columns": [
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "Image",
                                    "url": "https://celebaltech.com/assets/img/celebal.webp",
                                    "size": "Medium"
                                }
                            ]
                        },
                        {
                            "type": "Column",
                            "width": "stretch",
                            "items": [
                                {
                                    "type": "TextBlock",
                                    "wrap": true,
                                    "text": "Table Booking Reciept",
                                    "size": "Medium",
                                    "weight": "Bolder",
                                    "color": "Accent"
                                }
                            ]
                        }
                    ],
                    "horizontalAlignment": "Center"
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "Container",
                            "items": [
                                {
                                    "type": "Image",
                                    "separator": true,
                                    "horizontalAlignment": "Center",
                                    "spacing": "Large",
                                    "url": "https://us.123rf.com/450wm/siraanamwong/siraanamwong2009/siraanamwong200900036/155414683-thanksgiving-day-invitation-with-interior-dining-room-vector-illustration.jpg?ver=6",
                                    "height": "182px",
                                    "width": "344px"
                                }
                            ]
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Booking ID",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Default",
                                            "weight": "Bolder",
                                            "color": "Dark"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${id}`,
                                            "wrap": true,
                                            "size": "Default",
                                            "weight": "Lighter"
                                        }
                                    ]
                                }
                            ],
                            "horizontalAlignment": "Center",
                            "separator": true,
                            "spacing": "Large"
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Number of Person",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Default",
                                            "weight": "Bolder",
                                            "color": "Dark"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${count}`,
                                            "wrap": true,
                                            "size": "Default",
                                            "weight": "Lighter"
                                        }
                                    ]
                                }
                            ],
                            "horizontalAlignment": "Center"
                        },
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Booking Date",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Default",
                                            "weight": "Bolder",
                                            "color": "Dark"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${date}`,
                                            "wrap": true,
                                            "size": "Medium",
                                            "weight": "Lighter"
                                        }
                                    ]
                                }
                            ],
                            "horizontalAlignment": "Center"
                        }
                    ],
                    "spacing": "Medium"
                },
                {
                    "type": "Container",
                    "separator": true,
                    "spacing": "Medium",
                    "items": [
                        {
                            "type": "ColumnSet",
                            "columns": [
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": "Table Number",
                                            "wrap": true,
                                            "horizontalAlignment": "Center",
                                            "size": "Medium",
                                            "weight": "Bolder",
                                            "color": "Dark"
                                        }
                                    ]
                                },
                                {
                                    "type": "Column",
                                    "width": "stretch",
                                    "items": [
                                        {
                                            "type": "TextBlock",
                                            "text": `${table}`,
                                            "wrap": true
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "type": "Container",
                    "items": [
                        {
                            "type": "TextBlock",
                            "wrap": true,
                            "text": "The Table is successfully booked for you. Regarding any query feel free to connect on us on our mail id foodstar@gmail.com or connect with us below in our official website",
                            "size": "Small",
                            "weight": "Bolder",
                            "spacing": "Medium",
                            "separator": true
                        }
                    ],
                    "spacing": "Medium",
                    "separator": true,
                    "verticalContentAlignment": "Center",
                    "style": "warning"
                }
            ]
        }
    }
}