function taxCalculator(vehicleDataInput) {
    let inputLine = vehicleDataInput[0]; 
    let vehicles = [];
    let current = '';


    for (let i = 0; i <= inputLine.length - 1; i++) {
        if (inputLine[i] === '>' && inputLine[i + 1] === '>') {
            vehicles.push(current.trim());
            current = '';
            i++; 
        } else {
            current += inputLine[i];
        }
    }

    
    if (current.length > 0) {
        vehicles.push(current.trim());
    }

    let totalTaxes = 0;

    for (let j = 0; j < vehicles.length; j++) {
        let car = vehicles[j];


        let parts = [];
        let part = '';

        for (let k = 0; k < car.length; k++) {
            if (car[k] === ' ') {
                if (part.length > 0) {
                    parts.push(part);
                    part = '';
                }
            } else {
                part += car[k];
            }
        }
        if (part.length > 0) {
            parts.push(part);
        }

        let type = parts[0];
        let years = Number(parts[1]);
        let km = Number(parts[2]);

        let taxes = 0;

        if (type === "family") {
            taxes = 50 - years * 5 + Math.floor(km / 3000) * 12;

        } else if (type === "heavyDuty") {
            taxes = 80 - years * 8 + Math.floor(km / 9000) * 14;

        } else if (type === "sports") {
            taxes = 100 - years * 9 + Math.floor(km / 2000) * 18;

        } else {
            console.log("Invalid car type.");
            continue;
        }

        //console.log(taxes);

        totalTaxes += taxes;
        console.log(`A ${type} car will pay ${taxes.toFixed(2)} euros in taxes.`);
    }

    //console.log(totalTaxes);

    console.log(`The National Revenue Agency will collect ${totalTaxes.toFixed(2)} euros in taxes.`);
}


taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410']);
