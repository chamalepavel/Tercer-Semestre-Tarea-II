const rates = {
    USD: { USD: 1, RUB: 90, CNY: 7.2 },
    RUB: { USD: 0.011, RUB: 1, CNY: 0.08 },
    CNY: { USD: 0.14, RUB: 12.5, CNY: 1 }
};

function convert() {
    let amount = parseFloat(document.getElementById("amount").value);
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    
    if (isNaN(amount) || amount <= 0) {
        document.getElementById("result").innerText = "Ingrese un número válido";
        return;
    }
    
    let result = amount * rates[from][to];
    document.getElementById("result").innerText = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
}

