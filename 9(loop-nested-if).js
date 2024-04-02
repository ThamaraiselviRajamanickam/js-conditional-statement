/*For Loop + Nested If Statement
Print all numbers from 1 to n using a for loop and check if each number is even or odd using a nested if statement.
Example:
For n = 5, print 1 3 5.
*/
var number=5;
for(i=0;i<=number;i++){
    if(i>0){
    if(i%2 !=0){
        console.log("odd number"+i)
    }
}
}