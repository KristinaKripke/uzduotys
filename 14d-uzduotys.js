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
// Jūsų kodas čia...

console.log('--------------');

// =============================================
// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================
// const numbers2 = [1, 2, 3, 4, 5, 6];
console.log('2 užduotis');
console.log();
// Sprendimas su for ciklu:
const numbers2 = [1, 2, 3, 4, 5, 6];
for (let i = 1; i <= numbers2.length; i++) {
    if (i % 2 === 0) {
        console.log(i);
        
    }
}

// Sprendimas su filter metodu:
// Jūsų kodas čia...

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
// Jūsų kodas čia...

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
// Jūsų kodas čia...

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
// Jūsų kodas čia...
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
 // Jūsų kodas čia...
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
// Jūsų kodas čia...

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
// Jūsų kodas čia...
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
// Jūsų kodas čia...
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
// Jūsų kodas čia...
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
// Jūsų kodas čia...

console.log('--------------');

// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
// const numbers13 = [1, 2, 3, 2, 4, 3, 5];
console.log('13 užduotis');
console.log();

// Sprendimas su for ciklu:
const numbers13 = [1, 2, 3, 2, 4, 2, 5];
function neVienodi(nums13) {
    let sum13 = []; 
for (let i = 0; i < nums13.length; i++) {
    if (!sum13.includes(nums13[i])) {
        sum13.push(nums13[i]);
        
    }
    
} return sum13;
}
console.log(neVienodi(numbers13));


// Sprendimas su Set:
// Jūsų kodas čia...

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
// Jūsų kodas čia...


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
// Jūsų kodas čia...
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

// Sprendimas su for ciklu:
// Jūsų kodas čia...

// Sprendimas su flat metodu:
const nestedArray = [[1, 2], [3, 4], [5, 6]];
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


// Sprendimas su filter:
// Jūsų kodas čia...

console.log('--------------');

// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į "lyginiai" ir "nelyginiai"
// =============================================
// const numbers19 = [1, 2, 3, 4, 5, 6];
console.log('19 užduotis');
console.log();
// Sprendimas su for ciklu:


// Sprendimas su reduce:
// Jūsų kodas čia...

console.log('--------------');

// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio masyvo elementų kumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
// const numbers20 = [1, 2, 3, 4];
console.log('20 užduotis');
console.log();
// Sprendimas su for ciklu:



// Sprendimas su reduce:
// Jūsų kodas čia...
console.log('--------------');