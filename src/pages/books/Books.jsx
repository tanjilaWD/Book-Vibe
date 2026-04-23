import React, { useContext } from 'react';
import { BookContext } from '../../context/BookContext';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ListedReadList from '../../components/listedBooks/ListedReadList';
import ListedWishList from '../../components/listedBooks/ListedWishList';


const Books = () => {

    const { readList, wishList} = useContext(BookContext);
        console.log( readList, wishList, 'bookContext');

    return (
        <div className='container mx-auto my-3 '>
            read list: {readList.length} <br />
            wish list: {wishList.length}


             <Tabs>
    <TabList>
      <Tab>Read List</Tab>
      <Tab>Wish List</Tab>
    </TabList>

    <TabPanel>
     <ListedReadList/>
    </TabPanel>
    <TabPanel>
      <ListedWishList/>
    </TabPanel>
  </Tabs>
          
        </div>
    );
};

export default Books;