function reversedString(string) {

    let sum = '';

    for(let i = string.length-1; i >= 0; i--){
        let currentLetter = string[i];
        sum += currentLetter;    
    }
    
    console.log(sum);
}

reversedString('star')