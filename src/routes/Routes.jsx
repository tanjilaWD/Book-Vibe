import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/books/Books";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import BookDetails from "../pages/bookDetails/BookDetails";
import PageToRead from "../components/readPage/PageToRead";

export const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout/>,
  children: [
    {
      index: true,
      element: <Homepage/> 
    },
    {
      path: '/books',
      element: <Books/>
    },
    {
      path:'/bookDetails/:bookId',
      Component: BookDetails,
      loader: ()=> fetch('/booksData.json')
    },
    {
      path:'/pagetoread',
      element: <PageToRead/>
    }
  ],
  errorElement:<ErrorPage/>
}

]);