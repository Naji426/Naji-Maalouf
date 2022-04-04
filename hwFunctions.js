//Exercise 1
let sum = function (num1, num2) {
let total = num1 + num2;
return total
};
let Sum = sum(2, 5);
console.log ('sum is:', Sum);

//Exercise 2
let hourglass = function(n){
for (let i = 0; i<n; i++){
    for (let j = 0; j<i; j++){
        console.log(' ');
    }
    for (let k = 0; k<(n-1)*2-1; k++)
    console.log('*')
}
console.log()

for (let i=2; i<=n; i++){
    for (let j=1; j<=n-i; j++){
        console.log(' ')
}
for (let k=0; k<2*i-1; k++){
    }
    console.log();
}}
hourglass(3);

//Exercise 3
let array = [];
let addElement = function (array,element){
    array.push(element);
    return array;
}
console.log(addElement([25,65,89],55))

//Exercice 4
let isPrime = function(i){
    if (i===1){
        return false;
    }
    else if (i===2){
        return true;
    }
    else{
        for (let j=2; j<i; j++){
            if (i%j===0){
                return false;
            }
        }
        return true;
    }
}
console.log(isPrime(24));

//Exercise 5
let type = argument => typeof argument;
console.log(type(56));
console.log(type('blablabla'));
