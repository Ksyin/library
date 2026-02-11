
const books = [
{title:"Moving towards Braille Literacy",author:"Mwangi Sarah Wanjiku",category:"Inclusive Learning & Special Needs"},
{title:"Braille Code: Learn Visually",author:"Unknown",category:"Inclusive Learning & Special Needs"},
{title:"Animals (DK Braille)",author:"DK",category:"Inclusive Learning & Special Needs"},
{title:"Beginning with Braille",author:"Anna M. Swenson",category:"Inclusive Learning & Special Needs"},
{title:"Braille Rainbow",author:"Mike Barnes",category:"Inclusive Learning & Special Needs"},
{title:"Introduction to American Deaf Culture",author:"Thomas K. Holcomb",category:"Inclusive Learning & Special Needs"},
{title:"The New Disability History",author:"Longmore and Umansky",category:"Inclusive Learning & Special Needs"},
{title:"A Disability History of the United States",author:"Kim E. Nielsen",category:"Inclusive Learning & Special Needs"},
{title:"Hope Unseen",author:"Scotty Smiley & Doug Crandall",category:"Inclusive Learning & Special Needs"},
{title:"Marbles: Mania, Depression, Michelangelo, and Me",author:"Ellen Forney",category:"Inclusive Learning & Special Needs"},
{title:"Braille Literacy: A Functional Approach",author:"Diane P. Wormsley",category:"Inclusive Learning & Special Needs"},
{title:"Open Your Eyes: Deaf Studies Talking",author:"H-Dirksen L. Bauman",category:"Inclusive Learning & Special Needs"},
{title:"The Story of Intellectual Disability",author:"Michael L. Wehmeyer",category:"Inclusive Learning & Special Needs"},
{title:"Staring: How We Look",author:"Rosemarie Garland-Thomson",category:"Inclusive Learning & Special Needs"},
{title:"Oliver Twist (Large Print)",author:"Charles Dickens",category:"Inclusive Learning & Special Needs"},
{title:"Breaking Down",author:"Sunniah Mbabazi",category:"Inclusive Learning & Special Needs"},
{title:"The Maker Movement Manifesto",author:"Mark Hatch",category:"Entrepreneurship, Business & Innovation"},
{title:"Zero to Maker",author:"David Lang",category:"Entrepreneurship, Business & Innovation"},
{title:"The Green Screen Makerspace Project Book",author:"Burleson",category:"Entrepreneurship, Business & Innovation"},
{title:"The Best of Instructables: DIY Projects",author:"Make",category:"Entrepreneurship, Business & Innovation"},
{title:"Scratch 2.0 Programming for Teens",author:"Jerry Lee Ford Jr.",category:"Entrepreneurship, Business & Innovation"},
{title:"A Guide to Copyright in Kenya",author:"Kenya Copyright Board",category:"Entrepreneurship, Business & Innovation"},
{title:"Testing Business Ideas",author:"David J. Bland & Alexander Osterwalder",category:"Entrepreneurship, Business & Innovation"},
{title:"Art for Obama",author:"Shepard Fairey",category:"Entrepreneurship, Business & Innovation"},
{title:"Apollo 8: The Mission That Changed Everything",author:"Jeffrey Kluger",category:"Entrepreneurship, Business & Innovation"},
{title:"Astrophysics for Young People in a Hurry",author:"Neil deGrasse Tyson",category:"Entrepreneurship, Business & Innovation"},
{title:"A Grain of Wheat",author:"Ngũgĩ wa Thiong’o",category:"African Literature & General Fiction"},
{title:"Matigari",author:"Ngũgĩ wa Thiong’o",category:"African Literature & General Fiction"},
{title:"Wizard of the Crow",author:"Ngũgĩ wa Thiong’o",category:"African Literature & General Fiction"},
{title:"Dust",author:"Yvonne Adhiambo Owuor",category:"African Literature & General Fiction"},
{title:"Anthills of the Savannah",author:"Chinua Achebe",category:"African Literature & General Fiction"},
{title:"Song of Lawino",author:"Okot p’Bitek",category:"African Literature & General Fiction"},
{title:"Half of a Yellow Sun",author:"Chimamanda Ngozi Adichie",category:"African Literature & General Fiction"},
{title:"Purple Hibiscus",author:"Chimamanda Ngozi Adichie",category:"African Literature & General Fiction"},
{title:"No Easy Walk to Freedom",author:"Nelson Mandela",category:"African Literature & General Fiction"},
{title:"Long Road to Mercy",author:"David Baldacci",category:"African Literature & General Fiction"}
];

const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('search');

const categories = [...new Set(books.map(b => b.category))];
categories.forEach(cat => {
  const opt = document.createElement('option');
  opt.value = cat;
  opt.textContent = cat;
  categoryFilter.appendChild(opt);
});

searchInput.addEventListener('input', render);
categoryFilter.addEventListener('change', render);

function render() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = books.filter(b =>
    (b.title.toLowerCase().includes(search) ||
     b.author.toLowerCase().includes(search)) &&
    (category === "all" || b.category === category)
  );

  const container = document.getElementById('books');
  container.innerHTML = "";

  filtered.forEach(book => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p class="category">${book.category}</p>
      <p>📍 Main Hall</p>
    `;
    container.appendChild(card);
  });
}

render();
