import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const {bookId: bookParamsId} = useParams();
    console.log(bookParamsId, 'bookId');

    const books = useLoaderData();
    console.log(books, 'books');

    const expectedBook = books.find(book => book.bookId === Number(bookParamsId));
    console.log(expectedBook, 'expectedBook');
    const {bookName,author,image,review,totalPages,rating,category,tags,publisher,yearOfPublishing} = expectedBook


    
    return (
        <div className="grid grid-cols-2 bg-base-100 shadow-sm container mx-auto my-15">
  <figure className='w-full flex items-center justify-center bg-gray-100 rounded-xl my-10'>
    <img
      src={image}
      alt="Album"
      className='h-100 '
      />
  </figure>
  <div className="card-body space-y-3 ">
    <h2 className="card-title text-2xl">{bookName}</h2>
    <h2 className="card-title">By: {author}</h2>
    <p className='py-2 border-y'>{category} </p>
    <p>Review: {review}</p>
    <p>
         {tags.map((tag, ind) => 
        <div key={ind} className="badge text-green-500 bg-green-100 font-semibold text-lg">{tag}</div>
    ) }
    </p>
    <div className=" border-t space-y-3">
        <div className='flex justify-between items-center gap-2'>
           <span>Number of page:</span>  <span>{totalPages}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
           <span>Publisher:</span>  <span>{publisher}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
           <span>Year of Publishing:</span>  <span>{yearOfPublishing}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
           <span></span>  <span>{totalPages}</span>
        </div>
        <div className='flex justify-between items-center gap-2'>
           <span>Rating:</span>  <span>{rating}</span>
        </div>
      <div className='flex items-center gap-2'>
        <button className="btn ">Read</button>
      <button className="btn btn-info">Wishlist</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default BookDetails;