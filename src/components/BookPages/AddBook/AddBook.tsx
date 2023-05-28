import { Typography } from 'antd';
import s from './AddBook.module.css'
import FormAdd from './FormAdd/FormAdd';
import Navigation from '../../Navigation/Navigation'

const { Title } = Typography;

const AddBook = () => {
    return (
        <div className={s.addBookWrapper}>
            <Navigation to="/" title="Back" />
            <Title level={2} type="success">Add Book</Title>
            <FormAdd />
        </div>
    );
};

export default AddBook