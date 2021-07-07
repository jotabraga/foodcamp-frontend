let dishChoosed;
let drinkChoosed;
let dessertChoosed;
let dishPrice;
let drinkPrice;
let dessertPrice;
let client;
let adress;
let cost;


function selectAnyPlate(food) {

    const foodElement = document.querySelector(food);
    const mainCategory = foodElement.parentNode.classList.value;
    const categoryMenu = mainCategory?.split("-", 2);

    const rowSelected = document.querySelector(`.${mainCategory} .selected`);
    const checkMark = document.querySelector(`.${mainCategory} .selected ion-icon`);

    if (rowSelected !== null) {
        rowSelected.classList.remove('selected');
        checkMark.classList.replace("icon-check", "hidden");
    }

    const nameOfCategoryChoosed = categoryMenu[0] + "Choosed";
    getFoodInfo(nameOfCategoryChoosed, food);
}

function getFoodInfo(nameOfCategoryChoosed, food) {

    switch (nameOfCategoryChoosed) {
        case 'dishChoosed':
            foodchoosed = document.querySelector(food);
            foodchoosed.classList.add("selected");
            let dishIcon = document.querySelector(food + " ion-icon");
            dishIcon.classList.replace("hidden", "icon-check");
            const meal = document.querySelector(".selected .main-food");
            dishChoosed = meal.innerHTML;
            const dishBill = document.querySelector(".dish-menu .selected .price");
            dishPrice = dishBill.innerHTML;
            closeOrder();
            break;
        case 'drinkChoosed':
            beveragechoosed = document.querySelector(food);
            beveragechoosed.classList.add("selected");
            let drinkIcon = document.querySelector(food + " ion-icon");
            drinkIcon.classList.replace("hidden", "icon-check");
            const liquid = document.querySelector(".selected .main-drink");
            drinkChoosed = liquid.innerHTML
            const drinkBill = document.querySelector(".drink-menu .selected .price");
            drinkPrice = drinkBill.innerHTML;
            closeOrder();
            break;
        case 'dessertChoosed':
            sweetchoosed = document.querySelector(food);
            sweetchoosed.classList.add("selected");
            let dessertIcon = document.querySelector(food + " ion-icon");
            dessertIcon.classList.replace("hidden", "icon-check");
            const candy = document.querySelector(".selected .main-dessert");
            dessertChoosed = candy.innerHTML
            const dessertBill = document.querySelector(".dessert-menu .selected .price");
            dessertPrice = dessertBill.innerHTML;
            closeOrder();
            break;
    }
}

function closeOrder() {
    const selected1 = document.querySelector(".dish-menu .selected");
    const selected2 = document.querySelector(".drink-menu .selected");
    const selected3 = document.querySelector(".dessert-menu .selected");

    if (selected1 !== null && selected2 !== null && selected3 !== null) {
        const waiting = document.querySelector(".shop-buttom");
        waiting.classList.replace("waiting-buttom", "buy-buttom");
        waiting.innerHTML = "Fechar pedido";
    }
}

function confirmorder() {


    const selected = document.querySelector(".buy-buttom");

    if (selected !== null) {
        client = prompt("Olá, informe seu nome: ");
        adress = prompt("Agora o endereço para receber seu prato: ");

        const freezed = document.querySelector('.freezed-background');
        freezed.classList.remove("hidden");
        const overflowed = document.querySelector('body');
        overflowed.classList.add("hide-overflow");
        const plate = document.querySelector('.meal-review .plate .ptype');
        plate.innerHTML = dishChoosed;
        const plateprice = document.querySelector('.meal-review .plate .pcost');
        plateprice.innerHTML = 'R$ ' + dishPrice;
        const drink = document.querySelector('.meal-review .drink .dtype');
        drink.innerHTML = drinkChoosed;
        const pricedrink = document.querySelector('.meal-review .drink .dcost');
        pricedrink.innerHTML = 'R$ ' + drinkPrice;
        const dessert = document.querySelector('.meal-review .dessert .dstype');
        dessert.innerHTML = dessertChoosed;
        const pricedessert = document.querySelector('.meal-review .dessert .dscost');
        pricedessert.innerHTML = 'R$ ' + dessertPrice;
        const orderprice = document.querySelector('.meal-review .finalprice .stab');
        cost = parseFloat(dishPrice) + parseFloat(drinkPrice) + parseFloat(dessertPrice);
        orderprice.innerHTML = 'R$ ' + cost.toFixed(2);
    }
}

function whats_chat() {

    let costvalue = cost.toFixed(2);

    let text =                         
        `Olá, gostaria de fazer o pedido:
    - Prato: ${dishChoosed}
    - bebida: ${drinkChoosed}
    - Sobremesa: ${dessertChoosed}
    Total: R$ ${costvalue}    
    Nome: ${client}
    Endereço: ${adress}`;

    const texturi = encodeURI(text);
    const linkurl = `https://wa.me/5512988231388?text=${texturi}`;
    window.location.href = linkurl;
} 

function cancelOrder() {
    const freezed = document.querySelector('.freezed-background');
    freezed.classList.add("hidden");
    const motionless = document.querySelector('body');
    motionless.classList.remove("hide-overflow");
}


























