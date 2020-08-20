/* Завдання 1.
Напишіть функцію яка приймає одне число. При першому виклику, вона його запам'ятовує, при другому - сумує з попереднім і так далі. Для виконання цього завдання використайте замикання. 
Наприклад:
sum(3) = 3
sum(5) = 8
sum(228) = 236
 */

function sum() {
    let x = 0;
    function sumuvaty(n) {
        x += n;
        console.log(`sum(${n}) = ${x};`);
    }
    return sumuvaty
}

let suma = sum();
suma(3);
suma(5);
suma(228);


/* Завдання 2.
Напишіть модуть який буде обробляти покупку товарів. 
В модулі має бути тільки логіка, весь зв’язок з html, 
тобто кліки, зміна даних в html робити там не потрібно. 
Все має працювати. Можете добавити додатковий функціонал від себе.
 */

//  import {displayBank as bank, sell as sellDrink, add as addDrink, beerCount, wineCount, pepsiCount} from './module.js'
 import * as shop from './module.js'

let getID = id => document.getElementById(id);

// let shop = (function () {
//     let bankBalance = 1000;

//     function sell(checkArray) {
//         let _suma = 0;
//         checkArray.forEach(element => {
//             for (let index = 0; index < drinks.length; index++) {
//                 let drIndex = parseInt(element.indexDrink);
//                 if (drIndex == index) {
//                     drinks[index].count -= element.numberDrink;
//                     _suma += element.numberDrink * drinks[index].price;
//                 }
//             }
//         });
//         bankBalance += _suma;
//         return `Всього: ${_suma} гривень`
//     }

//     function displayBank() {
//         return bankBalance;
//     }

//     return {
//         sell: sell,
//         bank: displayBank,
//     }
// }())

function displayAll() {
    getID('bankBalance').value = shop.displayBank() + ' грн.';
    getID('beerCount').value = shop.beerCount() + ' шт.';
    getID('wineCount').value = shop.wineCount() + ' шт.';
    getID('pepsiCount').value = shop.pepsiCount() + ' шт.';
}
displayAll();

getID('add').addEventListener('click', () => {
    let numberDrink = getID('numberDrink').value;
    let indexDrink = document.querySelector('input[name="drinks"]:checked').value;
    getID('checkList').textContent += shop.add(numberDrink, indexDrink);
})


function sell() {
    let message = shop.sell();
    displayAll();
    getID('check').innerHTML = getID('checkList').textContent;
    getID('check').innerHTML += `${message}\n`;

    getID('numberDrink').value = '';
    getID('checkList').textContent = '';
    document.querySelector('input[type="radio"]').checked = true;
}

getID('sell').addEventListener('click', sell);

