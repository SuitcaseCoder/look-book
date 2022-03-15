// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Book from './components/Book';
import Button from '@material-ui/core/Button';
import {useEffect, useState} from 'react';

function App() {

  const booksISBN = ['9780143115762','9780307949486', '9781847941831', '9780984782864', '9780142424179', '9780062416216'];

  const [bookTitle, setBookTitle] = useState("");
  const [bookAuthors, setBookAuthors] = useState([]);
  const [bookImg, setBookImg] = useState("");



  const handleBtnClick = () => {
    booksISBN.forEach(book => {
      console.log(typeof book, book);
  
      fetch(`http://openlibrary.org/api/books?bibkeys=ISBN:${book}&jscmd=details&format=json`)
      .then(res => res.json())
      .then(json => {
        let isbn = `ISBN:${book}`;
        console.log(json[isbn]);
        
        setBookTitle(json[isbn].details.title);
        setBookAuthors(json[isbn].details.authors);
        setBookImg(json[isbn].thumbnail_url);
      })  
      // .then(data =>{
      //   console.log(data);
      //   setBookTitle(data.details.full_title);
      //   setBookAuthors(data.details.authors);
      //   setBookImg(data.details.thumbnail_url);
      // })           

    })

  }

  return (
    <div className="App">
      <Navbar />
      <Button variant="contained"
        onClick={()=>{
          handleBtnClick();
        }}
      >
        Generate Random Book
      </Button>
      <Book 
        title={bookTitle}
        authors={bookAuthors}
        img={bookImg}
      />
    </div>
  );
}

export default App;
