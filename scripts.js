let dishchoosed;
let drinkchoosed;
let dessertchoosed;
let dishprice;
let drinkprice;
let dessertprice;
let text;
let client;
let adress;
let cost;

function selectdish(plate){
    const selected = document.querySelector(".dish-menu .dish-selected");
    const ic = document.querySelector(".dish-selected" + " ion-icon");
    if(selected !== null){
        selected.classList.remove('dish-selected');
        ic.classList.replace("icon-check","hidden");
    }
    foodchoosed = document.querySelector(plate);
    foodchoosed.classList.add("dish-selected");
    const icon = document.querySelector(plate + " ion-icon");
    icon.classList.replace("hidden","icon-check");
    const meal = document.querySelector(".dish-selected .main-food");
    dishchoosed = meal.innerHTML
    const bill = document.querySelector(".dish-selected .price");
    dishprice = bill.innerHTML
    close_order();
}

function selectdrink(beverage){    
    const selected = document.querySelector(".drink-menu .drink-selected");
    const ic = document.querySelector(".drink-selected" + " ion-icon");
    if(selected !== null){
        selected.classList.remove('drink-selected');
        ic.classList.replace("icon-check","hidden");
    }
    beveragechoosed = document.querySelector(beverage);
    beveragechoosed.classList.add("drink-selected");
    const icon = document.querySelector(beverage + " ion-icon");
    icon.classList.replace("hidden","icon-check");
    const liquid = document.querySelector(".drink-selected .main-drink");
    drinkchoosed = liquid.innerHTML
    const bill = document.querySelector(".drink-selected .price");
    drinkprice = bill.innerHTML
    close_order();
}
function selectdessert(sweets){ 
    const selected = document.querySelector(".dessert-menu .dessert-selected");
    const ic = document.querySelector(".dessert-selected" + " ion-icon");
    if(selected !== null){
        selected.classList.remove('dessert-selected');
        ic.classList.replace("icon-check","hidden");
    }
    sweetchoosed = document.querySelector(sweets);
    sweetchoosed.classList.add("dessert-selected");
    const icon = document.querySelector(sweets + " ion-icon");
    icon.classList.replace("hidden","icon-check");
    const candy = document.querySelector(".dessert-selected .main-dessert");
    dessertchoosed = candy.innerHTML
    const bill = document.querySelector(".dessert-selected .price");
    dessertprice = bill.innerHTML
    close_order();
}
function close_order(){
    const selected1 = document.querySelector(".dish-menu .dish-selected");
    const selected2 = document.querySelector(".drink-menu .drink-selected");
    const selected3 = document.querySelector(".dessert-menu .dessert-selected");

    if(selected1 !== null && selected2 !== null && selected3 !== null){
        
        const waiting = document.querySelector(".shop-buttom");
        waiting.classList.replace("waiting-buttom", "buy-buttom");
        waiting.innerHTML = "Fechar pedido";
    }
}
function confirmorder(){
    const selected = document.querySelector(".buy-buttom");

    if(selected !== null){
        client = prompt("Olá, informe seu nome: ");
        adress = prompt("Agora o endereço para receber seu prato: ");
        
        const freezed = document.querySelector('.freezed-background');
        freezed.classList.remove("hidden");
        const overflowed = document.querySelector('body');
        overflowed.classList.add("hide-overflow");
        const plate = document.querySelector('.meal-review .plate .ptype');
        plate.innerHTML = dishchoosed;
        const plateprice = document.querySelector('.meal-review .plate .pcost');
        plateprice.innerHTML = 'R$ ' + dishprice;
        const drink = document.querySelector('.meal-review .drink .dtype');
        drink.innerHTML = drinkchoosed;
        const pricedrink = document.querySelector('.meal-review .drink .dcost');
        pricedrink.innerHTML = 'R$ ' + drinkprice;
        const dessert = document.querySelector('.meal-review .dessert .dstype');
        dessert.innerHTML = dessertchoosed;
        const pricedessert = document.querySelector('.meal-review .dessert .dscost');
        pricedessert.innerHTML = 'R$ ' + dessertprice;
        const orderprice = document.querySelector('.meal-review .finalprice .stab');
        cost = parseFloat(dishprice) + parseFloat(drinkprice) + parseFloat(dessertprice);
        orderprice.innerHTML = 'R$ ' + cost.toFixed(2);
    }
}
function ordercancel() {
    const freezed = document.querySelector('.freezed-background');
    freezed.classList.add("hidden");
    const motionless = document.querySelector('body');
    motionless.classList.remove("hide-overflow");
}
function whats_chat() {   
    
    let costvalue = cost.toFixed(2);
    
    let text = 
    `Olá, gostaria de fazer o pedido:
    - Prato: ${dishchoosed}
    - bebida: ${drinkchoosed}
    - Sobremesa: ${dessertchoosed}
    Total: R$ ${costvalue}
    
    Nome: ${client}
    Endereço: ${adress}`;


    const texturi = encodeURI(text);
    const linkurl = `https://wa.me/5512988231388?text=${texturi}`;
    window.location.href = linkurl;
    
}














