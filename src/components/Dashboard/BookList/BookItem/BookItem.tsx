import moment from 'moment'
import { NavLink } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Space } from 'antd';
import s from './BookItem.module.css'
import { Book } from '../../../../data-api';

interface IBookItem {
    book: Book,
    handleStatus: (status: string, id: string) => void,
    handleDelete: (id: string) => Promise<void>
}

const BookItem = ({ book, handleStatus, handleDelete }: IBookItem) => {
    const { title, author, category, ISBN, createdAt, editedAt, status, id } = book

    return (
        <Row className={s.bookItem}
            style={{ backgroundColor: status === 'active' ? 'inherit' : 'rgb(218, 165, 165)' }}>
            <Col xs={12} md={1} className={s.bookItem__col}>
                <Col className={s.bookItem__title}>title</Col>
                <Col>{title}</Col>
            </Col>
            <Col xs={12} md={1} className={s.bookItem__col}>
                <Col className={s.bookItem__title}>author</Col>
                <Col>{author}</Col>
            </Col>
            <Col xs={12} md={1} className={s.bookItem__col}>
                <Col className={s.bookItem__title}>category</Col>
                <Col>{category}</Col>
            </Col>
            <Col xs={12} md={1} className={s.bookItem__col}>
                <Col className={s.bookItem__title}>ISBN</Col>
                <Col>{ISBN}</Col>
            </Col>
            <Col xs={12} md={2} className={s.bookItem__col}>
                <Col className={s.bookItem__title}>createdAt</Col>
                <Col>{moment(createdAt).format('MMM DD YYYY h:mm A')}</Col>
            </Col>
            <Col xs={12} md={2} className={s.bookItem__col}>
                <Col className={s.bookItem__title}>editedAt</Col>
                <Col>{editedAt !== "--" ? moment(editedAt).format('MMM DD YYYY h:mm A') : "--"}</Col>
            </Col>
            <Col xs={12} md={4} className={s.bookItem__actions}>
                <Space wrap>
                    <Button type="primary">
                        <NavLink to={`edit/${id}`} className={s.editLink}>Edit</NavLink>
                    </Button>
                    <Button type={status === 'active' ? "dashed" : "primary"} ghost danger={status === 'active'}
                        onClick={() => handleStatus(status, String(id))}>
                        {status === 'active' ? "Deactivate" : "Re-Activate"}
                    </Button>
                    {status === "deactivated" && <Button onClick={() => handleDelete(String(id))} type="primary" danger>Delete</Button>}
                </Space>
            </Col>
        </Row>
    )
}
export default BookItem