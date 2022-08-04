//Fizz Buzz
var Selectors = {
    Fizz: 'Fizz',
    Buzz: 'Buzz',
    FizzBuzz: 'FizzBuzz'
};

for(var i = 1; i<=100; i++){
    CheckIt(i);
}

function CheckIt(value){
    if(value % 3 == 0 && value % 15 != 0){
        value = Selectors.Fizz;
        console.log(value);
    }

    else if(value % 5 == 0 && value % 15 != 0){
        value = Selectors.Buzz;
        console.log(value);
    }

    else if(value % 15 == 0){
        value = Selectors.FizzBuzz;
        console.log(value);
    }

    else{
        console.log(value);
    }
}