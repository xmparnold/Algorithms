function d6() {
    var roll = Math.random();
    var result = (roll * 6) +1;
    result = Math.floor(result);
    return result;
}
    
var playerRoll = d6();
console.log("The player rolled: " + playerRoll);

