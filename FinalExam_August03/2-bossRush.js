function bossRush(input) {
    let totalLines  = Number(input.shift());
    const pattern = /^\|(?<boss>[A-Z]{4,})\|\:#(?<title>[A-Za-z]+[A-Za-z]+)#$/;

    for (let i = 0; i < totalLines ; i++) {
        const line = input[i];
        const match = line.match(pattern);

        if (match) {
            const boss = match.groups.boss;
            const title = match.groups.title;
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${boss.length}`);
            console.log(`>> Armor: ${title.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}


bossRush([
  "3",
  "|PETER|:#Lead architect#",
  "|GEORGE|:#High Overseer#",
  "|ALEX|:#Assistant Game Developer#"
]);
