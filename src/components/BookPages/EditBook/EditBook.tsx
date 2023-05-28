import { Typography } from 'antd';
import s from './EditBook.module.css'
import FormEdit from './FormEdit/FormEdit';
import Navigation from '../../Navigation/Navigation'
import { Book } from '../../../data-api';

const { Title } = Typography;

const AddBook = ({ filteredBooks }: { filteredBooks: Book[] }) => {
    return (
        <div className={s.editBookWrapper}>
            <Navigation to="/" title="Back" />
            <Title level={2} type="danger">Edit Book</Title>
            <FormEdit filteredBooks={filteredBooks} />
        </div>
    );
};

export default AddBook