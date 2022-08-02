console.log("connected")

function topla() {
    event.preventDefault();

    ////////////////////////////TOMATO/////////////////////////////////

    var tomato_price;
    var tomato_amount;
    var tomato_result;

    tomato_price = document.getElementById("tomato_price").value;
    tomato_amount = document.getElementById("tomato_amount").value;
    tomato_result = tomato_price * tomato_amount;

    console.log(tomato_result)
    document.getElementById("tomato_result").innerHTML = tomato_result;

    ////////////////////////////PEPPER/////////////////////////////////

    var pepper_price;
    var pepper_amount;
    var pepper_result;

    pepper_price = document.getElementById("pepper_price").value;
    pepper_amount = document.getElementById("pepper_amount").value;
    pepper_result = pepper_price * pepper_amount;

    console.log(pepper_result)
    document.getElementById("pepper_result").innerHTML = pepper_result;

    ////////////////////////////EGGPLANT/////////////////////////////////

    var eggplant_price;
    var eggplant_amount;
    var eggplant_result;

    eggplant_price = document.getElementById("eggplant_price").value;
    eggplant_amount = document.getElementById("eggplant_amount").value;
    eggplant_result = eggplant_price * eggplant_amount;

    console.log(eggplant_result)
    document.getElementById("eggplant_result").innerHTML = eggplant_result;

    ///////////////////////////////////////////////////////////////////////

    var subtotal_vegetable;

    subtotal_vegetable = tomato_result + pepper_result + eggplant_result;
    document.getElementById("subtotal_vegetable").innerHTML = subtotal_vegetable;

    ////////////////////////////CHEESE/////////////////////////////////

    var cheese_price;
    var cheese_amount;
    var cheese_result;

    cheese_price = document.getElementById("cheese_price").value;
    cheese_amount = document.getElementById("cheese_amount").value;
    cheese_result = cheese_price * cheese_amount;

    console.log(cheese_result)
    document.getElementById("cheese_result").innerHTML = cheese_result;   
    
    ////////////////////////////MILK/////////////////////////////////
    
    var milk_price;
    var milk_amount;
    var milk_result;

    milk_price = document.getElementById("milk_price").value;
    milk_amount = document.getElementById("milk_amount").value;
    milk_result = milk_price * milk_amount;

    console.log(milk_result)
    document.getElementById("milk_result").innerHTML = milk_result;

    ///////////////////////////////////////////////////////////////////////

    var subtotal_dairy_product;

    subtotal_dairy_product = cheese_result + milk_result;
    document.getElementById("subtotal_dairy_product").innerHTML = subtotal_dairy_product;

    ///////////////////////////////////////////////////////////////////////

    var total;

    total = tomato_result + pepper_result + eggplant_result + cheese_result + milk_result;
    document.getElementById("total").innerHTML = total;

}