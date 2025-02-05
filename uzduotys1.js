// 1 uzduotis
/* Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą: "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias? */

function vertinimai(num) {
    let balai = 0;
    if (num <= 10 && num > 8) {
        balai = 'Labai gerai';
    } else if (num <= 8 && num > 6) {
        balai = 'Gerai';
    } else if (num <= 6 && num > 4) {
        balai = 'Patenkinamai';
    } else if (num <= 4 && num >=1 ) {
        balai = 'Nepatenkinamai';
    } else {balai = 'Netinkamas skaicius'}

    return balai;
        
    }
    
console.log('1 uzduotis');
console.log();
console.log(vertinimai(9));
console.log(vertinimai(7));
console.log(vertinimai(5));
console.log(vertinimai(2));
console.log(vertinimai(14));
console.log('--------------');

// 2 uzduotis
/* Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias? */

function balsavimas(amzius) {
if (amzius >= 18) {
    return 'Gali balsuoti';
} else {
    return 'Negali balsuoti';
}
    
}

console.log('2 uzduotis');
console.log();

console.log(balsavimas(15));
console.log(balsavimas(36));
console.log(balsavimas(75));
console.log(balsavimas(12));
console.log('--------------');

// 3 uzduotis
/* Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.Kurį metodą čia patartumėte naudoti?*/

function kelintadienis(diena) {
    if (diena == 1) {
        return 'Pirmadienis';
    } else if (diena == 2) {
        return 'Antradienis';
    } else if (diena == 3) {
        return 'Treciadienis';
    } else if (diena == 4) {
        return 'Ketvirtadienis';
    } else if (diena == 5) {
        return 'Penktadienis';
    } else if (diena == 6) {
        return 'Sestadienis';
    } else if (diena == 7) {
        return 'Sekmadienis';
    } else {
        return 'Tokios dienos nera';
    }
    
}

console.log('3 uzduotis');
console.log();

console.log(kelintadienis(1));
console.log(kelintadienis(2));
console.log(kelintadienis(3));
console.log(kelintadienis(4));
console.log(kelintadienis(5));
console.log(kelintadienis(6));
console.log(kelintadienis(7));
console.log(kelintadienis(8));
console.log('---------------');


//4 uzduotis
/* Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, ir atitinkamai išveda pranešimą.Kurį operatorių naudoti? */

function skaiciai(num) {
    if (num > 0) {
        return 'Teigiamas skaicius';
    } else if (num < 0) {
        return 'Neigiamas skaicius';
    } else {
        return 'Nulis';
    }
    
}

console.log('4 uzduotis');
console.log();

console.log(skaiciai(2));
console.log(skaiciai(-23));
console.log(skaiciai(0));
console.log('---------------');

// 5 uzduotis
/* Sukurkite programą, kuri nustato vartotojo amžių ir priskiria jį į vieną iš trijų grupių: "Jaunuolis"(13 - 19), "Suaugęs"(20 - 64), "Pensininkas"(65 +).Koks operatorius geriausiai tinka šiam atvejui?*/

function amziausGrupes(grupe) {
    if (grupe >= 13 && grupe <= 19) {
        return 'Jaunuolis';
    } else if (grupe >= 20 && grupe <= 64) {
        return 'Suauges';
    } else if (grupe >= 65) {
        return 'Pensininkas';
    } else {
        return 'Netinkamai nurodytas amzius'
    }
}

console.log('5 uzduotis');
console.log();

console.log(amziausGrupes(15));
console.log(amziausGrupes(45));
console.log(amziausGrupes(76));
console.log('-----------------');

// 6 uzduotis
/* Parašykite programą, kuri patikrina, ar skaičius yra lyginis ar nelyginis, ir atspausdina atitinkamą pranešimą.Kuris operatorius čia tinkamiausias?*/

function lyginisNelyginis(num) {
    if (num % 2 === 0 ) {
        return 'Lyginis';
    } else {
        return 'Nelyginis';
    }
}

console.log('6 uzduotis');
console.log();

console.log(lyginisNelyginis(7));
console.log(lyginisNelyginis(16));
console.log(lyginisNelyginis(-4));
console.log('------------------');













