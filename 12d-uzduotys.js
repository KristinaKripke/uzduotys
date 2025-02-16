// 1. Parašykite funkciją, kuri priima skaičių kaip argumentą ir grąžina jo kvadratą.
 // (Pvz., kvadratu(4) turi grąžinti 16.)

console.log('1 užduotis');
console.log();

num1 = 0;
function kvadratas(skaicius) {
    return skaicius = skaicius * skaicius;
}
console.log(kvadratas(4));
console.log('-------------------');


// 2. Parašykite funkciją, kuri patikrina, ar perduotas skaičius yra lyginis.
// (Pvz., arLyginis(8) → true, arLyginis(7) → false.)

console.log('2 užduotis');
console.log();

function lyginisNelyginis(num) {
    return num % 2 === 0
}
console.log(lyginisNelyginis(2));
console.log(lyginisNelyginis(3));
console.log('-------------------');

// 3. Sukurkite funkciją, kuri priima du skaičius ir grąžina didesnįjį.
// (Pvz., didesnisSkaicius(5, 8) → 8.)

console.log('3 užduotis');
console.log();

function tikrinti(num1, num2) {
    if (num1 > num2) {
        return num1
    } else {
        return num2
    }
}
console.log(tikrinti(2, 7));
console.log(tikrinti(19, 4));
console.log('-------------------');


// 4. Sukurkite funkciją, kuri priima stringą ir grąžina jį atvirkštine tvarka.
// (Pvz., reverseString("JavaScript") → "tpircSavaJ".)
console.log('4 užduotis');
console.log();

const zodis = '';
function atvirksciai(zodis) {
    return zodis.split('').reverse().join('');
}
console.log(atvirksciai('saule'));
console.log(atvirksciai('yra'));
console.log('-------------------');

// 5. Parašykite funkciją, kuri skaičiuoja, kiek kartų nurodyta raidė pasikartoja string'e.
// (Pvz., skaiciuotiRaides("banana", "a") → 3.)
console.log('5 užduotis');
console.log();

let zodis1 = '';
function pasiakrtoja(string, simbolis) {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === simbolis) {
            count++;
        }
    }
    return count
}
console.log(pasiakrtoja('bananas', 'a'));
console.log(pasiakrtoja('milzinas', 'z'));
console.log('-------------------');

// 6. Sukurkite funkciją, kuri priima skaičių ir grąžina "teigiamas", "neigiamas" arba "nulis" naudojant ternary.
console.log('6 užduotis');
console.log();

let skaicius = 0;
function koksSkaicius(num1) {
    return num1 === 0 ? 'nulis' : num1 > 0 ? 'teigiamas' : 'neigiamas';

}
console.log(koksSkaicius(0));
console.log(koksSkaicius(3));
console.log(koksSkaicius(-2));
console.log('-------------------');

// 7. Parašykite funkciją, kuri tikrina, ar žodis prasideda raide "A"(nesvarbu, didžioji ar mažoji).
// (Pvz., pradedaA("Automobilis") → true, pradedaA("namas") → false.)
console.log('7 užduotis');
console.log();

let zodis4 = ' ';
const pirmaRaide = 'a';
function arPrasideda(zodis4) {
    zodis4 = zodis4.toLowerCase();
    if (zodis4.charAt(0) === pirmaRaide) {
        return true;
    }
    return false;
}
console.log(arPrasideda('Arka'));
console.log(arPrasideda('sarka'));

console.log('-------------------');

// 8. Sukurkite funkciją, kuri priima skaičių ir patikrina, ar jis dalus iš 3 ir 5(grąžina true arba false).

console.log('8 užduotis');
console.log();

function arDalus(num1) {
    return num1 % 3 % 5 === 0;
}

console.log(arDalus(15));
console.log(arDalus(7));
console.log('-------------------');

// 9. Naudodami for ciklą, išveskite visus skaičius nuo 10 iki 1 mažėjančia tvarka.
console.log('9 užduotis');
console.log();

for (let i = 10; i >= 0;  i--) {
    console.log(i);
}
console.log('-------------------');

// 10. Parašykite for ciklą, kuris išveda tik lyginius skaičius nuo 2 iki 20.
console.log('10 užduotis');
console.log();

for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0){
        console.log(i);
    }

    
}
console.log('-------------------');

