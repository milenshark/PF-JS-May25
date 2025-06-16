function bonusScoringSystem(input) {
    let studentsCount = Number(input[0]);
    let lecturesCount = Number(input[1]);
    let additionalBonus = Number(input[2]);

    let maxBonus = 0;
    let maxAttendances = 0;

    for (let i = 3; i < input.length; i++) {
        let attendances = Number(input[i]);
        let totalBonus = attendances / lecturesCount * (5 + additionalBonus);

        if (totalBonus > maxBonus) {
            maxBonus = totalBonus;
            maxAttendances = attendances;
        }
    }

    console.log(`Max Bonus: ${Math.ceil(maxBonus)}.`);
    console.log(`The student has attended ${maxAttendances} lectures.`);
}

bonusScoringSystem(['5', '25', '30', 
    '12', '19', '24', 
    '16', '20']);