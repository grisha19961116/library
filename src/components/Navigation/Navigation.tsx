import s from './Navigation.module.css'
import { Button } from 'antd';
import { NavLink } from 'react-router-dom';

interface INavigation {
    to: string,
    title: string,
}

const Navigation = ({ to, title }: INavigation) => {
    return (
        <Button type="link" className={s.navigateBtn}>
            <NavLink to={to} className={s.navigateBtn__link}>
                {title}
            </NavLink>
        </Button>
    )
}
export default Navigation