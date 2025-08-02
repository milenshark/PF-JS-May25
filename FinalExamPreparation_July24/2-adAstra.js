function adAstra(input) {
    let text = input[0];
    let pattern = /([#|])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g;

    let match;
    let totalCalories = 0;
    let items = [];

    while ((match = pattern.exec(text)) !== null) {
        let item = match.groups.item;
        let date = match.groups.date;
        let calories = Number(match.groups.calories);

        totalCalories += calories;

        items.push(`Item: ${item}, Best before: ${date}, Nutrition: ${calories}`);
    }

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(items.join('\n'));
}

adAstra([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
]);

// Output:
// You have food to last you for: 2 days!
// Item: Bread, Best before: 19/03/21, Nutrition: 4000
// Item: Apples, Best before: 08/10/20, Nutrition: 200
// Item: Carrots, Best before: 06/08/20, Nutrition: 500
