function experienceGaining(input) {

    let experienceNeed = Number(input[0]);
    let expectedBattlesCount = Number(input[1]);
    let experienceSum = 0;
    let battlesPlayed = 0;

    for (let i = 0; i < expectedBattlesCount; i++) {
        let currentExperience = Number(input[i + 2]);
        battlesPlayed++;

        if (battlesPlayed % 15 === 0) {
            currentExperience *= 1.05;
        } else if (battlesPlayed % 3 === 0) {
            currentExperience *= 1.15;
        } else if (battlesPlayed % 5 === 0) {
            currentExperience *= 0.90;
        }


        experienceSum += currentExperience;

        if (experienceSum >= experienceNeed) {
            console.log(`Player successfully collected his needed experience for ${battlesPlayed} battles.`);
            return;
        }
    }




    let needed = (experienceNeed - experienceSum);
    console.log(`Player was not able to collect the needed experience, ${needed.toFixed(2)} more needed.`);
}

experienceGaining(['500',
'5',
'50',
'100',
'200', 
'100',
'30']);