import { Button, Form, Input, Space, Select } from 'antd';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import s from './FormAdd.module.css'
import SubmitButton from '../../SubmitButton/SubmitButton';
import { postBook, FieldsBook } from '../../../../data-api';
import { genres } from '../../../../helpers';

const FormAdd = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const handleAddBook = async (fields: FieldsBook) => {
        try {
            const res = await postBook(fields)
            if (res) {
                navigate("/")
                toast.success("🤟 Book Added", {
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
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            form.resetFields()
        }
    }

    return (
        <Form className={s.formAdd} onFinish={handleAddBook}
            form={form} name="validateOnly" layout="vertical" autoComplete="off">
            <Form.Item style={{ width: '100%' }} name="title" label="Title" rules={[{ required: true, type: 'string' }]}>
                <Input type="text" minLength={1} maxLength={20} />
            </Form.Item>
            <Form.Item style={{ width: '100%' }} name="author" label="Author" rules={[{ required: true, type: 'string' }]}>
                <Input type="text" minLength={1} maxLength={20} />
            </Form.Item>
            <Form.Item label="Category" name="category" rules={[{ required: true, type: 'string' }]}>
                <Select>
                    {genres.map(genre =>
                        <Select.Option key={genre} value={genre}>{genre}</Select.Option>)}
                </Select>
            </Form.Item>
            <Form.Item style={{ width: '100%' }} name="ISBN" label="ISBN" rules={[{ min: 1, max: 1000000000, required: true, transform: (value) => Number(value), type: "number" }]}>
                <Input type="number" min={1} max={10000000000} />
            </Form.Item>
            <Form.Item>
                <Space className={s.formAdd__submit}>
                    <SubmitButton form={form} />
                    <Button htmlType="reset">Reset</Button>
                </Space>
            </Form.Item>
        </Form>
    );
};

export default FormAdd