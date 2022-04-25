// Store the wallet amount to your local storage with key "amount"
let total=JSON.parse(localStorage.getItem("amount"))||0
document.querySelector("#wallet").innerText = total;
function addmoney(){

    let money=document.querySelector("#amount").value
    total+=Number(money)
    localStorage.setItem("amount",JSON.stringify(total))
    document.querySelector("#wallet").innerText=total
}