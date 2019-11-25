

const data = require('./data.json');
const books = data.books; 

let str =''; 
for (let book of books){
    str += `
    <h1> le livre  ${book.title} 
    coûte  ${book.price} euros
    </h1>
    `;
}

console.log(str);


