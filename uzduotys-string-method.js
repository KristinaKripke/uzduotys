// 1. Sukurkite stringą ir išveskite jo ilgį. (.length)
console.log('1 uzduotis');
const ilgis = 'Kokio ilgio yra sitas sakinys?';
console.log(`${ilgis} = ${ilgis.length}`);
console.log('--------------');



// 2. Konvertuokite stringą į didžiąsias raides. (.toUpperCase)
console.log('2 uzduotis');
const didelesRaides = 'atsargiai: pasaku namelyje gyvena ragana!';
console.log(didelesRaides.toUpperCase());
console.log('--------------');


// 3. Konvertuokite stringą į mažąsias raides. (.toLowerCase)
console.log('3 uzduotis');
const mazosRaides = 'LaBai PIktas kaiMYNo sUo';
console.log(mazosRaides.toLowerCase());
console.log('--------------');


// 4. Pašalinkite tarpus iš string'o pradžios ir pabaigos. (.trim)
console.log('4 uzduotis');
const nereikalingiTarpai = "       labai daug visai nereikalingu tarpu     ";
console.log(nereikalingiTarpai);
console.log(nereikalingiTarpai.trim());
console.log('--------------');


// 5. Patikrinkite, ar stringas prasideda žodžiu "Hello". (.startsWith)
console.log('5 uzduotis');
const prasideda = 'Hello, how are you today?';
console.log(prasideda.startsWith('Hello'));
console.log(prasideda.startsWith('how'));
console.log('--------------');



// 6. Patikrinkite, ar stringas baigiasi žodžiu "World". (.endsWith)
console.log('6 uzduotis');
const baigiasi = 'I think we live in a complicated world.';
console.log(baigiasi.endsWith('world'));
console.log(baigiasi.endsWith('.'))
console.log('--------------');


// 7. Raskite pirmąją žodžio "Java" poziciją string'e. (.indexOf)
console.log('7 uzduotis');
const pozicija = 'Ar Java yra tas pats kas Javascript? Ar Java Script yra du zodziai?';
console.log(pozicija.indexOf('Java'));
console.log(pozicija.indexOf('pats'));
console.log('--------------');


// 8. Raskite paskutinę žodžio "Java" poziciją string'e. (.lastIndexOf)
console.log('8 uzduotis');
const paskutinePozicija = 'Ar Java yra tas pats kas Javascript? Ar Java Script yra du zodziai?';
console.log(paskutinePozicija.lastIndexOf('Java'));
console.log(paskutinePozicija.lastIndexOf('pats'));
console.log('--------------');


// 9. Pakeiskite pirmąjį "Java" į "JS". (.replace)
console.log('9 uzduotis');
const pakeitimas1 = 'Ar Java yra tas pats kas Javascript? Ar Java Script yra du zodziai?';
const pak1 = 'Java';
console.log(pakeitimas1.replace(pak1, 'JS'));
console.log('--------------');



// 10. Pakeiskite visus "Java" į "JS". (.replaceAll)
console.log('10 uzduotis');
const pakeitimas2 = 'Ar Java yra tas pats kas Javascript? Ar Java Script yra du zodziai?';
const pak2 = 'Java';
console.log(pakeitimas2.replaceAll(pak2, 'JS'));
console.log('--------------');


// 11. Padalinkite stringą į masyvą pagal skyriklį. (.split)
console.log('11 uzduotis');
const dalinti = 'Sita masyva reikia kazkaip padalinti.';

console.log(dalinti.split(' '));
console.log(dalinti.split(''));
const padalinti6 = 'masyva';
console.log(Array.from(padalinti6));
console.log('--------------');



// 12. Sujunkite du string'us į vieną. (.concat)
console.log('12 uzduotis');
const pirmas = 'Buvo karta buvo voras';
const antras = 'Petras buvo, bet ne storas.';
console.log(pirmas.concat(', ', antras));
console.log();
const zodeliai = ['Labas', 'rytas', 'Lietuva',];
console.log(zodeliai.join(' '));
console.log('--------------');


