let booksData=[];

fetch('books.json')
.then(res=>res.json())
.then(data=>{
booksData=data;
renderBooks(data);
updateStats(data);
});

document.getElementById('search').addEventListener('input',filterBooks);
document.getElementById('filter').addEventListener('change',filterBooks);

function filterBooks(){
const search=document.getElementById('search').value.toLowerCase();
const filter=document.getElementById('filter').value;

let filtered=booksData.filter(book=>
book.title.toLowerCase().includes(search));

if(filter==='available'){
filtered=filtered.filter(book=>book.available);
}else if(filter==='unavailable'){
filtered=filtered.filter(book=>!book.available);
}

renderBooks(filtered);
updateStats(filtered);
}

function updateStats(data){
const total=data.length;
const available=data.filter(b=>b.available).length;
document.getElementById('stats').innerHTML=
`Showing ${total} Books | ${available} Available`;
}

function renderBooks(books){
const container=document.getElementById('books');
container.innerHTML='';

books.forEach(book=>{
const card=document.createElement('div');
card.className='card';

card.innerHTML=`
<img src="${book.cover}" alt="${book.title}">
<h3>${book.title}</h3>
<p class="${book.available?'available':'unavailable'}">
${book.available?'Available':'Checked Out'}
</p>
<p>📍 ${book.shelf}</p>
`;

container.appendChild(card);
});
}
