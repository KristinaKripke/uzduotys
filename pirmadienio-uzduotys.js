// 1. Sukurkite stringą ir išveskite jo ilgį.
console.log('1 užduotis');
console.log();
const sakinys1 = 'Jono katė pabėgo.';
console.log(sakinys1.length);
console.log('---------------');

// 2. Konvertuokite stringą į didžiąsias raides.
console.log('2 užduotis');
console.log();
const sakinys2 = 'Jono katė pabėgo.';
console.log(sakinys2.toUpperCase());
console.log('---------------');

// 3. Konvertuokite stringą į mažąsias raides.
console.log('3 užduotis');
console.log();
const sakinys3 = 'JoNo KATė pABėgO.';
console.log(sakinys3.toLowerCase());
console.log('---------------');

// 4. Pašalinkite tarpus iš string'o pradžios ir pabaigos.
console.log('4 užduotis');
console.log();
const sakinys4 = '  Jono katė pabėgo.       ';
console.log(sakinys4.trim());
console.log('---------------');

// 5. Patikrinkite, ar stringas prasideda žodžiu "Hello".
console.log('5 užduotis');
console.log();
const sakinys5 = 'Hello, beautiful world!';
console.log(sakinys5.startsWith('Hello'));
console.log('---------------');

// 6. Patikrinkite, ar stringas baigiasi žodžiu "World".
console.log('6 užduotis');
console.log();
const sakinys6 = 'Hello, beautiful world';
console.log(sakinys6.endsWith('world'));
console.log('---------------');

// 7. Raskite pirmąją žodžio "Java" poziciją string'e. 
console.log('7 užduotis');
const pozicija = 'Ar Java yra tas pats kas Javascript? Ar Java Script yra du žodziai?';
console.log(pozicija.indexOf('Java'));
console.log('--------------');


// 8. Raskite paskutinę žodžio "Java" poziciją string'e.
console.log('8 užduotis');
const paskutinePozicija = 'Ar Java yra tas pats kas Javascript?';
console.log(paskutinePozicija.lastIndexOf('Java'));
console.log('--------------');


// 9. Pakeiskite pirmąjį "Java" į "JS". 
console.log('9 užduotis');
const pakeitimas1 = 'Ar Java yra tas pats kas Javascript? Ar Java Script yra du žodziai?';
const pak1 = 'Java';
console.log(pakeitimas1.replace(pak1, 'JS'));
console.log('--------------');



// 10. Pakeiskite visus "Java" į "JS". 
console.log('10 užduotis');
const pakeitimas2 = 'Ar Java yra tas pats kas Javascript? Ar Java Script yra du žodziai?';
const pak2 = 'Java';
console.log(pakeitimas2.replaceAll(pak2, 'JS'));
console.log('--------------');

// 11. Padalinkite stringą į masyvą pagal skyriklį. 
console.log('11 užduotis');
const dalinti = 'Šitą masyvą reikia kažkaip padalinti.';
console.log(dalinti.split(' '));
console.log('--------------');

// 12. Sujunkite du string'us į vieną. 
console.log('12 užduotis');
const pirmas = 'Buvo kartą buvo voras';
const antras = 'Petras buvo, bet ne storas.';
console.log(pirmas.concat(', ', antras));
console.log('--------------');

// 13. Išskirkite string'o dalį nuo 3 iki 8 simbolio. 
console.log('13 užduotis');
const dalis = 'Iš kur kyla saulė?';
console.log(dalis.substring(3, 8 + 1));
console.log('--------------');

// 14. Naudodami slice, paimkite paskutinius 5 string'o simbolius. (.slice)
console.log('14 užduotis');
const simboliai = 'milžiniškas';
console.log(simboliai.slice(5 + 1));
console.log('--------------');

// 15. Naudodami substring, paimkite pirmus 5 string'o simbolius. (.substring)
console.log('15 užduotis');
const pirmi5 = 'Kodėl pabėgo Jono katė?'
console.log(pirmi5.substring(0, 5));
console.log('--------------');

// 16. Sukurkite stringą, kuris pakartojamas 4 kartus. (.repeat)
console.log('16 užduotis');
const pakartojimas = 'Grįžk! ';
console.log(pakartojimas.repeat(4));
console.log('--------------');

// 17. Patikrinkite, ar string'e yra žodis "fun". (.includes)
console.log('17 užduotis');
const rasti1 = 'Girls just want to have fun.';
console.log(rasti1.includes('fun'));

// 18. Išveskite stringą su kabutėmis "teksto" viduje.
console.log('18 užduotis');
console.log(`Šiame sakinyje yra tokios kabutės '' ir tokios "" kabutės`);
console.log('--------------');

// 18. Išveskite stringą su kabutėmis "teksto" viduje.
console.log('18 uzduotis');
console.log(`Siame sakinyje yra tokios kabutes '' ir tokios "" kabutes`);
console.log('--------------');