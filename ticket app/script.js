const container = document.getElementById("container")
const totalSelectedSeats = document.getElementById("totalSelectedSeats")
const totalPrice = document.getElementById("totalPrice") 
const select = document.getElementById("select")

container.addEventListener("click", function(e){
    if(e.target.className == "seat"){
        e.target.classList = "selectedSeat"
    }

    else if(e.target.className == "selectedSeat"){
        e.target.classList = "seat"
    }

    calcPrice()
})

select.addEventListener("change", function(e){
    calcPrice()
})

function calcPrice(){
    let selectedSeats = document.getElementsByClassName("selectedSeat").length - 1
    totalSelectedSeats.innerText = selectedSeats
    let price = select.value
    totalPrice.innerText = price*selectedSeats

}





