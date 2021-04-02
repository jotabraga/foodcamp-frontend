
let dishchoosed;
let drinkchoosed;
let dessertchoosed;

let dishprice;
let drinkprice;
let dessertprice;

let dishtype;
let drinktype;
let desserttype;

let cost;

function selectdish(plate){
    
    const selected = document.querySelector(".dish-menu .dish-selected");
    

    if(selected !== null){
        selected.classList.remove('dish-selected');
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