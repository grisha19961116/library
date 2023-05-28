import { useState, useEffect } from 'react';
import { MenuInfo } from 'rc-menu/lib/interface';
import s from './Dashboard.module.css'
import Header from '../Navigation/Navigation';
import FilterBoard from './FilterBoard/FilterBoard';
import BookList from './BookList/BookList'
import Footer from './Footer/Footer';
import { Book } from '../../data-api';

interface IDashboard {
    books: Book[],
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>,
    filterBy: string,
    setFilterBy: React.Dispatch<React.SetStateAction<string>>
    filteredBooks: Book[],
}
const Dashboard = ({ books, setBooks, filterBy, setFilterBy, filteredBooks }: IDashboard) => {
    const [isScroll, setIsScroll] = useState<boolean>(false)
    const handleSelection = ({ key }: MenuInfo) => setFilterBy(key)

    return (
        <div className={s.dashboardWrapper}>
            <Header to="add" title="Add Book" />
            <FilterBoard filterBy={filterBy} handleSelection={handleSelection}
                filtered={filteredBooks.length} total={books.length} />
            <BookList filteredBooks={filteredBooks} setBooks={setBooks} setIsScroll={setIsScroll} isScroll={isScroll} />
            <Footer isScroll={isScroll} />
        </div>
    )
}
export default Dashboard