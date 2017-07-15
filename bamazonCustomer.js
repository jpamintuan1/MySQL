(function() {

    // mysql config
    var mysql = require("mysql");
    var connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "root",
        database : "bmazon_db"
    });

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  start();
});

// function which prompts the user for what action they should take
function start() {
  inquirer
    .prompt({
      name: "Item Id",
      type: "rawlist",
      message: "What is the id of the product you want?",
      choices: [1000,1001,1002,1003,1004,1005]
    })
    .then(function(answer) {
      // based on their answer, either no quantity or quantity functions
      if (choices = 1000) {
        noQuantity()
      }
      else if (choices = 1001) {
        noQuantity()
      
      } else if (choices = 1002) {
      	quantityIn()
      
      } else if ( choices = 1003) {
      	quantityIn()
      
      } else if ( choices = 1004) {
      	 noQuantity()
      	
      	} else if ( choices = 1005)  {
      		noQuantity()
      	} 
    
    });
}


// function to handle customers with no quantity items

function noQuantity() {
  // prompt for info about the item being put up for auction
  inquirer
    .prompt([
      {
        name: "item",
        type: "input",
        message: "Would like try another item?"
      },
    
      {
        
      }
    ])

function quantityIn() {
  // query the database for all items being sold
  connection.query("SELECT * FROM inventory", function(err, results) {
    if (err) throw err;
    // once you have the items, prompt the user for which they'd like to bid on
    inquirer
      .prompt([
        {
          name: "choice",
          type: "rawlist",
          choices: function() {
            var choiceArray = [];
            for (var i = 0; i < results.length; i++) {
              choiceArray.push(results[i].item_name);
            }
            return choiceArray;
          },
          message: "What quantity would you like?"
        },
        {
          name: "bid",
          type: "input",
          message: "Confirm purchase?"
        }
      ])
      .then(function(answer) {
        // get the information of the chosen item
        var chosenItem;
        for (var i = 0; i < results.length; i++) {
          if (results[i].item_name === answer.choice) {
            chosenItem = results[i];
          }
        }

   
      });
  });

};
};
})