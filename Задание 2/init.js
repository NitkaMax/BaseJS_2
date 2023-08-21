const goods = {
    1 : {
        id: 1,
        name: "Майка мужская хлопковая белая",
        description: "хлопок 95 %, лайкра 5 %",
        sizes: ["L", "XL", "XXL"],
        price: 1.89,
        available: true,
    },
    2 : {
        id: 2,
        name: "Рубашка",
        description: "хлопок 100 %",
        sizes: ["XL", "XXL"],
        price: 5.60,
        available: true
    },
    3 : {
        id: 3,
        name: "Рубашка приталенная",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 6.00,
        available: true
    },
    4 : {
        id: 4,
        name: "Пиджак серый",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 21.55,
        available: false
    },
    5 : {
        id: 5,
        name: "Брюки серые",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 15.65,
        available: false
    },
}



const basket = [
    {
        good: 1,
        amount: 3,
    },
    {
        good: 2,
        amount: 2,
    },
    {
        good: 3,
        amount: 1,
    },
]


function addOneGood(good, amount) {
    basket.push({"good":good, "amount": amount})
    return basket
}

function delOneGood(good) {
    basket.splice(good, 1); 
    return basket
}

function clearBasket() {
    basket.splice(0, basket.length); 
    return basket
}


function total() {

    let totalSumm = 0
    let totalAmount = 0

    for (let basketPosition = 0; basketPosition < basket.length; basketPosition++) {

        totalSumm = totalSumm + basket[basketPosition].amount * goods[basket[basketPosition].good].price 

        totalAmount = totalAmount + basket[basketPosition].amount 

    }

    let totals = {
        "totalAmount": totalAmount,
        "totalSumm": totalSumm,
        }
    return totals
}
