function vacation(people, groupType, dayOfWeek) {
    let total = 0;
    
    switch (groupType) {
        case 'Students': 
        switch (dayOfWeek) {
            case 'Friday':
                total = people * 8.45;
                break;
            case 'Saturday':
                total = people * 9.80;
                break;
            case 'Sunday':
                total = people * 10.46;
                break;  
        } 
        if (people >= 30) { total *= 0.85; }   
        break;   

        case 'Business':
            if (people >= 100) {people -= 10}
            switch (dayOfWeek) {
                case 'Friday':
                    total = people * 10.90;
                    break;
                case 'Saturday':
                    total = people * 15.60;
                    break;
                case 'Sunday':
                    total = people * 16;
                    break;
            }
            break;
        case 'Regular':
            switch (dayOfWeek) {
                case 'Friday':
                    total = people * 15;
                    break;
                case 'Saturday':
                    total = people * 20;
                    break;
                case 'Sunday':
                    total = people * 22.50;
                    break;
            }
            if (people >= 10 && people <= 20) {total = total * 0.95}
            break;
    }

    console.log(`Total price: ${total.toFixed(2)}`)

}


vacation(30, "Students","Sunday")