/*      CON DUE INPUT BAR
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
*/


const questionKm = document.getElementById("km");
const questionAge = document.getElementById("age");


const btnCalc = document.getElementById("btnCalc");

btnCalc.addEventListener ("click", function(){
    let km = questionKm.value;
    let age = questionAge.value;
    const priceKm = 0.21;
    const priceUnderage = 0.8;
    const priceOverage = 0.6;
    let finalPrice;
    const printTicket = document.querySelector(".card-info");
    
    if (age<18) {
        finalPrice = Math.round(((km * priceKm) * priceUnderage) * 100) / 100;

        printTicket.innerHTML = `<ul class="fw-bold">
        <li class="list-group-item">Chilometri indicati: ${km}</li>
        <li class="list-group-item">Età Passeggero: ${age}</li>
        <li class="list-group-item">Sconto applicato: Minorenne (-20%)</li>
        <li class="list-group-item text-uppercase text-success h5">Prezzo finale: €${finalPrice}</li>
        </ul>`;
    }
    else if (age>65) {
        finalPrice = Math.round(((km * priceKm) * priceOverage) * 100) / 100;

        printTicket.innerHTML = `<ul class="fw-bold">
        <li class="list-group-item">Chilometri indicati: ${km}</li>
        <li class="list-group-item">Età Passeggero: ${age}</li>
        <li class="list-group-item">Sconto applicato: Over 65</li>
        <li class="list-group-item text-uppercase text-success h5">Prezzo finale: €${finalPrice}</li>
        </ul>`;
    }
    else {
        finalPrice = Math.round((km * priceKm) * 100) / 100;

        printTicket.innerHTML = `<ul class="fw-bold">
        <li class="list-group-item">Chilometri indicati: ${km}</li>
        <li class="list-group-item">Età Passeggero: ${age}</li>
        <li class="list-group-item">Sconto applicato: Nessuno</li>
        <li class="list-group-item text-uppercase text-success h5">Prezzo finale: €${finalPrice}</li>
        </ul>`;
    }
})