function thePyramidOfKingDjoser(base, increment) {
    let totalStone = 0;
    let totalMarble = 0;
    let totalLapis = 0;
    let totalGold = 0;
    let height = 0;

    let step = 1;

    while (base > 2) {
        const inner = (base - 2) * (base - 2);
        const outer = base * base - inner;

        totalStone += inner * increment;

        if (step % 5 === 0) {
            totalLapis += outer * increment;
        } else {
            totalMarble += outer * increment;
        }

        base -= 2;
        step++;
        height++;
    }

    // Top of the pyramid - gold
    totalGold += base * base * increment;
    height++;

    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(totalGold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}


thePyramidOfKingDjoser(11,1);
