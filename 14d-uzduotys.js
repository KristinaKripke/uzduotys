// =============================================
// Užduotis 1: Suskaičiuoti visų masyvo skaičių sumą
// =============================================
// const numbers1 = [1, 2, 3, 4, 5];
console.log('1 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers1 = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers1.length; i++) {
    sum = sum += numbers1[i];
}
console.log(sum);

// Sprendimas su array metodu (reduce):
const sum1 = numbers1.reduce((acc, num1) => acc + num1, 0);
console.log(sum1);

console.log('--------------');

// =============================================
// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================
// const numbers2 = [1, 2, 3, 4, 5, 6];
console.log('2 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers2 = [1, 2, 3, 4, 5, 6];
let count3 = 0;
for (let i = 1; i <= numbers2.length; i++) {
    if (i % 2 === 0) {
        count3++;
    } 
}
console.log(count3);

// Sprendimas su filter metodu:
const numbers2filter = numbers2.filter((n, i) => i % 2 !== 0).length;
console.log(numbers2filter);

console.log('--------------');

// =============================================
// Užduotis 3: Rasti didžiausią skaičių masyve
// =============================================
// const numbers3 = [10, 5, 20, 8, 15];
console.log('3 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers3 = [10, 5, 20, 8, 15];
function didziausiasSk(arr1) {
    let didelis = arr1[0];
    for (let i = 0; i < numbers3.length; i++) {
        if (didelis < arr1[i]) {
            didelis = arr1[i];
        }
    } return didelis;
}
console.log(didziausiasSk(numbers3));

// Sprendimas su Math.max ir spread operator:
console.log(Math.max(...numbers3));

console.log('--------------');

// =============================================
// Užduotis 4: Suskaičiuoti, kiek kartų masyve pasikartoja nurodytas skaičius
// =============================================
// const numbers4 = [1, 2, 3, 2, 4, 2, 5];
// const target = 2;
console.log('4 užduotis');
console.log();
 // Sprendimas su for ciklu:
const numbers4 = [1, 2, 3, 2, 4, 2, 5];
const target = 2;
function pasikartoja1(arr3, skai) {
    let count = 0;
    for (let i = 0; i <= arr3.length; i++) {
        if (arr3[i] === skai) {
            count++;
        }
    } return count
}
console.log(pasikartoja1(numbers4, target));

// Sprendimas su filter metodu:
const numbers4Filter = numbers4.filter(n => n === target).length;
console.log(numbers4Filter);
console.log('--------------');
// =============================================
// Užduotis 5: Išfiltruoti ir sukurti naują masyvą, kuriame būtų tik teigiami skaičiai
// =============================================
// const numbers5 = [-3, 0, 5, -1, 8, -2];
console.log('5 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers5 = [-3, 0, 5, -1, 8, -2];
let nums = [];
    for (let i = 0; i < numbers5.length; i++) {
        if (numbers5[i] > 0) {
        nums.push(numbers5[i]);
        }
}
    console.log(nums);
    

// Sprendimas su filter metodu:
const numbers5Filter = numbers5.filter(n => n > 0);
console.log(numbers5Filter);

console.log('--------------');

// =============================================
// Užduotis 6: Rasti visų masyvo elementų sandaugą
// =============================================
//const numbers6 = [1, 2, 3, 4];
console.log('6 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers6 = [1, 2, 3, 4];
let sandauga = 1;
for (let i = 1; i <= numbers6.length; i++) {
        sandauga = sandauga * i;
}
console.log(sandauga);

 // Sprendimas su reduce metodu:

const sandauga1 = numbers6.reduce((acc, num6) => acc * num6, 1);
console.log(sandauga1);

console.log('--------------');

// =============================================
// Užduotis 7: Apversti masyvą (sukurti naują apverstą masyvą)
// =============================================
//const array7 = [1, 2, 3, 4, 5];
console.log('7 užduotis');
console.log();

// Sprendimas su for ciklu:
const array7 = [1, 2, 3, 4, 5];
let arr7 = [];
for (let i = array7.length; i > 0; i--) {
        arr7.push(i)
}
console.log(arr7);

 // Sprendimas su built-in reverse metodu (kopijuojame, kad nepakeistume originalo):
const array71 = [1, 2, 3, 4, 5];
console.log(array71.reverse());

console.log('--------------');

// =============================================
// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. Jei neranda, grąžinti -1
// =============================================
// const array8 = ['a', 'b', 'c', 'd'];
// const searchElement = 'c';
console.log('8 užduotis');
console.log();
// Sprendimas su for ciklu:

const array8 = ['a', 'b', 'c', 'd'];
const searchElement8 = 'c';
function indeksas5(arr8, sym) {
    for (let i = 0; i < arr8.length; i++) {
    if (arr8[i] === sym) 
        return i;
    } return -1;
}
console.log(indeksas5(array8, searchElement8));

// Sprendimas su indexOf metodu:
function indeksas8(array8, searchElement8) {
    return array8.indexOf(searchElement8) ;
}
console.log(indeksas8(array8, searchElement8));
console.log('--------------');
// =============================================
// Užduotis 9: Patikrinti, ar masyvas yra surikiuotas didėjimo tvarka
// =============================================
// const array9 = [1, 3, 5, 7, 9];
console.log('9 užduotis');
console.log();
// Sprendimas su for ciklu:
const array9 = [1, 3, 5, 7, 8];
function dideja(arr9) {
    for (let i = 0; i < arr9.length - 1; i++) {
        if (arr9[i] > arr9[i + 1]) {
            return false;
    } 
} return true; 
}
console.log(dideja(array9));

// Sprendimas su every metodu:
const everyDideja = array9.every((num, i, arr) => i === 0 || num > arr[i - 1]);
console.log(everyDideja);


console.log('--------------');

// =============================================
// Užduotis 10: Sukurti naują masyvą, kurio kiekvienas elementas yra pradinio masyvo elemento kvadratas
// =============================================
//const numbers10 = [1, 2, 3, 4, 5];
console.log('10 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers10 = [1, 2, 3, 4, 5];
    function pakeltiKv(num10) {
        let pakelti = [];
        for (let i = 0; i < num10.length; i++) {
            kvadratu = num10[i] * num10[i];
                pakelti.push(kvadratu)
        } 
        return pakelti;
    }
    console.log(pakeltiKv(numbers10));

// Sprendimas su map metodu:
const numbers10Map = numbers10.map(n => n * n);
console.log(numbers10Map);

console.log('--------------');

 // =============================================
// Užduotis 11: Susumuoti tik nelyginius masyvo elementus
// =============================================
// const numbers11 = [1, 2, 3, 4, 5, 6];
console.log('11 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers11 = [1, 2, 3, 4, 5, 6];
function susumuoti(numb11) {
    let sum = 0;
    for (let i = 0; i < numb11.length; i++) {
        if (numb11[i] % 2 !== 0) {
            sum += numb11[i];
        }
    } return sum;
}
console.log(susumuoti(numbers11));


// Sprendimas su filter ir reduce:

const num11filter = numbers11.filter((n, i) => i % 2 === 0).reduce((acc, num11) => acc + num11, 0);
console.log(num11filter);

console.log('--------------');


//=============================================
// Užduotis 12: Apskaičiuoti masyvo elementų vidurkį
// =============================================
// const numbers12 = [10, 20, 30, 40, 50];
console.log('12 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers12 = [10, 20, 30, 40, 50];
function vidurkis12(masyvas12) {
    let sum = 0;
    for (let i = 0; i < masyvas12.length; i++) {
        sum = sum + masyvas12[i];
    } return sum / masyvas12.length;
}
console.log(vidurkis12(numbers12));

// Sprendimas su reduce:
const numbers12Reduce = numbers12.reduce((acc, num12) => acc + num12 / numbers12.length, 0);
console.log(numbers12Reduce);

console.log('--------------');

// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
// const numbers13 = [1, 2, 3, 2, 4, 3, 5];
console.log('13 užduotis');
console.log();

// Sprendimas su for ciklu:
const numbers13 = [1, 2, 3, 2, 4, 3, 5];
function neVienodi(nums13) {
    let sum13 = []; 
for (let i = 0; i < nums13.length; i++) {
    if (!sum13.includes(nums13[i])) {
        sum13.push(nums13[i])
    }

    } return sum13;
}
console.log(neVienodi(numbers13));


// Sprendimas su Set:
const naujasMasyvas = [...new Set(numbers13)];
console.log(naujasMasyvas);

console.log('--------------');

// =============================================
// Užduotis 14: Rasti antrą didžiausią elementą masyve
// =============================================
// const numbers14 = [5, 3, 9, 1, 7];
console.log('14 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers14 = [5, 3, 9, 1, 7];
let antras = 0;
function antrasDidziausias14(arr14) {
    let patsDzidziausias = 0;
    
    for (let i = 0; i < arr14.length; i++) {
    if (arr14[i] > patsDzidziausias) {
        antras = patsDzidziausias;
        patsDzidziausias = arr14[i];
    } else if (arr14[i] > antras && arr14[i] < patsDzidziausias) {
        antras = arr14[i];
    }
    } return antras;
}
console.log(antrasDidziausias14(numbers14));

// Sprendimas su sort metodu (kopijuojame, kad nepakeistume originalo):
function suSort(arr) {
    let sort = [...arr].sort((a, b) => b - a);
    return sort[1];
}
console.log(suSort(numbers14));

console.log('--------------');
// =============================================
// Užduotis 15: Suskaičiuoti, kiek masyvo elementų yra didesni už duotą slenkstį
// =============================================
// const numbers15 = [10, 15, 20, 25, 30];
// const threshold = 20;
console.log('15 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers15 = [10, 15, 20, 25, 30];
const threshold = 20; 
let count = 0;
for (let i = 0; i < numbers15.length; i++){
    if (numbers15[i] > threshold){
    count++;
    } 
} 
console.log(count);

// Sprendimas su filter:
const numbers15Filter = numbers15.filter(n => n > threshold).length;
console.log(numbers15Filter);

console.log('--------------');

// =============================================
// Užduotis 16: Sujungti du masyvus į vieną
// =============================================
// const arrayA = [1, 2, 3];
// const arrayB = [4, 5, 6];
console.log('16 užduotis');
console.log();
const arrayAb = [1, 2, 3];
const arrayBa = [4, 5, 6];
// Sprendimas su for ciklu:

function sujungtiArray(arr1, arr2) {
    let sujungti = [];
for (let i = 0; i < arr1.length; i++) {
    sujungti.push(arr1[i]);
    } 
for (let i = 0; i < arr2.length; i++) {
    sujungti.push(arr2[i]);
} return sujungti;
} 
console.log(sujungtiArray(arrayAb, arrayBa));

// Sprendimas su concat metodu:
const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];
console.log(arrayA.concat(arrayB));
console.log('--------------');
// =============================================
// Užduotis 17: Išlyginti (flatten) masyvą, kurio elementai yra masyvai (vieno lygmens)
// Pvz.: [[1,2], [3,4]] -> [1,2,3,4]
// =============================================
// const nestedArray = [[1, 2], [3, 4], [5, 6]];
console.log('17 užduotis');
console.log();
const nestedArray = [[1, 2], [3, 4], [5, 6]];
// Sprendimas su for ciklu:

function islyginti(narray) {
    let arrayFlat = [];
    for (let i = 0; i < narray.length; i++) {
        for (let j = 0; j < narray[i].length; j++) {
            arrayFlat.push(narray[i][j]);
        }
    } return arrayFlat;
}
console.log(islyginti(nestedArray));

// Sprendimas su flat metodu:

console.log(nestedArray.flat());
console.log('--------------');

// =============================================
// Užduotis 18: Rasti bendrus elementus tarp dviejų masyvų
// =============================================
// const arrA = [1, 2, 3, 4];
// const arrB = [3, 4, 5, 6];
console.log('18 užduotis');
console.log();
// Sprendimas su for ciklu:
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];
function bendri(arrA1, arrB2) {
    let vienodi = [];
    for (let i = 0; i < arrA1.length; i++) {
        for (let n = 0; n < arrB2.length; n++) {
            if (arrA1[i] === arrB2[n])
                vienodi.push(arrA1[i]);
        }
    } return vienodi;
}
console.log(bendri(arrA, arrB));

// Sprendimas su filter:
const bendriFilter = arrA.filter(n => arrB.includes(n));
console.log(bendriFilter);
console.log('--------------');

// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į "lyginiai" ir "nelyginiai"
// =============================================
// const numbers19 = [1, 2, 3, 4, 5, 6];
console.log('19 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers19 = [1, 2, 3, 4, 5, 6];
let skaiciai = {
    lyginiai: [],
    nelyginiai: [],
}
for (let i = 0; i < numbers19.length; i++) {
    if (numbers19[i] % 2 === 0) {
        skaiciai.lyginiai.push(numbers19[i]);
    } else {
        skaiciai.nelyginiai.push(numbers19[i]);
    }
}
console.log(skaiciai);

// Sprendimas su reduce:

const skaiciai19 = numbers19.reduce((acc, num) => {
    num % 2 === 0 ? acc.lyginiai.push(num) : acc.nelyginiai.push(num);
    return acc;
}, { lyginiai: [], nelyginiai: [] }
);
console.log(skaiciai19);

console.log('--------------');

// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio masyvo elementų kumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
// const numbers20 = [1, 2, 3, 4];
console.log('20 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers20 = [1, 2, 3, 4];
let count20 = [];
let suma20 = 0;
function kumuotaSuma(nums20) {
    for (let i = 0; i < nums20.length; i++) {
        suma20 += nums20[i];
        count20.push(suma20);
    }
        return count20;
} 
console.log(kumuotaSuma(numbers20));

// Sprendimas su reduce:
const numbers20reduce = numbers20.reduce((acc, num, i) => { 
    if (i === 0) {
        acc.push(num);
    } else { 
        acc.push(acc[i - 1] + num)
    } 
    return acc;
} , []);

console.log(numbers20reduce);



console.log('--------------');
