export const chart = [
    {car: "MB", capacity: 5},
    {car: "Audi", capacity: 3},
    {car: "BMW", capacity: 4},
    {car: "Dodge", capacity: 8},
    {car: "Datsun", capacity: 1}
]

export const cart = [
    {
        name: 'Magic beans',
        price: 50
    },
    {
        name: 'Broken Sword of dumbass',
        price: 1
    },
    {
        name: 'Justice fork',
        price: 150
    }
];

export const CheckCart = ( cart, address, phone ) => {
    if (!address || !phone){
        throw new Error("Invalid information")
    }

    let sum = 0;
    let delivery = 50
    cart.map(item =>{
        sum = sum+item.price
    });

    if (sum >= 2000) {
        console.log(`Стоимость заказа = ${sum}, скидка 10%`);
        return sum = sum * 0.1;
    }

    if (sum >= 1500) {
        console.log(`Стоимость заказа = ${sum}, скидка 5%`);
        return sum = sum * 0.05;
    }

    if (sum >= 1000) {
        console.log(`Стоимость заказа = ${sum}, доставка бесплатно`);
        return sum
    } else {
        console.log(`Стоимость заказа = ${sum} + доставка (${delivery})`);
        return sum = sum + delivery;
    }


}
