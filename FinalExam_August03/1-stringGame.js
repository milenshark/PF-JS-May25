function stringGame(input) {
    
    let str = input.shift();

    for (let line of input) {
        if (line === 'Done') break;

        let [command, ...params] = line.split(' ');

        switch (command) {
            case 'Change':
                let [char, replacement] = params;
                let regex = new RegExp(char, 'g');
                str = str.replace(regex, replacement);
                console.log(str);
                break;

            case 'Includes':
                let substr = params[0];
                console.log(str.includes(substr));
                break;

            case 'End':
                let endSubstr = params[0];
                console.log(str.endsWith(endSubstr));
                break;

            case 'Uppercase':
                str = str.toUpperCase();
                console.log(str);
                break;

            case 'FindIndex':
                let searchChar = params[0];
                console.log(str.indexOf(searchChar));
                break;

            case 'Cut':
                let start = Number(params[0]);
                let count = Number(params[1]);
                let cut = str.substring(start, start + count);
                console.log(cut);
                break;
        }
    }
}

stringGame([
  "//Th1s 1s my str1ng!//",
  "Change 1 i",
  "Includes string",
  "End my",
  "Uppercase",
  "FindIndex I",
  "Cut 5 5",
  "Done"
]);
