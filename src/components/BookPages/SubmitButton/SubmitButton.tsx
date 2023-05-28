import type { FormInstance } from 'antd';
import { Button, Form, } from 'antd';
import { useState, useEffect } from 'react';

const SubmitButton = ({ form }: { form: FormInstance }) => {
    const [disabled, setDisabled] = useState(false);
    const values = Form.useWatch([], form);

    useEffect(() => {
        form.validateFields({ validateOnly: true }).then(
            () => {
                setDisabled(true);
            },
            () => {
                setDisabled(false);
            },
        );
    }, [values]);

    return (
        <Button type="primary" htmlType="submit" disabled={!disabled}>
            Submit
        </Button>
    );
};

export default SubmitButton