// 13. šskirkite string'o dalį nuo 3 iki 8 simbolio. (.substring)
console.log('13 uzduotis');
const dalis = 'Is kur kyla saule?';
console.log(dalis.substring(3, 8 + 1));
console.log('--------------');

// 14. Naudodami slice, paimkite paskutinius 5 string'o simbolius. (.slice)
console.log('14 uzduotis');
const simboliai = 'milziniskas';
console.log(simboliai.slice(5 + 1));
console.log(simboliai.slice(-2));
console.log('--------------');

// 15. Naudodami substring, paimkite pirmus 5 string'o simbolius. (.substring)
console.log('15 uzduotis');
const pirmi5 = 'Kodel pabego Jono kate?'
console.log(pirmi5.substring(5 + 1));
console.log(pirmi5.substring(5));
console.log('--------------');

// 16. Sukurkite stringą, kuris pakartojamas 4 kartus. (.repeat)
console.log('16 uzduotis');
const pakartojimas = 'Grizk! ';
console.log(pakartojimas.repeat(4));
console.log('--------------');

// 17. Patikrinkite, ar string'e yra žodis "fun". (.includes)
console.log('17 uzduotis');
const rasti1 = 'Jono katinukas taip niekada ir nebeparejo.';
console.log(rasti1.includes('katinukas'));

const rasti2 = 'Jono katinukas taip niekada ir nebeparejo.';
const rasti3 = 'Jono suniukas taip niekada ir nebeparejo.';
const word = 'katinukas';
console.log((rasti2.includes(word)) ? 'Zodis yra' : 'Zodzio nera');
console.log((rasti3.includes(word)) ? 'Zodis yra' : 'Zodzio nera');
console.log('--------------');

// 18. Išveskite stringą su kabutėmis "teksto" viduje.
console.log('18 uzduotis');
console.log(`Siame sakinyje yra tokios kabutes '' ir tokios "" kabutes`);
console.log('--------------');


// 19. Sukurkite šablono literatūrą su kintamuoju ir išveskite rezultatą.
console.log('19 uzduotis');
const vardas = 'Paulius';
const amzius = '17';
const augintinis = 'juru kiaulyte';
const sakinys = `${vardas} yra jaunas ${amzius} vyras, bet jo ${augintinis} vis vien subegejo pabegti.`;
console.log(sakinys);
console.log('--------------');

// 20. Pašalinkite tarpus tik iš string'o pradžios.
console.log('20 uzduotis');
const tarpai1 = '       Kodel taip toli?';
console.log(tarpai1.trimStart());
console.log('--------------');


// PAPILDOMOS UZDUOTYS

// 1. Iš string "mokymo centras" suformatuokite taip, kad pirmos raidės būtų didžiosios, o likusios mažosios.
// split ir uppercase charat, cia reikia ciklo
console.log('1 papildoma uzduotis');
function didraide(kelizodziai) {
    kelizodziai = kelizodziai.split(' ')
    for (let i = 0; i < kelizodziai.length; i++) {
        kelizodziai[i] = kelizodziai[i].charAt(0).toUpperCase() + kelizodziai[i].slice(1);
    }
    return kelizodziai.join(' ');
}
console.log(didraide('mokymo centras'));
console.log('--------------');

// 2. Sutrumpinkite tekstą "JavaScript programavimas" iki 10 simbolių ir pridėkite '...'. (galima su substring)
console.log('2 papildoma uzduotis');
const tekstas = `"JavaScript programavimas"`;
console.log(tekstas.length);
console.log((tekstas.slice(1, -15)));
console.log("'" + (tekstas.slice(1, -15)) + "'");
console.log((tekstas.slice(1, -15)) + '...');
console.log('--------------');

// 3. Atspausdinkite tekstą "JavaScript" atvirkščiai.
console.log('3 papildoma uzduotis');
const tekstas5 = 'JavaScript';
console.log(tekstas5.split('').reverse().join(''));
console.log('--------------');


// 4. Tekste "obuolys, bananas, kivis" pakeiskite visus kablelius į kabliataškius.
console.log('4 papildoma uzduotis');
const tekstas2 = `"obuolys, bananas, kivis"`;
console.log(tekstas2.replaceAll(',', ';'));
console.log('--------------');

