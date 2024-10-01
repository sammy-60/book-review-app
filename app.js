const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());


const books = [
  { id: 1, title: "1984", author: "George Orwell", description: "Dystopian novel about totalitarianism." },
  { id: 2, title: "To Kill a Mockingbird", author: "Harper Lee", description: "A novel about racial injustice in America." }
];


let reviews = []; 


app.get('/books', (req, res) => {
  res.json(books);
});


app.get('/reviews', (req, res) => {
  res.json(reviews); 
});


app.post('/reviews', (req, res) => {
  const review = req.body;
  reviews.push(review); 
  res.status(201).json(review); 
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
