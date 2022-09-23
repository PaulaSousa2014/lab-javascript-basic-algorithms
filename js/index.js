// Iteration 1: Names and Input
/*
1.1 Create a variable hacker1 with the driver's name.
1.2 Print "The driver's name is XXXX".
1.3 Create a variable hacker2 with the navigator's name.
1.4 Print "The navigator's name is YYYY".
*/

let hacker1 = 'Amanda';
console.log(`The driver's name is ${hacker1}.`)
let hacker2= 'Ocean';
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals

/* 
 2.1. Depending on which name [is longer], print:
	  - `The driver has the longest name, it has XX characters.` or <br>
	  - `It seems that the navigator has the longest name, it has XX characters.` or <br>
	  - `Wow, you both have equally long names, XX characters!`.
*/
const charHacker1 = hacker1.length;
const charHacker2 = hacker2.length;
if(charHacker1 > charHacker2){
    console.log(`The driver has the longest name, it has ${charHacker1} characters.`)
} else if(charHacker2 > charHacker1){
    console.log(`It seems that the navigator has the longest name, it has ${charHacker2} characters.`)
} else{
    console.log(`Wow, you both have equally long names, ${charHacker1} characters!`)
}

// Iteration 3: Loops

/*
3.1 Print all the characters of the driver's name, separated by a space and [in capitals]
  i.e. `"J O H N"`

  
  
  3.2 Print all the characters of the navigator's name, in reverse order. 
  i.e. `"nhoJ"`
  
  3.3 Depending on the [lexicographic order] of the strings, print: 
    - `The driver's name goes first.` <br>
    - `Yo, the navigator goes first definitely.` <br>
    - `What?! You both have the same name?`

*/

let driver = 'John';
console.log(driver.toUpperCase().split(""));
const strReversed = driver.split("").reverse().join("");
console.log(strReversed);


    
let lexicoOrder = [hacker2,hacker1]
lexicoOrder = lexicoOrder.sort();

if(lexicoOrder = 'Amanda'){
    console.log(`The driver's name go first.`)
} else if(lexicoOrder != 'Amanda'){
    console.log(`Yo, the navigator goes first definitely.`)
}else{
    console.log(`What?! You both have the same name?`)
}

 



