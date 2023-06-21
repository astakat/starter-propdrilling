import React from "react";
import { Book } from "./Book"

function Category({ title, books, borrowBook, returnBook }) {
    return (
        <div>
            <h3>{title}: {books.length} </h3>
            <h3>{books.map((book) => (
                <Book
                    key={book.id}
                    book={book}
                    borrowBook={borrowBook}
                    returnBook={returnBook} />

            )
            )
            }</h3>
        </div>
    )
}

export default Category

