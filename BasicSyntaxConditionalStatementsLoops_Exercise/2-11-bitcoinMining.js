function bitcoinMining(goldMinedPerDay) {
    const bitcoinPrice = 11949.16;
    const goldPricePerGram = 67.51;

    let totalMoney = 0;
    let bitcoinsBought = 0;
    let dayOfFirstBitcoin = 0;

    for (let i = 0; i < goldMinedPerDay.length; i++) {
        let gold = goldMinedPerDay[i];
        if ((i + 1) % 3 === 0) {
            gold *= 0.7;
        }
        totalMoney += gold * goldPricePerGram;
        
        while (totalMoney >= bitcoinPrice) {
            if (bitcoinsBought === 0) {
                dayOfFirstBitcoin = i + 1;
            }

            bitcoinsBought++;
            totalMoney -= bitcoinPrice;
        }
    }

    console.log(`Bought bitcoins: ${bitcoinsBought}`);
    if (bitcoinsBought > 0) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}


bitcoinMining([50, 100]);