/**
 * Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina "true", jei jis teigiamas, ir "false", jei neigiamas arba nulis.
 */

function skaicius(num1) {
return num1 > 0 ? 'True' : 'False';
    }


console.log('1 uzduotis');
console.log();
console.log(skaicius(1)); // True
console.log(skaicius(-30));  // False 
console.log(skaicius(0)); // False
console.log('-----------');

/**
 * Užduotis Nr. 2
 * Parašykite funkciją, kuri priima skaičių nuo 1 iki 12 ir grąžina mėnesio pavadinimą.
 */

function metai(menesis) {   
switch (menesis) {
    case 1: 
        return 'Sausis';
    case 2:
        return 'Vasaris';
    case 3:
        return 'Kovas';
    case 4: 
        return 'Balandis';
    case 5:
        return 'Geguze';
    case 6:
        return 'Birzelis';
    case 7:
        return 'Liepa';
    case 8:
        return 'Rugpjutis';
    case 9:
        return 'Rugsejis';
    case 10:
        return 'Spalis';
    case 11: 
        return 'Lapkritis';
    case 12: 
        return 'Gruodis';
    default:
        return 'Tokio menesio nera';
    }
}
    
console.log('2 uzduotis');
console.log();
console.log(metai(1)); // Sausis
console.log(metai(7)); // Liepa 
console.log(metai(14)); // Tokio menesio nera
console.log('-----------');


/**
 * Užduotis Nr. 3
 * Parašykite funkciją, kuri priima du skaičius ir grąžina "Pirmas didesnis", "Antras didesnis" arba "Lygūs".
 */

function kurisDidesnis(num1, num2) {
    if (num1 > num2) {
        return 'Pirmas didenis';
    } else if (num1 === num2) {
        return 'Lygus';
    } else if (num1 < num2) {
        return 'Antras didesnis';
    }
}

console.log('3 uzduotis');
console.log();
console.log(kurisDidesnis(1, 5)); // Antras didesnis
console.log(kurisDidesnis(7, 2)); // Pirmas didesnis
console.log(kurisDidesnis(14, 14)); // Lygus
console.log('-----------');

/**
 * Užduotis Nr. 4
 * Parašykite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir grąžina ją Farenheito laipsniais.
 * P.S.: Dirbame tik su skaičiais, be "°C" ir "°F".
 */

function toFahrenheit(num) {
    if (num) {
        return (num * (9 / 5) + 32) + ' Fahrenheit';
    }
}

console.log('4 uzduotis');
console.log();
console.log(toFahrenheit(1)); // 34 Fahrenheit
console.log(toFahrenheit(17)); // 63 Fahrenheit
console.log(toFahrenheit(-12)); // 10.4 Fahrenheit
console.log('-----------');

/**
 * Užduotis Nr. 5
 * Parašykite funkciją, kuri priima teigiamą skaičių ir grąžina visų jo skaitmenų sumą.
 * P.S.: Jei pateikiamas vienženklis skaičius - grąžiname tą patį skaičių.
 */

function skaitmenuSuma(num) {
    let sum = 0;
    for (let i = 0; num / 10 > 0; i++){
        sum += num % 10;
        num = Math.floor(num/10);
    } return sum;
}

console.log('5 uzduotis');
console.log();
console.log(skaitmenuSuma(123)); // 6
console.log(skaitmenuSuma(17)); // 8
console.log('-----------');


/**
 * Užduotis Nr. 6
 * Parašykite funkciją, kuri grąžina atsitiktinį procentą nuo 0 iki 100 (sveikasis skaičius).
 */
console.log('6 uzduotis');
console.log();
function procentai() {
    return Math.floor(Math.random() * 101);
}
// for (let i = 0; i < 100; i++)
    console.log(procentai()); 
console.log('-----------');


/**
 * [BONUS] Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina masyvą su jo daugybos lentelės rezultatais iki 10.
 */

function daugybosLentele(num) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr[i - 1] = num * i;
    }
    return arr;
}
console.log('BONUS uzduotis');
console.log();
console.log(daugybosLentele(3)); 
console.log(daugybosLentele(5)); 
console.log('-----------');
