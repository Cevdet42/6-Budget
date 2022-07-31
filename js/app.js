console.log("connected")

function topla() {
    event.preventDefault();

    var tomato_price;
    var tomato_amount;
    var tomato_result;

    tomato_price = document.getElementById("tomato_price").value;
    tomato_amount = document.getElementById("tomato_amount").value;
    tomato_result = tomato_price * tomato_amount;

    console.log(tomato_result)
    document.getElementById("tomato_result").innerHTML = tomato_result;
}