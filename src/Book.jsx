import React from "react";

export const Book = ({ book, borrowBook, returnBook }) => {
    return (
        <>
            <h4>Book title: {book.title}</h4>
            <p>by: {book.author}</p>
            {book.available ? (<button type="button" onClick={() => borrowBook(book.id)}> borrow book </button>) : (<button type="button" onClick={() => returnBook(book.id)}> return book </button>)}


        </>
    )
}
