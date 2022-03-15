import React from 'react'

/**
* @author
* @function Book
**/

const Book = ({title, authors, img}) => {

    console.log(authors);
    let auth;
    authors.length >= 1 ? authors.forEach(author => auth=author.name) : auth="no auth detected"
    // let auths = authors.forEach(author => {<p>{author.name}</p>});

    
  return(
    <div>
        <h1>Once Upon a time ... </h1>
        <div>
            <h2>{title}</h2>
                <div>
                {auth}
                </div>
            
            {img ? <img src={img} alt="book-img" /> : <p>No Image available</p> }
            
        </div>
    </div>
   )

 }

 export default Book;