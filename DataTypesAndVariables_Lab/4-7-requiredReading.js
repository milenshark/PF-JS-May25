function requiredReading(numberOfPages, pagesPerHour, days){

    let timeToReadBook = numberOfPages / pagesPerHour;

    let hoursPerDayToReadBook = timeToReadBook / days;

    console.log(hoursPerDayToReadBook);
}

requiredReading(212, 20, 2);


