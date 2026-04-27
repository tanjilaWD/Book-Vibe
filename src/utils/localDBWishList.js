const getAllWishListFromLocalDB = () =>{
    const allWishList = localStorage.getItem('wishList');
    console.log(allWishList, 'ReadList from local DB');

    if(allWishList) return JSON.parse(allWishList);
    return [];

};

const addWishListToLocalDB = (book) =>{
    const allBooks = getAllWishListFromLocalDB();
    const isAlreadyExist = allBooks.find(bk => bk.bookId === book.bookId)
    if(!isAlreadyExist){
        // data local db ty add
        allBooks.push(book);
        localStorage.setItem('wishList', JSON.stringify(allBooks))
    }

};

export {getAllWishListFromLocalDB, addWishListToLocalDB}