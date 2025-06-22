function inventory(input) {
    let items = input[0].split(', ');

    for (let i = 1; i < input.length; i++) {
        let line = input[i];
        if (line === 'Craft!') {
            break;
        }

        let parts = line.split(' - ');
        let command = parts[0];
        let argument = parts[1];

        if (command === 'Collect') {
            if (!items.includes(argument)) {
                items.push(argument);
            }
        } else if (command === 'Drop') {
            let index = items.indexOf(argument);
            if (index !== -1) {
                items.splice(index, 1);
            }
        } else if (command === 'Combine Items') {
            let [oldItem, newItem] = argument.split(':');
            let index = items.indexOf(oldItem);
            if (index !== -1) {
                items.splice(index + 1, 0, newItem);
            }
        } else if (command === 'Renew') {
            let index = items.indexOf(argument);
            if (index !== -1) {
                let item = items.splice(index, 1)[0];
                items.push(item);
            }
        }
    }

    console.log(items.join(', '));
}


inventory([
  'Iron, Wood, Sword',
  'Collect - Gold',
  'Drop - Wood',
  'Craft!'
]);
//Expected: Iron, Sword, Gold

inventory([
  'Iron, Sword',
  'Drop - Bronze',
  'Combine Items - Sword:Bow',
  'Renew - Iron',
  'Craft!'
]);
//Expected: Sword, Bow, Iron