const result = document.getElementById("result")
document.addEventListener("DOMContentLoaded", function(){
    getUsers();
})
async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/photos")
    const users = await res.json();
    displayUsers(users);
}
function displayUsers(users){
    result.innerHTML = ""
    users.forEach((el) => {
        let div = document.createElement("div")
        div.innerHTML = `
        <div class="wrapper">
        <div class="card mt-2">
        <div class="card-header">
            <button><i class="fa-solid fa-user fa-lg"></i></button>
        </div>
        <div class="card-body">
            <div id="result">
                <li>id: ${el.id}</li>
                <li>title: ${el.title}</li>
            <li>url: ${el.url}</li>
            <li>thumbnailUrl: ${el.thumbnailUrl}</li>
            </div>
        </div>
        </div>
       
        `
        result.appendChild(div)
    })
}