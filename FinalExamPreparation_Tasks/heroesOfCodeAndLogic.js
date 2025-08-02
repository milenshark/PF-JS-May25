function heroesGame(input) {
  let n = Number(input.shift());
  let heroes = {};

  // Въвеждане на героите
  for (let i = 0; i < n; i++) {
    let [name, hp, mp] = input.shift().split(" ");
    heroes[name] = {
      hp: Number(hp),
      mp: Number(mp)
    };
  }

  // Обработка на командите
  for (let line of input) {
    if (line === "End") break;

    let [command, heroName, arg1, arg2] = line.split(" - ");
    arg1 = Number(arg1);
    arg2 = arg2 !== undefined ? isNaN(arg2) ? arg2 : Number(arg2) : undefined;

    if (command === "CastSpell") {
      let mpNeeded = arg1;
      let spellName = arg2;
      if (heroes[heroName].mp >= mpNeeded) {
        heroes[heroName].mp -= mpNeeded;
        console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mp} MP!`);
      } else {
        console.log(`${heroName} does not have enough MP to cast ${spellName}!`);
      }

    } else if (command === "TakeDamage") {
      let damage = arg1;
      let attacker = arg2;
      heroes[heroName].hp -= damage;
      if (heroes[heroName].hp > 0) {
        console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hp} HP left!`);
      } else {
        delete heroes[heroName];
        console.log(`${heroName} has been killed by ${attacker}!`);
      }

    } else if (command === "Recharge") {
      let amount = arg1;
      let oldMP = heroes[heroName].mp;
      heroes[heroName].mp = Math.min(200, heroes[heroName].mp + amount);
      let recovered = heroes[heroName].mp - oldMP;
      console.log(`${heroName} recharged for ${recovered} MP!`);

    } else if (command === "Heal") {
      let amount = arg1;
      let oldHP = heroes[heroName].hp;
      heroes[heroName].hp = Math.min(100, heroes[heroName].hp + amount);
      let recovered = heroes[heroName].hp - oldHP;
      console.log(`${heroName} healed for ${recovered} HP!`);
    }
  }

  // Финален печат
  for (let hero in heroes) {
    console.log(`${hero}`);
    console.log(`  HP: ${heroes[hero].hp}`);
    console.log(`  MP: ${heroes[hero].mp}`);
  }
}


heroesGame([
  "2",
  "Solmyr 85 120",
  "Kyrre 99 50",
  "Heal - Solmyr - 10",
  "Recharge - Solmyr - 50",
  "TakeDamage - Kyrre - 66 - Orc",
  "CastSpell - Kyrre - 15 - ViewEarth",
  "End"
]);
