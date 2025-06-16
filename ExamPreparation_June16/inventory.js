function inventory(input) {
    let items = input.shift().split(', ');

    for (let commandLine of input) {
        if (commandLine === "Craft!") {
            break;
        }

        let [command, item] = commandLine.split(' - ');

        switch (command) {
            case "Collect":
                if (!items.includes(item)) {
                    items.push(item);
                }
                break;
            case "Drop":
                items = items.filter(el => el !== item);
                break;
            case "Combine Items":
                let [oldItem, newItem] = item.split(':');
                let index = items.indexOf(oldItem);
                if (index !== -1) {
                    items.splice(index + 1, 0, newItem);
                }
                break;
            case "Renew":
                if (items.includes(item)) {
                    items = items.filter(el => el !== item);
                    items.push(item);
                }
                break;
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