/*Problem 13: Do While Loop + Nested If Statement
Print all numbers from 1 to n using a do while loop and check if each number is even or odd using a nested if statement.
Example:
For n = 5, print 1 3 5.
*/ 
var i=1;
function oddEven(n){
do{
if(i%2 !=0 ){
    console.log("odd number" +i)
}

i++;
}
while(i<=n)
}
oddEven(5)