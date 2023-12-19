let addButton = document.querySelector('[data-add]')
let closeButton = document.querySelector('[data-close]')
let submitButton = document.querySelector('[data-submit]')
let modal = document.getElementById('dialog')
let form = document.getElementById('form')

let listings = document.getElementById('listings')
let bookArray = [];

addButton.addEventListener("click", () => {modal.showModal()})
closeButton.addEventListener("click", () => {modal.close()})
submitButton.addEventListener("click", addBook)


function makeDelete(){
    let deleteButtons = document.getElementsByClassName('delete');
    for(i=0; i<deleteButtons.length; i++){
        deleteButtons[i].addEventListener('click',(event) => {
        let child = event.target;
        let parent = child.parentNode.parentNode;
    console.log(event);
    parent.removeChild(child.parentNode);})
}}


function addBook(){
    // create book object//
    let bookName = document.getElementById('title').value
    let bookAuthor = document.getElementById('author').value
    let readStatus = document.querySelector('input[type="radio"]:checked').value
    console.log(document.querySelector('input[type="radio"]:checked').value)
    let listing = new Book(bookName, bookAuthor, readStatus);
    bookArray.push(listing);
    console.log(bookArray);
    form.reset();
    modal.close()

    // BUILD CARD IN HTML //
    let frag = new DocumentFragment();
    
    const bookCard = document.createElement('div');
    bookCard.setAttribute("class", "bookCard");

    const title = document.createElement('p');
    title.setAttribute('class','title');
    title.innerText = bookName;
    bookCard.appendChild(title);
    
    const author = document.createElement('p')
    author.setAttribute('class','author');
    author.innerText = bookAuthor;
    bookCard.appendChild(author);

    const readingStatus = document.createElement('button');
    readingStatus.setAttribute('class', 'status');
    readingStatus.innerText = readStatus;
    bookCard.appendChild(readingStatus);

    const button = document.createElement('button');
    button.innerText = "Delete";
    button.setAttribute('class', 'delete')
    bookCard.appendChild(button);

    frag.appendChild(bookCard);
    listings.appendChild(frag);

    makeDelete();
    makeStatus();
}

class Book {
constructor (bookName, bookAuthor, readStatus) {
    this.title = bookName;
    this.author = bookAuthor;
    this.status = readStatus;
}
}

function makeStatus() {
    let statusButtons = document.getElementsByClassName('status');

    for(i=0; i<statusButtons.length; i++){
        statusButtons[i].addEventListener('click', (event) => {
            let button = event.target;
            if (button.textContent == 'Read'){
                button.innerText = "Not Read";
            }
            else if (button.textContent == 'Currently Reading'){
                button.innerText = 'Read';
            }
            else if (button.textContent == 'Not Read'){
                button.innerText = 'Currently Reading';
            }
        })
    }
}