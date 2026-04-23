import React, {  createContext, useState } from 'react';
import { toast } from 'react-toastify';


export const BookContext = createContext();

const BookProvider = ({children}) => {

     const [storedBooks, setStoreBooks] = useState([]);
     const [wishList, setWishList] = useState([]);

    const handleMarkAsRead  =(currentBook)=>{
        
       

        const isExistBook = storedBooks.find(book => book.bookId === currentBook.bookId);
        if(isExistBook){
            toast.error('The book is already exist');
        }else{
            setStoreBooks([...storedBooks, currentBook])
            toast.success(`${currentBook.bookName} is added to list`)
        }
         console.log(currentBook, storedBooks, 'bookId');

    
    };

     const handleWishList  =(currentBook)=>{
        
       
         const isExistInReadList = storedBooks.find((book) =>book.bookId === currentBook.bookId);
         if(isExistInReadList){
            toast.error('The book is already in read list')
            return;
         }

        const isExistBook = wishList.find(book => book.bookId === currentBook.bookId);
        if(isExistBook){
            toast.error('The book is already exist');
        }else{
            setWishList([...wishList, currentBook])
            toast.success(`${currentBook.bookName} is added to wish list`)
        }
         console.log(currentBook, storedBooks, 'bookId');

    
    };

    const data ={
       storedBooks,
        setStoreBooks,
         handleMarkAsRead,
         wishList,
         setWishList,
         handleWishList

    } 

    return <BookContext.Provider value={data} >
        {children}
    </BookContext.Provider>
};

export default BookProvider;