// 5. Suskaičiuokite, kiek yra žodžių string'e "Šiandien gera diena.".
console.log('5 papildoma uzduotis');
const tekstas3 = "Šiandien gera diena.";
console.log(tekstas3.split(' ').length);
console.log('--------------');



// 6. Patikrinkite, ar tekstas "test@gmail.com" turi @ ir baigiasi .com.has context menu
console.log('6 papildoma uzduotis');
console.log();
const tekstas4 = "test@gmail.com";
console.log((tekstas4.includes('@')) && (tekstas4.endsWith('.com')));
console.log('--------------');


// 7. Pašalinkite pirmą simbolį string'e " JavaScript", jei jis yra tarpas.
console.log('7 papildoma užduotis');
console.log();
const tarpas1 = ' JavaScript';
console.log(tarpas1.trimStart());
console.log('--------------');



// 8. Palyginkite string'us "JavaScript" ir "javascript" ignoruodami jų raidžių dydį.
console.log('8 papildoma uzduotis');
console.log();
let pirmasJ = 'JavaScript';
let antrasJ = 'javascript';
let palyginimas = pirmasJ.toLowerCase === antrasJ.toLowerCase;
console.log(palyginimas);
console.log('--------------');


// 9. Pašalinkite visus skaičius iš teksto "a1b2c3".
console.log('9 papildoma uzduotis');
console.log();

let para = 'a1b2c3';
const rai = 'abcdefghijklmnoprstuvz';

function salinti(eile) {
    let finalZodzis = '';
    const skai = '0123456789';
    for (let i = 0; i < eile.length; i++) {
        if (!skai.includes(eile[i])) {
            finalZodzis = finalZodzis + eile[i];
        }
    
    }
            return finalZodzis;
    }
    
console.log(salinti(para));

console.log('--------------');



// 10. Suskaičiuokite, kiek tekste "a1b2c3" yra skaičių.
console.log('10 papildoma uzduotis');
console.log();

const visiKartu = 'a1b2c3';
const abecele = 'abc';

let countS = 0;
function raides(text) {

    let skaiciai = '123456';
    for (let i = 0; i < text.length; i++) {
        if (!visiKartu.includes(text[i])) {
            countS++
        }
        
    }
        return skaiciai.length;
}
console.log(raides(visiKartu));

console.log('--------------');


// 11. Iš teksto "HTML CSS JS" paimkite pirmąją kiekvieno žodžio raidę ir sudėkite jas į vieną string'ą.
console.log('11 papildoma uzduotis');
console.log();
function visi(visi3) {
    visi3 = visi3.split(' ');
    for (let i = 0; i < visi3.length; i++) {
        visi3[i] = visi3[i].charAt(0)
    }
return visi3.join('');
}
console.log(visi('HTML CSS JS'));
console.log('--------------');


// 12. Raskite pirmą žodį string'e "Hello World!".
console.log('12 papildoma uzduotis');
console.log();
let tekstas7 = 'Hello world!';
let kinta = tekstas7.split(' ');
console.log(kinta[0]);
console.log('--------------');



// 13. Pašalinkite paskutinius 3 simbolius string'e "JavaScript" ir atspausdinkite rezultatą.
console.log('13 papildoma užduotis');
console.log();
const simb3 = 'JavaScript';
console.log(simb3.slice(0, -3));
console.log('--------------');


// 14. Prie string'o "Likusios dienos: " pridėkite skaičių 5 iš daysLeft kintamojo.
console.log('14 papildoma užduotis');
console.log();
const stringas1 = 'Likusios dienos: ';
let daysLeft = 5;
console.log(stringas1 + daysLeft);
console.log('--------------');


// 15. Tekste "mokytojas" pakeiskite pabaigą į "ėja", kad gautumėte "mokytoja".

console.log('15 papildoma užduotis');
console.log();
let tekstas9 = 'Mokykloje yra mokytojas, kuri nesutaria su kitais mokytojais';
console.log(tekstas9.replaceAll('mokytojas', 'mokytoja'));
console.log('--------------');


























