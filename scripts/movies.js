// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
let moviediv=document.querySelector("#movies");
let money=JSON.parse(localStorage.getItem("amount"))
document.querySelector("#wallet").innerText=money
// SearchMovie()
async function SearchMovie(){
    try{
        const search=document.querySelector("#search").value
        // const search="avenger"
        const res = await fetch(
          `https://www.omdbapi.com/?s=${search}&apikey=71145b5`
        );
        const data=await res.json()

        const movies=data.Search
        console.log(movies)
        return movies
        // display(data.Search)
    }
    catch(err){
        console.log("error : ",err)
    }
}

function display(data){
    moviediv.innerHTML=null
    data.forEach(function(ele){
        let box=document.createElement("div")
        box.setAttribute("id","box")
        let image=document.createElement("img")
        image.src=ele.Poster
        image.style.height="400px"
        // image.style.width="250px"
        let p=document.createElement("p")
        p.innerText=ele.Title
        let button=document.createElement("button")
        button.innerText="Book Tikcet"
        button.setAttribute('class','book_now')

        button.addEventListener("click",function(){
            checkout(details)
        })
        let details={
            image:ele.Poster,
            title:ele.Title,
            year:ele.Year,
            type:ele.Type

        }
        box.append(image,p,button)
        moviediv.append(box)
    })
}

async function main(){
    let moviedata= await SearchMovie()
    if(moviedata===undefined){
        return false
    }
    display(moviedata)
}

let id;
function debounce(func,delay){
    if(id){
        clearTimeout(id)
    }
    id=setTimeout(function(){
        func();
    },delay)
}
 
function checkout(x){
    // console.log(ele)
    window.location.href = "./checkout.html";
    localStorage.setItem("movie", JSON.stringify(x));

}