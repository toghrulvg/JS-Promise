let table = document.querySelector(".table");
let addButton = document.querySelector(".btn");
let delButton = document.querySelector(".btn1");




async function getAll() {
    let product = await fetch('https://jsonplaceholder.typicode.com/posts')
    let result = await product.json();
    result.forEach(element => {

        table.innerHTML += `<td>${element.userId}</td>
        <td>${element.id}</td>
        <td>${element.title}</td>
        <td>${element.body}</td>
        <td><span class="delete" style="cursor: pointer">X</span></td>
        `
        addButton.classList.add("disabled");
        let spans = document.querySelectorAll(".delete");
        spans.forEach(span => {
            span.addEventListener("click", function () {
                this.parentNode.parentNode.remove();
            })
        });

    });
}
function delAll() {
    table.innerHTML = `<tr>
    <th scope="col">userId</th>
    <th scope="col">Id</th>
    <th scope="col">Title</th>
    <th scope="col">Body</th>
  </tr>`
    addButton.classList.remove("disabled")
}

function addToTable() {
    addButton.addEventListener("click", getAll)
}
function deleteFromTable() {
    delButton.addEventListener("click", delAll)
}


addToTable();
deleteFromTable();

