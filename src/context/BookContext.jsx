import React, {  createContext, useState } from 'react';


export const BookContext = createContext();

const BookProvider = ({children}) => {

     const [storedBooks, setStoreBooks] = useState([]);

    const handleMarkAsRead  =(currentBook)=>{
        
       

        const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId);
        if(isExistBook){
            alert('The book is already exist');
        }else{
            setStoreBooks([...storedBooks, currentBook])
            alert(`${currentBook.bookName} is added to list`)
        }
         console.log(currentBook, storedBooks, 'bookId');

    
    }

    const data ={
       storedBooks, setStoreBooks, handleMarkAsRead
    } 

    return <BookContext.Provider value={data} >
        {children}
    </BookContext.Provider>
};

export default BookProvider;