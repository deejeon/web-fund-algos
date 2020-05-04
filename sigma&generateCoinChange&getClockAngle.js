function sigma(num) {
    var sum = 0;
    for (var i = 1; i <= num; i++) {
        sum += i;
    }
}

function generateCoinChange(amount) {
    var quarters = Math.floor(amount / 25);
    var dimes = Math.floor((amount%25)/10);
    var nickels = Math.floor(((amount%25)%10)/5);
    var pennies = Math.floor(((amount%25)%10)%5);
    var message = quarters + " quarters, " + dimes + " dimes, " + nickels + " nickels, and " + pennies + " pennies";
    console.log(message);
    return message;
}

function getClockAngle(hours,minutes) {
    var hoursInMin = hours * 60;
    var hourAngle = (hoursInMin + minutes) / 720 * 360;
    var minuteAngle = minutes / 60 * 360;
    var angleDifference = (hourAngle - minuteAngle)%360;
    if (angleDifference < 0) {
        return -angleDifference + " degrees";
    }
    else {
        return angleDifference + " degrees";
    }
}