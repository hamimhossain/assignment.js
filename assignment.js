// https://github.com/hamimhossain/assignment.js

function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    return meter;
}
var nanaMeter = kilometerToMeter(5);
console.log(nanaMeter);


function budgetCalculator(ghori, mobile, laptop){
    var ghoriprice = ghori * 50;
    var mobileprice = mobile * 100;
    var laptopprice = laptop * 500;

    var total = ghoriprice + mobileprice + laptopprice;
    return total;

}

var budget = budgetCalculator(4, 5, 6);
console.log(budget);


function hotelCost(days){
    var cost = 0;
    if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        var firstpart = 10 * 100;
        var remaining = days - 10;
        var secondpart = remaining * 80;
        cost = firstpart + secondpart;
    } else {
        var firstpart = 10 * 100;
        var secondpart = 10 * 80;
        var remaining = days - 20;
        var thirdpart = remaining * 50;
        cost = firstpart + secondpart + thirdpart;

    }
    return cost;



}
var count = hotelCost(5);
console.log(count);


function megaFriend(...strs) {
    var longest = '';
    for (var i = 0; i < strs.length; i++) {
        if (strs[i].length > longest.length)
        longest = strs[i];
    }
    return longest;
}
var friendsname = megaFriend('rob', 'abdurrob', 'rahim', 'aviraj kaoor')
console.log(friendsname)