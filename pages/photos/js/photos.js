const result = document.getElementById("result")
let users = []
document.addEventListener("DOMContentLoaded", function(){
    getPhotos();
})
async function getPhotos(){
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/photos?_start=10&_limit=10")
        users = await res.json();
        displayPhotos();
    } catch (error) {
        console.log(error)
    }
}
function displayPhotos(){
    result.innerHTML = ""
    users.forEach((el) => {
        let div = document.createElement("div")
        div.className = 'div col-md-3 d-flex gap-8'
        div.innerHTML = `
            <div class="card">
            <div class="card-body ">
            <img src='${el.url}' alt='${el.title}' class="w-100 h-100"/>
            </div>
            <div class="card-footer">
            <p class="text-center">${el.title}</p>
            </div>
            </div>
        `
        result.appendChild(div)
    })
}