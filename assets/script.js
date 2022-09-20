let table = document.querySelector(".table");
let addButton = document.querySelector(".btn");
let delButton = document.querySelector(".btn1");


async function getAll(){
    let product = await fetch('https://jsonplaceholder.typicode.com/posts')
    let result = await product.json();
    result.forEach(element => {
        table.innerHTML += `<td>${element.userId}</td>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>`
    });
}
function delAll(){
    table.innerHTML = `<tr>
    <th scope="col">userId</th>
    <th scope="col">Id</th>
    <th scope="col">Title</th>
    <th scope="col">Antaklaska</th>
  </tr>`
}

function addToTable(){
    addButton.addEventListener("click",getAll)
}
function deleteFromTable(){
    delButton.addEventListener("click",delAll)
}





addToTable();
deleteFromTable();
