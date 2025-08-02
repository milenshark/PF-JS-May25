function imitationGame(input) {
    let message = input.shift();

    for (let line of input) {
        if (line === 'Decode') break;

        let [command, arg1, arg2] = line.split('|');

        if (command === 'Move') {
            let n = Number(arg1);
            let moved = message.slice(0, n);
            message = message.slice(n) + moved;

        } else if (command === 'Insert') {
            let index = Number(arg1);
            let value = arg2;
            message = message.slice(0, index) + value + message.slice(index);

        } else if (command === 'ChangeAll') {
            let substring = arg1;
            let replacement = arg2;
            message = message.split(substring).join(replacement);
        }
    }

    console.log(`The decrypted message is: ${message}`);
}

imitationGame([
  'zzHe',
  'ChangeAll|z|l',
  'Insert|2|o',
  'Move|3',
  'Decode'
]);
