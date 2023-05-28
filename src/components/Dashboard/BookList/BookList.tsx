import Container from 'react-bootstrap/Container';
import { toast } from 'react-toastify';
import { useRef, useEffect } from 'react';
import s from './BookList.module.css'
import BookItem from './BookItem/BookItem';
import { Book, patchBook, getBooks, deleteBook } from '../../../data-api';

interface IBookList {
    filteredBooks: Book[],
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>
    setIsScroll: React.Dispatch<React.SetStateAction<boolean>>,
    isScroll: boolean
}
const BookList = ({ filteredBooks, setBooks, setIsScroll, isScroll }: IBookList) => {
    const refList = useRef<null | HTMLDivElement>(null)
    const handleStatus = async (status: string, id: string) => {
        try {
            const res = await patchBook({ status: status === "active" ? "deactivated" : "active" }, id)
            if (res) {
                getBooks().then(data => setBooks(data))
            }
        } catch (e) {
            toast.error('🚀 Server error!', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    const handleDelete = async (id: string) => {
        try {
            const res = await deleteBook(id)
            if (res) {
                getBooks().then(data => setBooks(data))
                toast.success("🤟 Book Deleted", {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } catch (e) {
            toast.error('🚀 Server error!', {
                position: 'bottom-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    useEffect(() => {
        if (refList.current) {
            const { scrollHeight, clientHeight } = refList.current
            if (scrollHeight > clientHeight) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        }
    }, [filteredBooks])

    return (filteredBooks.length > 0 ?
        <Container ref={refList} className={s.bookListWrapper}
            style={{ maxHeight: isScroll ? '90vh' : '80vh' }}>
            {filteredBooks.map((book) => {
                return <BookItem book={book} key={book.id} handleStatus={handleStatus} handleDelete={handleDelete} />
            })}
        </Container> : null
    )
}
export default BookList