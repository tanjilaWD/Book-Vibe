import React, { useContext, useEffect, useState } from 'react';
import { BookContext } from '../../context/BookContext';
import BookCard from '../ui/BookCard';

const ListedWishList = ({sortingType}) => {
     const { wishList} = useContext(BookContext);
                console.log( wishList,  'bookContext');

                 const [filteredWishList, setFilteredWishList] = useState(wishList);
                
                    useEffect(()=>{
                        if(sortingType){
                            if(sortingType === 'pages'){
                            const sorteData = [...wishList].sort((a,b)=> a.totalPages - b.totalPages);
                            console.log(sorteData);
                            setFilteredWishList(sorteData);
                
                        } else if (sortingType === 'rating'){
                            //
                             const sorteData = [...wishList].sort((a,b)=> a.rating - b.rating);
                            console.log(sorteData);
                            setFilteredWishList(sorteData);
                
                                    }
                                }
                
                            }, [sortingType, wishList] );

         if(filteredWishList.length === 0){
            return <div className='h-[50vh] bg-gray-100 flex items-center justify-center '>
                <h2 className='font-bold text-3xl'>No Wish List Data Found</h2>
            </div>
         }       

    return (
        <div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {
                filteredWishList.map((book, ind) => (
                <BookCard key={ind} book={book} />
            ) )
            }
            </div>
        </div>
    );
};

export default ListedWishList;