let input = document.getElementById("input");
let main = document.getElementById("main");
function searchBook() {
    event.preventDefault()
    let api = `https://www.googleapis.com/books/v1/volumes?q=${input.value}`;
    fetch(api)
    .then((response) => response.json())
    .then((data) => {
        main.innerHTML = "";
        let item = data.items;
        item.map((book) => {
            let books = document.createElement("div");
            let boo =`
            <div class="books">
                <img src="${book.volumeInfo.imageLinks.thumbnail}">
                <p>${book.volumeInfo.title}<p/>
                <a href="${book.volumeInfo.infoLink}" target="_blank">Preview</a>
                <a href="${book.volumeInfo.previewLink}" target="_blank">Read Book</a>
            </div>
            
            `;
            books.innerHTML = boo;
            main.appendChild(books);
            console.log(book.volumeInfo.title);
        });
    })
    .catch((err) => alert("error"));

    input.value = "";
}