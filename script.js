let currencyCodes; // Declare currencyCodes variable

// Fetch data and assign currencyCodes inside the Promise chain
fetch('https://v6.exchangerate-api.com/v6/de73579d91bf20a8392d5b1d/latest/USD')
    .then(response => response.json())
    .then(data => {
        //storing the json file
        const datajson=data;
        currencyCodes = Object.keys(data.conversion_rates);
         const options=document.getElementById("fromcurrency");
        
         currencyCodes.forEach(element => {
            const option=document.createElement('option');
            option.value=element;
            option.innerText=element;
            option.setAttribute('id',element);
            options.appendChild(option);
            console.log(option);    
         });

         const options2=document.getElementById("tocurrency");
        
         currencyCodes.forEach(element => {
            const option=document.createElement('option');
            option.value=element;
            option.id=element;
            option.innerText=element;
            option.setAttribute('id', element);
            options2.appendChild(option);
            console.log(option);    
         }
        
        );

        document.getElementById("currencyForm").addEventListener("submit", function(event) {
            event.preventDefault(); 
            
            let amt = parseFloat(document.getElementById("amount").value);
            let fromCurrency=document.getElementById("fromcurrency").value
            let toCurrency=document.getElementById("tocurrency").value

            let convertedAmt = convertCurrency(amt, fromCurrency, toCurrency);
            
            
            document.getElementById("amount2").value = convertedAmt;
           
        });

        function convertCurrency(amt,fromCurrency,toCurrency)
        {
            //searching for the value of currencies
            //logic would be converting firs the from value to usd and
            //then checking usd value of that amount in the to currency
            

            let fromamt=amt/datajson.conversion_rates[fromCurrency];//this is the conversion of the amount to usd
            let toamt=fromamt*datajson.conversion_rates[toCurrency];
            
            return toamt;

            
        }
    })
    .catch(error => {
        console.error("An error has occurred:", error);
    });
