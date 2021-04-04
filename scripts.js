let dishchoosed;
let drinkchoosed;
let dessertchoosed;
let dishprice;
let drinkprice;
let dessertprice;
let dishtype;
let drinktype;
let desserttype;
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
        alert(dishchoosed);
        alert(drinkchoosed);
        alert(dessertchoosed);

        const freezed = document.querySelector('.freezed-background');
        freezed.classList.remove("hidden");
        const overflowed = document.querySelector('body');
        overflowed.classList.add("hide-overflow");
        const plate = document.querySelector('.meal-review .plate');
        plate.innerHTML = dishchoosed;
        const priceplate = document.querySelector('.plate span:nth-of-type(2)');
        priceplate.innerHTML = 'R$ ' + dishprice;
        const drink = document.querySelector('.meal-review .drinkk');
        drink.innerHTML = drinkchoosed;
        const pricedrink = document.querySelector('.drink span:nth-of-type(2)');
        pricedrink.innerHTML = 'R$ ' + drinkprice;

        const dessert = document.querySelector('.meal-review .dessert');
        dessert.innerHTML = dessertchoosed;
        const pricedessert = document.querySelector('.dessert span:nth-of-type(2)');
        pricedessert.innerHTML = 'R$ ' + dessertprice;

        const orderprice = document.querySelector('.finalprice span:nth-of-type(2)');
        cost = Number(price-plate) + Number(price-drink) + Number(price-dessert);
        orderprice.innerHTML = 'R$ ' + cost.toFixed(2);
    }
}
function ordercancel() {
    const freezed = document.querySelector('.freezed-background');
    freezed.classList.add("hidden");
    const motionless = document.querySelector('body');
    motionless.classList.remove("hide-overflow");
}
function Whats_chat() {
    const Wpp_ola = "Olá, gostaria de fazer o pedido:\n"
    const Wpp_pedido = " - Prato: " + tipoPrato + "\n - Bebida: " + tipoBebida + "\n - Sobremesa: " + tipoSobremesa;
    const valor_total = "\nTotal: R$ " + valor.toFixed(2);
    const dados_cliente = "\n \nNome: " + nome + "\nEndereço: " + endereço;
    const msg = encodeURIComponent(Wpp_ola + Wpp_pedido + valor_total + dados_cliente);

    const MudarLink = document.querySelector(".confirme_pedido a");
    MudarLink.href = MudarLink.href.replace('https://wa.me/?text=',"https://wa.me/5521993778424?text=" +  msg);
}