// 11. Naudodami for ciklą, suskaičiuokite visų skaičių nuo 1 iki 100 sumą ir grąžinkite rezultatą.
console.log('11 užduotis');
console.log();

let num5 = 0;
for (let i = 1; i <= 100; i++) {
    num5 = num5 + i;
} 
console.log(num5);
console.log('-------------------');

// 12. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina jų vidurkį.
// (Pvz., vidurkis([5, 10, 15]) → 10.)
console.log('12 užduotis');
console.log();

function vidurkis(masyvas) {
    let sum = 0;
    for (let i = 0; i < masyvas.length; i++) {
            sum = sum + masyvas[i];
            
    } return sum / masyvas.length;
}

console.log(vidurkis([5, 10, 15]));

console.log('-------------------');

// 13. Naudodami for ciklą, raskite didžiausią skaičių iš pateikto masyvo.
// (Pvz., rastiDidziausia([3, 9, 2, 11, 7]) → 11.)
console.log('13 užduotis');
console.log();


function didziausiasSkaiciu(arr) {
    let didziausias1 = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (didziausias1 < arr[i]) {
            didziausias1 = arr[i];
        }
    } 
    return didziausias1;
}
console.log(didziausiasSkaiciu([3, 9, 2, 11, 7]));

console.log('-------------------');

// 14. Sukurkite funkciją, kuri priima stringą ir grąžina jį be tarpų.
// (Pvz., beTarpų("Labas pasauli") → "Labaspasauli".)
console.log('14 užduotis');
console.log();

const paduodam = '';
function beTarpu(paduodam) {
    return paduodam.replaceAll(' ', '');
    
}
console.log(beTarpu('Kur yra Kaunas?'));
console.log('-------------------');


 // 15. Parašykite funkciją, kuri patikrina, ar string'e yra daugiau nei 10 simbolių.
// (Pvz., arIlgas("JavaScript") → true, arIlgas("Labas") → false.)
console.log('15 užduotis');
console.log();

const zodis2 = ' ';
function arIlgas(zodis2) {
    return zodis2.length >= 10 ? true : false;
}
console.log(arIlgas('grybas'));
console.log(arIlgas('Tai yra fantastiska'));
console.log('-------------------');

// 16. Sukurkite for ciklą, kuris išveda daugybos lentelę 5(nuo 1 iki 10).
console.log('16 užduotis');
console.log();


function daugybosLentele(n) {
    let arr2 = [];
    for (let i = 1; i <= 10; i++) {
        arr2 [i -1] = n * i;
    } return arr2;
}
console.log(daugybosLentele(3));
console.log('-------------------');

// 17. Parašykite funkciją, kuri priima stringą ir pakeičia visas "a" raides į "@".
// (Pvz., keistiRaide("banana") → "b@n@n@".)
console.log('17 užduotis');
console.log();

let string2 = ' ';
function pakeistiRaides(string2) {
    return string2.replaceAll('a', '@');
    
}
console.log(pakeistiRaides('pavasaris ateina'));
console.log('-------------------');

// 18. Sukurkite funkciją, kuri sugeneruoja stringą "**********"(10 žvaigždučių), naudojant for ciklą.
console.log('18 užduotis');
console.log();


function zvaigzdutes(){
    let zvaigz = '';
    for (let i = 0; i < 10; i++) {
        zvaigz += '*';
    }
    return zvaigz
}
console.log(zvaigzdutes());
console.log('-------------------');

// 19. Parašykite funkciją, kuri priima skaičių ir grąžina visus jo daliklius(išskyrus 1 ir patį save).
// (Pvz., dalikliai(12) →[2, 3, 4, 6].)

console.log('19 užduotis');
console.log();


function daliklis(ska) {
    let count = [];
    for (let i = 0; i <= ska; i++) {
        if (ska % i === 0 && i > 1 && i < ska) {
            count.push(i)
            
        }
    } return count;
        
    } 
    
console.log(daliklis(12));


console.log('-------------------');

// 20. Sukurkite funkciją, kuri tikrina, ar pateiktas skaičius yra pirminis.
// (Pvz., arPirminis(7) → true, arPirminis(8) → false.)

console.log('20 užduotis');
console.log();

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(9));
console.log(isPrime(79));

console.log('-------------------');



