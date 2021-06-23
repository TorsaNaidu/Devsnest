const seats=document.querySelectorAll(".seat");

const bookedSeatsElement=document.querySelector(".booked-seats");
const remainingSeatsElement=document.querySelector(".remaining-seats");

let bookedSeats=0;
let remainingSeats=seats.length;
let flag=false;

bookedSeatsElement.textContent=bookedSeats;
remainingSeatsElement.textContent=remainingSeats;

seats.forEach(function (seat){
    seat.addEventListener("mousedown",function (event){
        flag=true;
        seat.classList.toggle("booked");
        seat.classList.contains("booked")? bookSeats():unBookSeats();
    });
    seat.addEventListener("mouseup",function (event){
        flag=false;
    });
    seat.addEventListener("mouseover",function (event){
        if (flag){
            seat.classList.toggle("booked");
            seat.classList.contains("booked")? bookSeats():unBookSeats();
        }
    });
});

function bookSeats(){
    bookedSeats+=1;
    remainingSeats-=1;

    bookedSeatsElement.textContent=bookedSeats;
    remainingSeatsElement.textContent=remainingSeats;
}

function unBookSeats(){
    bookedSeats-=1;
    remainingSeats+=1;

    bookedSeatsElement.textContent=bookedSeats;
    remainingSeatsElement.textContent=remainingSeats;
}
