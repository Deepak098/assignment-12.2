array = [10, 8, 12, 36];
function ProgrammingFunctional (Num1){
    let doubles = array.map(function(x){
        return x*2;
    })
    let BigNumbers = doubles.filter(function(doubles){
        return doubles > 20;
    })

    let y = BigNumbers.reduce(function(sum, BigNumbers){
        return sum + BigNumbers;
    })
    console.log(y);
}
console.log(ProgrammingFunctional(array));
