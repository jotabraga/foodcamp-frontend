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
    const meal = document.querySelector(".drink-selected .main-drink");
    drinkchoosed = meal.innerHTML
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
    const meal = document.querySelector(".dessert-selected .main-dessert");
    dessertchoosed = meal.innerHTML
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

    alert("teste";)
    //const ordered = document.querySelector(".shop-buttom")

    //if(ordered.classList.contains(".buy-buttom")===true){
    //    client = prompt("Olá, informe seu nome: ");
   //     adress = prompt("Agora o endereço para receber seu prato: ");

   // }
}



















/*function selecionar_pratoPrincipal(prato, tipo) {
   
    const selecionado = document.querySelector(".Prato_Principal .selecionado");
    
    if (selecionado !== null) {
        selecionado.classList.remove("selecionado");
    }

    checkPrato = document.querySelector(prato);
    checkPrato.classList.add("selecionado");

    const Prato = document.querySelector(tipo);
    tipoPrato = Prato.innerHTML

    const Preço = document.querySelector(prato + ' .preço');
    preçoPrato = Preço.innerHTML
    conclusao_Pedido()
}*/