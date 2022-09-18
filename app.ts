
console.log(`1. Write a ts program to print all natural numbers from 1 to n. - using while loop`);




var Enternumber: number = 5
var number: number = 1

while (number <= Enternumber) {

    console.log(number++);

}






console.log(`2. Write a ts program to print all natural numbers in reverse (from n to 1). - using while loop`);





var Enternumber1: number = 2
var number1: number = 1

while (Enternumber1 >= number1)

    console.log(Enternumber1--);













console.log(`4. Write a ts program to print all even numbers between 1 to 100. - using while loop`);




var even: number = 1

while (even <= 100) {


    if (even % 2 == 0) {

        console.log(even);

    }

    even++
}







console.log(`5. Write a ts program to print all odd number between 1 to 100.`);




var odd: number = 1

while (odd <= 100) {


    if (odd % 2 != 0) {

        console.log(odd);

    }

    odd++
}







console.log(`6. Write a ts program to find sum of all natural numbers between 1 to n`);



var upperlimit: number = 10

var sum: number = 0

for (var lowerlimit = 1; lowerlimit <= upperlimit; lowerlimit++) {

    sum += lowerlimit

   

}

console.log(sum);





console.log(`7. Write a ts program to find sum of all even numbers between 1 to n.`);



var upperlimit1: number = 10
var sum1: number = 0

for (var lowerlimit1 = 2; lowerlimit1 <= upperlimit1; lowerlimit1 += 2) {

    sum1 += lowerlimit1

    console.log(sum1);

}





console.log(`8. Write a ts program to find sum of all odd numbers between 1 to n.`);




var upperlimit2: number = 10
var sum2: number = 0

for (var lowerlimit2 = 1; lowerlimit2 <= upperlimit2; lowerlimit2 += 2) {

    sum2 += lowerlimit2

    console.log(sum2);

}





console.log(`9. Write a ts program to print multiplication table of any number.`);



var Entertable: number = 4

for (var some = 1; some <= 10; some++) {

    console.log(`${Entertable}* ${some} = ${Entertable * some}`);

}






console.log(`10. Write a ts program to count number of digits in a number.`);




var n: number = 344366
var count2: number = 0

while (n != 0) {


    var devided: any = n / 10;

    n = parseInt(devided)
    


    count2++





}

console.log(count2);




console.log(`11. Write a ts program to find first and last digit of a number`);



var Enternum: number = 656
var Lastdigit: number = Enternum % 10
var Firstdigit: number = Enternum

while (Firstdigit >= 10) {

    Firstdigit = parseInt(Firstdigit / 10)
}

console.log(`First digit =  ${Firstdigit} `);
console.log(`Last digit = ${Lastdigit}`);





console.log(`12. Write a ts program to find sum of first and last digit of a number`);




var Enternum: number = 34
var Lastdigit: number = Enternum % 10
var Firstdigit: number = Enternum

while (Firstdigit >= 10) {

    Firstdigit = parseInt(Firstdigit / 10)
}

console.log(`Sum of digit =  ${Firstdigit + Lastdigit} `);












console.log(`14. Write a ts program to calculate sum of digits of a number.`);



var n: number = 45
var sum3: number = 0

while (n != 0) {

    sum3 = parseInt(sum3 + n % 10)
    n = n / 10

}



console.log(sum3);














console.log(`21. Write a ts program to find power of a number using for loop.`);

// 21. Write a ts program to find power of a number using for loop.

var Enterbase: number = 2
var Enterexponent: number = 4
var power: number = 1

for (var i1: number = 1; i1 <= Enterexponent; i1++) {

    power = power * Enterbase
}

console.log(`${Enterbase} ^ ${Enterexponent} = ${power}`);







console.log(`22. Write a ts program to find all factors of a number.`);

// 22. Write a ts program to find all factors of a number.


var Enternum2: number = 10


for (var i2: number = 1; i2 <= Enternum2; i2++) {


    if ((Enternum2 % i2) == 0) {


        console.log(i2);
    }

}



console.log(`23. Write a ts program to calculate factorial of a number.`);
// 23. Write a ts program to calculate factorial of a number.

var Enternum3: number = 5

var val: number = 1

for (var i3: number = 1; i3 <= Enternum3; i3++) {


    val *= i3

    console.log(val);


}



console.log(`24. Write a ts program to find HCF (GCD) of two numbers.`);
// 24. Write a ts program to find HCF (GCD) of two numbers.


var n1: number = 16
var n2: number = 20


while (n1 != n2) {

    if (n1 > n2) {

        n1 -= n2

    }

    else if (n2 > n1) {

        n2 -= n1
    }

}

console.log(n1);



console.log(`25. Write a ts program to find LCM of two numbers.`);
// 25. Write a ts program to find LCM of two numbers.


var n3: number = 16
var n4: number = 20
var x: number = n1
var y: number = n2



while (x != y) {

    if (x > y) {

        x -= y

    }

    else if (y > x) {

        y -= x
    }

}

var GCD: number = x
var LCM: number = n3 * n4 / GCD
console.log(LCM);


console.log(`26. Write a ts program to check whether a number is Prime number or not.`);


var Prime: number = 4
var count3: number = 0

for (var i4: number = 1; i4 <= Prime; i4++) {



    if (Prime % i4 == 0) {

        count3++


    }


}

if (count3 == 2) {

    console.log(`number ${Prime} is prime `);

}

else if (count3 != 2) {

    console.log(`number ${Prime} is not prime`);

}



console.log(`27. Write a ts program to print all Prime numbers between 1 to n.`);



var Highernumber: number = 10


for (var lowernum: number = 2; lowernum <= Highernumber; lowernum++) {

    var flag: number = 0

    for (var j: number = 2; j < lowernum; j++) {

        if (lowernum % j == 0) {

            flag = 1
            break
        }
    }


    if (lowernum > 1 && flag == 0) {

        console.log(lowernum);
    }

}


console.log(`28. Write a ts program to find sum of all prime numbers between 1 to n.`);



var Highernumber1: number = 11
var add: number = 0

for (var lowernum1: number = 2; lowernum1 <= Highernumber1; lowernum1++) {

    var flag1: number = 1

    for (var j1: number = 2; j1 < lowernum; j1++) {

        if (lowernum1 % j1 == 0) {

            flag1 = 0
            break
        }
    }


    if (lowernum1 == j1) {

        add += lowernum1
    }

}

console.log(add);




console.log(`29. Write a ts program to find all prime factors of a number.`);


var primefactor: number = 36

for (var X: number = 2; primefactor > 1; X++) {

    while (primefactor % X == 0) {

        console.log(X);

        primefactor /= X

    }
}








console.log(`32. Write a ts program to check whether a number is Perfect number or not.`);




var Perfect: number = 6
var plus: number = 0

for (var j2: number = 1; j2 <= (Perfect / 2); j2++) {

    if (Perfect % j2 == 0) {

        plus = plus + j2
    }
}

if (plus == Perfect) {

    console.log(`number ${Perfect} is perfect`);

}

else if (plus != Perfect) {

    console.log(`number ${Perfect} is not perfect`);

}



