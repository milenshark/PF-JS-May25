function phoneShop(input) {
    let phones = [];
    let phonesText = input[0];
    let temp = '';

    for (let i = 0; i < phonesText.length; i++) {
        if (phonesText[i] === ',' && phonesText[i + 1] === ' ') {
            phones.push(temp);
            temp = '';
            i++; 
        } else {
            temp += phonesText[i];
        }
    }
    if (temp !== '') {
        phones.push(temp);
    }


    for (let j = 1; j < input.length; j++) {
        let line = input[j];
        if (line === "End") break;


        let command = '';
        let value = '';
        let dividerReached = false;
        for (let k = 0; k < line.length; k++) {
            if (!dividerReached && line[k] === ' ' && line[k + 1] === '-' && line[k + 2] === ' ') {
                dividerReached = true;
                k += 2;
            } else if (!dividerReached) {
                command += line[k];
            } else {
                value += line[k];
            }
        }

        if (command === "Add") {
            let exists = false;
            for (let phone of phones) {
                if (phone === value) {
                    exists = true;
                    break;
                }
            }
            if (!exists) {
                phones[phones.length] = value;
            }

        } else if (command === "Remove") {
            for (let k = 0; k < phones.length; k++) {
                if (phones[k] === value) {
                    for (let l = k; l < phones.length - 1; l++) {
                        phones[l] = phones[l + 1];
                    }
                    phones.length--; 
                    break;
                }
            }

        } else if (command === "Bonus phone") {

            let colonIndex = -1;
            for (let m = 0; m < value.length; m++) {
                if (value[m] === ':') {
                    colonIndex = m;
                    break;
                }
            }
            let oldPhone = value.substring(0, colonIndex);
            let newPhone = value.substring(colonIndex + 1);

            for (let n = 0; n < phones.length; n++) {
                if (phones[n] === oldPhone) {

                    for (let p = phones.length; p > n; p--) {
                        phones[p] = phones[p - 1];
                    }
                    phones[n + 1] = newPhone;
                    break;
                }
            }

        } else if (command === "Last") {
            for (let r = 0; r < phones.length; r++) {
                if (phones[r] === value) {
                    let moved = phones[r];
                    for (let s = r; s < phones.length - 1; s++) {
                        phones[s] = phones[s + 1];
                    }
                    phones[phones.length - 1] = moved;
                    break;
                }
            }
        }
    }


    let phonesInStorage = '';
    for (let t = 0; t < phones.length; t++) {
        phonesInStorage += phones[t];
        if (t < phones.length - 1) {
            phonesInStorage += ', ';
        }
    }
    console.log(phonesInStorage);
}


phoneShop(['SamsungA50, MotorolaG5, HuaweiP10',
    'Last - SamsungA50',
    'Add - MotorolaG5',
    'End']);
