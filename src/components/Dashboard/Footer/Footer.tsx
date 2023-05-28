import s from './Footer.module.css'
import gitHubLogo from '../../../img/logo.png'

interface IFooter {
    isScroll: boolean
}
const Footer = ({ isScroll }: IFooter) => {
    return (
        !isScroll ? <div className={s.footerBar}>
            <img className={s.footerBar__logo} width="20px" height="20px" alt="logo gitHub" src={gitHubLogo} />
            <a href="https://github.com/grisha19961116" target="_blank" className={s.footerBar__link}>
                https://github.com/grisha19961116</a>
        </div> : null
    )
}
export default Footer