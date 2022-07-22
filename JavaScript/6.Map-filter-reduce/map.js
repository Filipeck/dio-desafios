//Com o uso do This

const maca = {
    value: 2,
};

const laranja = {
    value: 3,
};

function mapComThis(array, thisArg) {
    return array.map(function(item){
        return item * this.value;
    }, thisArg);
}

const num =[1, 2, 3, 4, 5];

console.log("this -> maçã", mapComThis(num, maca));

console.log("this -> laranja", mapComThis(num, laranja));

//Sem o uso do This

function mapSemThis(arr){
   return arr.map(function(item){
        return item * 2;
    });
}

const nums = [2, 4, 6, 8, 10, 20];

console.log(mapSemThis(nums));

console.log(nums);