
// 1 uzduotis

function sezonai(menesis) {
    switch (menesis) {
        case 1:
        case 2:
        case 3:
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
console.log(sezonai (1));
console.log(sezonai(4));
console.log(sezonai(6));
console.log(sezonai(11));
console.log('-----------');

//2 uzduotis

function arSkaiciaiLygus(num1, num2) {
    return num1 === num2 ? 'Skaiciai yra lygus' : 'Skaiciai yra nelygus'
}

console.log('2 uzduotis');
console.log();
console.log(arSkaiciaiLygus(3, 2));
console.log(arSkaiciaiLygus(5, 5));
console.log('-----------');

// 3 uzduotis

function abecele(raide) {
    const balse = ['a', 'e', 'i', 'y', 'o', 'u'];
    const priebalse = ['b', 'c', 'd', 'e', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'r', 's', 't', 'v', 'z',];
    return balse.includes(raide) ? 'Balse' : priebalse.includes(raide) ? 'Priebalse' : 'Ivestas netinkamas simbolis';
}
console.log('3 uzduotis');
console.log();
console.log(abecele('a'));
console.log(abecele('b'));
console.log(abecele('&'));
console.log('-----------');


// 4 uzduotis

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
console.log(savaitgalisArNe('Pirmadienis'));
console.log(savaitgalisArNe('Sestadienis'));
console.log(savaitgalisArNe('Kelintadienis'));
console.log(savaitgalisArNe('Ketvirtadienis'));
console.log('-----------');

// 5 uzduotis

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
console.log(oroBukle(-4));
console.log(oroBukle(13));
console.log(oroBukle(30));
console.log('-----------');

// 6 uzduotis

function daliklis(num1) {
    return num1 % 3 === 0 && num1 % 5 === 0 ? 'Skaicius dalinasi is 3 ir 5' : 'Skaicius nesidalina is 3 ir 5';
}

console.log('6 uzduotis');
console.log();
console.log(daliklis(15));
console.log(daliklis(7));
console.log('-----------');


// 7 uzduotis

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
console.log(dienosTipas('Darbo diena'));
console.log(dienosTipas('Savaitgalis'));
console.log(dienosTipas('Pirmadienis'));
console.log('-----------');

// 8 uzduotis

function keliamiejiMetai(metai) {
    return ((metai % 4 === 0) && (metai % 100 != 0)) ? 'Keliamieji metai' : 'Nekeliamieji metai'   
}
console.log('8 uzduotis');
console.log();
console.log(keliamiejiMetai(1984));
console.log(keliamiejiMetai(2024));
console.log(keliamiejiMetai(1362));
console.log('-----------');

//9 uzduotis

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
console.log(kepure(-4));
console.log(kepure(13));
console.log(kepure(30));
console.log(kepure(-17));
console.log('-----------');

