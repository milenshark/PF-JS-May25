function rightPlace(firstString, character, secondString) {

    let result = firstString.replace('_', character);
    let output = result === secondString? "Matched" : "Not Matched";

    console.log(output);

}

rightPlace('Str_ng', 'I', 'Strong');