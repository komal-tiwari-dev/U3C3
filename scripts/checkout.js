// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
let money = JSON.parse(localStorage.getItem("amount"));
document.querySelector("#wallet").innerText = money;


function confirm(){
    let seat=document.querySelector("#number_of_seats").value
    let payment=Number(seat)*100
    console.log(payment)
    if(money<payment){
        alert("Insufficient Balance!");
    }
    else{
        alert("Booking successful!");
        newmoney=money-payment
        console.log((newmoney))
        localStorage.setItem("amount",JSON.stringify(newmoney))
        let money1 = JSON.parse(localStorage.getItem("amount"));
        document.querySelector("#wallet").innerText = money1;
    }
}

function sindetails(){
    let datadis=JSON.parse(localStorage.getItem("movie"))
    let movie=document.querySelector("#movie")

    // let box=document.createElement("div")
    let img=document.createElement("img")
    img.src=datadis.image
    let p=document.createElement("p")
    p.innerText=datadis.title
    let p1=document.createElement("p")
    p1.innerText=datadis.year
    let p2=document.createElement("p")
    p2.innerText=datadis.type
    movie.append(img,p,p1,p2)

}
sindetails()