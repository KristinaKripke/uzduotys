
// 1 uzduotis
/* Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) išveda sezono pavadinimą("Pavasaris", "Vasara", "Ruduo", "Žiema").Kuri struktūra geriausiai tinka šiam uždaviniui?*/

function sezonai(menesis) {
    switch (menesis) {
        case 12:
        case 1:
        case 2:
            return 'Ziema';
        case 3:
        case 4:
        case 5:
            return 'Pavasaris';
        case 6:
        case 7:
        case 8: 
            return 'Vasara';
        case 9:
        case 10:
        case 11: 
            return 'Ruduo';
        default:
            return 'Tokio menesio numerio nera'
    }
    
}

console.log('1 uzduotis');
console.log();
console.log(sezonai (1)); // Ziema
console.log(sezonai(4)); // Pavasaris
console.log(sezonai(6)); // Vasara
console.log(sezonai(11)); // Ruduo
console.log(sezonai(13)); // Tokio menesio numerio nera

console.log('-----------');

//2 uzduotis
/* Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, ar ne, ir atitinkamai išveda pranešimą.Kuris operatorius naudoti? */

function arSkaiciaiLygus(num1, num2) {
    return num1 === num2 ? 'Skaiciai yra lygus' : 'Skaiciai yra nelygus'
}

console.log('2 uzduotis');
console.log();
console.log(arSkaiciaiLygus(3, 2)); // Skaiciai yra nelygus
console.log(arSkaiciaiLygus(5, 5)); // Skaiciai yra lygus
console.log('-----------');

// 3 uzduotis
/* Sukurkite funkciją, kuri patikrina, ar vartotojo įvestas simbolis yra balsė, priebalsė ar nėra raidė.Koks operatorius geriausiai tinka?*/

function abecele(raide) {
    const balse = ['a', 'e', 'i', 'y', 'o', 'u'];
    const priebalse = ['b', 'c', 'd', 'e', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z',];
    return balse.includes(raide) ? 'Balse' : priebalse.includes(raide) ? 'Priebalse' : 'Ivestas netinkamas simbolis';
}
console.log('3 uzduotis');
console.log();
console.log(abecele('a')); // Balse
console.log(abecele('b')); // Priebalse
console.log(abecele('&')); // Ivestas netinkamas simbolis
console.log('-----------');

// 4 uzduotis
/* Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) išveda, ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti?*/

function savaitgalisArNe(diena) {
    switch (diena) {
        case 'Pirmadienis':
        case 'Antradienis':
        case 'Treciadienis':
        case 'Ketvirtadienis':
        case 'Penktadienis':
            return 'Darbo diena';
        case 'Sestadienis':
        case 'Sekmadienis':
            return 'Savaitgalis';
        default:
            return 'Tokios savaites dienos nera';
    }
}
console.log('4 uzduotis');
console.log();
console.log(savaitgalisArNe('Pirmadienis')); // Darbo diena
console.log(savaitgalisArNe('Sestadienis')); // Savaitgalis
console.log(savaitgalisArNe('Kelintadienis')); // Tokios savaites dienos nera
console.log(savaitgalisArNe('Ketvirtadienis')); // Darbo diena
console.log('-----------');

// 5 uzduotis
/*Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę: "Šalta"(< 10°C), "Šilta"(10 - 25°C), "Karšta"(> 25°C).Koks operatorius geriausiai tinka?*/

function oroBukle(temp) {
    if (temp <10) {
        return 'Salta';
    } else if (temp >= 10 && temp <= 25) {
        return 'Silta';
    } else if (temp >25) {
        return 'Karsta';
    }
}
console.log('5 uzduotis');
console.log();
console.log(oroBukle(-4)); // Salta
console.log(oroBukle(13)); // Silta
console.log(oroBukle(30)); // Karsta
console.log('-----------');

// 6 uzduotis
/* Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3, tiek 5. Kurį operatorių naudoti?*/

function daliklis(num1) {
    return num1 % 3 === 0 && num1 % 5 === 0 ? 'Skaicius dalinasi is 3 ir 5' : 'Skaicius nesidalina is 3 ir 5';
}

console.log('6 uzduotis');
console.log();
console.log(daliklis(15)); // Skaicius dalinasi is 3 ir 5
console.log(daliklis(7)); // Skaicius nesidalina is 3 ir 5
console.log('-----------');


// 7 uzduotis
/* Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") išveda atitinkamą veiklą: "Dirbti", "Ilsėtis".Kuri struktūra geriausiai tinka?*/

function dienosTipas(diena) {
    if (diena === 'Darbo diena') {
        return 'Dirbti';
    } else if (diena === 'Savaitgalis') {
        return 'Ilsetis';
    } else { 
        return 'Netinkama ivestis';
    }
}
console.log('7 uzduotis');
console.log();
console.log(dienosTipas('Darbo diena')); // Dirbti
console.log(dienosTipas('Savaitgalis')); // Ilsetis
console.log(dienosTipas('Pirmadienis')); // Netinkama ivestis
console.log('-----------');

// 8 uzduotis
/* Parašykite programą, kuri nustato, ar vartotojo įvestas metai yra keliamieji.Kurį operatorių naudoti?*/

function keliamiejiMetai(metai) {
    return ((metai % 4 === 0) && (metai % 100 != 0)) ? 'Keliamieji metai' : 'Nekeliamieji metai'   
}
console.log('8 uzduotis');
console.log();
console.log(keliamiejiMetai(1984)); // Keliamieji metai
console.log(keliamiejiMetai(2024)); // Keliamieji metai
console.log(keliamiejiMetai(1362)); // Nekeliamieji metai

function keliamieji(metai) {
    if (new Date(metai, 1, 29).getDate()===29){
        return true;
    }   return false;
    
}
console.log();
console.log(keliamieji(1984)); // Keliamieji metai
console.log(keliamieji(2024)); // Keliamieji metai
console.log(keliamieji(1362)); // Nekeliamieji metai
console.log('-----------');



//9 uzduotis
/*Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius) priskiria aprangos rekomendaciją: "Kepurių nereikia", "Kepurės reikalingos", "Geriau neik į lauką".Koks operatorius geriausiai tinka?*/
function kepure(temp) {
    if (temp >= 15) {
        return 'Kepuriu nereikia';
    } else if (temp <=14 && temp >= -10) {
        return 'Kepures reikalingos';
    } else if ( temp <-11) {
        return 'Geriau neik i lauka';
    } 
}

console.log('9 uzduotis');
console.log();
console.log(kepure(-4)); // Kepures reikalingos
console.log(kepure(30)); // Kepures nereikia
console.log(kepure(-17)); // Geriau neik i lauka
console.log('-----------');

