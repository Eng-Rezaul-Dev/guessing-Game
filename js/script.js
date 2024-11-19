var winer=0;
var looser=0;

/*Main loop


*/
for (var i=0; i<5; i=i+1){
    var count= parseInt(prompt("Enter a valid number between 1 to 5 : "));
    if (count<0 || count>5) {
     //var count= prompt("Invalid number. Enter again ");
     i=i-1;

     console.log("Invalid number. Enter again ");
     continue;   
    }
    var randomNumber = Math.floor(Math.random()*5) +1;
    console.log("You entered "+count);
    console.log("Random number is : "+ randomNumber);

    if(count== randomNumber){
        winer = winer+1;
        console.log("You are winner");
    }
    else {
        looser = looser+1;
        console.log("You are Looser");
    }
}

console.log("You are winner for "+winer +" times");
console.log("You are looser for "+looser +" times");
