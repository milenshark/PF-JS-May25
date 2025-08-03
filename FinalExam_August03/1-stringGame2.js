function stringGame(commands) {
    let initialText = commands.shift();

    for (let currentCommand of commands) {
        if (currentCommand === "Done") {
            break;
        }

        let [action, param1, param2] = currentCommand.split(' ');

        if (action === "Change") {
            let targetChar = param1;
            let replacementChar = param2;
            let globalRegex = new RegExp(targetChar, 'g');
            initialText = initialText.replace(globalRegex, replacementChar);
            console.log(initialText);

        } else if (action === "Includes") {
            let searchSubstring = param1;
            console.log(initialText.includes(searchSubstring) ? "True" : "False");

        } else if (action === "End") {
            let expectedEnding = param1;
            console.log(initialText.endsWith(expectedEnding) ? "True" : "False");

        } else if (action === "Uppercase") {
            initialText = initialText.toUpperCase();
            console.log(initialText);

        } else if (action === "FindIndex") {
            let characterToFind = param1;
            let indexFound = initialText.indexOf(characterToFind);
            console.log(indexFound);

        } else if (action === "Cut") {
            let startIndex = Number(param1);
            let lengthToCut = Number(param2);
            let cutPart = initialText.substring(startIndex, startIndex + lengthToCut);
            console.log(cutPart);
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

