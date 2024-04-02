/*Problem 18: Do While Loop + If-Else Statement
Print all numbers from 1 to n using a do while loop and check if each number is even or odd using an if-else statement.
Example:
 */
function printNumbers(n) {
    let num = 1;
    do {
        if(num % 2 === 0){
            console.log(num + " Even")
        }
    else{
      console.log(num + " odd")
    }
        num++;
    } while (num <= n);
}


const n = 10; 
printNumbers(n);
