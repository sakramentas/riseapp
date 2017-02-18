'use strict';

var path = require('path'),
    config = require(path.resolve('./config/config')),
    request = require('request');

function pad(s) { return (s < 10) ? '0' + s : s; }

function convertDate(dateInput) {
   var d = dateInput;
  return d.getFullYear()+"-"+pad(d.getMonth()+1)+pad(d.getDate())+"T00:00:00.000Z";
}

/**
 This function will return the account balance in the console.
 params - optional 

  @bankDetailsObj - bank details obj . Use this to save in the database.
*/
exports.getCurrentAccounBalance = function (bankDetailsObj,res){


    var options = {
        url: 'https://bluebank.azure-api.net/api/v0.6.3/customers?',
        headers: {
            'Ocp-Apim-Subscription-Key': config.bankAPI.key,
            'bearer':config.bankAPI.bearer
      }
    };
 
    function callback(error, response, body) {
      if (!error && response.statusCode === 200) {
        var data = JSON.parse(body);
        //console.log(data);
        getCustomer(data,bankDetailsObj,res);
      }
    }
 
    request(options, callback);
};


function getCustomer(data,bankDetailsObj,res){

         //Got a customers response
        var customerId=data[0].id;
        console.log("Customer Id: %s",customerId);

        var options = {
            url: "https://bluebank.azure-api.net/api/v0.6.3/customers/"+customerId+"/accounts?",
            headers: {
                'Ocp-Apim-Subscription-Key': config.bankAPI.key,
                'bearer':config.bankAPI.bearer
          }
        };

        function callback(error, response, body) {
          if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            console.log(data);
            var currentAccountId = getCustomerAccount(data);
            getCurrentAccounBalanceCall(currentAccountId,customerId,bankDetailsObj,res);
          }
        }
     
        request(options, callback);

      
}



/**
 This function will call the endpoint to return the account balance in the console.
 params - optional 

*/
function getCurrentAccounBalanceCall(currentAccountId,customerId,bankDetailsObj,res){
  
    var _base_url = "https://bluebank.azure-api.net/api/v0.6.3/accounts/"+currentAccountId+"/transactions?";
    var _filter = "sortOrder=-transactionDateTime&limit=1";
    var _url = _base_url + _filter;

    var options = {
            url: _url,
            headers: {
                'Ocp-Apim-Subscription-Key': config.bankAPI.key,
                'bearer':config.bankAPI.bearer
          }
        };

        function callback(error, response, body) {
          if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            console.log(data);
           
             //Dump out transactions to the console
            for (var key in data) {
                    var element;
                    if (data.hasOwnProperty(key)) {
                        element = data[key];
                    }
                    // TODO
                    // we should define a target for this information , can be a db or a id element
                    console.log(element.accountBalance);
                                        
                    bankDetailsObj.currentAccountBalance = element.accountBalance;
                    bankDetailsObj.customerId = customerId;
                    bankDetailsObj.currentAccountId = currentAccountId;
                    saveBankDetails(bankDetailsObj,res);
            }
          }else{
            console.log("erro");
          }
        }
     
        request(options, callback);
   
} 



// get the first "Standard Current Account"
function getCustomerAccount(data){

    var currentAccountId;
    for (var account in data) {
        if (data.hasOwnProperty(account)) {
            var element = data[account];
            if (element.accountType==="Standard Current Account"){
                console.log("Found a current account: %s",element.id);
                currentAccountId=element.id;
            }
        }
    }

    return currentAccountId;
}


function saveBankDetails(bankDetailsObj,res){
    var bankDetails = bankDetailsObj;
     bankDetails.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: "errorHandler.getErrorMessage(err)"
      });
    } else {
      console.log("nice");  
      res.json(bankDetails);
    }
  });
}


