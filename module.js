let bankBalance = 1000;
let checkArray = [];
let drinks = [
    {
        name: 'Пиво',
        count: 100,
        price: 20,
    },
    {
        name: 'Вино',
        count: 100,
        price: 20,
    },
    {
        name: 'Пепсі',
        count: 80,
        price: 10,
    }
]


function add(numberDrink, indexDrink) {
    let _textCont = '';
    if (numberDrink <= 0) alert(`Внесіть додатну кількість напоїв`);

    else if (numberDrink > drinks[indexDrink].count)
        alert(`Вибачте, але на складі залишилось ${drinks[indexDrink].count} штук.`);

    else {
        _textCont += `${drinks[indexDrink].name}: ${numberDrink} шт.\n`;
        let _finIndex = checkArray.findIndex(item => item.indexDrink == indexDrink);
        if (_finIndex >= 0) {
            numberDrink = parseInt(checkArray[_finIndex].numberDrink) + parseInt(numberDrink);
            checkArray.splice(_finIndex, 1, { indexDrink, numberDrink })
        }
        else checkArray.push({ indexDrink, numberDrink });
    }

    return _textCont;
}

function sell() {
    let _suma = 0;
    for (let _element = 0; _element < checkArray.length; _element++) {
        for (let _index = 0; _index < drinks.length; _index++) {
            let _drIndex = parseInt(checkArray[_element].indexDrink);
            if (_drIndex == _index) {
                drinks[_index].count -= checkArray[_element].numberDrink;
                _suma += checkArray[_element].numberDrink * drinks[_index].price;
            }
        }
    }
    bankBalance += _suma;
    return `Всього: ${_suma} гривень`
}

function displayBank() {
    return bankBalance;
}

function beerCount() {
    return drinks[0].count;
}

function wineCount() {
    return drinks[1].count;
}

function pepsiCount() {
    return drinks[2].count;
}

export { add, sell, displayBank, beerCount, wineCount, pepsiCount }