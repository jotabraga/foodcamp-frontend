let dishChoosed;
let drinkChoosed;
let dessertChoosed;
let dishPrice;
let drinkPrice;
let dessertPrice;
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
    dishChoosed = meal.innerHTML        
    const bill = document.querySelector(".dish-selected .price");
    dishPrice = bill.innerHTML 
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
    drinkChoosed = liquid.innerHTML
    const bill = document.querySelector(".drink-selected .price");
    drinkPrice = bill.innerHTML
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
    dessertChoosed = candy.innerHTML
    const bill = document.querySelector(".dessert-selected .price");
    dessertPrice = bill.innerHTML
    close_order();
}
function close_order(){
    const selected1 = document.querySelector(".dish-menu .dish-selected");
    const selected2 = document.querySelector(".drink-menu .drink-selected");
    const selected3 = document.querySelector(".dessert-menu .dessert-selected");

    if(selected1 !== null && selected2 !== null && selected3 !== null){ //se os 3 itens estiverem 
        const waiting = document.querySelector(".shop-buttom");         //selecionados ele habilita 
        waiting.classList.replace("waiting-buttom", "buy-buttom");      //o "fechar pedido"
        waiting.innerHTML = "Fechar pedido";
    }
}
function confirmorder(){
    const selected = document.querySelector(".buy-buttom"); //clicando em comprar  
                                                            //pede o nome e endereço                                   
    if(selected !== null){
        client = prompt("Olá, informe seu nome: ");
        adress = prompt("Agora o endereço para receber seu prato: ");
        
        const freezed = document.querySelector('.freezed-background'); //deixa o fundo opaco
        freezed.classList.remove("hidden");                             //habilita a caixa para
        const overflowed = document.querySelector('body');              //confirmar o pedido
        overflowed.classList.add("hide-overflow");          //pega os dados e coloca na div para o 
        const plate = document.querySelector('.meal-review .plate .ptype'); //cliente confirmar os 
        plate.innerHTML = dishChoosed;                                      //dados e fechar ou cancelar
        const plateprice = document.querySelector('.meal-review .plate .pcost'); //o pedido
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
        cost = parseFloat(dishPrice) + parseFloat(drinkprice) + parseFloat(dessertPrice);
        orderprice.innerHTML = 'R$ ' + cost.toFixed(2);
    }
}
function ordercancel() {
    const freezed = document.querySelector('.freezed-background'); //se o cliente não estiver de 
    freezed.classList.add("hidden");                            //acordo com os itens
    const motionless = document.querySelector('body');          //volta a pagina pra nova escolha
    motionless.classList.remove("hide-overflow");
}
function whats_chat() {   
    
    let costvalue = cost.toFixed(2);
    
    let text =                          //se estiver de acordo abre a conversa no whatsapp
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
} //finalização com msg do whatsapp














