function spiceMustFlow(startingYield) {
    let totalSpice = 0;
    let days = 0;

    while (startingYield >= 100) {
        days++;
        totalSpice += startingYield;
        totalSpice -= 26; // workers consume 26 spice at end of each day
        startingYield -= 10;
    }

    // After operation ends, if at least one day has passed, subtract another 26
    if (totalSpice >= 26) {
        totalSpice -= 26; // workers take final 26 when mine is closed
    }

    console.log(days);
    console.log(totalSpice);
}


spiceMustFlow(111);