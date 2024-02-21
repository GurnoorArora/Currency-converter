document.getElementById("currencyForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    let amt = parseFloat(document.getElementById("amount").value);
    let curr = document.getElementById("currency").value;
    let curr2 = document.getElementById("currency2").value;
    
   
    let convertedAmt = convertCurrency(amt, curr, curr2);
    
    
    document.getElementById("amount2").value = convertedAmt;
   
});


function convertCurrency(amount, fromCurrency, toCurrency) {
   
  
    if(fromCurrency==="USD" && toCurrency==="INR")
    {
        return amount * 83.0244; 
    }
    if(fromCurrency==="USD" && toCurrency==="EUR")
    {
        return amount * 0.93; 
    }
    if(fromCurrency==="USD" && toCurrency==="AED")
    {
        return amount * 3.67; 
    }
    if(fromCurrency==="EUR" && toCurrency==="USD")
    {
        return amount * 1.08; 
    }
    if(fromCurrency==="EUR" && toCurrency==="INR")
    {
        return amount * 89.66; 
    }
    if(fromCurrency==="EUR" && toCurrency==="AED")
    {
        return amount * 3.97; 
    }
    if (fromCurrency === "INR" && toCurrency === "USD") {
        return amount * 0.012; 
    }
    if (fromCurrency === "INR" && toCurrency === "EUR") {
        return amount * 0.011; 
    }
    if (fromCurrency === "INR" && toCurrency === "AED") {
        return amount * 0.044; 
    }
    if (fromCurrency === "AED" && toCurrency === "USD") {
        return amount * 0.27; 
    }
    if (fromCurrency === "AED" && toCurrency === "INR") {
        return amount * 22.57; 
    }
    if (fromCurrency === "AED" && toCurrency === "EUR") {
        return amount * 0.25; 
    }

    else {
        
        return "Unsupported conversion";
    }
}
