import React from "react"
import Category from "./Category"

function Books(props) {
    return (
        <div>
            <h2>Books amount: {props.books.length}</h2>
            <Category
                title="Programming"
                books={props.books.filter((book) => book.category === "programming")}
                borrowBook={props.borrowBook}
                returnBook={props.returnBook} />
        </div>
    )

}

export default Books